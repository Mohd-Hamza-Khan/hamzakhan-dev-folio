import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "AI Engineer",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    skills: [
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "Agentic AI",
      "LLM Orchestration",
      "Python",
      "SQL",
      "MongoDB",
      "Docker",
      "REST APIs"
    ],
  },
  {
    title: "Full-Stack Development",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Django",
      "Node.js",
      "MongoDB",
      "SQLite3",
      "REST APIs",
      "Docker",
      "Git",
    ],
  },
  {
    title: "Data Analytics",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Excel",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
  {
    title: "Machine Learning",
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
      "Deep Learning",
      "Feature Engineering",
      "Keras",
      "OpenCV",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, data-driven applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-smooth animate-fade-in bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className={`${category.color} hover:scale-105 transition-smooth cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
