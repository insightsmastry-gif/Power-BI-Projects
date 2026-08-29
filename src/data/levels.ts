import { Level } from "../types/level";

export const LEVELS: Level[] = [
  {
    "id": 1,
    "slug": "coffee-shop",
    "title": "Coffee Shop Analytics",
    "subtitle": "Absolute Beginner Dashboard",
    "company": "Bean & Brew Coffee Shop",
    "folder": "Level_1_CoffeeShop",
    "difficulty": "Beginner",
    "stage": "Foundation",
    "estimatedHours": "2\u20134 hrs",
    "shortDescription": "Build your first interactive Power BI report by importing single-table sales data, creating KPI cards, bar charts, and slicers.",
    "description": "Start your Power BI journey by transforming raw coffee shop transaction data into an interactive, high-impact business dashboard.",
    "scenario": "The owner of Bean & Brew needs a clean, single-page executive overview of daily sales, best-selling drink categories, payment trends, and peak revenue days of the week.",
    "skills": [
      "Data Import",
      "Power Query",
      "Basic DAX",
      "Visual Formatting",
      "Slicers & Filters",
      "KPI Cards"
    ],
    "objectives": [
      "Import raw CSV data into Power BI Desktop",
      "Inspect and transform basic data types in Power Query (Dates, Decimals)",
      "Author foundational DAX aggregation measures",
      "Design a cohesive single-page dashboard with KPI cards, bar charts, and donut charts",
      "Add interactive slicers for Category, Payment Method, and Day of Week"
    ],
    "businessQuestions": [
      "What is the total sales revenue generated?",
      "Which specific product is the top revenue driver?",
      "Which beverage/food category generates the highest revenue?",
      "Which day of the week experiences the highest transaction volume?",
      "What is the most popular payment method among customers?",
      "What is the overall average order value (AOV)?"
    ],
    "workflow": [
      {
        "step": "01",
        "title": "Data Ingestion & Power Query",
        "description": "Load CoffeeShop_Sales.csv and verify column data types (OrderDate as Date, SalesAmount as Currency/Decimal)."
      },
      {
        "step": "02",
        "title": "Measures Authoring",
        "description": "Create Total Sales, Total Quantity, Total Orders, and Average Order Value using SUM, DISTINCTCOUNT, and DIVIDE."
      },
      {
        "step": "03",
        "title": "Visual Layout & Cards",
        "description": "Construct top-row KPI metric cards for executive overview."
      },
      {
        "step": "04",
        "title": "Interactive Visuals",
        "description": "Add Product ranking bar chart, Category donut chart, and Day of Week column chart."
      },
      {
        "step": "05",
        "title": "Slicers & Theme Polish",
        "description": "Configure category and payment slicers, apply clean color palette and currency formatting."
      }
    ],
    "daxMeasures": [
      {
        "name": "Total Sales",
        "formula": "SUM(CoffeeShop_Sales[SalesAmount])",
        "description": "Calculates total gross revenue from all orders."
      },
      {
        "name": "Total Quantity",
        "formula": "SUM(CoffeeShop_Sales[Quantity])",
        "description": "Counts total items sold across all transactions."
      },
      {
        "name": "Total Orders",
        "formula": "DISTINCTCOUNT(CoffeeShop_Sales[OrderID])",
        "description": "Distinct count of unique order IDs."
      },
      {
        "name": "Average Order Value",
        "formula": "DIVIDE([Total Sales], [Total Orders], 0)",
        "description": "Safe division to calculate average basket size per transaction."
      }
    ],
    "resources": [
      {
        "name": "Coffee Shop Sales Dataset",
        "fileName": "CoffeeShop_Sales.csv",
        "type": "CSV",
        "path": "Level_1_CoffeeShop/Data/CoffeeShop_Sales.csv",
        "description": "500 rows of transaction records including OrderID, Date, Product, Category, and SalesAmount.",
        "isDataset": true
      },
      {
        "name": "Level 1 Project Brief",
        "fileName": "PROJECT_BRIEF.md",
        "type": "Markdown",
        "path": "Level_1_CoffeeShop/Documentation/PROJECT_BRIEF.md",
        "description": "Complete assignment instructions, required visuals, and business requirements.",
        "isInstruction": true
      }
    ],
    "deliverables": [
      "Level1_CoffeeShop_YourName.pbix file",
      "Interactive 1-page dashboard answering all 6 core business questions"
    ],
    "featured": true,
    "colorAccent": "#10B981"
  },
  {
    "id": 2,
    "slug": "retail-store",
    "title": "Retail Store Multi-Table Model",
    "subtitle": "First Relational Data Model",
    "company": "CityStyle Retail",
    "folder": "Level_2_RetailStore",
    "difficulty": "Beginner",
    "stage": "Foundation",
    "estimatedHours": "4\u20136 hrs",
    "shortDescription": "Learn relational data modeling by connecting Customers, Products, and Sales tables with 1-to-many relationships.",
    "description": "Move beyond single tables into true relational business intelligence. Build relationships, evaluate row vs filter context, and calculate profit margins.",
    "scenario": "CityStyle Retail has separate databases for customer demographics, product catalog pricing, and transactional sales. Management wants cross-table analysis of margins and customer buying habits.",
    "skills": [
      "Data Modeling",
      "1-to-Many Relationships",
      "RELATED() Function",
      "Calculated Columns vs Measures",
      "Gross Profit DAX",
      "Cross-Filtering"
    ],
    "objectives": [
      "Import 3 distinct relational CSV tables (Customers, Products, Sales)",
      "Establish primary-to-foreign key relationships in the Model View (1-to-Many)",
      "Understand row context vs filter context in DAX",
      "Calculate Cost of Goods Sold (COGS) and Gross Profit Margins",
      "Build interactive visuals that slice sales by customer age group and product category"
    ],
    "businessQuestions": [
      "What is total revenue, total cost, and gross profit margin %?",
      "Which customer demographic or age tier generates the highest profitability?",
      "Which product category delivers the highest margin vs pure sales volume?",
      "How does customer location affect basket size?"
    ],
    "workflow": [
      {
        "step": "01",
        "title": "Import 3 Tables",
        "description": "Ingest Customers.csv, Products.csv, and Sales.csv into Power Query."
      },
      {
        "step": "02",
        "title": "Establish Relationships",
        "description": "Connect Products[ProductID] -> Sales[ProductID] and Customers[CustomerID] -> Sales[CustomerID]."
      },
      {
        "step": "03",
        "title": "Calculate Profit Metrics",
        "description": "Write Total Cost using RELATED() or SUMX, followed by Total Profit and Profit Margin %."
      },
      {
        "step": "04",
        "title": "Cross-Table Visualization",
        "description": "Design a 2-page report slicing sales metrics by customer demographics and product lines."
      }
    ],
    "daxMeasures": [
      {
        "name": "Total Revenue",
        "formula": "SUM(Sales[SalesAmount])",
        "description": "Total revenue across all sales lines."
      },
      {
        "name": "Total Cost",
        "formula": "SUMX(Sales, Sales[Quantity] * RELATED(Products[CostPrice]))",
        "description": "Iterates sales rows and pulls corresponding product cost via relationship."
      },
      {
        "name": "Gross Profit",
        "formula": "[Total Revenue] - [Total Cost]",
        "description": "Absolute dollar margin generated."
      },
      {
        "name": "Profit Margin %",
        "formula": "DIVIDE([Gross Profit], [Total Revenue], 0)",
        "description": "Profit percentage normalized across categories."
      }
    ],
    "resources": [
      {
        "name": "Sales Table",
        "fileName": "Sales.csv",
        "type": "CSV",
        "path": "Level_2_RetailStore/Data/Sales.csv",
        "description": "800 transaction records linking customer and product keys.",
        "isDataset": true
      },
      {
        "name": "Products Table",
        "fileName": "Products.csv",
        "type": "CSV",
        "path": "Level_2_RetailStore/Data/Products.csv",
        "description": "12 products with unit prices and unit costs.",
        "isDataset": true
      },
      {
        "name": "Customers Table",
        "fileName": "Customers.csv",
        "type": "CSV",
        "path": "Level_2_RetailStore/Data/Customers.csv",
        "description": "80 customer profiles with demographics.",
        "isDataset": true
      },
      {
        "name": "Level 2 Project Brief",
        "fileName": "PROJECT_BRIEF.md",
        "type": "Markdown",
        "path": "Level_2_RetailStore/Documentation/PROJECT_BRIEF.md",
        "description": "Full relationship guidelines and question criteria.",
        "isInstruction": true
      }
    ],
    "deliverables": [
      "Level2_RetailStore_YourName.pbix with verified 1-to-many Star Model",
      "Cross-table margin analysis page"
    ],
    "featured": false,
    "colorAccent": "#14B8A6"
  },
  {
    "id": 3,
    "slug": "ecommerce",
    "title": "E-Commerce Time Intelligence",
    "subtitle": "Date Dimensions & Period Comparisons",
    "company": "ShopNova Online",
    "folder": "Level_3_Ecommerce",
    "difficulty": "Beginner+",
    "stage": "Foundation",
    "estimatedHours": "5\u20138 hrs",
    "shortDescription": "Build a dedicated Date Dimension table and master Time Intelligence calculations (YTD, MTD, Previous Month, MoM% Growth).",
    "description": "Time Intelligence is the backbone of financial and sales reporting. Learn how to construct a standard calendar, mark as date table, and calculate period-over-period growth.",
    "scenario": "ShopNova Online needs to evaluate month-over-month performance trends, compare year-to-date sales between 2023 and 2024, and evaluate channel growth rates across organic, paid, and email traffic.",
    "skills": [
      "Date Dimension Table",
      "Mark as Date Table",
      "TOTALYTD",
      "SAMEPERIODLASTYEAR",
      "DATEADD",
      "Month-over-Month Growth %"
    ],
    "objectives": [
      "Incorporate a dedicated, contiguous Date Dimension table (DimDate)",
      "Set proper Date Table properties and sort Month columns by MonthNumber",
      "Write standard Time Intelligence DAX measures (YTD, Prior Month, YoY)",
      "Build dynamic KPI change cards with conditional color formatting (Green for +, Red for -)",
      "Implement drill-down year-quarter-month hierarchies"
    ],
    "businessQuestions": [
      "What is current Year-To-Date (YTD) revenue vs previous Year-To-Date?",
      "What is the Month-over-Month (MoM) growth percentage across key categories?",
      "Which sales channels are accelerating or decelerating in 2024 vs 2023?",
      "What is the average daily sales run rate for each quarter?"
    ],
    "workflow": [
      {
        "step": "01",
        "title": "Date Dimension Setup",
        "description": "Load DimDate.csv, mark as Date table, and set Month sort order by MonthNumber."
      },
      {
        "step": "02",
        "title": "Connect Relationship",
        "description": "Establish 1-to-many relationship from DimDate[Date] to Sales[OrderDate]."
      },
      {
        "step": "03",
        "title": "Time Intelligence DAX",
        "description": "Author Sales YTD, Sales PY, Sales MoM %, and Sales YoY % measures."
      },
      {
        "step": "04",
        "title": "Period Analysis Dashboard",
        "description": "Build trend charts, matrix tables with drill down, and MoM indicator cards."
      }
    ],
    "daxMeasures": [
      {
        "name": "Sales YTD",
        "formula": "TOTALYTD([Total Sales], DimDate[Date])",
        "description": "Calculates cumulative year-to-date sales reset at year end."
      },
      {
        "name": "Sales Prior Year (PY)",
        "formula": "CALCULATE([Total Sales], SAMEPERIODLASTYEAR(DimDate[Date]))",
        "description": "Evaluates sales for the identical calendar period in the prior year."
      },
      {
        "name": "Sales YoY Growth %",
        "formula": "DIVIDE([Total Sales] - [Sales Prior Year (PY)], [Sales Prior Year (PY)], 0)",
        "description": "Percentage growth or decline versus prior year."
      },
      {
        "name": "Sales Previous Month",
        "formula": "CALCULATE([Total Sales], DATEADD(DimDate[Date], -1, MONTH))",
        "description": "Sales for the preceding month."
      }
    ],
    "resources": [
      {
        "name": "Date Dimension",
        "fileName": "DimDate.csv",
        "type": "CSV",
        "path": "Level_3_Ecommerce/Data/DimDate.csv",
        "description": "Complete calendar table with Year, Quarter, Month, and Fiscal attributes.",
        "isDataset": true
      },
      {
        "name": "E-commerce Sales",
        "fileName": "Sales.csv",
        "type": "CSV",
        "path": "Level_3_Ecommerce/Data/Sales.csv",
        "description": "2,000 transaction records spanning 2023\u20132024.",
        "isDataset": true
      },
      {
        "name": "Product Catalog",
        "fileName": "Products.csv",
        "type": "CSV",
        "path": "Level_3_Ecommerce/Data/Products.csv",
        "description": "Product catalog with categories and subcategories.",
        "isDataset": true
      },
      {
        "name": "Level 3 Project Brief",
        "fileName": "PROJECT_BRIEF.md",
        "type": "Markdown",
        "path": "Level_3_Ecommerce/Documentation/PROJECT_BRIEF.md",
        "description": "Complete Time Intelligence formulas and requirements.",
        "isInstruction": true
      }
    ],
    "deliverables": [
      "Level3_Ecommerce_YourName.pbix with working Time Intelligence measures and MoM matrices"
    ],
    "featured": false,
    "colorAccent": "#06B6D4"
  },
  {
    "id": 4,
    "slug": "retail-chain",
    "title": "Retail Chain Star Schema",
    "subtitle": "Enterprise Star Schema & Multi-Page UX",
    "company": "UrbanMart Retail Chain",
    "folder": "Level_4_RetailChain",
    "difficulty": "Intermediate",
    "stage": "Core Intermediate",
    "estimatedHours": "8\u201312 hrs",
    "shortDescription": "Construct a Kimball-style Star Schema with 4 Dimensions and a central Fact table, powering a structured multi-page executive report.",
    "description": "Master Kimball dimensional modeling principles. Build a clean Star Schema with central FactSales surrounded by Customer, Product, Store, and Date dimensions.",
    "scenario": "UrbanMart operates 8 regional stores. Management requires a multi-page operational suite comprising an Executive Overview, Store Comparison page, and Product Category deep dive.",
    "skills": [
      "Star Schema Design",
      "Kimball Architecture",
      "Surrogate Keys",
      "Multi-Page Report Navigation",
      "Hierarchical Drilldown",
      "Matrix Visuals"
    ],
    "objectives": [
      "Build a textbook Star Schema with 1 Fact table and 4 Dimension tables",
      "Enforce single-directional 1-to-many filter propagation",
      "Design an intuitive multi-page report with button navigation and back buttons",
      "Implement regional hierarchies (Region -> City -> Store -> Cashier)",
      "Create interactive matrix breakdowns with heat-map conditional formatting"
    ],
    "businessQuestions": [
      "Which store locations exceed regional sales benchmarks?",
      "How do store formats (Flagship, Express, Mall) compare in sales density?",
      "Which customer segments dominate top-tier store revenues?",
      "What are the top 5 product lines by sales contribution per region?"
    ],
    "workflow": [
      {
        "step": "01",
        "title": "Dimensional Modeling",
        "description": "Connect DimCustomer, DimProduct, DimStore, and DimDate to FactSales in star layout."
      },
      {
        "step": "02",
        "title": "Enforce Relationship Best Practices",
        "description": "Ensure 1-to-Many single-directional filtering and hide foreign keys in Fact table."
      },
      {
        "step": "03",
        "title": "Multi-Page Report Architecture",
        "description": "Design Page 1 (Executive KPI Summary), Page 2 (Store Comparisons), Page 3 (Product Deep Dive)."
      },
      {
        "step": "04",
        "title": "Interactive Navigation",
        "description": "Add bookmark-based or native page navigation buttons with active states."
      }
    ],
    "daxMeasures": [
      {
        "name": "Total Quantity Sold",
        "formula": "SUM(FactSales[Quantity])",
        "description": "Aggregate units sold across all stores."
      },
      {
        "name": "Sales per Store",
        "formula": "DIVIDE([Total Sales], DISTINCTCOUNT(DimStore[StoreID]), 0)",
        "description": "Average sales revenue per active retail branch."
      },
      {
        "name": "% Share of Total Sales",
        "formula": "DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(DimStore)), 0)",
        "description": "Calculates the relative percentage contribution of each store or region."
      }
    ],
    "resources": [
      {
        "name": "Fact Sales",
        "fileName": "FactSales.csv",
        "type": "CSV",
        "path": "Level_4_RetailChain/Data/FactSales.csv",
        "description": "4,000 transaction records linking all dimension keys.",
        "isDataset": true
      },
      {
        "name": "Dim Store",
        "fileName": "DimStore.csv",
        "type": "CSV",
        "path": "Level_4_RetailChain/Data/DimStore.csv",
        "description": "8 store locations with size, manager, and regional metadata.",
        "isDataset": true
      },
      {
        "name": "Dim Product",
        "fileName": "DimProduct.csv",
        "type": "CSV",
        "path": "Level_4_RetailChain/Data/DimProduct.csv",
        "description": "Product hierarchy table.",
        "isDataset": true
      },
      {
        "name": "Dim Customer",
        "fileName": "DimCustomer.csv",
        "type": "CSV",
        "path": "Level_4_RetailChain/Data/DimCustomer.csv",
        "description": "200 customer profiles.",
        "isDataset": true
      },
      {
        "name": "Dim Date",
        "fileName": "DimDate.csv",
        "type": "CSV",
        "path": "Level_4_RetailChain/Data/DimDate.csv",
        "description": "Calendar reference table.",
        "isDataset": true
      },
      {
        "name": "Level 4 Project Brief",
        "fileName": "PROJECT_BRIEF.md",
        "type": "Markdown",
        "path": "Level_4_RetailChain/Documentation/PROJECT_BRIEF.md",
        "description": "Star schema blueprint and navigation specifications.",
        "isInstruction": true
      }
    ],
    "deliverables": [
      "Level4_RetailChain_YourName.pbix with verified 4-dimension Star Schema and 3-page interactive report"
    ],
    "featured": false,
    "colorAccent": "#3B82F6"
  },
  {
    "id": 5,
    "slug": "intermediate-capstone",
    "title": "Intermediate Capstone",
    "subtitle": "Multiple Facts & Target Variances",
    "company": "TechHub Electronics",
    "folder": "Level_5_Intermediate",
    "difficulty": "Intermediate",
    "stage": "Core Intermediate",
    "estimatedHours": "12\u201318 hrs",
    "shortDescription": "Handle multiple fact tables at different grains (Sales, Returns, Targets), clean dirty data, and calculate target achievement %.",
    "description": "The pivotal bridge to advanced Power BI. Learn how to model multiple fact tables without creating invalid bi-directional relationships, clean dirty data in Power Query, and build target vs actual variances.",
    "scenario": "TechHub Electronics operates 12 stores with monthly sales targets and a growing return rate. The dataset contains deliberate data quality issues (nulls, missing product keys, negative quantities) that must be audited in Power Query.",
    "skills": [
      "Multi-Fact Modeling",
      "Power Query Data Hygiene",
      "Target vs Actual Analysis",
      "Return Rate %",
      "Grain Mismatch Resolution",
      "Variance KPIs"
    ],
    "objectives": [
      "Identify and clean dirty records in Power Query (filter out invalid negatives, impute missing keys)",
      "Model 3 Fact tables (FactSales, FactReturns, FactTargets) sharing conforming Dimensions",
      "Handle grain mismatches (Targets are monthly by store, Sales are daily by transaction)",
      "Calculate Target Achievement %, Sales Variance, and Return Rates by product line",
      "Build bullet charts and gauge visuals showing progress toward quota"
    ],
    "businessQuestions": [
      "Which store locations met or exceeded their monthly sales targets?",
      "What is the company-wide return rate % by category and product?",
      "What is Net Sales after subtracting returned merchandise value?",
      "Which product lines suffer from both high return rates and missed sales targets?"
    ],
    "workflow": [
      {
        "step": "01",
        "title": "Power Query Data Audit",
        "description": "Clean FactSales.csv, eliminate null foreign keys, and filter invalid return anomalies."
      },
      {
        "step": "02",
        "title": "Conformed Dimensions Model",
        "description": "Connect DimStore and DimDate to both FactSales, FactReturns, and FactTargets (no direct fact-to-fact links)."
      },
      {
        "step": "03",
        "title": "Advanced Variance DAX",
        "description": "Write Target Sales, Target Variance, % Achievement, and Net Sales measures."
      },
      {
        "step": "04",
        "title": "Executive Scorecard",
        "description": "Build KPI gauges, variance bar charts (Actual vs Target), and return rate diagnostics."
      }
    ],
    "daxMeasures": [
      {
        "name": "Target Sales",
        "formula": "SUM(FactTargets[TargetAmount])",
        "description": "Monthly planned sales quota."
      },
      {
        "name": "Sales vs Target Variance",
        "formula": "[Total Sales] - [Target Sales]",
        "description": "Dollar difference between actual sales and target quota."
      },
      {
        "name": "% Target Achievement",
        "formula": "DIVIDE([Total Sales], [Target Sales], 0)",
        "description": "Percentage of target quota reached."
      },
      {
        "name": "Return Rate %",
        "formula": "DIVIDE(COUNTROWS(FactReturns), COUNTROWS(FactSales), 0)",
        "description": "Proportion of sales transactions resulting in returns."
      },
      {
        "name": "Net Sales",
        "formula": "[Total Sales] - [Returned Amount]",
        "description": "Actual retained revenue after refund deductions."
      }
    ],
    "resources": [
      {
        "name": "Fact Sales",
        "fileName": "FactSales.csv",
        "type": "CSV",
        "path": "Level_5_Intermediate/Data/FactSales.csv",
        "description": "6,000 sales records with intentional data quality issues to clean.",
        "isDataset": true
      },
      {
        "name": "Fact Returns",
        "fileName": "FactReturns.csv",
        "type": "CSV",
        "path": "Level_5_Intermediate/Data/FactReturns.csv",
        "description": "600 return log records.",
        "isDataset": true
      },
      {
        "name": "Fact Targets",
        "fileName": "FactTargets.csv",
        "type": "CSV",
        "path": "Level_5_Intermediate/Data/FactTargets.csv",
        "description": "Monthly store targets table.",
        "isDataset": true
      },
      {
        "name": "Dim Store",
        "fileName": "DimStore.csv",
        "type": "CSV",
        "path": "Level_5_Intermediate/Data/DimStore.csv",
        "description": "12 retail stores metadata.",
        "isDataset": true
      },
      {
        "name": "Dim Customer",
        "fileName": "DimCustomer.csv",
        "type": "CSV",
        "path": "Level_5_Intermediate/Data/DimCustomer.csv",
        "description": "300 customer records.",
        "isDataset": true
      },
      {
        "name": "Dim Product",
        "fileName": "DimProduct.csv",
        "type": "CSV",
        "path": "Level_5_Intermediate/Data/DimProduct.csv",
        "description": "80 product lines.",
        "isDataset": true
      },
      {
        "name": "Dim Date",
        "fileName": "DimDate.csv",
        "type": "CSV",
        "path": "Level_5_Intermediate/Data/DimDate.csv",
        "description": "Date dimension table.",
        "isDataset": true
      },
      {
        "name": "Level 5 Project Brief",
        "fileName": "PROJECT_BRIEF.md",
        "type": "Markdown",
        "path": "Level_5_Intermediate/Documentation/PROJECT_BRIEF.md",
        "description": "Complete data cleaning requirements and target variance rules.",
        "isInstruction": true
      }
    ],
    "deliverables": [
      "Level5_Intermediate_YourName.pbix with clean ETL pipeline and multi-fact scorecard"
    ],
    "featured": false,
    "colorAccent": "#6366F1"
  },
  {
    "id": 6,
    "slug": "sales-performance",
    "title": "Sales Performance Analytics",
    "subtitle": "Ranking, Segmentation & Moving Averages",
    "company": "NovaMart Electronics",
    "folder": "Level_6_SalesPerformance",
    "difficulty": "Intermediate",
    "stage": "Advanced Intermediate",
    "estimatedHours": "10\u201314 hrs",
    "shortDescription": "Author complex analytical DAX with dynamic RANKX, customer tier segmentation (High/Medium/Low spenders), and 30-day moving averages.",
    "description": "Level up your DAX formulation. Master ranking with ALLSELECTED, dynamic customer segmentation using SWITCH and variables, and smoothing volatile daily demand with rolling moving averages.",
    "scenario": "NovaMart Electronics leadership needs advanced commercial intelligence: identify Top-N revenue contributors dynamically, segment customers into spending tiers, and detect sales trends using 30-day rolling averages.",
    "skills": [
      "RANKX DAX",
      "ALLSELECTED & ALL",
      "Customer Segmentation (SWITCH)",
      "30-Day Moving Average",
      "DAX Variables (VAR/RETURN)",
      "Pareto 80/20 Analysis"
    ],
    "objectives": [
      "Author robust dynamic ranking measures using RANKX, DENSE, and ALLSELECTED",
      "Build dynamic customer segmentation tiers (Platinum, Gold, Silver, Bronze) in DAX",
      "Calculate 30-day rolling moving averages to smooth volatile seasonal spikes",
      "Write multi-step DAX expressions using VAR / RETURN syntax for optimal performance",
      "Design Top-10 customer and product leaderboards with visual rank badges"
    ],
    "businessQuestions": [
      "Who are the top 10 customers driving the top 20% of corporate revenues (Pareto)?",
      "How are customer counts and total sales distributed across Platinum/Gold/Silver tiers?",
      "What does the 30-day moving average reveal about underlying sales trajectory?",
      "Which bottom-performing products contribute less than 1% to gross profit?"
    ],
    "workflow": [
      {
        "step": "01",
        "title": "Star Schema Ingestion",
        "description": "Load 8,000 sales transactions and 4 conformed dimensions."
      },
      {
        "step": "02",
        "title": "Author Ranking DAX",
        "description": "Write Product Rank and Customer Rank using RANKX(ALLSELECTED(...))."
      },
      {
        "step": "03",
        "title": "Customer Segmentation Engine",
        "description": "Create dynamic segmentation measures using VAR TotalSpend = ... and SWITCH(TRUE(), ...)."
      },
      {
        "step": "04",
        "title": "Rolling Moving Averages",
        "description": "Calculate 30-day rolling average using DATESINPERIOD and AVERAGEX."
      },
      {
        "step": "05",
        "title": "Leaderboard & Segmentation Dashboard",
        "description": "Construct interactive ranking tables, tier distribution donut charts, and trend overlays."
      }
    ],
    "daxMeasures": [
      {
        "name": "Product Sales Rank",
        "formula": "IF(ISBLANK([Total Sales]), BLANK(), RANKX(ALLSELECTED(DimProduct[ProductName]), [Total Sales], , DESC, Dense))",
        "description": "Dynamic ranking of products respecting slicer selections."
      },
      {
        "name": "Customer Spend Tier",
        "formula": "VAR Spend = [Total Sales] RETURN SWITCH(TRUE(), Spend >= 5000, \"Platinum\", Spend >= 2500, \"Gold\", Spend >= 1000, \"Silver\", \"Bronze\")",
        "description": "Segments customers into distinct commercial tiers using variables."
      },
      {
        "name": "30-Day Moving Average",
        "formula": "VAR LastDateSelected = MAX(DimDate[Date]) VAR Period = DATESINPERIOD(DimDate[Date], LastDateSelected, -30, DAY) RETURN AVERAGEX(Period, [Total Sales])",
        "description": "Calculates the trailing 30-day rolling average daily sales."
      }
    ],
    "resources": [
      {
        "name": "Fact Sales",
        "fileName": "FactSales.csv",
        "type": "CSV",
        "path": "Level_6_SalesPerformance/Data/FactSales.csv",
        "description": "8,000 transaction rows.",
        "isDataset": true
      },
      {
        "name": "Dim Product",
        "fileName": "DimProduct.csv",
        "type": "CSV",
        "path": "Level_6_SalesPerformance/Data/DimProduct.csv",
        "description": "100 product catalog rows.",
        "isDataset": true
      },
      {
        "name": "Dim Customer",
        "fileName": "DimCustomer.csv",
        "type": "CSV",
        "path": "Level_6_SalesPerformance/Data/DimCustomer.csv",
        "description": "500 customer demographic rows.",
        "isDataset": true
      },
      {
        "name": "Dim Store",
        "fileName": "DimStore.csv",
        "type": "CSV",
        "path": "Level_6_SalesPerformance/Data/DimStore.csv",
        "description": "15 store locations.",
        "isDataset": true
      },
      {
        "name": "Dim Date",
        "fileName": "DimDate.csv",
        "type": "CSV",
        "path": "Level_6_SalesPerformance/Data/DimDate.csv",
        "description": "Calendar reference table.",
        "isDataset": true
      },
      {
        "name": "Level 6 Project Brief",
        "fileName": "PROJECT_BRIEF.md",
        "type": "Markdown",
        "path": "Level_6_SalesPerformance/Documentation/PROJECT_BRIEF.md",
        "description": "Complete ranking formulas and segmentation logic.",
        "isInstruction": true
      }
    ],
    "deliverables": [
      "Level6_SalesPerformance_YourName.pbix featuring dynamic ranking leaderboards and moving average trends"
    ],
    "featured": false,
    "colorAccent": "#8B5CF6"
  },
  {
    "id": 7,
    "slug": "multi-fact",
    "title": "Multi-Fact Inventory Analysis",
    "subtitle": "Supply Chain & Snapshot Modeling",
    "company": "TechWorld Retail",
    "folder": "Level_7_MultiFact",
    "difficulty": "Advanced",
    "stage": "Advanced Intermediate",
    "estimatedHours": "12\u201316 hrs",
    "shortDescription": "Model Sales, Returns, and periodic snapshot Inventory tables to calculate Stock Turnover, Days of Supply (DOH), and stockout risks.",
    "description": "Combine commercial sales with supply chain inventory health. Learn periodic snapshot modeling, inventory turnover ratios, stockout detection, and cross-fact KPIs.",
    "scenario": "TechWorld Retail struggles with high stockout rates on best-sellers while obsolete inventory sits in regional warehouses. Build a multi-fact analytics model evaluating sell-through rates and warehouse stock holding costs.",
    "skills": [
      "Periodic Snapshot Fact Modeling",
      "Stock Turnover Ratio",
      "Days of Inventory on Hand (DOH)",
      "Cross-Fact DAX",
      "Stockout Risk Flags",
      "Inventory Valuation"
    ],
    "objectives": [
      "Model periodic monthly snapshot inventory records alongside daily sales and return facts",
      "Calculate current inventory valuation and average holding levels",
      "Author supply chain metrics: Stock Turnover Ratio and Days of Supply (DOH)",
      "Flag products at immediate risk of stockout (Days of Supply < 15 days)",
      "Design an integrated Supply Chain & Merchandising Executive Dashboard"
    ],
    "businessQuestions": [
      "What is current total inventory valuation across all regional warehouses?",
      "Which high-revenue products are in danger of imminent stockout?",
      "What is the Stock Turnover Ratio by product category?",
      "Which slow-moving products tie up excessive capital with Days of Supply > 120 days?"
    ],
    "workflow": [
      {
        "step": "01",
        "title": "Multi-Fact Architecture",
        "description": "Model 3 facts (Sales, Returns, Inventory snapshots) connected to DimProduct, DimStore, DimDate."
      },
      {
        "step": "02",
        "title": "Inventory Valuation DAX",
        "description": "Calculate Total Stock On Hand and Total Stock Value using snapshot end-of-period balances."
      },
      {
        "step": "03",
        "title": "Supply Velocity Metrics",
        "description": "Author Cost of Goods Sold, Average Inventory, and Stock Turnover Ratio."
      },
      {
        "step": "04",
        "title": "Stockout Warning System",
        "description": "Build conditional alerting cards and matrix tables highlighting critical inventory deficits."
      }
    ],
    "daxMeasures": [
      {
        "name": "Ending Inventory Units",
        "formula": "CALCULATE(SUM(FactInventory[QuantityOnHand]), LASTDATE(DimDate[Date]))",
        "description": "Total inventory quantity available at the closing date of the selected period."
      },
      {
        "name": "Stock Value",
        "formula": "SUMX(FactInventory, FactInventory[QuantityOnHand] * RELATED(DimProduct[UnitCost]))",
        "description": "Monetary valuation of warehouse stock based on cost price."
      },
      {
        "name": "Inventory Turnover Ratio",
        "formula": "DIVIDE([Total COGS], [Average Inventory Value], 0)",
        "description": "Measures how many times inventory is sold and replaced over a period."
      },
      {
        "name": "Days of Supply (DOH)",
        "formula": "DIVIDE([Ending Inventory Units], [Average Daily Sales Units], 0)",
        "description": "Estimated number of days before current inventory depletes."
      }
    ],
    "resources": [
      {
        "name": "Fact Inventory",
        "fileName": "FactInventory.csv",
        "type": "CSV",
        "path": "Level_7_MultiFact/Data/FactInventory.csv",
        "description": "6,000 monthly warehouse inventory snapshot records.",
        "isDataset": true
      },
      {
        "name": "Fact Sales",
        "fileName": "FactSales.csv",
        "type": "CSV",
        "path": "Level_7_MultiFact/Data/FactSales.csv",
        "description": "7,000 sales transactions.",
        "isDataset": true
      },
      {
        "name": "Fact Returns",
        "fileName": "FactReturns.csv",
        "type": "CSV",
        "path": "Level_7_MultiFact/Data/FactReturns.csv",
        "description": "800 customer return logs.",
        "isDataset": true
      },
      {
        "name": "Dim Product",
        "fileName": "DimProduct.csv",
        "type": "CSV",
        "path": "Level_7_MultiFact/Data/DimProduct.csv",
        "description": "80 products catalog.",
        "isDataset": true
      },
      {
        "name": "Dim Store",
        "fileName": "DimStore.csv",
        "type": "CSV",
        "path": "Level_7_MultiFact/Data/DimStore.csv",
        "description": "12 retail stores.",
        "isDataset": true
      },
      {
        "name": "Dim Customer",
        "fileName": "DimCustomer.csv",
        "type": "CSV",
        "path": "Level_7_MultiFact/Data/DimCustomer.csv",
        "description": "400 customer records.",
        "isDataset": true
      },
      {
        "name": "Dim Date",
        "fileName": "DimDate.csv",
        "type": "CSV",
        "path": "Level_7_MultiFact/Data/DimDate.csv",
        "description": "Calendar reference table.",
        "isDataset": true
      },
      {
        "name": "Level 7 Project Brief",
        "fileName": "PROJECT_BRIEF.md",
        "type": "Markdown",
        "path": "Level_7_MultiFact/Documentation/PROJECT_BRIEF.md",
        "description": "Inventory formulas and supply chain business logic.",
        "isInstruction": true
      }
    ],
    "deliverables": [
      "Level7_MultiFact_YourName.pbix with 3-fact model and inventory diagnostic suite"
    ],
    "featured": false,
    "colorAccent": "#EC4899"
  },
  {
    "id": 8,
    "slug": "advanced-features",
    "title": "Advanced Features & Security",
    "subtitle": "Dynamic RLS, Field Parameters & What-If",
    "company": "GlobalDirect Enterprise",
    "folder": "Level_8_AdvancedFeatures",
    "difficulty": "Advanced",
    "stage": "Advanced Intermediate",
    "estimatedHours": "14\u201318 hrs",
    "shortDescription": "Implement dynamic Row-Level Security (RLS with USERNAME), Field Parameters for dynamic metrics/axes, and What-If price elasticity modeling.",
    "description": "Enterprise Power BI development demands robust security and interactive user personalization. Configure dynamic Row-Level Security, Field Parameters, and What-If scenario modeling.",
    "scenario": "GlobalDirect Enterprise distributes products across 4 worldwide regions. Regional managers must only see data for their assigned territory via dynamic RLS. Executives need dynamic parameter selectors and pricing sensitivity modeling.",
    "skills": [
      "Dynamic Row-Level Security (RLS)",
      "USERPRINCIPALNAME() / USERNAME()",
      "Field Parameters",
      "What-If Scenario Modeling",
      "Security User Table Mapping",
      "Dynamic Title DAX"
    ],
    "objectives": [
      "Build a security bridge linking SecurityUser.csv to DimStore for dynamic RLS",
      "Author DAX security filters utilizing USERPRINCIPALNAME()",
      "Create Field Parameters allowing end-users to dynamically toggle visual axes (by Region, Category, Store)",
      "Create a What-If parameter modeling price elasticity and discount sensitivity on gross profit",
      "Test role security thoroughly using Power BI Desktop View As Role feature"
    ],
    "businessQuestions": [
      "How does dynamic RLS restrict European vs North American store managers?",
      "What is the projected revenue impact if product prices increase by 5%, 10%, or 15% (What-If)?",
      "How does dynamic field parameter switching enhance executive usability on mobile devices?"
    ],
    "workflow": [
      {
        "step": "01",
        "title": "Security Mapping",
        "description": "Integrate SecurityUser.csv and establish secure relationship or DAX filter to DimStore."
      },
      {
        "step": "02",
        "title": "Configure RLS Roles",
        "description": "Manage Roles -> Create 'Regional Manager' role with [Email] = USERPRINCIPALNAME() filter."
      },
      {
        "step": "03",
        "title": "Create Field Parameters",
        "description": "Modeling -> New Parameter -> Fields -> Select Metric and Dimension options."
      },
      {
        "step": "04",
        "title": "What-If Sensitivity Engine",
        "description": "Create numeric range parameter for Price Change % and author Projected Revenue DAX."
      },
      {
        "step": "05",
        "title": "Security Validation",
        "description": "Validate role access across all user emails in SecurityUser.csv using View As Role."
      }
    ],
    "daxMeasures": [
      {
        "name": "RLS Store Filter",
        "formula": "[Region] = LOOKUPVALUE(SecurityUser[AssignedRegion], SecurityUser[Email], USERPRINCIPALNAME())",
        "description": "Restricts data visibility to user's assigned geographic territory."
      },
      {
        "name": "Projected Sales (What-If)",
        "formula": "VAR PriceMultiplier = 1 + ('Price Adjustment'[Price Adjustment Value] / 100) RETURN [Total Sales] * PriceMultiplier",
        "description": "Calculates adjusted sales revenue based on interactive slider value."
      },
      {
        "name": "Dynamic Report Title",
        "formula": "\"Sales Performance Report - \" & SELECTEDVALUE(DimStore[Region], \"All Regions\")",
        "description": "Dynamic title that updates based on active slicer or security filter."
      }
    ],
    "resources": [
      {
        "name": "Security Users",
        "fileName": "SecurityUser.csv",
        "type": "CSV",
        "path": "Level_8_AdvancedFeatures/Data/SecurityUser.csv",
        "description": "User emails and regional security permissions matrix.",
        "isDataset": true
      },
      {
        "name": "Fact Sales",
        "fileName": "FactSales.csv",
        "type": "CSV",
        "path": "Level_8_AdvancedFeatures/Data/FactSales.csv",
        "description": "9,000 transaction records.",
        "isDataset": true
      },
      {
        "name": "Fact Targets",
        "fileName": "FactTargets.csv",
        "type": "CSV",
        "path": "Level_8_AdvancedFeatures/Data/FactTargets.csv",
        "description": "Store target quotas.",
        "isDataset": true
      },
      {
        "name": "Dim Customer",
        "fileName": "DimCustomer.csv",
        "type": "CSV",
        "path": "Level_8_AdvancedFeatures/Data/DimCustomer.csv",
        "description": "450 customer profiles.",
        "isDataset": true
      },
      {
        "name": "Dim Product",
        "fileName": "DimProduct.csv",
        "type": "CSV",
        "path": "Level_8_AdvancedFeatures/Data/DimProduct.csv",
        "description": "90 product lines.",
        "isDataset": true
      },
      {
        "name": "Dim Store",
        "fileName": "DimStore.csv",
        "type": "CSV",
        "path": "Level_8_AdvancedFeatures/Data/DimStore.csv",
        "description": "16 store locations.",
        "isDataset": true
      },
      {
        "name": "Dim Date",
        "fileName": "DimDate.csv",
        "type": "CSV",
        "path": "Level_8_AdvancedFeatures/Data/DimDate.csv",
        "description": "Date dimension.",
        "isDataset": true
      },
      {
        "name": "Level 8 Project Brief",
        "fileName": "PROJECT_BRIEF.md",
        "type": "Markdown",
        "path": "Level_8_AdvancedFeatures/Documentation/PROJECT_BRIEF.md",
        "description": "RLS test cases, parameters setup, and validation guidelines.",
        "isInstruction": true
      }
    ],
    "deliverables": [
      "Level8_AdvancedFeatures_YourName.pbix with verified RLS roles and dynamic Field Parameters"
    ],
    "featured": false,
    "colorAccent": "#F43F5E"
  },
  {
    "id": 9,
    "slug": "complex-dax",
    "title": "Complex DAX & Advanced Reporting",
    "subtitle": "Context Transition, Inactive Relationships & Drill-Through",
    "company": "Premier Retail",
    "folder": "Level_9_ComplexDAX",
    "difficulty": "Advanced",
    "stage": "Advanced Intermediate",
    "estimatedHours": "16\u201322 hrs",
    "shortDescription": "Master deep DAX: CALCULATE filter modifiers (KEEPFILTERS, USERELATIONSHIP), Context Transition, Report Page Tooltips, and Drill-through.",
    "description": "Deep dive into the inner mechanics of the DAX engine. Master context transition, inactive relationships with USERELATIONSHIP, KEEPFILTERS, custom report tooltips, and cross-report drill-through.",
    "scenario": "Premier Retail has multiple date relationships on sales orders (OrderDate vs ShipDate vs DeliveryDate). Management needs specialized shipping backlog metrics, customer repurchase rates, and custom mini-chart report tooltips.",
    "skills": [
      "Context Transition",
      "USERELATIONSHIP()",
      "KEEPFILTERS()",
      "Report Page Tooltips",
      "Drill-Through Actions",
      "Customer Retention Rate"
    ],
    "objectives": [
      "Activate inactive date relationships using USERELATIONSHIP for Order vs Ship dates",
      "Understand context transition in iterators and row context manipulation",
      "Apply KEEPFILTERS to maintain outer visual filter context inside CALCULATE",
      "Build customized Report Page Tooltip pages displaying customer mini-trend sparklines",
      "Configure contextual Drill-through pages with back buttons for customer account audits"
    ],
    "businessQuestions": [
      "What is total sales by Order Date vs total sales realized by Ship Date?",
      "What is the average shipping duration lag between order placement and delivery?",
      "What is the repeat customer retention rate % across customer cohorts?",
      "What detailed order history exists when drilling into an individual customer?"
    ],
    "workflow": [
      {
        "step": "01",
        "title": "Model Inactive Relationships",
        "description": "Create secondary inactive relationships from DimDate[Date] to FactSales[ShipDate]."
      },
      {
        "step": "02",
        "title": "Author Inactive Relationship DAX",
        "description": "Write Shipped Sales using CALCULATE([Total Sales], USERELATIONSHIP(...))."
      },
      {
        "step": "03",
        "title": "Design Custom Tooltip Page",
        "description": "Create dedicated 320x240 tooltip page with category sparkline and bind to main visuals."
      },
      {
        "step": "04",
        "title": "Build Drill-Through Target Page",
        "description": "Design Customer Deep-Dive drillthrough page with order history table and back button."
      }
    ],
    "daxMeasures": [
      {
        "name": "Shipped Sales",
        "formula": "CALCULATE([Total Sales], USERELATIONSHIP(FactSales[ShipDate], DimDate[Date]))",
        "description": "Calculates sales attributed to the date products were shipped rather than ordered."
      },
      {
        "name": "Sales with Strict Category Filter",
        "formula": "CALCULATE([Total Sales], KEEPFILTERS(DimProduct[Category] = \"Audio\"))",
        "description": "Demonstrates KEEPFILTERS semantics preserving existing outer filter context."
      },
      {
        "name": "Repeat Customer Rate %",
        "formula": "VAR RepeatCustomers = COUNTROWS(FILTER(DimCustomer, [Total Orders] > 1)) RETURN DIVIDE(RepeatCustomers, [Total Customers], 0)",
        "description": "Proportion of customer base with multiple distinct purchases."
      }
    ],
    "resources": [
      {
        "name": "Fact Sales",
        "fileName": "FactSales.csv",
        "type": "CSV",
        "path": "Level_9_ComplexDAX/Data/FactSales.csv",
        "description": "12,000 transaction records with OrderDate, ShipDate, and DeliveryDate.",
        "isDataset": true
      },
      {
        "name": "Fact Returns",
        "fileName": "FactReturns.csv",
        "type": "CSV",
        "path": "Level_9_ComplexDAX/Data/FactReturns.csv",
        "description": "1,200 return records.",
        "isDataset": true
      },
      {
        "name": "Fact Targets",
        "fileName": "FactTargets.csv",
        "type": "CSV",
        "path": "Level_9_ComplexDAX/Data/FactTargets.csv",
        "description": "Sales target matrix.",
        "isDataset": true
      },
      {
        "name": "Dim Customer",
        "fileName": "DimCustomer.csv",
        "type": "CSV",
        "path": "Level_9_ComplexDAX/Data/DimCustomer.csv",
        "description": "600 customer records.",
        "isDataset": true
      },
      {
        "name": "Dim Product",
        "fileName": "DimProduct.csv",
        "type": "CSV",
        "path": "Level_9_ComplexDAX/Data/DimProduct.csv",
        "description": "120 product records.",
        "isDataset": true
      },
      {
        "name": "Dim Store",
        "fileName": "DimStore.csv",
        "type": "CSV",
        "path": "Level_9_ComplexDAX/Data/DimStore.csv",
        "description": "18 store locations.",
        "isDataset": true
      },
      {
        "name": "Dim Date",
        "fileName": "DimDate.csv",
        "type": "CSV",
        "path": "Level_9_ComplexDAX/Data/DimDate.csv",
        "description": "Calendar reference table.",
        "isDataset": true
      },
      {
        "name": "Level 9 Project Brief",
        "fileName": "PROJECT_BRIEF.md",
        "type": "Markdown",
        "path": "Level_9_ComplexDAX/Documentation/PROJECT_BRIEF.md",
        "description": "Complex DAX scenarios and tooltip configuration steps.",
        "isInstruction": true
      }
    ],
    "deliverables": [
      "Level9_ComplexDAX_YourName.pbix featuring custom report tooltips, drill-through, and USERELATIONSHIP"
    ],
    "featured": false,
    "colorAccent": "#D946EF"
  },
  {
    "id": 10,
    "slug": "pre-capstone",
    "title": "VoltEdge Solutions \u2013 Enterprise Pre-Capstone",
    "subtitle": "Comprehensive Multi-Fact Enterprise BI Architecture",
    "company": "VoltEdge Solutions Enterprise",
    "folder": "Level_10_PreCapstone",
    "difficulty": "Expert Challenge",
    "stage": "Pre-Capstone",
    "estimatedHours": "20\u201330 hrs",
    "shortDescription": "The ultimate preparation for enterprise BI: 4 fact tables, dirty raw data, employee hierarchies, dynamic RLS, and an executive KPI suite.",
    "description": "The culmination of the entire 10-level curriculum. Tackle a realistic corporate business scenario with dirty data, 4 fact tables (Sales, Returns, Inventory, Targets), employee manager hierarchies, dynamic security, and 35+ DAX measures.",
    "scenario": "VoltEdge Solutions is a high-growth consumer electronics brand with 20 retail branches and omnichannel operations. Executive leadership has commissioned a centralized Business Intelligence platform uniting Sales, Returns, Inventory health, Target realization, and Sales Rep quotas with strict multi-tiered Row-Level Security.",
    "skills": [
      "Enterprise Multi-Fact Architecture (4 Facts)",
      "Real-World Data Hygiene & Power Query M",
      "Employee Hierarchy & Quota Attribution",
      "Dynamic Role-Based Security (RLS)",
      "Executive Dashboard UI/UX Design",
      "Comprehensive DAX Formula Suite (35+ Measures)"
    ],
    "objectives": [
      "Perform thorough data profiling and hygiene in Power Query (fix nulls, casing discrepancies, orphan keys)",
      "Model 4 concurrent Fact tables (Sales, Returns, Inventory, Targets) around 5 conformed Dimensions",
      "Implement employee hierarchy modeling for regional sales managers and field sales reps",
      "Deploy dynamic Row-Level Security restricting sales reps to their own accounts and managers to their region",
      "Design a production-grade 4-page Executive Power BI application ready for C-suite presentation"
    ],
    "businessQuestions": [
      "What is the company-wide Net Revenue, Gross Margin %, and Quota Attainment across all business units?",
      "Which sales representatives are leading their quarterly targets vs underperforming?",
      "What is the correlation between product return rates and specific warehouse fulfillment batches?",
      "Which store locations exhibit optimal stock turn and highest gross profit per square foot?"
    ],
    "workflow": [
      {
        "step": "01",
        "title": "Enterprise ETL & Data Quality Audit",
        "description": "Profile all 10 CSV tables, remove anomalies, fix type mismatches, and standardize surrogate keys."
      },
      {
        "step": "02",
        "title": "Enterprise Dimensional Model",
        "description": "Construct the complete 4-fact, 5-dimension Star Schema with verified single-direction filter flows."
      },
      {
        "step": "03",
        "title": "DAX Measure Library",
        "description": "Author core revenue, profitability, inventory turnover, return diagnostic, and target variance measures."
      },
      {
        "step": "04",
        "title": "Dynamic Role-Level Security (RLS)",
        "description": "Implement hierarchical RLS covering Executive, Regional Manager, and Sales Rep roles."
      },
      {
        "step": "05",
        "title": "Executive Report Suite Design",
        "description": "Build 4 high-polish pages: Executive Summary, Sales Rep Performance, Supply Chain & Inventory, Returns Diagnostic."
      }
    ],
    "daxMeasures": [
      {
        "name": "Net Retained Revenue",
        "formula": "VAR GrossSales = SUM(FactSales[SalesAmount]) VAR TotalRefunds = SUMX(FactReturns, FactReturns[QuantityReturned] * RELATED(DimProduct[UnitPrice])) RETURN GrossSales - TotalRefunds",
        "description": "Gross sales minus customer refunds."
      },
      {
        "name": "Rep Quota Attainment %",
        "formula": "DIVIDE([Total Sales], SUM(FactTargets[TargetAmount]), 0)",
        "description": "Sales representative achievement against individual assigned quota."
      },
      {
        "name": "Inventory Stockout Risk Flag",
        "formula": "IF([Days of Supply (DOH)] < 14, \"CRITICAL STOCKOUT\", IF([Days of Supply (DOH)] < 30, \"LOW STOCK\", \"OPTIMAL\"))",
        "description": "Dynamic inventory status tag based on current velocity."
      },
      {
        "name": "Comprehensive Gross Margin %",
        "formula": "DIVIDE([Net Retained Revenue] - [Total COGS], [Net Retained Revenue], 0)",
        "description": "Enterprise gross margin accounting for returned inventory salvage values."
      }
    ],
    "resources": [
      {
        "name": "Fact Sales (15k rows)",
        "fileName": "FactSales.csv",
        "type": "CSV",
        "path": "Level_10_PreCapstone/Data/FactSales.csv",
        "description": "15,000 transaction records spanning 2 years.",
        "isDataset": true
      },
      {
        "name": "Fact Inventory (11k rows)",
        "fileName": "FactInventory.csv",
        "type": "CSV",
        "path": "Level_10_PreCapstone/Data/FactInventory.csv",
        "description": "11,160 snapshot inventory records.",
        "isDataset": true
      },
      {
        "name": "Fact Returns (1.5k rows)",
        "fileName": "FactReturns.csv",
        "type": "CSV",
        "path": "Level_10_PreCapstone/Data/FactReturns.csv",
        "description": "1,500 customer return logs.",
        "isDataset": true
      },
      {
        "name": "Fact Targets",
        "fileName": "FactTargets.csv",
        "type": "CSV",
        "path": "Level_10_PreCapstone/Data/FactTargets.csv",
        "description": "Target quotas by rep, store, and month.",
        "isDataset": true
      },
      {
        "name": "Dim Employee",
        "fileName": "DimEmployee.csv",
        "type": "CSV",
        "path": "Level_10_PreCapstone/Data/DimEmployee.csv",
        "description": "Sales rep and management organizational hierarchy.",
        "isDataset": true
      },
      {
        "name": "Dim Customer (800 rows)",
        "fileName": "DimCustomer.csv",
        "type": "CSV",
        "path": "Level_10_PreCapstone/Data/DimCustomer.csv",
        "description": "800 enterprise customer profiles.",
        "isDataset": true
      },
      {
        "name": "Dim Product (150 rows)",
        "fileName": "DimProduct.csv",
        "type": "CSV",
        "path": "Level_10_PreCapstone/Data/DimProduct.csv",
        "description": "150 catalog products with cost and pricing.",
        "isDataset": true
      },
      {
        "name": "Dim Store (20 stores)",
        "fileName": "DimStore.csv",
        "type": "CSV",
        "path": "Level_10_PreCapstone/Data/DimStore.csv",
        "description": "20 store locations with square footage and formats.",
        "isDataset": true
      },
      {
        "name": "Dim Date",
        "fileName": "DimDate.csv",
        "type": "CSV",
        "path": "Level_10_PreCapstone/Data/DimDate.csv",
        "description": "Full calendar dimension.",
        "isDataset": true
      },
      {
        "name": "Security User",
        "fileName": "SecurityUser.csv",
        "type": "CSV",
        "path": "Level_10_PreCapstone/Data/SecurityUser.csv",
        "description": "User authentication and multi-tier role mapping.",
        "isDataset": true
      },
      {
        "name": "Level 10 Pre-Capstone Brief",
        "fileName": "PROJECT_BRIEF.md",
        "type": "Markdown",
        "path": "Level_10_PreCapstone/Documentation/PROJECT_BRIEF.md",
        "description": "Full enterprise project specification and grading rubric.",
        "isInstruction": true
      }
    ],
    "deliverables": [
      "Level10_PreCapstone_VoltEdge_YourName.pbix (4-page executive suite)",
      "Verified dynamic RLS implementation for Reps and Managers",
      "Executive summary presentation slide deck (optional)"
    ],
    "featured": true,
    "colorAccent": "#F59E0B"
  }
];

export const getLevelBySlug = (slug: string): Level | undefined => {
  return LEVELS.find((level) => level.slug === slug);
};

export const getLevelById = (id: number): Level | undefined => {
  return LEVELS.find((level) => level.id === id);
};
