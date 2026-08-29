import { SkillCategory } from "../types/skill";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "DATA_PREPARATION",
    title: "Data Preparation & Power Query",
    description: "Transform raw, disparate, and messy business data into clean, structured analytical tables.",
    icon: "Database",
    skills: [
      {
        id: "data-import",
        name: "Data Import & Text/CSV Ingestion",
        category: "DATA_PREPARATION",
        description: "Connecting to CSV, Excel, relational databases, and handling delimiter encodings.",
        levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        importance: "Core"
      },
      {
        id: "power-query-types",
        name: "Power Query Data Typing & Hygiene",
        category: "DATA_PREPARATION",
        description: "Detecting and correcting numeric types, currency formatting, locale-aware date parsing.",
        levels: [1, 2, 3, 4, 5, 10],
        importance: "Core"
      },
      {
        id: "dirty-data-cleaning",
        name: "Data Cleansing & Anomaly Removal",
        category: "DATA_PREPARATION",
        description: "Filtering invalid records, handling null keys, deduplication, and imputing missing foreign keys.",
        levels: [5, 10],
        importance: "Advanced"
      },
      {
        id: "date-dimension-gen",
        name: "Dedicated Date Dimension Creation",
        category: "DATA_PREPARATION",
        description: "Building contiguous calendar tables, sort-by-column configuration, and fiscal calendars.",
        levels: [3, 4, 5, 6, 7, 8, 9, 10],
        importance: "Core"
      }
    ]
  },
  {
    id: "DATA_MODELING",
    title: "Data Modeling & Architecture",
    description: "Architect robust Kimball star schemas, resolve grain mismatches, and manage multi-fact models.",
    icon: "Layers",
    skills: [
      {
        id: "star-schema",
        name: "Kimball Star Schema Architecture",
        category: "DATA_MODELING",
        description: "Separating dimension lookup tables from central numeric fact transaction tables.",
        levels: [2, 4, 5, 6, 7, 8, 9, 10],
        importance: "Core"
      },
      {
        id: "relationships",
        name: "1-to-Many Filter Propagation",
        category: "DATA_MODELING",
        description: "Configuring single-direction filter propagation, primary-to-foreign key integrity.",
        levels: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        importance: "Core"
      },
      {
        id: "multi-fact",
        name: "Multi-Fact Modeling (Sales + Returns + Inventory)",
        category: "DATA_MODELING",
        description: "Modeling multiple fact tables at varying granularities sharing conformed dimensions.",
        levels: [5, 7, 8, 9, 10],
        importance: "Advanced"
      },
      {
        id: "inactive-relationships",
        name: "Role-Playing Dimensions & Inactive Relationships",
        category: "DATA_MODELING",
        description: "Managing multiple date vectors (Order Date, Ship Date, Delivery Date) in a single model.",
        levels: [9, 10],
        importance: "Specialized"
      }
    ]
  },
  {
    id: "DAX",
    title: "DAX (Data Analysis Expressions)",
    description: "Write high-performance calculations ranging from simple aggregations to advanced context transitions.",
    icon: "Cpu",
    skills: [
      {
        id: "basic-aggregations",
        name: "Aggregations & Safe Division",
        category: "DAX",
        description: "SUM, AVERAGE, MIN, MAX, DISTINCTCOUNT, and DIVIDE with divide-by-zero protection.",
        levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        importance: "Core"
      },
      {
        id: "time-intelligence",
        name: "Time Intelligence (YTD, Prior Period, MoM, YoY)",
        category: "DAX",
        description: "TOTALYTD, SAMEPERIODLASTYEAR, DATEADD, PARALLELPERIOD, and DATESINPERIOD.",
        levels: [3, 4, 5, 6, 7, 8, 9, 10],
        importance: "Core"
      },
      {
        id: "calculate-modifiers",
        name: "CALCULATE & Filter Modifiers",
        category: "DAX",
        description: "Manipulating filter context with ALL, ALLEXCEPT, ALLSELECTED, and KEEPFILTERS.",
        levels: [4, 5, 6, 7, 8, 9, 10],
        importance: "Advanced"
      },
      {
        id: "ranking-segmentation",
        name: "Dynamic Ranking & Segmentation (RANKX, SWITCH)",
        category: "DAX",
        description: "Dynamic leaderboard rankings, customer tier classification, and Pareto 80/20 logic.",
        levels: [6, 8, 9, 10],
        importance: "Advanced"
      },
      {
        id: "variables-optimization",
        name: "DAX Variables (VAR / RETURN) & Performance",
        category: "DAX",
        description: "Optimizing formula execution speed, eliminating redundant evaluations, improving readability.",
        levels: [6, 7, 8, 9, 10],
        importance: "Advanced"
      }
    ]
  },
  {
    id: "VISUALIZATION",
    title: "Visualization & Report UX Design",
    description: "Craft executive-ready dashboards with intuitive navigation, custom tooltips, and visual storytelling.",
    icon: "LayoutDashboard",
    skills: [
      {
        id: "kpi-cards",
        name: "Executive KPI Cards & Conditional Formatting",
        category: "VISUALIZATION",
        description: "Designing prominent metric cards with dynamic trend icons, delta badges, and colored status rules.",
        levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        importance: "Core"
      },
      {
        id: "multi-page-nav",
        name: "Multi-Page Report Navigation & Layout",
        category: "VISUALIZATION",
        description: "Structuring cohesive multi-page applications with synchronized slicers and navigation buttons.",
        levels: [4, 5, 6, 7, 8, 9, 10],
        importance: "Core"
      },
      {
        id: "custom-tooltips",
        name: "Report Page Tooltips & Micro-Charts",
        category: "VISUALIZATION",
        description: "Hover tooltips that render dynamic trend mini-charts and categorical breakdowns on hover.",
        levels: [9, 10],
        importance: "Specialized"
      },
      {
        id: "drill-through",
        name: "Cross-Report Drill-Through",
        category: "VISUALIZATION",
        description: "Empowering users to right-click summary data points and navigate to granular entity audit pages.",
        levels: [9, 10],
        importance: "Specialized"
      }
    ]
  },
  {
    id: "ADVANCED_POWER_BI",
    title: "Advanced Power BI & Enterprise Features",
    description: "Enterprise capabilities including security governance, personalization parameters, and sensitivity modeling.",
    icon: "ShieldCheck",
    skills: [
      {
        id: "dynamic-rls",
        name: "Dynamic Row-Level Security (RLS)",
        category: "ADVANCED_POWER_BI",
        description: "Securing data access by user identity with USERPRINCIPALNAME() and security bridge mapping.",
        levels: [8, 10],
        importance: "Advanced"
      },
      {
        id: "field-parameters",
        name: "Field Parameters for Dynamic Visuals",
        category: "ADVANCED_POWER_BI",
        description: "Allowing end-users to dynamically toggle visual axes and measure metrics with interactive slicers.",
        levels: [8, 10],
        importance: "Advanced"
      },
      {
        id: "what-if-parameters",
        name: "What-If Scenario & Price Elasticity Modeling",
        category: "ADVANCED_POWER_BI",
        description: "Simulating business outcomes under variable price, cost, or discount assumptions.",
        levels: [8, 10],
        importance: "Advanced"
      },
      {
        id: "supply-chain-analytics",
        name: "Supply Chain & Inventory Diagnostics",
        category: "ADVANCED_POWER_BI",
        description: "Stock turnover ratios, Days of Inventory on Hand (DOH), stockout early-warning systems.",
        levels: [7, 10],
        importance: "Specialized"
      }
    ]
  }
];
