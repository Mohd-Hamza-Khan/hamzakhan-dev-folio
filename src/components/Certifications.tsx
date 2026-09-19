import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    image: "/certs/aws-certified.png",
  },
  {
    name: "Google Professional Cloud Developer",
    image: "/certs/gcp-professional.png",
  },
  {
    name: "Microsoft Azure Fundamentals",
    image: "/certs/azure-fundamentals.png",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    image: "/certs/cka.png",
  },
  {
    name: "React Developer Certificate",
    image: "/certs/react-certified.png",
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