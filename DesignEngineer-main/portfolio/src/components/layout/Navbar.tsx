import { useState, useEffect } from "react";
import { Menu, X, Download, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import amAvatar from "@assets/generated_images/am_avatar_new.png";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Certificates", to: "certificates" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-xl font-display font-bold tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-2"
        >
          <motion.img
            src={amAvatar}
            alt="AM"
            className="w-8 h-8 rounded-lg object-cover"
            whileHover={{
              scale: 1.2,
              rotateY: 360,
              rotateZ: 5,
            }}
            transition={{ duration: 0.5 }}
            style={{
              boxShadow: '0 0 20px rgba(45, 212, 191, 0.6), inset 0 0 20px rgba(45, 212, 191, 0.2)',
              transformStyle: 'preserve-3d',
            }}
          />
          <span className="hidden sm:inline">Abdulrahman Mahnashi</span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors relative group"
              >
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    textShadow: '0 0 20px rgba(45, 212, 191, 0.8)',
                  }}
                  className="relative inline-block"
                >
                  {link.name}
                </motion.span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: '0 0 10px rgba(45, 212, 191, 0.8), 0 0 20px rgba(45, 212, 191, 0.4)',
                  }}
                />
              </ScrollLink>
            ))}
          </div>
          <div className="flex items-center gap-3 pl-6 border-l border-border">
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-card border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
            )}
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ perspective: 1000 }}
              >
                <Button size="sm" className="bg-card hover:bg-primary border border-border hover:border-primary text-foreground hover:text-primary-foreground rounded-full px-5 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] hover:scale-105">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </motion.div>
            </ScrollLink>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 bg-card border border-border rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <div className="pt-2 border-t border-border space-y-3">
                {mounted && (
                  <motion.button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-3 rounded-lg bg-card border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="w-5 h-5" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </motion.button>
                )}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full bg-primary text-[#0D1117] font-bold rounded-lg hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all hover:scale-105"
                    asChild
                  >
                    <a 
                      href="https://drive.google.com/drive/u/0/folders/1FHTw_i5KzvhaREANfqn6XV1lljE1X-tF" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 mr-2" /> CV
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
