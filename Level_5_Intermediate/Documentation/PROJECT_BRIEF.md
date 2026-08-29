# LEVEL 5 – Intermediate Capstone
### Intermediate Project (Multiple Facts + Data Cleaning + Targets)

**Goal:** Handle real-world complexity — multiple fact tables, light data quality issues, targets, and returns analysis.

**Company:** TechHub Electronics  
**Scenario:** A growing electronics retailer wants a single report covering Sales, Returns, and Target achievement across 12 stores.

This is the bridge between beginner projects and the full advanced Voltora project.

---

## What You Will Learn
- Working with multiple fact tables (Sales + Returns + Targets)
- Basic data cleaning in Power Query
- Handling missing values and invalid data
- More advanced DAX (including simple RANKX, target achievement)
- Returns analysis
- Target vs Actual
- Better report structure and storytelling

---

## Data Files (intentionally contain some issues)
- `FactSales.csv` (6,000 rows) – has a few negative quantities and missing ProductIDs
- `FactReturns.csv` (600 rows)
- `FactTargets.csv` (monthly targets by Region)
- `DimDate.csv`
- `DimStore.csv` (12 stores)
- `DimProduct.csv` (80 products – a few missing categories)
- `DimCustomer.csv` (300 customers – a few missing cities)

---

## Tasks

### Step 1 – Data Cleaning (Power Query)
You must clean the data before modeling:

1. **FactSales**
   - Remove or fix rows where Quantity is negative
   - Decide what to do with missing ProductID (remove or investigate)

2. **DimProduct**
   - Fill missing Category with “Unknown” or remove

3. **DimCustomer**
   - Fill missing City with “Unknown”

Document your cleaning decisions.

### Step 2 – Data Model
Create a star schema:

**Dimensions:** DimDate, DimStore, DimProduct, DimCustomer  
**Facts:** FactSales, FactReturns, FactTargets

Relationships:
- FactSales and FactReturns both connect to the dimensions
- FactTargets connects mainly to DimDate (via Year+Month) and Region (you may need to relate carefully or use TREATAS later)

### Step 3 – Key Measures (create at least 15–20)

**Sales**
- Total Sales, Total Profit, Profit Margin %, Total Orders, AOV

**Time Intelligence**
- Sales YTD, Sales PY, YoY Growth %

**Returns**
- Return Amount, Return Quantity, Return Rate % = Return Qty / Sales Qty

**Targets**
- Sales Target
- Target Achievement % = Total Sales / Sales Target
- Variance = Total Sales – Sales Target

**Others**
- Total Customers
- Rank of Stores / Products by Sales (using RANKX)

### Step 4 – Report Pages (Minimum 4)

1. **Executive Dashboard** – Sales, Profit, Margin, YoY, Target Achievement
2. **Sales Analysis** – Trends, Stores, Categories, Channels
3. **Returns Analysis** – Return rate, reasons, high-return products
4. **Target vs Actual** – Region/Month performance against targets

Optional: Customer page or Product deep-dive.

---

## Business Questions
1. What is overall Target Achievement % this year?
2. Which region is over/under performing against target?
3. What is the current Return Rate and which products drive the most returns?
4. Which stores are most profitable?
5. How has performance changed Year-over-Year?
6. Which categories have both high sales and acceptable return rates?
7. After cleaning, did any important numbers change significantly?
8. Give 3 actionable recommendations to management.

---

## Deliverable
- `Level5_TechHub_YourName.pbix`
- Short note (or page in the report) explaining what data quality issues you found and how you fixed them.

**Estimated Time:** 12–18 hours

**After completing Level 5** you are ready for the full advanced project: **Voltora Electronics**.
