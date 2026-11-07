export type Skill = {
  name: string;
  /** Hover background color (the brand color). */
  bg: string;
  /** Color of the brand logo when shown on hover. */
  logoColor: string;
  /** simple-icons export key, used for the real brand mark. */
  icon: string;
};

export const skills: Skill[] = [
  { name: "Python", bg: "#3776ab", logoColor: "#ffffff", icon: "siPython" },
  { name: "Django REST Framework", bg: "#A30000", logoColor: "#ffffff", icon: "siDjango" },
  { name: "PostgreSQL", bg: "#4169e1", logoColor: "#ffffff", icon: "siPostgresql" },
  { name: "MongoDB", bg: "#47a248", logoColor: "#ffffff", icon: "siMongodb" },
  { name: "Docker", bg: "#2496ed", logoColor: "#ffffff", icon: "siDocker" },
  { name: "React", bg: "#61dafb", logoColor: "#000000", icon: "siReact" },
  { name: "TypeScript", bg: "#3178c6", logoColor: "#ffffff", icon: "siTypescript" },
  { name: "JavaScript", bg: "#f7df1e", logoColor: "#000000", icon: "siJavascript" },
  { name: "Git", bg: "#f03c2e", logoColor: "#ffffff", icon: "siGit" },
  { name: "Data Analysis", bg: "#2563eb", logoColor: "#ffffff", icon: "siPython" },
{ name: "Pandas", bg: "#150458", logoColor: "#ffffff", icon: "siPandas" },
{ name: "NumPy", bg: "#013243", logoColor: "#ffffff", icon: "siNumpy" },
{ name: "SQL", bg: "#4479A1", logoColor: "#ffffff", icon: "siMysql" },
{ name: "Power BI", bg: "#F2C811", logoColor: "#000000", icon: "ChartColumnIncreasing" },
{ name: "Data Cleaning", bg: "#0F766E", logoColor: "#ffffff", icon: "siPython" },
{ name: "Exploratory Data Analysis", bg: "#2563eb", logoColor: "#ffffff", icon: "siPython" },
{ name: "Data Visualization", bg: "#7C3AED", logoColor: "#ffffff", icon: "siPlotly" },
{ name: "DAX", bg: "#E6B800", logoColor: "#000000", icon: "ChartColumnIncreasing" },
{ name: "Jupyter Notebook", bg: "#F37626", logoColor: "#ffffff", icon: "siJupyter" },
{ name: "Statistical Analysis", bg: "#2563eb", logoColor: "#ffffff", icon: "siPython" },
{ name: "Microsoft Excel", bg: "#217346", logoColor: "#ffffff", icon: "FileSpreadsheet" },
];
