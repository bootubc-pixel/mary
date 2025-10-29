import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "../ui/animated-wrapper";

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden text-center animated-gradient">
      <AnimatedWrapper>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl font-headline">
            Abdoshy
          </h1>
          <p className="mt-4 text-lg text-primary md:text-xl lg:text-2xl">
            Web Developer & Backend Engineer
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild variant="ghost" size="icon" className="text-white rounded-full hover:bg-white/10 hover:text-primary">
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-white rounded-full hover:bg-white/10 hover:text-primary">
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-white rounded-full hover:bg-white/10 hover:text-primary">
              <Link href="mailto:contact@abdoshy.com" aria-label="Email">
                <Mail className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
