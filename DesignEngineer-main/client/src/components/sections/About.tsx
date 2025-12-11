import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import avatarImage from "@assets/generated_images/abstract_digital_silhouette_avatar.png"; // Reuse existing avatar

const items = [
  "Data & AI Engineer based in Riyadh",
  "CS Graduate (AI Track), class of 2025",
  "Experience in AI, ML, GenAI, and Snowflake/dbt pipelines",
  "Skilled in Python, SQL, TensorFlow, scikit-learn",
  "Worked on AI models + clean ELT workflows"
];

export function About() {
  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"/>
              About Me
            </h3>
            
            <ul className="space-y-5">
              {items.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -50, rotateX: -90 }}
                  whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="flex items-start text-foreground font-medium text-lg group cursor-pointer"
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary mr-4 mt-0.5 flex-shrink-0 drop-shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
                  </motion.div>
                  <motion.span
                    className="group-hover:text-primary transition-colors"
                    whileHover={{
                      textShadow: '0 0 20px rgba(45, 212, 191, 0.8)',
                    }}
                  >
                    {item}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: 3D Neon Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative w-72 h-72 md:w-80 md:h-80"
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                rotateX: 5,
                z: 50,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated Neon Circles with 3D effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/50"
                animate={{ rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  boxShadow: '0 0 40px rgba(45, 212, 191, 0.5), inset 0 0 40px rgba(45, 212, 191, 0.2)',
                }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-secondary/50"
                animate={{ rotateZ: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.5), inset 0 0 40px rgba(59, 130, 246, 0.2)',
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* 3D Image Container */}
              <motion.div
                className="absolute inset-4 rounded-full overflow-hidden border-2 bg-card"
                style={{
                  borderImage: 'linear-gradient(135deg, rgba(45, 212, 191, 0.8), rgba(59, 130, 246, 0.8)) 1',
                  boxShadow: '0 0 60px rgba(45, 212, 191, 0.4), inset 0 0 60px rgba(45, 212, 191, 0.1)',
                  transform: 'translateZ(20px)',
                }}
                whileHover={{
                  boxShadow: '0 0 80px rgba(45, 212, 191, 0.8), inset 0 0 80px rgba(45, 212, 191, 0.3)',
                }}
              >
                <motion.img
                  src={avatarImage}
                  alt="Abdulrahman Mahnashi"
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.1,
                    opacity: 1,
                  }}
                  initial={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Glowing overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/10 to-secondary/10"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
