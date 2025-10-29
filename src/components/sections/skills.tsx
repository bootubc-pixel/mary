import { Card, CardContent } from "@/components/ui/card";
import { TechIcon } from "@/components/tech-icons";
import AnimatedWrapper from "../ui/animated-wrapper";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Laravel", "ASP.NET Core", "SQL", "Firebase"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="container bg-background">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Technologies I'm proficient with.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-4 lg:grid-cols-4">
          {skills.map((skill) => (
            <Card
              key={skill}
              className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 border-2 bg-card/50 backdrop-blur-sm hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <TechIcon name={skill} className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold">{skill}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedWrapper>
    </section>
  );
}
