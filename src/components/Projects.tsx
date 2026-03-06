import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Local AI-Powered PDF QA System (RAG)",
    description: [
      "Built a local RAG-based PDF question-answering system using FAISS embeddings and Phi-3 Mini via Ollama, enabling fast semantic search with zero API cost."
    ],
    tags: ["RAG", "Prompt Engineering", "LLM", "Vector Database", "LangChain"],
    github: "https://github.com/Mohd-Hamza-Khan/PDF-Question-Answering-System-RAG-",
  },
  {
    title: "AI Study Buddy",
    description:
      "Built via vibe coding: a privacy-first offline AI learning companion using @runanywhere/web, running fully in-browser with voice, vision, text, quizzes—no server or API.",
    tags: ["Llama3", "Claude Haiku 4.5", "GPT-4", "Claude Sonnet 3.5", "RunAnywhere"],
    github: "https://github.com/Mohd-Hamza-Khan/AI-Study-Buddy",
  },
  {
    title: "Ecom – Laptop & Smartphone Store",
    description:
      "Ecom – a feature-rich, visually appealing e-commerce web application built with Django! Whether you’re a tech enthusiast, a casual shopper, or a developer eager to see a real-world Django project in action.",
    tags: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
    github: "https://github.com/Mohd-Hamza-Khan/Ecom",
  },
  {
    title: "AI-Powered LinkedIn Content Automation (n8n Workflow)",
    description:
      "An end-to-end automated LinkedIn content generation system built with n8n, OpenAI, Tavily Search API, Google Sheets, and LinkedIn API.",
    tags: ["n8n", "OpenAI", "Tavily", "Google Sheets", "LinkedIn API"],
    github: "https://github.com/Mohd-Hamza-Khan/Automated-LinkedIn-Content-Generator",
  },
  {
    title: "Secure File Sharing System On Cloud",
    description:
      "Secure file system that encrypts uploads using Fernet, stores encrypted files with metadata, and enables controlled file listing and access. 🔐",
    tags: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
    github: "https://https://github.com/Mohd-Hamza-Khan/Secure-File-Sharing-System-On-Cloud",
    demo: "https://secure-file-sharing-system-on-cloud.onrender.com/",
  },
  {
    title: "Football Match Data Analysis",
    description:
      "Analyzes and visualizes football match data using Python and StatsBomb Open Data, focusing on Spain Women’s team passes and shots. ⚽📊",
    tags: ["Python", "numpy", "pandas", "matplotlib", "mplsoccer", "StatsBomb"],
    github: "https://https://github.com/Mohd-Hamza-Khan/Football_Analyst_Project",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions across web development, data analytics, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2 bg-card border-border flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-4 border-t border-border">
                <Button
                  className="flex-1 transition-smooth hover:scale-105 btn-outline"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    className="flex-1 bg-accent hover:bg-accent/90 transition-smooth hover:scale-105"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}