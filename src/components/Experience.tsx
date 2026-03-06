import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Winter Intern",
    company: "Mirai School of Technology",
    period: "01/2025 - 02/2025",
    description:
      "India’s best AI-first undergraduate engineering experience for the AI era.",
    achievements: [
      "Learning and applying AI automation and Generative AI workflows for real-world problem solving",
      "Developed Retrieval-Augmented Generation (RAG) applications using embeddings and vector databases to generate context-aware responses.",
      "Integrated LLM APIs (e.g., OpenAI) into production workflows with prompt optimization, token management, and hallucination mitigation.",
    ],
    tags: ["AI Automation", "RAG", "Embeddings", "Vector Databases", "LLM APIs", "Prompt Engineering"],
  },
  {
    title: "Web Development Intern",
    company: "SafalUday Foundation",
    period: "04/2025 - 07/2025",
    description:
      "A foundation focused on holistic education and development.",
    achievements: [
      "Developed responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap.",
      "Implemented backend logic with PHP for form handling, data validation, and database operations.",
      "Integrated and tested RESTful APIs and third-party services.",
      "Collaborated with team members in brainstorming sessions and agile meetings.",
    ],
    tags: ["PHP", "Laravel", "MySQL", "REST APIs","Code Deployment", "Agile Methodologies"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering impactful solutions and driving measurable results
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-smooth animate-fade-in bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-accent font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="text-xs bg-secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
