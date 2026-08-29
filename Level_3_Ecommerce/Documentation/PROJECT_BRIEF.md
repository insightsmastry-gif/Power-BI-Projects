# LEVEL 3 – E-commerce Analytics
### Beginner+ Project (Introduction to Time Intelligence)

**Goal:** Learn how to work with a proper Date table and create basic time intelligence measures.

**Company:** ShopNova Online  
**Scenario:** An e-commerce company wants to analyze sales trends, compare years, and understand channel performance.

---

## What You Will Learn
- Importance of a dedicated Date table
- Mark as Date Table
- Basic Time Intelligence functions (TOTALYTD, SAMEPERIODLASTYEAR, DATEADD)
- Year-over-Year comparison
- Better use of hierarchies and drill-down
- Multiple report pages

---

## Data Files
- `DimDate.csv` (ready-made date table)
- `Products.csv`
- `Sales.csv` (2000 rows spanning 2023–2024)

---

## Tasks

### Step 1 – Load & Model
1. Load all three tables.
2. Create relationship: Sales[OrderDate] → DimDate[Date]
3. Create relationship: Sales[ProductID] → Products[ProductID]
4. Right-click DimDate → **Mark as date table** → select Date column.

### Step 2 – Create Core Measures
```dax
Total Sales = SUM(Sales[SalesAmount])
Total Quantity = SUM(Sales[Quantity])
Total Orders = DISTINCTCOUNT(Sales[OrderID])
```

### Step 3 – Time Intelligence Measures
```dax
Sales YTD = TOTALYTD([Total Sales], DimDate[Date])

Sales Previous Year = CALCULATE([Total Sales], SAMEPERIODLASTYEAR(DimDate[Date]))

YoY Growth = [Total Sales] - [Sales Previous Year]

YoY Growth % = DIVIDE([YoY Growth], [Sales Previous Year])

Sales MTD = TOTALMTD([Total Sales], DimDate[Date])
```

### Step 4 – Build Report (2 Pages)

**Page 1 – Executive Overview**
- KPI cards: Total Sales, Sales YTD, YoY Growth %, Total Orders
- Sales trend (line chart with Year or Month)
- Sales by Channel
- Sales by Region
- Sales by Category

**Page 2 – Product & Time Analysis**
- Matrix: Year / Quarter / Month with Sales and YoY %
- Top 10 Products
- Brand performance
- Channel comparison over time

**Slicers:** Year, Channel, Region, Category

---

## Business Questions
1. What was total sales in 2024 vs 2023?
2. What is the Year-over-Year growth percentage?
3. Which channel is growing fastest?
4. Which category performed best in the most recent year?
5. What does the monthly trend look like? Any seasonality?
6. Which products are the top sellers?

---

## Deliverable
`Level3_Ecommerce_YourName.pbix`

**Estimated Time:** 5–8 hours

**Key Success Criteria:**  
You correctly created a Date table relationship and can show YTD and YoY numbers that change when you filter by year/month.
