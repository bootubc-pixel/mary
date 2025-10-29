import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github } from "lucide-react";
import AnimatedWrapper from "../ui/animated-wrapper";

const projects = [
  {
    id: "project-1",
    title: "Project Alpha",
    description: "A full-featured dashboard for data analysis and visualization, built with React and a robust Laravel backend.",
  },
  {
    id: "project-2",
    title: "Project Beta",
    description: "A sleek mobile-first social media application using Firebase for real-time data and authentication.",
  },
  {
    id: "project-3",
    title: "Project Gamma",
    description: "An e-commerce platform with a custom checkout experience, powered by ASP.NET Core and SQL Server.",
  },
];

export default function ProjectsSection() {
  const projectImages = PlaceHolderImages.filter(p => p.id.startsWith("project-"));
  
  return (
    <section id="projects" className="container">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my recent work.
          </p>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const image = projectImages.find(img => img.id === project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-transform duration-300 border-2 bg-card/50 backdrop-blur-sm hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                {image && (
                  <div className="aspect-video relative">
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button asChild className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#">View Demo</Link>
                  </Button>
                  <Button asChild variant="secondary" className="flex-1">
                    <Link href="#">
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </AnimatedWrapper>
    </section>
  );
}
