import HeroSection from "@/components/home/hero-section";
import ImpactStats from "@/components/home/impact-stats";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Heart, Leaf } from "lucide-react";

const programsData = [
  {
    id: "education",
    title: "Education Initiative",
    description: "Building schools, training teachers, and providing educational resources to ensure every child has access to quality learning opportunities.",
    progress: 78,
    completedProjects: "45 schools built",
    icon: GraduationCap,
    gradient: "from-forest/5 to-forest/10",
    color: "text-forest",
    bgColor: "bg-forest"
  },
  {
    id: "healthcare",
    title: "Healthcare Access",
    description: "Establishing mobile clinics, training community health workers, and improving maternal and child health outcomes.",
    progress: 92,
    completedProjects: "25 clinics operational",
    icon: Heart,
    gradient: "from-ocean/5 to-ocean/10",
    color: "text-ocean",
    bgColor: "bg-ocean"
  },
  {
    id: "environment",
    title: "Environmental Conservation",
    description: "Promoting sustainable practices, reforestation projects, and clean water initiatives that protect natural resources.",
    progress: 65,
    completedProjects: "50K trees planted",
    icon: Leaf,
    gradient: "from-warm-orange/5 to-warm-orange/10",
    color: "text-warm-orange",
    bgColor: "bg-warm-orange"
  }
];

export default function Home() {
  return (
    <div className="bg-soft-gray">
      <HeroSection />
      <ImpactStats />
      
      {/* About Introduction */}
      <section className="py-20 bg-soft-gray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-4">About Hope Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2015, we've been dedicated to creating sustainable change through community-driven initiatives that address education, healthcare, and environmental challenges.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Hope Foundation founder speaking at community event" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark-slate mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hope Foundation was born from a simple belief: that every person deserves access to quality education, healthcare, and a sustainable environment. What started as a small community initiative has grown into a movement that spans 85 communities across the region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our approach is different. We don't just provide aid – we work alongside communities to build lasting solutions that they can sustain long after we've moved on.
              </p>
              <Link href="/about">
                <motion.button 
                  className="bg-forest text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-learn-more"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-4">Our Key Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on three core areas that create the foundation for thriving communities: education, healthcare, and environmental sustainability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programsData.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`bg-gradient-to-br ${program.gradient} hover:shadow-lg transition-all duration-300 h-full`}>
                    <CardContent className="p-8">
                      <img 
                        src={
                          program.id === "education" 
                            ? "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                            : program.id === "healthcare"
                            ? "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                            : "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                        }
                        alt={`${program.title} program activities`}
                        className="w-full h-48 object-cover rounded-lg mb-6"
                      />
                      <div className={`w-16 h-16 ${program.bgColor} rounded-full flex items-center justify-center mb-4`}>
                        <IconComponent className="text-white text-2xl h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-dark-slate mb-4">{program.title}</h3>
                      <p className="text-gray-600 mb-6">{program.description}</p>
                      <div className="flex justify-between text-sm text-gray-500 mb-4">
                        <span>Progress: {program.progress}%</span>
                        <span>{program.completedProjects}</span>
                      </div>
                      <Progress value={program.progress} className="w-full" />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/programs">
              <motion.button 
                className="bg-ocean text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-view-all-programs"
              >
                View All Programs
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-forest to-ocean">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Together, we can create lasting change in communities around the world. Your support makes a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/donate">
                <motion.button 
                  className="bg-warm-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-donate-cta"
                >
                  Donate Now
                </motion.button>
              </Link>
              <Link href="/get-involved">
                <motion.button 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-slate transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-volunteer-cta"
                >
                  Volunteer Today
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
