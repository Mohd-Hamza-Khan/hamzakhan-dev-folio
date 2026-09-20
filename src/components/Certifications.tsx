import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";

const certifications = [
  {
    name: "Vibe With Singularity",
    image: "https://drive.google.com/thumbnail?id=1cWqo9eGC1iawOmpt-JWR1-7Y0dR3KToK&sz=w1000",
  },
  {
    name: "AI/ML Hackathon",
    image: "https://drive.google.com/thumbnail?id=12gwHkUY583hhFivfOSA6ST7upjGVgqeX&sz=w1000",
  },
  {
    name: "Web Development Intern",
    image: "https://drive.google.com/thumbnail?id=1d8fV2BZvuYG8Y0m9lfgrWBev5FtS-vEr&sz=w1000",
  },
  {
    name: "Data Analytics in Python",
    image: "https://drive.google.com/thumbnail?id=1ylezngvqWPcw-jQ2Yajo6hB1cxrfEl4C&sz=w1000",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    image: "https://drive.google.com/thumbnail?id=1BZhimP7rlA6jeFB0q0vf45Jls-yI8HQB&sz=w1000",
  },
  {
    name: "Data Science Methodology",
    image: "https://drive.google.com/thumbnail?id=1bIIMOmwXxgMjb6Pr_vtfqJNWmfWAXtU2&sz=w1000",
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
              <div
                className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg cursor-pointer"
                onClick={() => {
                  const id = cert.image.match(/[?&]id=([^&]+)/)?.[1];
                  if (id) window.open(`https://drive.google.com/file/d/${id}/preview`, "_blank");
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: "center 0%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-semibold">{cert.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}