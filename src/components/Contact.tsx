import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  mobile: z.string().trim().min(1, "Mobile number is required").max(20),
  query: z.string().trim().min(1, "Message is required").max(2000),
});

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "mail_sent",
        "sent_template",
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          query: formData.query,
        },
        "0MC3rbyx2nyll-H1X"
      );

      toast({
        title: "Message Sent 🎉",
        description: "Thank you! I will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        mobile: "",
        query: "",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-8">

              <div className="space-y-6">

                <div>
                  <Label>Full Name</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "mt-1 border-red-500" : ""}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-sm mt-1 text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label>Email</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={errors.email ? "mt-1 border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm mt-1 text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label>Mobile</Label>
                  <Input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+1234 567 8900"
                  />
                </div>

                <div>
                  <Label>Message</Label>
                  <Textarea
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help..."
                    className={errors.query ? "mt-1 border-red-500 min-h-[150px]" : ""}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

              </div>

            </Card>
          </motion.form>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="p-6 shadow-soft bg-card border-border hover:shadow-medium transition-smooth">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:mohdhamzacse@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-smooth"
                  >
                    mohdhamzacse@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft bg-card border-border hover:shadow-medium transition-smooth">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/mohd-hamza-khan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-smooth"
                  >
                    linkedin.com/in/mohd-hamza-khan
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft bg-card border-border hover:shadow-medium transition-smooth">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">GitHub</h3>
                  <a
                    href="https://github.com/mohd-hamza-khan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-smooth"
                  >
                    github.com/Mohd-Hamza-Khan
                  </a>
                </div>
              </div>
            </Card>

            <div className="bg-card p-6 rounded-lg border border-border shadow-soft">
              <h3 className="font-semibold mb-3">Let's Build Something Together</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}