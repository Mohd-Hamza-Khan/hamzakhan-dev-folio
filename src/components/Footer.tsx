import { Github, Linkedin, Mail, Heart } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 dark:bg-gradient-to-br dark:from-[hsl(210,60%,6%)] dark:via-[hsl(210,55%,12%)] dark:to-[hsl(173,50%,15%)] dark:border-t dark:border-[#4FD1C5]/20 dark:text-[#D0F0F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent dark:text-[#4FD1C5] dark:drop-shadow-[0_0_8px_rgba(79,209,197,0.5)]">MOHD HAMZA KHAN</h3>
            <p className="text-primary-foreground/80 dark:text-[#D0F0F6]/90 text-sm leading-relaxed">
              AI Engineer | Data Analyst | ML Engineer | Full-Stack Developer 
              Passionate about building innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 dark:text-[#4FD1C5]">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/80 dark:text-[#D0F0F6]/80 hover:text-accent dark:hover:text-[#81E6D9] transition-smooth text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 dark:text-[#4FD1C5]">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Mohd-Hamza-Khan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground dark:text-[#4FD1C5] hover:text-accent dark:hover:text-[#81E6D9] hover:bg-primary-foreground/10 transition-smooth hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/mohd-hamza-khan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground dark:text-[#4FD1C5] hover:text-accent dark:hover:text-[#81E6D9] hover:bg-primary-foreground/10 transition-smooth hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:mohdhamzacse@gmial.com"
                aria-label="Email"
                className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground dark:text-[#4FD1C5] hover:text-accent dark:hover:text-[#81E6D9] hover:bg-primary-foreground/10 transition-smooth hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 dark:border-[#4FD1C5]/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 dark:text-[#94A3B8] text-sm">
              © {new Date().getFullYear()} Mohd Hamza Khan. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 dark:text-[#94A3B8] text-sm flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-accent dark:text-[#4FD1C5] fill-accent dark:fill-[#4FD1C5]" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
