import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, ExternalLink } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import mqsdProjectImage from "@assets/generated_images/mqsd_trip_planner_project.png";
import modernDataPipelineImage from "@assets/generated_images/modern_data_pipeline_project.png";
import heartDiseasePredictionImage from "@assets/generated_images/heart_disease_prediction_project.png";
import parkinsonsVoiceClassificationImage from "@assets/generated_images/parkinsons_voice_classification_project.png";
import fashionMnistClassifierImage from "@assets/generated_images/fashion_mnist_classifier_project.png";
import riyadhServicesDashboardImage from "@assets/generated_images/riyadh_services_dashboard_project.png";
import nonStormyWeatherImage from "@assets/generated_images/non_stormy_weather_2.png";
import driveDatasetProjectImage from "@assets/generated_images/drive_dataset_project.png";
import riyadhAIRealEstateAnalyzerImage from "@assets/generated_images/riyadh_ai_real_estate_deal_analyzer.jpg";
import riyadhServiceInsightsImage from "@assets/generated_images/riyadh_service_insights.png";
import snowflakeDbtEcommerceImage from "@assets/generated_images/snowflake_dbt_ecommerce_analytics.png";
import nadhafahCleaningOpsImage from "@assets/generated_images/nadhafah_cleaning_ops_analytics.png";
import jisrDbtPostgresImage from "@assets/generated_images/jisr_dbt_postgres_end_to_end.png";
import spamEmailsDetectionImage from "@assets/generated_images/spam_emails_detection.png";
import smartathonVisualPollutionImage from "@assets/generated_images/smartathon_visual_pollution_detection.jpg";
import salaryPredictionRfImage from "@assets/generated_images/salary_prediction_random_forest.png";
import heartDiseasePredictionMlImage from "@assets/generated_images/heart_disease_prediction_ml.png";
import parkinsonDiseaseDetectionRfImage from "@assets/generated_images/parkinson_disease_detection_rf.png";
import heartDiseaseMlCompareImage from "@assets/generated_images/heart_disease_prediction_ml_compare.png";
import aiTuwaiqSyncV2Image from "@assets/generated_images/ai_tuwaiq_sync_v2.jpg";

const aiProjects = [
  {
    title: "MQSD – AI Trip Planner",
    description: "LLM itinerary generator.",
    stack: ["Flask", "Python", "OpenAI"],
    image: mqsdProjectImage,
    githubUrl: "https://github.com/Abdulrahman-Mahnashi/mqsd-travel-app-main",
  },
  {
    title: "AI Tuwaiq Sync v2",
    description: "AI-powered platform with agentic AI capabilities and modern architecture.",
    stack: ["TypeScript", "React", "AI", "Vercel"],
    image: aiTuwaiqSyncV2Image,
    githubUrl: "https://github.com/Abdulrahman-Mahnashi/ai-tuwaiq-sync-v2",
  },
  {
    title: "Heart Disease Prediction",
    description: "ML risk model.",
    stack: ["scikit-learn"],
    image: heartDiseasePredictionImage,
    githubUrl: "https://github.com/Abdulrahman-Mahnashi/Heart-Disease-Prediction",
  },
  {
    title: "Parkinson's Voice Classification",
    description: "Detecting Parkinson's via voice.",
    stack: ["Python"],
    image: parkinsonsVoiceClassificationImage,
    githubUrl: "https://github.com/Abdulrahman-Mahnashi/Parkinson_Disease_Detection",
  },
  {
    title: "Fashion-MNIST Classifier",
    description: "CNN image classifier.",
    stack: ["TensorFlow"],
    image: fashionMnistClassifierImage,
  },
  {
    title: "Non-Stormy vs Stormy Weather",
    description: "Weather classification project comparing stormy vs non-stormy conditions.",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    image: nonStormyWeatherImage,
    githubUrl:
      "https://github.com/Abdulrahman-Mahnashi/Non_Stormy-v-Stormy-Weather-/tree/main/Non_Stormy%20v%20Stormy%20Weather",
  },
  {
    title: "High-Quality-Coffee-Classification",
    description: "Dataset pipeline (train/valid/test) shared via Google Drive for computer vision experiments.",
    stack: ["Python", "Computer Vision", "Data Prep"],
    image: driveDatasetProjectImage,
    githubUrl: "https://drive.google.com/drive/folders/1eEv1ua7RkjPjYGqg4CJz3v5j9mGqi4Uu?usp=sharing",
  },
  {
    title: "Riyadh-AI-Real-Estate-Deal-Analyzer",
    description: "AI-assisted real estate deal analyzer for Riyadh market with data-driven insights.",
    stack: ["Python", "AI", "Data Analysis"],
    image: riyadhAIRealEstateAnalyzerImage,
    githubUrl: "https://github.com/Abdulrahman-Mahnashi/Riyadh-AI-Real-Estate-Deal-Analyzer",
  },
  {
    title: "Riyadh Service Insights | استكشاف الخدمات التجارية",
    description: "Riyadh service data exploration and visualization for commercial insights.",
    stack: ["Python", "EDA", "Visualization"],
    image: riyadhServiceInsightsImage,
    githubUrl:
      "https://github.com/Abdulrahman-Mahnashi/Riyadh-Service-Insights/tree/main/%D8%A7%D8%B3%D8%AA%D9%83%D8%B4%D8%A7%D9%81%20%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9",
  },
  {
    title: "Smartathon Visual Pollution Detection (YOLOv8 + Flask Web App)",
    description: "YOLOv8 computer vision app served via Flask for visual pollution detection.",
    stack: ["YOLOv8", "Flask", "Computer Vision"],
    image: smartathonVisualPollutionImage,
    githubUrl:
      "https://github.com/Abdulrahman-Mahnashi/Smartathon-Visual-Pollution-Detection-YOLOv8-Flask-Web-App-/blob/main/smartathonV3.ipynb",
  },
  {
    title: "Salary Prediction Using Random Forest Regression",
    description: "Predicting salary from years of experience using Random Forest Regression notebook.",
    stack: ["Python", "Random Forest", "Regression"],
    image: salaryPredictionRfImage,
    githubUrl:
      "https://github.com/Abdulrahman-Mahnashi/Salary-Prediction-Using-Random-Forest-Regression/blob/main/Salary_Prediction_Using_Random_Forest_Regression.ipynb",
  },
  {
    title: "Heart Disease Prediction using Data Mining & Machine Learning",
    description: "Binary classification notebook predicting heart disease presence.",
    stack: ["Python", "Machine Learning", "Classification"],
    image: heartDiseasePredictionMlImage,
    githubUrl:
      "https://github.com/Abdulrahman-Mahnashi/Heart-Disease-Prediction-using-Data-Mining-Machine-Learning/blob/main/Heart_Disease_Prediction_using_Data_Mining_%26_Machine_Learning.ipynb",
  },
  {
    title: "Heart Disease Prediction using Machine Learning (EDA + Oversampling + Model Comparison)",
    description: "EDA-driven heart disease prediction with oversampling and model benchmarking.",
    stack: ["Python", "ML", "EDA"],
    image: heartDiseaseMlCompareImage,
    githubUrl:
      "https://github.com/Abdulrahman-Mahnashi/Heart-Disease-Prediction-using-Machine-Learning-EDA-Oversampling-Model-Comparison-/blob/main/heart_disease.ipynb",
  },
  {
    title: "Parkinson Disease Detection using Machine Learning (Random Forest Model)",
    description: "Random Forest model detecting Parkinson’s disease from voice/biometric signals.",
    stack: ["Python", "Random Forest", "Classification"],
    image: parkinsonDiseaseDetectionRfImage,
    githubUrl:
      "https://github.com/Abdulrahman-Mahnashi/Parkinson-Disease-Detection-using-Machine-Learning-Random-Forest-Model-/blob/main/Parkinson_Disease_Detection.ipynb",
  },
  {
    title: "Spam_Emails_Detection_based_on_Machine_Learning.ipynb",
    description: "Classifying spam emails using traditional ML approaches.",
    stack: ["Python", "Machine Learning", "NLP"],
    image: spamEmailsDetectionImage,
    githubUrl:
      "https://github.com/Abdulrahman-Mahnashi/Spam_Emails_Detection_based_on_Machine_Learning/blob/main/Spam_Emails_Detection_based_on_Machine_Learning.ipynb",
  },
];

const dataEngineeringProjects = [
  {
    title: "Modern Data Pipeline",
    description: "Raw → staging → marts ELT.",
    stack: ["dbt", "Snowflake", "SQL"],
    image: modernDataPipelineImage,
    githubUrl: "https://github.com/Abdulrahman-Mahnashi/Modern-Data-Pipeline",
  },
  {
    title: "snowflake-dbt-ecommerce-analytics",
    description: "Data engineering project building ecommerce analytics on Snowflake with dbt.",
    stack: ["Snowflake", "dbt", "Data Engineering"],
    image: snowflakeDbtEcommerceImage,
    githubUrl:
      "https://github.com/Abdulrahman-Mahnashi/snowflake-dbt-ecommerce-analytics/tree/main/snowflake_data_project",
  },
  {
    title: "jisr-dbt-postgres-end-to-end",
    description: "End-to-end data pipeline on Postgres orchestrated with dbt for Jisr data.",
    stack: ["dbt", "Postgres", "Data Engineering"],
    image: jisrDbtPostgresImage,
    githubUrl:
      "https://github.com/Abdulrahman-Mahnashi/jisr-dbt-postgres-end-to-end/tree/main/jisr_end_to_end_starter",
  },
  {
    title: "Riyadh Services Dashboard",
    description: "Data visualization and analytics dashboard.",
    stack: ["Python", "Dashboard", "Data Analytics"],
    image: riyadhServicesDashboardImage,
    githubUrl: "https://github.com/Abdulrahman-Mahnashi/riyadh_services_dashboard",
  },
  {
    title: "nadhafah-cleaning-ops-analytics",
    description: "Analytics for cleaning operations with data pipelines and reporting.",
    stack: ["Data Engineering", "Analytics", "Python"],
    image: nadhafahCleaningOpsImage,
    githubUrl: "https://github.com/Abdulrahman-Mahnashi/nadhafah-cleaning-ops-analytics/tree/main/nadhafah-ops",
  },
];

function ProjectGrid({ items }: { items: typeof aiProjects }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Card
                  className="h-full bg-card border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] transition-all duration-300 rounded-xl overflow-hidden group cursor-pointer flex flex-col"
              onClick={() => project.githubUrl && window.open(project.githubUrl, "_blank")}
            >
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <CardHeader className="pb-4 pt-6 px-6 flex flex-row items-start justify-between space-y-0">
                <h4 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="p-2 bg-background rounded-lg border border-border group-hover:border-primary/30 transition-colors">
                  {project.githubUrl ? (
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  ) : (
                    <Code2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6 flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground text-base mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs font-medium text-secondary bg-background border-border px-3 py-1 rounded-md"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.githubUrl && (
                  <motion.div
                    className="mt-4 text-sm font-semibold text-primary opacity-100 flex items-center gap-2 group-hover:gap-3 transition-all"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="underline decoration-2 underline-offset-4">View on GitHub</span>
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-2 flex items-center gap-3">
            <span className="w-10 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            Projects
          </h3>
          <p className="text-slate-300 text-xl font-semibold mt-4 mb-2">
            Browse projects by category: Artificial Intelligence or Data Engineering
          </p>
        </motion.div>

        <Tabs defaultValue="ai" className="space-y-6">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-transparent border-none p-0 inline-flex gap-2">
              <TabsTrigger 
                value="ai" 
                className="text-lg font-bold px-8 py-4 rounded-lg transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-foreground data-[state=inactive]:bg-muted data-[state=inactive]:hover:bg-muted/80"
              >
                AI Projects
              </TabsTrigger>
              <TabsTrigger
                value="data"
                className="text-lg font-bold px-8 py-4 rounded-lg transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-foreground data-[state=inactive]:bg-muted data-[state=inactive]:hover:bg-muted/80"
              >
                Data Engineering
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ai">
            <ProjectGrid items={aiProjects} />
          </TabsContent>

          <TabsContent value="data">
            <ProjectGrid items={dataEngineeringProjects} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
