# LEVEL 10 – Pre-Capstone Project

### Advanced (Bridge to Voltora Electronics)

**Company:** VoltEdge Electronics  
**Focus:** Almost full real-world scenario — multiple facts, data quality issues, RLS, Inventory, Targets, Returns, complex DAX, professional report

This is the final training project before the full **Voltora Electronics Capstone**.

\---

## Learning Objectives

* Handle realistic data quality problems in Power Query
* Design a clean star schema with 4 fact tables
* Implement dynamic RLS
* Build a complete 6–7 page professional report
* Advanced DAX across Sales, Returns, Inventory, Targets
* Performance awareness
* Storytelling with insights

\---

## Data Files (contain intentional quality issues)

* `FactSales.csv` (15,000) – negative quantities, missing ProductID / CustomerID
* `FactReturns.csv` (1,500)
* `FactInventory.csv` (\~11,000 snapshots)
* `FactTargets.csv`
* `DimDate.csv` (with Fiscal columns)
* `DimStore.csv` (20) – some missing cities
* `DimProduct.csv` (150) – some missing categories
* `DimCustomer.csv` (800) – missing cities + casing issues
* `DimEmployee.csv` (80)
* `SecurityUser.csv`

\---

## Mandatory Tasks

### 1\. Power Query Cleaning

You **must** clean:

* Negative quantities in Sales
* Missing foreign keys (decide: remove or flag)
* Missing Category / City values
* Inconsistent text casing

Document every decision.

### 2\. Data Model

Proper star schema:

* Facts: Sales, Returns, Inventory, Targets
* Dimensions: Date, Store, Product, Customer, Employee
* Handle multiple dates (OrderDate, ReturnDate, SnapshotDate)
* RLS using SecurityUser + USERPRINCIPALNAME()

### 3\. DAX (30+ measures expected)

Cover:

* Sales, Profit, Margin, AOV, Orders
* Full Time Intelligence (YTD, FYTD, YoY, Rolling)
* Return Rate \& Refund analysis
* Inventory health (Stock Value, Low/Out of Stock, Turnover style)
* Target Achievement % and Variance
* Ranking and % of total
* At least one advanced pattern using TREATAS or USERELATIONSHIP

### 4\. Report (Minimum 6 pages)

1. Executive Dashboard
2. Sales Analysis
3. Customer Analytics
4. Product \& Brand Performance
5. Returns Analysis
6. Inventory Health
7. Target vs Actual
8. (Bonus) Drill-through pages

**Must include:**

* Dynamic RLS
* Field Parameter or What-If
* Drill-through
* Tooltips
* Bookmarks + navigation
* Conditional formatting
* Dynamic titles

\---

## Business Questions (answer at least 12)

1. Overall Target Achievement this year?
2. Which regions/stores are significantly under target?
3. What is the true Return Rate and net sales after returns?
4. Which products are inventory risks right now?
5. Top and bottom products by profit contribution?
6. Customer loyalty tier performance?
7. Year-over-Year and Fiscal YTD trends?
8. Impact of data cleaning on final numbers?
9. Which employees/stores are top performers?
10. Recommendations for next quarter (inventory, assortment, targets)?
11. Any data quality issues still remaining?
12. Create an executive summary with 5 key insights.

\---

## Deliverables

* `Level10\_VoltEdge\_YourName.pbix`
* Short cleaning log (what you fixed and why)
* 8–12 key business insights

**Estimated Time:** 20–30 hours

**After Level 10** → You are fully ready for the  **Advanced Capstone Project**.

