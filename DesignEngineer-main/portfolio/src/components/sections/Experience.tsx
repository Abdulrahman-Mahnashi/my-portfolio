import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  { 
    company: "NOZOM", 
    role: "AI & Data Engineering Intern", 
    summary: "Improved AI models + dbt/Snowflake pipelines." 
  },
  { 
    company: "STC", 
    role: "AI & Data Analytics Trainee", 
    summary: "Automated analytics + prepared ML datasets." 
  },
  { 
    company: "Fada Tech", 
    role: "Tech & Innovation Leader", 
    summary: "Led AI-driven community projects." 
  },
  { 
    company: "GDSC", 
    role: "Project Management Member", 
    summary: "Coordinated student AI initiatives." 
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2 flex items-center gap-2 sm:gap-3">
            <span className="w-6 sm:w-10 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"/>
            Experience
          </h3>
        </motion.div>
        
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-4 sm:p-6 rounded-xl border-l-4 border-border hover:border-primary hover:shadow-[0_0_15px_rgba(45,212,191,0.1)] transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h4 className="font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                  {exp.role}
                </h4>
                <div className="flex items-center text-muted-foreground font-medium text-sm mt-1 sm:mt-0">
                  <Briefcase className="w-4 h-4 mr-2 text-secondary" />
                  {exp.company}
                </div>
              </div>
              <p className="text-muted-foreground">{exp.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
