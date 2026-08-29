# LEVEL 4 – Retail Chain
### Intermediate- Project (Full Star Schema + Multi-page Report)

**Goal:** Build a proper star schema and a professional multi-page report.

**Company:** UrbanMart Retail Chain  
**Scenario:** A chain of 8 stores wants a centralized sales performance report for management.

---

## What You Will Learn
- Complete simple star schema (Fact + 4 Dimensions)
- Proper relationships and hierarchy
- More useful DAX measures
- Multi-page report design
- Drill-down hierarchies
- Conditional formatting
- Basic bookmarks / navigation (optional)

---

## Data Files
- `FactSales.csv` (4,000 rows)
- `DimDate.csv`
- `DimStore.csv` (8 stores)
- `DimProduct.csv` (50 products)
- `DimCustomer.csv` (200 customers)

---

## Tasks

### Step 1 – Build the Model
Create relationships:
- FactSales[OrderDate] → DimDate[Date]
- FactSales[StoreID] → DimStore[StoreID]
- FactSales[ProductID] → DimProduct[ProductID]
- FactSales[CustomerID] → DimCustomer[CustomerID]

Mark DimDate as Date table.

Create hierarchies:
- Date: Year → Quarter → Month → Date
- Product: Category → Brand → ProductName
- Geography: Region → City → StoreName

### Step 2 – Core Measures
```dax
Total Sales = SUM(FactSales[SalesAmount])
Total Cost = SUM(FactSales[CostAmount])
Total Profit = [Total Sales] - [Total Cost]
Profit Margin % = DIVIDE([Total Profit], [Total Sales])
Total Quantity = SUM(FactSales[Quantity])
Total Orders = DISTINCTCOUNT(FactSales[SalesID])
Average Order Value = DIVIDE([Total Sales], [Total Orders])
Total Customers = DISTINCTCOUNT(FactSales[CustomerID])
```

Time Intelligence:
```dax
Sales YTD = TOTALYTD([Total Sales], DimDate[Date])
Sales PY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR(DimDate[Date]))
YoY Growth % = DIVIDE([Total Sales] - [Sales PY], [Sales PY])
```

### Step 3 – Report Pages (Minimum 3)

**Page 1 – Executive Dashboard**
- KPI cards (Sales, Profit, Margin %, YoY Growth, Customers)
- Sales trend
- Sales by Region / Store
- Sales by Category
- Top 5 Stores & Top 5 Products

**Page 2 – Store Performance**
- Store ranking table/matrix
- Sales by Store Type
- Map or bar chart by City/Region
- Profitability by Store

**Page 3 – Product & Customer Analysis**
- Category / Brand performance
- Customer Segment analysis
- Age Group & Gender breakdown
- Top Customers

**Bonus Page (optional):** Detailed Transaction table with drill-through.

Add sync slicers for Year, Region, Category.

---

## Business Questions
1. Which region and which store generate the highest sales and profit?
2. What is the overall profit margin and how does it vary by category?
3. How is the chain performing Year-over-Year?
4. Which customer segment is most valuable?
5. Which products have high sales but low margin?
6. Is there a difference in performance between Mall, Street and Outlet stores?

---

## Deliverable
`Level4_RetailChain_YourName.pbix`

**Estimated Time:** 8–12 hours
