import { Mail, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";
import AnimatedWrapper from "../ui/animated-wrapper";

export default function ContactSection() {
  return (
    <section id="contact" className="container">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>
        <div className="grid items-start gap-12 mt-12 md:grid-cols-2">
          <div className="p-8 space-y-8 rounded-lg border-2 border-border bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contact@abdoshy.com" className="text-muted-foreground hover:text-primary">
                    contact@abdoshy.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </AnimatedWrapper>
    </section>
  );
}
