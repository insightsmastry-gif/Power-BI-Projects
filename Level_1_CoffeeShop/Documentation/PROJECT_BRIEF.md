# LEVEL 1 – Coffee Shop Dashboard
### Absolute Beginner Project

**Goal:** Create your very first interactive Power BI report.

**Company:** Bean & Brew Coffee Shop  
**Scenario:** The owner wants a simple dashboard to understand daily sales.

---

## What You Will Learn
- Import a CSV file
- Clean basic data types
- Create simple visuals (Card, Bar chart, Pie chart, Line chart, Table)
- Add slicers (filters)
- Format a report page nicely
- Publish basic insights

---

## Data File
`Data/CoffeeShop_Sales.csv` (500 rows)

Columns:
- OrderID, OrderDate, OrderTime, Product, Category, Quantity, UnitPrice, SalesAmount, PaymentMethod, DayOfWeek

---

## Tasks

### Step 1 – Import & Explore
1. Open Power BI Desktop.
2. Get Data → Text/CSV → select `CoffeeShop_Sales.csv`.
3. Click **Transform Data** (Power Query).
4. Check data types (especially OrderDate → Date, SalesAmount → Decimal).
5. Close & Apply.

### Step 2 – Create Basic Measures (Optional but recommended)
Create these simple measures:
- Total Sales = `SUM(CoffeeShop_Sales[SalesAmount])`
- Total Quantity = `SUM(CoffeeShop_Sales[Quantity])`
- Total Orders = `DISTINCTCOUNT(CoffeeShop_Sales[OrderID])`
- Average Order Value = `DIVIDE([Total Sales], [Total Orders])`

### Step 3 – Build the Dashboard (1 Page)
Create a clean report page with:

**Top row – KPI Cards**
- Total Sales
- Total Orders
- Total Quantity
- Average Order Value

**Visuals**
1. Sales by Product (Bar chart)
2. Sales by Category (Pie or Donut chart)
3. Sales Trend by Date (Line chart)
4. Sales by Day of Week (Bar or Column chart)
5. Sales by Payment Method (Pie chart)
6. Detailed table (OrderDate, Product, Quantity, SalesAmount)

**Slicers**
- Category
- Payment Method
- DayOfWeek

### Step 4 – Formatting
- Give the page a title: “Bean & Brew – Sales Overview”
- Use consistent colors
- Add a clean theme
- Make sure numbers show currency where appropriate

---

## Business Questions to Answer
1. What is the total sales?
2. Which product sells the most?
3. Which category generates the highest revenue?
4. Which day of the week is busiest?
5. What is the most popular payment method?
6. What is the average order value?

---

## Deliverable
- One `.pbix` file named `Level1_CoffeeShop_YourName.pbix`
- Ability to answer the 6 questions above using your dashboard

**Estimated Time:** 2–4 hours

**Success Criteria:**  
You can open the file, interact with slicers, and clearly see the answers to the business questions.
