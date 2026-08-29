# LEVEL 7 – Multi-Fact Analysis
### Intermediate+ (Sales + Returns + Inventory)

**Company:** TechWorld Retail  
**Focus:** Working with multiple fact tables, Returns analysis, Inventory health

---

## Learning Objectives
- Model multiple fact tables correctly
- Avoid incorrect relationships between facts
- Calculate Return Rate correctly
- Inventory KPIs (Stock Value, Low Stock, Stock Status)
- Combine insights from Sales + Returns + Inventory

---

## Data Files
- `FactSales.csv` (7,000)
- `FactReturns.csv` (800)
- `FactInventory.csv` (~6,000 monthly snapshots)
- Dimensions: Date, Store (12), Product (80), Customer (400)

---

## Key Modeling Rules
- FactSales, FactReturns, FactInventory all relate to the shared dimensions
- Do **not** create direct relationships between fact tables
- Use Date table with care (OrderDate vs ReturnDate vs SnapshotDate) — inactive relationship + USERELATIONSHIP is a good exercise

---

## Required Measures (minimum 20)

**Sales** – Total Sales, Profit, Margin %, Orders, AOV, YTD, YoY %

**Returns**
- Return Amount
- Return Quantity
- Return Rate % = Return Quantity / Sales Quantity
- Return Rate by Reason

**Inventory**
- Total Stock Value (latest or average)
- Low Stock Products count
- Out of Stock count
- Stock Status distribution

**Combined**
- Net Sales after Returns (Sales – Refund Amount)

---

## Report Pages (4 pages)

1. Executive Dashboard (Sales + Profit + Return Rate + Stock Health)
2. Sales Analysis
3. Returns Deep Dive (reasons, products, stores)
4. Inventory Dashboard (Stock Value, Low/Out of Stock alerts, by Store/Category)

---

## Business Questions
1. What is the overall Return Rate and which category is worst?
2. Which products have high sales but also high returns?
3. How many products are currently Low Stock or Out of Stock?
4. Which stores have the healthiest inventory?
5. What is Net Sales after returns?
6. Is there any relationship between high return products and inventory issues?

**Estimated Time:** 12–16 hours
