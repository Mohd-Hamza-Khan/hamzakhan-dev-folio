import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";

const certifications = [
  {
    name: "Vibe With Singularity",
    image: "https://drive.google.com/uc?export=view&id=1cWqo9eGC1iawOmpt-JWR1-7Y0dR3KToK",
  },
  {
    name: "AI/ML Hackathon",
    image: "https://drive.google.com/uc?export=view&id=12gwHkUY583hhFivfOSA6ST7upjGVgqeX",
  },
  {
    name: "Web Development Intern",
    image: "https://drive.google.com/uc?export=view&id=1d8fV2BZvuYG8Y0m9lfgrWBev5FtS-vEr",
  },
  {
    name: "Data Analytics in Python",
    image: "https://drive.google.com/uc?export=view&id=1ylezngvqWPcw-jQ2Yajo6hB1cxrfEl4C",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    image: "https://drive.google.com/uc?export=view&id=1BZhimP7rlA6jeFB0q0vf45Jls-yI8HQB",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional credentials and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth group bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{cert.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}