# Commercial Cleaning Production Benchmarks (US, 2026)

Open JSON/CSV dataset of US commercial janitorial production rates (`sq ft/hr`), restroom fixture timings, disinfection factors, floor-surface speed multipliers, regional cleaner wage presets, and deterministic net-margin bidding formulas.

> **Scope & Planning Disclaimer**: These are JaniScope planning assumptions compiled for commercial janitorial estimating (`2026-11-25`). ISSA 612 is a separate industry reference; the values in this dataset are **not** certified ISSA task times. Always measure a representative walkthrough and adjust for site obstacles, soil load, and local statutory payroll burden (SUTA / Workers' Comp).

---

## 6 Commercial Facility Production Benchmarks

| Facility Type | Base Rate (`sq ft/hr`) | Restroom Time (`min/fixture`) | Disinfection Factor | Default Supplies | Typical US Market Range | Interactive Calculator |
| :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| **General Office & Corporate Suite** | `3,200` | `3.0` | `1.00x` | `4.0%` | `$0.08 – $0.18 / sq ft (mo)` | [Office Bid Calculator](https://janiscope.com/office-cleaning-bid-calculator/) |
| **Medical & Dental Clinic** | `2,950` | `4.5` | `1.35x` | `5.5%` | `$0.18 – $0.36 / sq ft (mo)` | [Medical Bid Calculator](https://janiscope.com/medical-cleaning-bid-calculator/) |
| **Post-Construction Cleanup** | `650` | `9.0` | `1.15x` | `7.5%` | `$0.30 – $0.65 / sq ft (1x)` | [Post-Construction Calculator](https://janiscope.com/post-construction-cleaning-bid-calculator/) |
| **Retail Store & Showroom** | `2,650` | `3.5` | `1.05x` | `4.5%` | `$0.11 – $0.24 / sq ft (mo)` | [Retail Bid Calculator](https://janiscope.com/retail-cleaning-bid-calculator/) |
| **Church, Worship & School Campus** | `2,850` | `3.5` | `1.10x` | `4.5%` | `$0.08 – $0.17 / sq ft (mo)` | [Church Bid Calculator](https://janiscope.com/church-cleaning-bid-calculator/) |
| **Gym & Fitness Studio** | `2,900` | `4.8` | `1.25x` | `6.0%` | `$0.16 – $0.32 / sq ft (mo)` | [Gym Bid Calculator](https://janiscope.com/gym-cleaning-bid-calculator/) |

### Floor Surface Speed Multipliers & Regional Wage Presets
- **Floor Speed Multipliers**: Carpet `1.00`, Hardwood/LVP `0.94`, VCT `0.88`, Ceramic/Stone Tile `0.80` (effective surface rate = `round(baseRate * surfaceMult / disinfectionMultiplier)`).
- **US Regional Wage & Burden Presets**:
  - **Northeast**: `$21.50/hr`, `18%` burden
  - **West Coast**: `$22.50/hr`, `19%` burden
  - **Midwest**: `$18.00/hr`, `16%` burden
  - **South**: `$16.50/hr`, `15%` burden

### Deterministic Net-Margin Bidding Formula
JaniScope uses true net profit margin (not markup) so target margin is realized on the invoice:

```text
BaseOperatingCost = LoadedLabor + Supplies + Overhead
ClientBid         = BaseOperatingCost / (1 - TargetProfitMarginPct / 100)
```

---

## Files & Local Verification

- [`benchmarks.csv`](./benchmarks.csv) — Flat CSV of the 6 facility presets for Excel / Google Sheets / pandas
- [`benchmarks.json`](./benchmarks.json) — Structured JSON including floor speed multipliers and US regional wage presets
- [`scripts/verify-benchmarks.mjs`](./scripts/verify-benchmarks.mjs) — Zero-dependency parity and formula check:

```bash
bun scripts/verify-benchmarks.mjs
# or
node scripts/verify-benchmarks.mjs
```

---

## Interactive Workbench

Want to model custom square footage, floor mix, payroll burden, and export a 3-page US Letter commercial proposal PDF or live-formula `.xlsx` workbook locally in your browser? Use **[JaniScope](https://janiscope.com/)** (zero server uploads for bid data) or read the [Commercial Cleaning Production Rates Guide](https://janiscope.com/guides/issa-cleaning-production-rates/).

---

## License

[MIT](./LICENSE)
