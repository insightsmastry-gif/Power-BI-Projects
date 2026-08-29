# Power BI Learning Path 📊

> Master Power BI by Building Real-World Projects.

A progressive, production-grade 10-level Power BI educational platform that takes students from absolute beginner to enterprise pre-capstone proficiency.

---

## 🌟 Key Features

- **10 Structured Hands-On Projects:** From single-table coffee shop analytics to 4-fact enterprise supply chain models.
- **45+ Real CSV Datasets:** Transaction logs, returns, monthly target quotas, customer demographics, inventory snapshots, and security users.
- **Client-Side Progress Tracker:** Local progress persistence via `localStorage` with unlock progression and completion badges.
- **Interactive Project Explorer:** Instant filtering by difficulty (Beginner, Intermediate, Advanced, Expert) and skill tags.
- **DAX Formula Library:** Syntax-highlighted DAX snippets with one-click copy for every level.
- **Centralized GitHub Configuration:** All download URLs, raw file links, and repository endpoints are managed in one clean config file.
- **Dark & Light Mode:** Tailored design system with smooth transitions.
- **100% GitHub Pages Ready:** Automatic build & deploy via official GitHub Actions workflow.

---

## 🗺️ 10 Progressive Learning Levels

| Level | Project Name | Company | Stage | Est. Time | Focus Area |
|---|---|---|---|---|---|
| **01** | **Coffee Shop Analytics** | Bean & Brew | Foundation | 2–4 hrs | First dashboard, Power Query types, basic DAX |
| **02** | **Retail Store Model** | CityStyle Retail | Foundation | 4–6 hrs | 1-to-Many relationships, RELATED(), margins |
| **03** | **E-Commerce Analytics** | ShopNova Online | Foundation | 5–8 hrs | Date Dimension, Time Intelligence (YTD, MoM%) |
| **04** | **Retail Chain Star Schema** | UrbanMart | Core Intermediate | 8–12 hrs | Kimball Star Schema, multi-page report navigation |
| **05** | **Intermediate Capstone** | TechHub Electronics | Core Intermediate | 12–18 hrs | Multi-facts, data hygiene, target vs actual |
| **06** | **Sales Performance** | NovaMart | Adv. Intermediate | 10–14 hrs | Dynamic RANKX, spend segmentation, moving averages |
| **07** | **Multi-Fact Inventory** | TechWorld | Adv. Intermediate | 12–16 hrs | Snapshot modeling, Stock Turnover, Days of Supply |
| **08** | **Advanced Features & RLS** | GlobalDirect | Adv. Intermediate | 14–18 hrs | Dynamic RLS, Field Parameters, What-If modeling |
| **09** | **Complex DAX** | Premier Retail | Adv. Intermediate | 16–22 hrs | Context Transition, USERELATIONSHIP, Tooltips |
| **10** | **Pre-Capstone (VoltEdge)** | VoltEdge Solutions | Pre-Capstone | 20–30 hrs | 4 Facts, dirty data, employee hierarchies, RLS |

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Routing:** React Router (`HashRouter` for GitHub Pages deep linking)
- **Icons:** Lucide React
- **Animations:** Framer Motion

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/insightsmastry-gif/Power-BI-Projects.git
   cd Power-BI-Projects
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:** `http://localhost:5173/`

---

## ⚙️ Centralized GitHub Configuration

All GitHub URLs, repository names, and download links are centralized in:
`src/config/github.ts`

```typescript
export const GITHUB_CONFIG = {
  username: "insightsmastry-gif",
  repository: "Power-BI-Projects",
  branch: "main",
  siteUrl: "https://insightsmastry-gif.github.io/Power-BI-Projects"
};
```

---

## ➕ Adding Resources or Modifying Levels

To add `.pbix`, `.xlsx`, `.csv`, `.pdf` or modify project metadata, simply update:
`src/data/levels.ts`

Example resource item:
```typescript
resources: [
  {
    name: "Completed Power BI Model",
    fileName: "Level1_CoffeeShop.pbix",
    type: "PBIX",
    path: "Level_1_CoffeeShop/Level1_CoffeeShop.pbix",
    description: "Official solution model.",
    isDataset: false
  }
]
```

---

## 🚀 GitHub Pages Deployment

1. Go to your repository on GitHub: **Settings > Pages**
2. Under **Build and deployment > Source**, select **GitHub Actions**
3. Push to `main` branch:
   ```bash
   git add .
   git commit -m "Deploy Power BI Learning Platform"
   git push origin main
   ```
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site to:
   `https://insightsmastry-gif.github.io/Power-BI-Projects/`

---

## 📄 License

MIT License. Open source for all students and educators.
