import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import AnimatedWrapper from "../ui/animated-wrapper";

export default function AboutSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === "profile");

  return (
    <section id="about" className="container">
      <AnimatedWrapper>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative flex justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={300}
                height={300}
                className="object-cover rounded-full aspect-square shadow-2xl"
              />
            )}
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm a passionate developer with a love for building beautiful and functional digital experiences. My focus is on creating clean, efficient backend APIs and responsive, user-friendly frontends.
            </p>
            <p className="text-lg text-muted-foreground">
              From crafting elegant code to architecting scalable systems, I thrive on challenges and am constantly learning to stay at the forefront of technology. Let's build something amazing together.
            </p>
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
