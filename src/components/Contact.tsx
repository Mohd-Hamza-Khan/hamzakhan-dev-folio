import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send, Loader2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  mobile: z.string().trim().min(1, "Mobile number is required").max(20, "Mobile number must be less than 20 characters"),
  query: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
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
  const [responseDialogOpen, setResponseDialogOpen] = useState(false);
  const [webhookResponse, setWebhookResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
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
      const response = await fetch(
        "https://freestyler.app.n8n.cloud/webhook/62344a26-127d-4ae5-a0fa-27c4bc282e62",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result.data),
        }
      );

      if (response.ok) {
        const responseData = await response.text();
        setWebhookResponse(responseData);
        setResponseDialogOpen(true);
        setFormData({ name: "", email: "", mobile: "", query: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <Card className="p-8 shadow-soft bg-card border-border">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 ${errors.name ? "border-destructive" : ""}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 ${errors.email ? "border-destructive" : ""}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`mt-1 ${errors.mobile ? "border-destructive" : ""}`}
                    placeholder="+1 234 567 8900"
                  />
                  {errors.mobile && (
                    <p className="text-sm text-destructive mt-1">{errors.mobile}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="query">Your Message</Label>
                  <Textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    className={`mt-1 min-h-[150px] ${errors.query ? "border-destructive" : ""}`}
                    placeholder="Tell me about your project or how I can help..."
                  />
                  {errors.query && (
                    <p className="text-sm text-destructive mt-1">{errors.query}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 transition-smooth hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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

      <Dialog open={responseDialogOpen} onOpenChange={setResponseDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Response from Server</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <pre className="text-sm text-foreground whitespace-pre-wrap break-words bg-muted p-4 rounded-lg">
              {webhookResponse}
            </pre>
          </ScrollArea>
          <div className="flex justify-end pt-4">
            <Button
              variant="outline"
              onClick={() => setResponseDialogOpen(false)}
            >
              <X className="w-4 h-4 mr-2" />
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
