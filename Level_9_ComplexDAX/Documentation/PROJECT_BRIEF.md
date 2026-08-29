# LEVEL 9 – Complex DAX & Advanced Reporting
### Advanced Intermediate

**Company:** PrimeTech Electronics  
**Focus:** Complex DAX patterns, Customer Lifetime thinking, Advanced Time Intelligence, Drill-through, Tooltips

---

## Learning Objectives
- Master CALCULATE + FILTER + ALL / ALLSELECTED / REMOVEFILTERS patterns
- Advanced Time Intelligence (Fiscal YTD, Rolling periods, Previous period comparisons)
- Customer retention / repeat purchase logic
- RANKX with different filters
- Drill-through pages
- Report page tooltips
- Dynamic measures with SWITCH / SELECTEDVALUE

---

## Data Files
- `FactSales.csv` (12,000)
- `FactReturns.csv` (1,200)
- `FactTargets.csv`
- Full dimensions including Fiscal columns in Date table
- Customers (600), Products (120), Stores (18)

---

## Advanced DAX Challenges (create at least 25 measures)

**Must include:**
- Sales Fiscal YTD
- Sales Rolling 3 / 6 / 12 Months
- Previous Period Sales (dynamic based on selection)
- Customer Retention style measure (customers who purchased in both current and previous period)
- % of Grand Total
- Contribution % to Parent (Category)
- Product Rank within Category
- Top N Products dynamic (using what-if or fixed)
- Return Rate with proper context
- Target Achievement with time intelligence

Use variables extensively. Avoid unnecessary calculated columns.

---

## Report Requirements

**Pages (5+)**
1. Executive Dashboard
2. Sales & Time Intelligence deep dive
3. Customer Analytics (including retention-style metrics)
4. Returns + Product Quality
5. Target Performance
6. **Drill-through pages** for Customer and Product detail

**Advanced Features**
- Report page tooltips
- Drill-through filters
- Dynamic titles
- Conditional formatting with sophisticated rules
- Bookmarks for different views (e.g. “Executive” vs “Analyst”)

---

## Business Questions
1. What is Fiscal YTD performance vs Calendar YTD?
2. Which customers purchased in both this year and last year?
3. What is the Rolling 12-month trend and is it accelerating?
4. Which products rank #1 in their category?
5. How does return rate affect net profitability by brand?
6. Create 5 solid management recommendations backed by data.

**Estimated Time:** 16–22 hours
