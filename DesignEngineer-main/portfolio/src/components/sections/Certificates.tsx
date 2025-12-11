import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import kaustCertImage from "@assets/generated_images/kaust_ai_certificate.jpg";
import ibmCertImage from "@assets/generated_images/ibm_ai_certificate.png";
import tuwaiqCertImage from "@assets/generated_images/tuwaiq_db_certificate.jpg";
import courseraMathMLImage from "@assets/generated_images/coursera_math_ml_certificate.jpg";
import datacampMLImage from "@assets/generated_images/datacamp_ml_certificate.jpg";
import courseraPythonBasicsImage from "@assets/generated_images/coursera_python_basics_certificate.jpg";
import courseraDataCollectionImage from "@assets/generated_images/coursera_data_collection_certificate.jpg";
import courseraPythonFunctionsImage from "@assets/generated_images/coursera_python_functions_certificate.jpg";
import udemyHtmlPythonFlaskImage from "@assets/generated_images/udemy_html_python_flask_certificate.jpg";
import courseraInnovationModelsImage from "@assets/generated_images/coursera_innovation_models_certificate.png";
import forwardProgramMcKinseyImage from "@assets/generated_images/forward_program_mckinsey_certificate.png";

const certificates = [
  { title: "Advanced Artificial Intelligence", provider: "KAUST Academy", year: "2024" },
  { title: "Forward Program", provider: "McKinsey.org", year: "December 2025" },
  { title: "Artificial Intelligence Fundamentals", provider: "IBM", year: "2024" },
  { title: "Relational Database Design & Querying", provider: "Tuwaiq", year: "2025" },
  { title: "Mathematics for ML & Data Science", provider: "Coursera", year: "2023" },
  { title: "Understanding Machine Learning", provider: "DataCamp", year: "2024" },
  { title: "Python Basics", provider: "Coursera", year: "2023" },
  { title: "Data Collection & Processing", provider: "Coursera", year: "2023" },
  { title: "Python Functions, Files & Dictionaries", provider: "Coursera", year: "2023" },
  { title: "HTML/Python/Flask All-in-One", provider: "Udemy", year: "2024" },
  { title: "Innovation Models", provider: "Coursera", year: "2024" },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2 flex items-center gap-2 sm:gap-3">
            <span className="w-6 sm:w-10 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"/>
            Certificates & Training
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {certificates.map((cert, index) => {
            // Links for certificates
            const certLink = cert.title === "Advanced Artificial Intelligence" && cert.provider === "KAUST Academy"
              ? "https://drive.google.com/file/d/14klEgbIn3On6vK5h3oKOKUCjalgByh_w/view"
              : cert.title === "Artificial Intelligence Fundamentals" && cert.provider === "IBM"
              ? "https://www.credly.com/badges/276a82ac-49aa-4e8f-8d4d-202aa3e634f5/linked_in_profile"
              : cert.title === "Mathematics for ML & Data Science" && cert.provider === "Coursera"
              ? "https://www.coursera.org/account/accomplishments/specialization/VYXTMC4YPQUA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
              : cert.title === "Understanding Machine Learning" && cert.provider === "DataCamp"
              ? "https://www.datacamp.com/completed/statement-of-accomplishment/course/2ef4f20b33448e483f3fdf6491138f570367bc3a"
              : cert.title === "Python Basics" && cert.provider === "Coursera"
              ? "https://www.coursera.org/account/accomplishments/verify/27ZWDJGN75NE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              : cert.title === "Data Collection & Processing" && cert.provider === "Coursera"
              ? "https://www.coursera.org/account/accomplishments/verify/D93DC9ZR632J?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              : cert.title === "Python Functions, Files & Dictionaries" && cert.provider === "Coursera"
              ? "https://www.coursera.org/account/accomplishments/verify/GMA52AEQ9YQ9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              : cert.title === "HTML/Python/Flask All-in-One" && cert.provider === "Udemy"
              ? "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9fba6b77-b268-4244-8b9d-a10a9fe38f25.pdf"
              : cert.title === "Innovation Models" && cert.provider === "Coursera"
              ? "https://acrobat.adobe.com/id/urn:aaid:sc:EU:065a9251-e13c-44f4-81f7-48807225269c"
              : cert.title === "Forward Program" && cert.provider === "McKinsey.org"
              ? "https://www.credly.com/earner/earned/badge/0d2965ea-c853-4b7f-bc09-e7f2a92fc889"
              : null;
            
            const isKaustAI = cert.title === "Advanced Artificial Intelligence" && cert.provider === "KAUST Academy";
            const isIBMAI = cert.title === "Artificial Intelligence Fundamentals" && cert.provider === "IBM";
            const isTuwaiq = cert.title === "Relational Database Design & Querying" && cert.provider === "Tuwaiq";
            const isCourseraMathML = cert.title === "Mathematics for ML & Data Science" && cert.provider === "Coursera";
            const isDataCampML = cert.title === "Understanding Machine Learning" && cert.provider === "DataCamp";
            const isCourseraPythonBasics = cert.title === "Python Basics" && cert.provider === "Coursera";
            const isCourseraDataCollection = cert.title === "Data Collection & Processing" && cert.provider === "Coursera";
            const isCourseraPythonFunctions = cert.title === "Python Functions, Files & Dictionaries" && cert.provider === "Coursera";
            const isUdemyHtmlPythonFlask = cert.title === "HTML/Python/Flask All-in-One" && cert.provider === "Udemy";
            const isCourseraInnovationModels = cert.title === "Innovation Models" && cert.provider === "Coursera";
            const isForwardProgramMcKinsey = cert.title === "Forward Program" && cert.provider === "McKinsey.org";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                style={{ transformStyle: 'preserve-3d' }}
                className={isKaustAI ? "md:col-span-1 lg:col-span-1" : ""}
              >
                <motion.div
                  whileHover={{
                    scale: isKaustAI ? 1.05 : 1.1,
                    rotateY: 10,
                    rotateX: 5,
                    z: 50,
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {isKaustAI || isIBMAI || isTuwaiq || isCourseraMathML || isDataCampML || isCourseraPythonBasics || isCourseraDataCollection || isCourseraPythonFunctions || isUdemyHtmlPythonFlask || isCourseraInnovationModels || isForwardProgramMcKinsey ? (
                    // Image-based certificate card
                    <Card 
                      className="h-full bg-card border-border rounded-lg sm:rounded-xl overflow-hidden group p-0 relative cursor-pointer"
                      style={{
                        boxShadow: '0 0 30px rgba(45, 212, 191, 0.2)',
                      }}
                      onClick={() => certLink && window.open(certLink, '_blank')}
                    >
                      {/* Glowing border effect */}
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-50 blur-xl rounded-xl"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      
                      <div className="relative z-10">
                        <motion.div
                          className="relative overflow-hidden rounded-t-xl"
                          whileHover={{
                            scale: 1.05,
                          }}
                        >
                          <img 
                            src={
                              isKaustAI ? kaustCertImage : 
                              isIBMAI ? ibmCertImage : 
                              isTuwaiq ? tuwaiqCertImage : 
                              isCourseraMathML ? courseraMathMLImage :
                              isDataCampML ? datacampMLImage :
                              isCourseraPythonBasics ? courseraPythonBasicsImage :
                              isCourseraDataCollection ? courseraDataCollectionImage :
                              isCourseraPythonFunctions ? courseraPythonFunctionsImage :
                              isUdemyHtmlPythonFlask ? udemyHtmlPythonFlaskImage :
                              isCourseraInnovationModels ? courseraInnovationModelsImage :
                              isForwardProgramMcKinsey ? forwardProgramMcKinseyImage :
                              kaustCertImage
                            } 
                            alt={cert.title}
                            className="w-full h-32 sm:h-40 md:h-48 object-cover"
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                        
                        <div className="p-2 sm:p-3 md:p-4 bg-card">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <motion.div
                              className="p-1.5 sm:p-2 bg-background rounded-lg border border-primary/30 flex-shrink-0"
                              whileHover={{
                                scale: 1.2,
                                rotate: 360,
                              }}
                              style={{
                                boxShadow: '0 0 15px rgba(45, 212, 191, 0.5)',
                              }}
                            >
                              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <motion.h4
                                className="font-bold text-foreground text-xs sm:text-sm group-hover:text-primary transition-colors leading-tight mb-1 line-clamp-2"
                                whileHover={{
                                  textShadow: '0 0 15px rgba(45, 212, 191, 0.8)',
                                }}
                              >
                                {cert.title}
                              </motion.h4>
                              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground flex-wrap">
                                <span className="truncate">{cert.provider}</span>
                                {cert.year && (
                                  <>
                                    <span className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-slate-600 flex-shrink-0" />
                                    <span className="flex-shrink-0">{cert.year}</span>
                                  </>
                                )}
                              </div>
                              <motion.div
                                className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                                animate={{
                                  x: [0, 5, 0],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                View Full Certificate →
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ) : (
                    // Regular certificate card
                    <Card 
                      className={`h-full bg-card border-border rounded-lg sm:rounded-xl overflow-hidden group p-2 sm:p-3 md:p-4 relative ${
                        certLink ? 'cursor-pointer' : 'cursor-default'
                      }`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(13, 17, 23, 0.9) 100%)',
                        boxShadow: '0 0 20px rgba(45, 212, 191, 0.1)',
                      }}
                      onClick={() => certLink && window.open(certLink, '_blank')}
                    >
                      {/* Glowing background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 rounded-xl"
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-30 blur-xl rounded-xl"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      
                      <div className="flex items-start gap-2 sm:gap-3 relative z-10">
                        <motion.div
                          className="p-1.5 sm:p-2 bg-background rounded-lg border border-border flex-shrink-0 relative overflow-hidden"
                          whileHover={{
                            scale: 1.2,
                            rotate: 360,
                          }}
                          style={{
                            boxShadow: '0 0 15px rgba(45, 212, 191, 0.3)',
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.3 }}
                          />
                          <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary relative z-10" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <motion.h4
                            className="font-bold text-foreground text-xs sm:text-sm group-hover:text-primary transition-colors leading-tight mb-1 line-clamp-2"
                            whileHover={{
                              textShadow: '0 0 15px rgba(45, 212, 191, 0.8)',
                            }}
                          >
                            {cert.title}
                          </motion.h4>
                          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground flex-wrap">
                            <span className="truncate">{cert.provider}</span>
                            {cert.year && (
                              <>
                                <span className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-slate-600 flex-shrink-0" />
                                <span className="flex-shrink-0">{cert.year}</span>
                              </>
                            )}
                          </div>
                          {certLink && (
                            <motion.div
                              className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                              animate={{
                                x: [0, 5, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              View Certificate →
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </Card>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
