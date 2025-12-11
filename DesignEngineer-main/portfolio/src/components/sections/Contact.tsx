import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Create mailto link with subject and body
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:ABDALRHMANMANASHNY@GMAIL.COM?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 sm:gap-12"
        >
          {/* Info */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <span className="w-6 sm:w-10 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"/>
              Get in Touch
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
               <div className="p-4 sm:p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group">
                 <div className="flex items-center gap-3 sm:gap-4 mb-2">
                   <div className="p-2 bg-background rounded-lg text-primary group-hover:shadow-[0_0_10px_rgba(45,212,191,0.3)] transition-shadow">
                     <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                   </div>
                   <span className="text-muted-foreground font-medium text-sm sm:text-base">Email</span>
                 </div>
                 <a href="mailto:ABDALRHMANMANASHNY@GMAIL.COM" className="text-foreground pl-11 sm:pl-14 hover:text-primary transition-colors text-sm sm:text-base break-all">
                   ABDALRHMANMANASHNY@GMAIL.COM
                 </a>
               </div>

               <div className="p-4 sm:p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group">
                 <div className="flex items-center gap-3 sm:gap-4 mb-2">
                   <div className="p-2 bg-background rounded-lg text-primary group-hover:shadow-[0_0_10px_rgba(45,212,191,0.3)] transition-shadow">
                     <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                   </div>
                   <span className="text-muted-foreground font-medium text-sm sm:text-base">Phone</span>
                 </div>
                 <p className="text-foreground pl-11 sm:pl-14 text-sm sm:text-base">+966 53 211 2101</p>
               </div>

               <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 h-12 w-12 rounded-xl transition-all"
                    asChild
                  >
                    <a href="https://github.com/Abdulrahman-Mahnashi" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-card border-border text-muted-foreground hover:text-foreground hover:border-secondary hover:bg-secondary/10 h-12 w-12 rounded-xl transition-all"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/abdulrahman-mahnashi/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-4 sm:p-6 md:p-8 rounded-2xl border border-border">
             <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
               <div>
                 <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Name</label>
                 <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary text-foreground h-11 rounded-lg" 
                />
               </div>
               <div>
                 <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Email</label>
                 <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary text-foreground h-11 rounded-lg" 
                />
               </div>
               <div>
                 <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Message</label>
                 <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary text-foreground min-h-[120px] rounded-lg" 
                />
               </div>
               <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                 <Button type="submit" className="w-full bg-primary text-[#0D1117] hover:bg-primary/90 font-bold h-12 rounded-lg mt-2 shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-shadow">
                   Send Me a Message <Send className="w-4 h-4 ml-2" />
                 </Button>
               </motion.div>
             </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
