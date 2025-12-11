import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-0 overflow-hidden bg-background"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(45, 212, 191, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0D1117 0%, #020617 100%)
        `
      }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(45, 212, 191, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(45, 212, 191, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite'
      }} />
      
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute rounded-full"
            style={{
              width: 4 + Math.random() * 8,
              height: 4 + Math.random() * 8,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, rgba(45, 212, 191, 0.8), rgba(59, 130, 246, 0.8))`,
              boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(45, 212, 191, 0.6)`,
            }}
          />
        ))}
      </div>

      {/* 3D Gradient Orbs - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.4) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 md:mb-6 tracking-tight leading-tight px-2"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #2DD4BF 50%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(45, 212, 191, 0.5)',
              transformStyle: 'preserve-3d',
            }}
          >
            Abdulrahman Mahnashi
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-medium mb-3 md:mb-4 px-2"
          >
            Data & AI Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground font-light mb-6 md:mb-8 leading-relaxed px-4"
          >
            "Building AI models and modern Data Pipelines."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center gap-4 sm:gap-6 md:gap-8 text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-10"
          >
            {['💻', '📊', '🤖'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.5,
                  rotateZ: 15,
                  filter: 'drop-shadow(0 0 20px rgba(45, 212, 191, 0.8))',
                }}
                style={{ display: 'inline-block', cursor: 'pointer' }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
              <motion.div
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                }}
                whileTap={{ scale: 0.95 }}
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/20 hover:text-primary-foreground rounded-full px-6 sm:px-8 md:px-10 h-12 sm:h-14 text-sm sm:text-base md:text-lg relative overflow-hidden group w-full sm:w-auto"
                  style={{
                    boxShadow: '0 0 30px rgba(45, 212, 191, 0.4), inset 0 0 30px rgba(45, 212, 191, 0.1)',
                  }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                  />
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </ScrollLink>

            <motion.div
              whileHover={{ 
                scale: 1.1, 
                rotateY: -5,
                rotateX: 5,
                z: 50,
              }}
              whileTap={{ scale: 0.95 }}
              style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-card border-2 border-secondary text-foreground hover:border-secondary hover:text-secondary rounded-full px-6 sm:px-8 md:px-10 h-12 sm:h-14 text-sm sm:text-base md:text-lg relative overflow-hidden group w-full sm:w-auto"
                style={{
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(59, 130, 246, 0.1)',
                }}
                asChild
              >
                <a 
                  href="https://drive.google.com/drive/u/0/folders/1FHTw_i5KzvhaREANfqn6XV1lljE1X-tF" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-20"
                    animate={{
                      x: ['100%', '-100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Download className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" /> CV
                  </span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
