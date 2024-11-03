import { skills } from "../data/data";
import { SkillList } from "@/components/skill-list/SkillList";
import { ProgressBar } from "@/components/progress-bar/ProgressBar";
import { SkillListLayout } from "@/components/skill-list/SkillListLayout";

export default function SkillsPage() {
  return (
    <SkillListLayout>
      <SkillList title={"My skill list:"}>
        {skills.map((skill, i) => (
          <ProgressBar key={i} {...skill} />
        ))}
      </SkillList>
    </SkillListLayout>
  );
}
