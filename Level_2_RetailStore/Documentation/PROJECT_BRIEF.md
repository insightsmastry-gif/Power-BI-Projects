# LEVEL 2 – Retail Store
### Beginner Project (First Data Model)

**Goal:** Learn relationships, basic DAX measures, and a simple multi-table model.

**Company:** CityStyle Retail  
**Scenario:** A small clothing & electronics store wants better visibility of sales by product and customer.

---

## What You Will Learn
- Import multiple CSV files
- Create relationships (1-to-many)
- Star schema basics (even with only 3 tables)
- Calculated columns vs Measures
- Basic DAX (SUM, DISTINCTCOUNT, DIVIDE, simple CALCULATE)
- Better report layout

---

## Data Files
Located in `Data/` folder:
- `Sales.csv` (800 rows)
- `Products.csv` (12 products)
- `Customers.csv` (80 customers)

---

## Tasks

### Step 1 – Import All Files
1. Get Data → Folder or individual CSVs.
2. Load Sales, Products, and Customers.
3. Go to **Model** view.

### Step 2 – Create Relationships
Create these relationships:
- Sales[ProductID] → Products[ProductID]
- Sales[CustomerID] → Customers[CustomerID]

Cardinality should be Many-to-One (*:1).  
Cross-filter direction: Single.

### Step 3 – Create Measures
Create a table called **_Measures** and add:

**Basic**
- Total Sales = `SUM(Sales[SalesAmount])`
- Total Quantity = `SUM(Sales[Quantity])`
- Total Orders = `DISTINCTCOUNT(Sales[SalesID])`
- Average Order Value = `DIVIDE([Total Sales], [Total Orders])`

**Product related**
- Total Cost (you may need a calculated column first: Cost = Quantity * related UnitCost)
- Total Profit = [Total Sales] – [Total Cost]
- Profit Margin % = `DIVIDE([Total Profit], [Total Sales])`

**Customer related**
- Total Customers = `DISTINCTCOUNT(Sales[CustomerID])`

### Step 4 – Optional Calculated Columns
In Products table:
- Price Band = IF(UnitPrice < 30, "Budget", IF(UnitPrice < 60, "Mid", "Premium"))

### Step 5 – Build Report (1–2 Pages)

**Page 1 – Sales Overview**
- KPI cards: Total Sales, Profit, Margin %, Total Orders
- Sales by Category
- Sales by Product
- Sales Trend over time
- Top Customers

**Page 2 – Customer & Product Analysis**
- Sales by City
- Sales by Gender / Age Group
- Sales by Price Band
- Matrix: Category vs City

Add slicers for Category, City, Gender.

---

## Business Questions
1. Which category generates the most sales and profit?
2. Who are the top 5 customers by sales?
3. Which city performs best?
4. What is the overall profit margin?
5. Do male or female customers spend more on average?
6. Which products are in the “Premium” price band and how do they perform?

---

## Deliverable
`Level2_RetailStore_YourName.pbix`

**Estimated Time:** 4–6 hours
