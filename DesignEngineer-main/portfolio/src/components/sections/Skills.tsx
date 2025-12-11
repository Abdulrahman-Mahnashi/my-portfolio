import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { 
    category: "AI & ML", 
    items: [
      "TensorFlow", 
      "Keras", 
      "scikit-learn", 
      "LLMs",
      "PyTorch",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "HuggingFace",
      "OpenCV",
      "RL (Reinforcement Learning)",
      "MLOps Basics"
    ] 
  },
  { 
    category: "Data Engineering", 
    items: [
      "dbt", 
      "Snowflake", 
      "ETL/ELT", 
      "SQL", 
      "Kimball",
      "Airflow",
      "Kafka",
      "Spark",
      "Docker",
      "dbt tests",
      "Postgres",
      "Data Modeling (Star/Snowflake)",
      "Data Warehousing",
      "Pipeline Orchestration",
      "CI/CD"
    ] 
  },
  { category: "Programming", items: ["Python", "SQL", "Java"] },
  { category: "Tools", items: ["Flask", "Git/GitHub", "APIs", "Jupyter"] }
];

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2 flex items-center gap-2 sm:gap-3">
            <span className="w-6 sm:w-10 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"/>
            Skills
          </h3>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="bg-card p-4 sm:p-6 rounded-2xl border border-border relative overflow-hidden group"
              style={{
                transformStyle: 'preserve-3d',
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(13, 17, 23, 0.9) 100%)',
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 2,
                z: 50,
                borderColor: 'rgba(45, 212, 191, 0.5)',
              }}
            >
              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 blur-xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <h4 className="font-bold text-primary text-lg mb-4 relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  ✨
                </motion.span>
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-3 relative z-10">
                {group.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{
                      scale: 1.2,
                      rotateY: 15,
                      rotateX: 5,
                      z: 30,
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-background text-muted-foreground px-4 py-2 text-sm font-medium border border-border rounded-full relative overflow-hidden cursor-pointer group/badge"
                      style={{
                        boxShadow: '0 0 20px rgba(45, 212, 191, 0.2)',
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover/badge:opacity-100"
                        whileHover={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                      />
                      <span className="relative z-10">{skill}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
