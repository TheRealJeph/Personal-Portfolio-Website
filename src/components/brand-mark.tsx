import {
  siFastapi,
  siMongodb,
  siRedis,
  siDocker,
  siGit,
  siReact,
  siTypescript,
  siNextdotjs,
  siNodedotjs,
  siTailwindcss,
  siThreedotjs,
  siPython,
  siPostgresql,
  siJavascript,
  siFigma,
  siHtml5,
  siCss,
  siPandas,
  siNumpy,
  siMysql,
  siPlotly,
  siJupyter,
  siDjango,
  type SimpleIcon,
} from "simple-icons";
import {
  ChartColumnIncreasing,
  FileSpreadsheet,
  type LucideIcon,
} from "lucide-react";
import { skills, type Skill } from "@/lib/skills";

const registry: Record<string, SimpleIcon | LucideIcon> = {
  siFastapi,
  siMongodb,
  siRedis,
  siDocker,
  siGit,
  siReact,
  siTypescript,
  siNextdotjs,
  siNodedotjs,
  siTailwindcss,
  siThreedotjs,
  siPython,
  siPostgresql,
  siJavascript,
  siFigma,
  siHtml5,
  siCss,
  siPandas,
  siNumpy,
  siMysql,
  siPlotly,
  siJupyter,
  siDjango,
  ChartColumnIncreasing,
  FileSpreadsheet,
};

export function BrandMark({ name, size = 24 }: { name: Skill["name"]; size?: number }) {
  const skill = skills.find((s) => s.name === name);
  if (!skill) return null;
  const icon = registry[skill.icon];
  if (!icon) return null;
  if (!("path" in icon)) {
    const Icon = icon;
    return <Icon role="img" aria-label={skill.name} width={size} height={size} />;
  }
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-label={icon.title}
      style={{ width: size, height: size, fill: "currentColor" }}
    >
      <path d={icon.path} />
    </svg>
  );
}