# LEVEL 8 – Advanced Features
### Intermediate+ to Advanced (RLS, Field Parameters, What-If, Targets)

**Company:** ElectroHub  
**Focus:** Dynamic RLS, Field Parameters, What-If parameters, Target tracking, better interactivity

---

## Learning Objectives
- Implement **Dynamic Row-Level Security** using USERPRINCIPALNAME()
- Create and use **Field Parameters** (switch metrics or dimensions)
- Create **What-If parameters** (e.g. target uplift or discount scenario)
- Target vs Actual analysis
- Sync slicers, bookmarks, and navigation buttons
- Dynamic titles

---

## Data Files
- `FactSales.csv` (9,000)
- `FactTargets.csv`
- `DimDate`, `DimStore` (15), `DimProduct` (90), `DimCustomer` (450)
- `SecurityUser.csv` ← important for RLS

---

## Advanced Tasks

### 1. Row-Level Security
- Use `SecurityUser` table
- Create role “Regional Manager”
- DAX filter on Region so managers only see their own region
- Admin user sees everything (“All”)
- Test with “View as” role

### 2. Field Parameter
Create a field parameter that allows the user to switch between:
- Total Sales / Total Profit / Total Quantity
OR
- Category / Brand / Channel

### 3. What-If Parameter
Create a what-if parameter: “Target Uplift %” (0% to 20%)  
Show how achievement changes if targets are increased.

### 4. Required Measures
- All standard sales + profit measures
- Target Achievement %
- Sales Variance
- What-if adjusted Target Achievement

---

## Report Pages (4–5)

1. Executive Dashboard (with Field Parameter + dynamic title)
2. Target vs Actual (Region / Month matrix + achievement %)
3. Product & Channel Performance
4. Customer Analysis
5. (Optional) RLS testing page / Admin view

Include bookmarks for “Reset Filters” and page navigation buttons.

---

## Business Questions
1. Which regions are beating target? By how much?
2. What happens to overall achievement if we raise targets by 10%?
3. Using the field parameter, compare Profit vs Sales view.
4. Does RLS work correctly for a Regional Manager?
5. Which channel contributes most to target achievement?

**Estimated Time:** 14–18 hours
