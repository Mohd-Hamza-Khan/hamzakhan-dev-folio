import { Code2, Database, Brain, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Brain,
    title: "AI Engineering",
    description: "Designing and implementing intelligent systems that leverage artificial intelligence for automated decision-making",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights using advanced analytics",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Developing intelligent systems that learn and adapt from data",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern frameworks and best practices",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm an AI specialist and engineer passionate about developing intelligent systems that
              solve real-world problems. Grounded in machine learning and full-stack development,
              I focus on creating innovative, data-driven solutions that combine technical rigor with
              user-centric design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My work is fueled by curiosity and creativity, enabling me to build scalable,
              efficient applications that push the limits of technology. From designing neural
              architectures to integrating seamless user experiences, I strive to deliver impactful
              results.
            </p>
            <Button
              className="bg-accent hover:bg-accent/90 shadow-soft transition-smooth hover:scale-105"
              asChild
            >
              <a href="/resume.pdf" aria-label="Download Resume" download>
                <FileDown className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 bg-card border-border"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
