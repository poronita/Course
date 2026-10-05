# FITI / Formira — Master Field Specifications & Asset Packaging Guide

> **Master Excel Workbook Available**: The accompanying Microsoft Excel workbook has been compiled and saved to:
> - Root Project: `FITI_Field_Specifications_Master.xlsx`
> - Web Assets (In-App Direct Download): `app/src/main/assets/web/FITI_Field_Specifications_Master.xlsx`

This document details every supported and proposed input field, validation constraint, and the **FITIM Asset Subfolder Packaging Model** for multi-row sensor telemetry and binary media.

---

## 1. Executive Architecture: Single-Row CSV vs. Multi-Row / Binary Assets

The **FITIM (`.fitim`) format** is an offline-first, cryptographic ZIP container structured as follows:

```
submission_20261004_143000.fitim (ZIP Archive)
├── data.csv              <-- Root Inspection Record (Single row of scalar data + asset references)
├── manifest.json         <-- Cryptographic checksums (SHA-256) of every entry + audit headers
├── form.json             <-- Snapshot of the form definition & UI schema used during collection
└── assets/               <-- Subfolder for binary files and multi-row sensor streams
    ├── photo_card_01.jpg
    ├── sig_inspector.svg
    ├── audio_voice_note.m4a
    ├── compliance_doc.pdf
    ├── accel_telemetry_stream.csv   <-- Multi-row time series (timestamp, x, y, z, accuracy)
    ├── gyro_angular_stream.csv      <-- Multi-row angular rates (timestamp, rot_x, rot_y, rot_z)
    └── subtable_defects.csv         <-- Multi-row repeatable item records
```

### The Multi-Row Asset Paradigm
- **Scalar Fields** (Text, Numbers, Selections, Dates, GPS summary): Stored directly in `data.csv`.
- **Media & Documents** (Photos, Audio, Signatures, PDFs): Stored in `assets/`. `data.csv` contains the relative path (e.g. `assets/photo_01.jpg`).
- **High-Frequency Sensor Streams** (Accelerometer, Gyroscope, GNSS tracks): Cannot be represented in a single row without corrupting relational CSV rules. Instead:
  - High-frequency samples are saved to a dedicated CSV in the `assets/` subfolder (e.g. `assets/accel_run_01.csv`).
  - The main `data.csv` column contains the asset reference and summary metrics (e.g., `assets/accel_run_01.csv [N=1200, Peak=14.2m/s², Mean=9.81m/s²]`).

---

## 2. Master Field Catalog, Rules & Limitations

| Field ID | Label | Category | UI Component | `data.csv` Storage | Asset Storage in `assets/` | Validation Rules & Checklist | 'Other' Option Support | Limitations & Quotas | Error Feedback |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`text`** | Single-Line Text | Basic Text | `<input type="text">` | Direct escaped string | None | Min/Max length, Regex match, Anti-CSV injection strip (`=`, `+`, `-`, `@`) | N/A | Max 120 chars; Strict UTF-8 | "Length must be between {min} and {max} characters." |
| **`textarea`** | Multi-Line Notes | Basic Text | `<textarea rows="3">` | Escaped string (`\n`) | None | Min/Max characters, Word count ceiling | N/A | Max 2,000 chars; Auto-expand max 320px | "Notes cannot exceed {max} characters." |
| **`integer`** | Integer Number | Numeric | `<input type="number" step="1">` | Numeric integer (e.g. `42`) | None | Rejects decimals, Min/Max value bounds, Step multiplier | N/A | `-2,147,483,648` to `+2,147,483,647` | "Enter a valid whole number between {min} and {max}." |
| **`decimal`** | Decimal Number | Numeric | `<input type="number" step="0.01">` | Float string (e.g. `14.50`) | None | Configurable precision (e.g. 2 dec for currency, 6 for coordinates) | N/A | 2 to 8 decimal places; Range `±1e12` | "Value must have up to {precision} decimal places." |
| **`dropdown`** | Dropdown Select | Selection | `<select>` + Search | Selected key or `OTHER: {text}` | None | Whitelist check; If 'Other' chosen, custom text field is mandatory | **YES**. Reveals text field. Saved as `OTHER: {user_typed_value}` | Options: max 500 items; 'Other' text: max 100 chars | "Please select an option or specify details for 'Other'." |
| **`multi_dropdown`** | Multi-Select Tags | Selection | Multi-Pill Select | Semicolon list (`Oak;Pine`) | None | Min/Max selection count, Whitelist enforcement | **YES**. Allows typing arbitrary custom tags if configured | Min 1, Max 20 selections; Tag max 40 chars | "Please select between {min} and {max} tags." |
| **`radio`** | Radio Group | Selection | Segmented Pills / List | Selected option key | None | Exactly one selection; Can trigger conditional child visibility | **YES**. 'Other' radio reveals free-text input field | Best for 2 to 7 mutually exclusive options | "Selection is mandatory for this checkpoint." |
| **`checkbox`** | Boolean Switch | Selection | M3 Switch / Checkbox | `TRUE` or `FALSE` | None | Strict boolean; Can require `TRUE` for safety/liability terms | N/A | Binary `0` / `1` | "You must accept this compliance item to proceed." |
| **`email`** | Email Address | Contact | `<input type="email">` | Lowercase trimmed email | None | Strict RFC 5322 regex (`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`); Rejects plain text | N/A | Max 254 chars; Disallows spaces and quotes | "Invalid email address. Format must be name@domain.com." |
| **`phone`** | Phone Number | Contact | `<input type="tel">` | Standardized E.164 (`+14155550199`) | None | E.164 regex (`^\+?[1-9]\d{1,14}$`); Country code prefix; Strips non-digits | N/A | 7 to 15 digits; Allowed symbols: `+`, `(`, `)`, `-`, ` ` | "Please enter a valid phone number with country/area code." |
| **`date`** | Calendar Date | Date/Time | `<input type="date">` | ISO 8601 (`YYYY-MM-DD`) | None | ISO format; Min/Max date bounds (e.g. Disallow future dates for past audits) | N/A | Range: `1900-01-01` to `2100-12-31` | "Date must be on or before {max_date}." |
| **`time`** | Clock Time | Date/Time | `<input type="time">` | 24-hr (`HH:MM:SS`) | None | Valid 24-hr time; Permitted shift hours bounds | N/A | Resolution: Minutes or Seconds | "Time must be within authorized inspection hours." |
| **`datetime`** | ISO Timestamp | Date/Time | `<input type="datetime-local">` | Combined (`YYYY-MM-DDTHH:MM:SSZ`) | None | Monotonic atomic hardware clock binding when anti-tamper enabled | N/A | ISO 8601 with UTC offset | "Timestamp cannot be in the future." |
| **`file_upload`** | Document Upload | Media/Docs | `<input type="file">` | Path (`assets/doc_{id}.pdf`) | `assets/doc_{id}_{time}.pdf` | Whitelisted MIME types (PDF, Office, CSV); File size ceiling; Magic bytes check | N/A | Max 10MB per document; Max 5 files per card | "File exceeds 10MB limit or has an unsupported format." |
| **`photo`** | Camera Image | Media/Docs | Live Camera / Photo Picker | Path (`assets/photo_{id}.jpg`) | `assets/photo_{id}_{time}.jpg` | Min resolution 1280x720; Client compression to < 2MB; EXIF GPS preservation | N/A | Max 5MB compressed; JPEG quality 85%; Max 10 photos | "Photo is required. Please capture a clear photo." |
| **`signature`** | Vector Signature | Verification | Bézier Vector Canvas | Path (`assets/sig_{id}.svg`) | `assets/sig_{id}_{time}.svg` | Min stroke points (>= 15 points to block accidental taps); Signee name required | N/A | SVG ~15KB; Includes vector path + PNG raster fallback | "Signature too short. Please provide a clear signature." |
| **`audio_record`** | Audio Memo | Telemetry | MediaRecorder Audio Bar | Path (`assets/audio_{id}.m4a`) | `assets/audio_{id}_{time}.m4a` | Min 2s, Max 180s duration; Silence threshold detection; 64kbps AAC | N/A | Max 180 seconds (~1.5MB); Mono channel | "Audio must be between 2 and 180 seconds long." |
| **`gps_location`** | GPS & Altitude | Sensors | GPS Card + Map View | String coordinates & accuracy | Optional `assets/gps_track.nmea` | Max acceptable accuracy radius (<= 15m); Anti-mock location check | N/A | Lat `[-90, 90]`, Lon `[-180, 180]`, Accuracy `<= 25m` | "GPS accuracy too low ({acc}m). Move to clear sky." |
| **`sensor_accel`** | Accelerometer | Sensors | Real-time 3-Axis Stream | Path + Summary: `assets/accel_01.csv [N=1200, Peak=14.2m/s²]` | **`assets/accel_{id}_{time}.csv`** *(Multi-row time series)* | Min duration 5s; Frequency 20Hz - 100Hz; Standard gravity calibration | N/A | Max 60s per stream (~6,000 rows, ~250KB CSV) | "Sensor capture interrupted or insufficient samples." |
| **`sensor_gyro`** | Gyroscope | Sensors | Angular Velocity Stream | Path + Summary: `assets/gyro_01.csv [N=1200, Max=2.1rad/s]` | **`assets/gyro_{id}_{time}.csv`** *(Multi-row time series)* | Min duration 3s; Calibrated zero-rate drift offset; 50Hz frequency | N/A | Max 60s per stream (~250KB CSV) | "Gyroscope sensor unavailable or calibration lost." |
| **`sensor_compass`**| Magnetometer | Sensors | Compass Rose HUD | Azimuth: `045.2° ENE` | Optional `assets/mag_stream.csv` | Heading bounds `[0, 360)`; Calibration status >= Medium | N/A | 0 to 359.9 degrees; Calibration: Low/Med/High | "Please calibrate compass by waving in a figure-8." |
| **`barcode_qr`** | Barcode / QR | Advanced | Camera Barcode Overlay | Decoded string (e.g. `ASSET-9941`) | None | Symbology filter (QR, Code 128, DataMatrix); Regex mask verification | **YES**. Allows manual override: `MANUAL: {text}` if barcode damaged | Payload max 2,048 chars | "Scanned barcode does not match expected asset ID format." |
| **`rating_scale`** | Likert / Rating | Selection | Star Rating / 1-10 Chips | Integer rating (e.g. `4`) | None | Strict integer bounds (1 to 5 or 1 to 10); Custom anchor labels | N/A | Integers 1 to 5 or 1 to 10 | "Please select a rating score." |
| **`computed_calc`**| Formula Field | Calculation | Read-only Computed Badge | Evaluated number (`124.5 m³`) | None | Deterministic math expression (e.g. `[L] * [W] * [D]`); Read-only | N/A | Safe operators: `+`, `-`, `*`, `/`, `min`, `max`, `round` | "Calculation error: check input dimensions." |
| **`table_repeater`**| Multi-Item Table | Multi-Row | Dynamic Grid + 'Add Item' | Path + Summary: `assets/defects.csv [3 items]` | **`assets/table_{id}_{time}.csv`** *(Nested CSV table)* | Min 1 row, Max 50 rows; Child fields validated independently | **YES**. Child dropdowns support 'Other' | Max 50 items per form for memory safety | "At least {min} item must be added before submitting." |

---

## 3. Sensor & Telemetry Multi-Row Schema in `assets/`

When a field records continuous or multi-row telemetry, a dedicated CSV is created inside the `assets/` folder. Here are the standardized schemas:

### Accelerometer CSV (`assets/accel_{field_id}_{timestamp}.csv`)
```csv
timestamp_epoch_ms,relative_ms,accel_x,accel_y,accel_z,magnitude,accuracy
1760000000000,0,0.12,9.81,0.05,9.81,3
1760000000020,20,0.14,9.79,0.08,9.79,3
1760000000040,40,0.19,9.85,0.11,9.85,3
```

### Gyroscope CSV (`assets/gyro_{field_id}_{timestamp}.csv`)
```csv
timestamp_epoch_ms,relative_ms,rot_x,rot_y,rot_z,rot_magnitude,accuracy
1760000000000,0,0.002,0.001,-0.004,0.0045,3
1760000000020,20,0.005,0.003,-0.002,0.0062,3
```

### Multi-Item Defect Table (`assets/table_{field_id}_{timestamp}.csv`)
```csv
item_index,defect_type,severity,photo_asset_ref,notes
1,Cracked Solar Cell,HIGH,assets/photo_defect_01.jpg,Micro-fracture detected in quadrant 2
2,Corrosion on Fastener,MEDIUM,assets/photo_defect_02.jpg,Surface oxidation on mounting bracket
```

---

## 4. Pre-Flight Validation Rules Checklist

1. **Anti-CSV Injection Sanitation**:
   - Any text input starting with `=`, `+`, `-`, or `@` is automatically sanitized or escaped with a prepended single-quote (`'`).
2. **RFC 5322 Email Compliance**:
   - Strict pattern `^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$`. Plain text strings lacking `@` and a valid top-level domain are strictly rejected.
3. **E.164 International Phone Compliance**:
   - Sanitized to digits and leading `+`. Validated between 7 and 15 digits.
4. **Conditional Dropdown "Other" Validation**:
   - When a user chooses "Other", the associated custom text input is marked as strictly mandatory. Blank "Other" submissions are rejected.
5. **File MIME & Magic Bytes Validation**:
   - Uploaded files are checked against both file extensions and internal magic bytes (e.g., `%PDF-` for PDFs, `FF D8 FF` for JPEGs) to prevent malicious or corrupted file packaging.
6. **Hardware Sensor Integrity & Fallback**:
   - Live hardware captures (camera, GPS, accelerometer) verify sensor availability. If physical sensors are unavailable or hazardous, a clear `[Safety Simulation Mode]` flag is embedded into the telemetry manifest.

---

## 5. Recommended New Fields for Platform Expansion

| Field Name | Industry / Use Case | Hardware Integration | Proposed UI | Benefits to Formira |
| :--- | :--- | :--- | :--- | :--- |
| **`nfc_rfid`** | Industrial Plant, Valve Audits, Asset ID | Android NFC Antenna | "Tap device to NFC tag" prompt | Physical proximity guarantee; eliminates ghost inspections |
| **`ble_sensor`** | HVAC, Concrete Moisture, Gas Detection | Bluetooth LE (GATT) | Live telemetric gauge card | Connects directly to digital calipers, thermal probes, and gas sniffers |
| **`polygon_map`** | Land Surveying, Forestry, Parcel Audits | GPS + Offline Map Tiles | Interactive vector polygon drawer | Allows walking parcel perimeters and calculating hectares offline |
| **`ocr_license`** | Highway Patrol, Parking Audits | Camera + ML Kit Text OCR | Viewfinder with text bounding box | Auto-extracts license plates and container serials in milliseconds |
| **`colorimeter`** | Botanical Health, Paint & Rust Grading | Camera + Calibrated Swatch | Color swatch with Hex, RGB, CIELAB | Standardizes chlorophyll decay and rust severity grading |
| **`step_pedometer`**| Pipeline Walking, Park Ranger Patrols | Android Hardware Step Sensor | Live step counter & distance badge | Verifies that inspectors walked the required physical route on foot |

---

*This document and the generated `FITI_Field_Specifications_Master.xlsx` workbook constitute the master specifications for Formira's form engine.*
