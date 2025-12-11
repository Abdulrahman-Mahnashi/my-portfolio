import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2" />
       <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">Deep Dive Case Studies</h2>
          <p className="text-muted-foreground text-lg">Detailed breakdowns of selected engineering challenges.</p>
        </motion.div>

        <div className="space-y-24">
          {/* Case Study 1 */}
          <CaseStudyItem 
            number="01"
            title="Designing a Modern ELT Pipeline with dbt & Snowflake"
            category="Data Engineering"
            problem="Fragmented raw data sources making analysis slow and unreliable. Lack of lineage visibility."
            approach="Implemented a layered architecture (Raw → Staging → Marts) using Kimball dimensional modeling. Automated testing with dbt."
            outcome="Reliable fct_daily_order_revenue table, 99.9% data availability, and clear lineage graph."
            imageGradient="from-blue-600/20 to-purple-600/20"
            align="left"
          />

          {/* Case Study 2 */}
          <CaseStudyItem 
            number="02"
            title="MQSD – AI-Powered Trip Planner"
            category="GenAI Product"
            problem="Planning trips in Saudi Arabia is time-consuming due to scattered information and lack of personalization."
            approach="Built a full-stack web app using Flask & React. Integrated OpenAI API with custom prompt engineering to generate itineraries."
            outcome="End-to-end working product that generates complete day-by-day plans in seconds."
            imageGradient="from-emerald-600/20 to-teal-600/20"
            align="right"
          />
        </div>
      </div>
    </section>
  );
}

function CaseStudyItem({ number, title, category, problem, approach, outcome, imageGradient, align }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${align === 'right' ? 'lg:grid-flow-dense' : ''}`}
    >
      {/* Visual Side */}
      <div className={`${align === 'right' ? 'lg:col-start-2' : ''}`}>
        <div className={`aspect-video rounded-2xl bg-gradient-to-br ${imageGradient} border border-border relative overflow-hidden group`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          
          {/* Mock UI Elements for visual interest */}
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-foreground/20 font-display text-9xl font-bold select-none">{number}</span>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
            <Button variant="outline" className="border-border text-foreground hover:bg-primary/10">
              Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className={`${align === 'right' ? 'lg:col-start-1' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-6xl font-display font-bold text-foreground/10">{number}</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            {category}
          </span>
        </div>
        
        <h3 className="text-3xl font-bold text-foreground mb-8 leading-tight">{title}</h3>
        
        <div className="space-y-8 relative">
           {/* Connecting Line */}
           <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

           <div className="relative pl-8">
             <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-red-500" />
             </div>
             <h4 className="text-foreground font-semibold mb-2">The Problem</h4>
             <p className="text-muted-foreground leading-relaxed">{problem}</p>
           </div>

           <div className="relative pl-8">
             <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-yellow-500" />
             </div>
             <h4 className="text-foreground font-semibold mb-2">The Approach</h4>
             <p className="text-muted-foreground leading-relaxed">{approach}</p>
           </div>

           <div className="relative pl-8">
             <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-green-500" />
             </div>
             <h4 className="text-foreground font-semibold mb-2">The Outcome</h4>
             <p className="text-muted-foreground leading-relaxed">{outcome}</p>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
