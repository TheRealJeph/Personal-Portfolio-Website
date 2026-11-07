export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  live?: string;
  github?: string;
  image?: string;
  external?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
  slug: "agri-sight-rwanda",
  title: "Agri-Sight Rwanda",
  tagline: "Agricultural Data Analytics · Django REST Framework / React",
  year: "2026",
  role: "Full-Stack Developer & Data Analyst",
  summary:
    "A web-based agricultural data analytics and decision-support platform that transforms Rwanda's agricultural survey data into meaningful insights about crop production, district-level performance, seasonal patterns, and data quality.",
  problem:
    "Agricultural planners, researchers, and policymakers need accessible and reliable information to understand agricultural productivity. However, analyzing agricultural survey data across districts, crops, seasons, and years can be time-consuming and difficult.",
  solution:
    "Developed an interactive analytics platform using NISR Seasonal Agricultural Survey data (2023–2025). It enables users to explore agricultural performance through interactive dashboards, crop analysis, district comparisons, historical trends, and data quality insights to support evidence-based agricultural planning.",
  stack: [
    "React",
    "TypeScript",
    "Python",
    "Django REST Framework",
    "PostgreSQL",
    "Axios",
    "Data Analytics",
    "NISR Dataset"
  ],
  live: "https://agri-sight-rwanda.pages.dev",
  github: "https://github.com/TheRealJeph/agri-sight-rwanda.git",
  image: "/projects/agri-sight-rwanda.png",
  external: true,
  accent: "#16a34a",
},
  {
  slug: "unidine",
  title: "UniDine",
  tagline: "University Dining · Web Application",
  year: "2025",
  role: "Full-Stack Developer",
  summary:
    "A university-focused web application designed to improve the dining experience by making food-related services and information more accessible to students.",
  problem:
    "University students need convenient ways to access dining information and services during their academic day. Disconnected or inconvenient dining experiences can make it harder to find suitable food options.",
  solution:
    "Developed UniDine, a web application focused on university dining. The platform aims to make dining-related information and services easier for students to access through a dedicated digital experience.",
  stack: [
    "Web Development",
    "Frontend Development",
    "Backend Development"
  ],
  live: "",
  github: "https://github.com/TheRealJeph/UniDine_WebApp",
  image: "/projects/unidine.png",
  external: true,
  accent: "#e27d60",
},
  {
    slug: "gmail-auto-categorizer",
    title: "Gmail Auto Categorizer",
    tagline: "Email AI Agent · Python",
    year: "2026",
    role: "Python Developer (AI/ML)",
    summary:
      "An AI agent that automatically categorizes emails into SPAM, FYI, Urgent, and custom categories using LLMs and rule-based classification.",
    problem:
      "Email overload leads to missed important messages; existing filters are rigid and can't understand context or nuance in email content.",
    solution:
      "Developed a Gmail-integrated AI agent using LLMs for semantic email understanding, few-shot classification, user feedback loops for continuous improvement, and privacy-preserving local processing option.",
    stack: ["Python", "Gmail API", "OpenAI API", "LangChain", "ChromaDB", "OAuth2", "FastAPI", "Docker"],
    live: "",
    github: "",
    accent: "#e74c3c",
  },
  {
    slug: "automated-transit-route-monitoring",
    title: "Transit Route Monitor",
    tagline: "AI Transit Monitoring · Python",
    year: "2026",
    role: "Python Developer (AI/ML)",
    summary:
      "AI-powered automated transit and route monitoring system with real-time tracking, route optimization, and predictive analytics for public transportation.",
    problem:
      "Transit agencies struggle with real-time route monitoring, delay prediction, and dynamic route optimization due to fragmented data sources and lack of ML infrastructure.",
    solution:
      "Built an end-to-end ML pipeline ingesting GTFS-realtime feeds, GPS data, and historical patterns to provide real-time ETAs, delay predictions, and automated route optimization recommendations.",
    stack: ["Python", "TensorFlow/Keras", "GTFS-realtime", "Pandas", "GeoPandas", "Kafka", "Redis", "FastAPI", "PostGIS"],
    live: "",
    github: "",
    accent: "#3498db",
  },
  {
  slug: "customer-behaviour-analysis",
  title: "Customer Behaviour Analysis",
  tagline: "Data Analytics & Business Intelligence · SQL · Python · Power BI",
  year: "2026",
  role: "Data Analyst",
  summary:
    "An end-to-end customer behaviour analysis project that transforms retail shopping data into actionable business insights through Python-based data processing, SQL analysis, and interactive Power BI dashboards.",
  problem:
    "Businesses need to understand customer purchasing patterns, spending behaviour, product preferences, and customer segments to make informed decisions and improve their sales and marketing strategies.",
  solution:
    "Performed data cleaning, exploratory data analysis, and feature engineering using Python. Used SQL to investigate business questions, identify customer segments, and analyze purchasing patterns. Developed interactive Power BI dashboards to visualize key metrics, customer trends, and actionable business insights.",
  stack: [
    "Python",
    "Pandas",
    "NumPy",
    "SQL",
    "Power BI",
    "DAX",
    "Data Visualization",
    "Jupyter Notebook"
  ],
  live: "",
  github: "https://github.com/TheRealJeph/Customer_Behaviour_Analysis-SQL-PYTHON-POWER-BI-",
  accent: "#3498db",
},
{
    slug: "rag-document",
    title: "RAG Document Analyzer",
    tagline: "Enterprise RAG · TypeScript",
    year: "2026",
    role: "Full-Stack Developer",
    summary:
      "An enterprise-grade RAG (Retrieval-Augmented Generation) document analyzer for secure, private document querying and knowledge extraction.",
    problem:
      "Enterprises need secure document analysis without sending sensitive data to external APIs, while maintaining high retrieval accuracy and response quality.",
    solution:
      "Built a TypeScript-based RAG pipeline with local embedding models, vector database integration, hybrid search (semantic + keyword), and on-premise LLM support for complete data privacy.",
    stack: ["TypeScript", "Node.js", "LangChain", "ChromaDB", "Ollama", "HuggingFace Transformers", "Express", "PostgreSQL"],
    live: "",
    github: "",
    accent: "#2ecc71",
  },
 
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
