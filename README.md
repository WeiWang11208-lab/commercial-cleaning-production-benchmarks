# Commercial Cleaning Production & Labor Benchmarks (US, 2026)

Open JSON/CSV datasets of US commercial janitorial production rates (`sq ft/hr`), restroom fixture timings, disinfection factors, floor-surface speed multipliers, 50-state (+ DC) janitor wage & employer payroll burden benchmarks, post-construction 3-phase rates, and deterministic net-margin bidding formulas.

> **Scope & Planning Disclaimer**: These are JaniScope planning assumptions compiled for commercial janitorial estimating (`2026-11-28`). ISSA 612 is a separate industry reference; the values in this dataset are **not** certified ISSA task times. Always measure a representative walkthrough and adjust for site obstacles, soil load, and local statutory payroll burden (FICA / FUTA / SUTA / Workers' Comp Class 9014).

---

## 1. 6 Commercial Facility Production Benchmarks (`benchmarks.csv` / `benchmarks.json`)

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
  - **Northeast**: `$21.50/hr`, `18%` burden (`$25.37/hr` loaded)
  - **West Coast**: `$22.50/hr`, `19%` burden (`$26.78/hr` loaded)
  - **Midwest**: `$18.00/hr`, `16%` burden (`$20.88/hr` loaded)
  - **South**: `$16.50/hr`, `15%` burden (`$18.98/hr` loaded)

---

## 2. 2026 U.S. 50-State (+ DC) Janitor Wages & Labor Burden (`us-50-state-janitor-wages-2026.csv`)

Includes direct hourly wages, statutory employer payroll burden percentages (`15%–21%` covering 7.65% FICA, 0.6% FUTA, SUTA, and Workers' Comp Class 9014), loaded hourly employer costs (`$16.33–$27.71/hr`), and 5,000 sq ft 5x/wk office contract bid benchmarks across all 50 states + Washington, D.C.

- Full interactive breakdown & methodology: [2026 Janitor Pay Rates by State & Labor Burden Report](https://janiscope.com/guides/janitor-pay-rates-labor-burden-2026/)

---

## 3. Post-Construction 3-Phase Benchmarks (`post-construction-phase-benchmarks.csv`)

Structured Rough Clean (`$0.10–$0.20/sq ft`), Final Detail Clean (`$0.20–$0.40/sq ft`), White-Glove Touch-Up (`$0.06–$0.12/sq ft`), and Combined 3-Phase Commercial Turnover (`$0.30–$0.65/sq ft`) production speeds and pricing tiers.

- Full 3-phase checklist & GC contract clauses: [Post-Construction Cleaning Cost & 3-Phase Checklist (2026)](https://janiscope.com/guides/post-construction-cleaning-cost-and-checklist/)

---

## 4. Deterministic Net-Margin Bidding Formula

JaniScope uses true net profit margin (not markup) so target margin is realized on the invoice:

```text
LoadedHourlyRate  = DirectWage * (1 + PayrollBurdenPct / 100)
BaseOperatingCost = LoadedLabor + Supplies + Overhead
ClientBid         = BaseOperatingCost / (1 - TargetProfitMarginPct / 100)
```

---

## Files & Local Verification

- [`benchmarks.csv`](./benchmarks.csv) — Flat CSV of the 6 facility presets for Excel / Google Sheets / pandas
- [`benchmarks.json`](./benchmarks.json) — Structured JSON including floor speed multipliers and US regional wage presets
- [`us-50-state-janitor-wages-2026.csv`](./us-50-state-janitor-wages-2026.csv) — 50 states + DC direct wages, payroll burden %, loaded rates & 5,000 sq ft bid benchmarks (2026)
- [`post-construction-phase-benchmarks.csv`](./post-construction-phase-benchmarks.csv) — Rough, Final, Touch-Up & Turnkey post-construction cleaning production speeds and $/sq ft ranges
- [`scripts/verify-benchmarks.mjs`](./scripts/verify-benchmarks.mjs) — Zero-dependency parity and dataset verification:

```bash
bun scripts/verify-benchmarks.mjs
# or
node scripts/verify-benchmarks.mjs
```

---

## Reference Guides & Interactive Tools (JaniScope)

- **[JaniScope Commercial Cleaning Bid Calculator](https://janiscope.com/)** — Free browser-local estimator with 3-page US Letter proposal PDF & live-formula Excel (.xlsx) export
- [Commercial Cleaning Production Rates Table (2026)](https://janiscope.com/guides/issa-cleaning-production-rates/)
- [How to Price Commercial Cleaning Contracts (Formula & Loaded Burden)](https://janiscope.com/guides/how-to-price-commercial-cleaning-contracts/)
- [4 Completed Commercial Cleaning Proposal Examples (2026)](https://janiscope.com/samples/commercial-cleaning-proposal-examples/)
- [Medical Office Cleaning Checklist & 2026 Pricing Guide](https://janiscope.com/guides/medical-office-cleaning-checklist-and-pricing/)
- [How to Find Commercial Cleaning Contracts (6 Proven Channels)](https://janiscope.com/guides/how-to-find-commercial-cleaning-contracts/)
- [CleanGuru, Swept & Janitorial Manager Alternatives (12-Month TCO)](https://janiscope.com/alternatives/swept-and-janitorial-manager/)

---

## License

[MIT](./LICENSE)
