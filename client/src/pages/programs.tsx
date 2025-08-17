import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Heart, Leaf, Users, Target, TrendingUp } from "lucide-react";

const programs = [
  {
    id: "education",
    title: "Education Initiative",
    description: "Building schools, training teachers, and providing educational resources to ensure every child has access to quality learning opportunities.",
    fullDescription: "Our comprehensive education program focuses on building sustainable educational infrastructure in underserved communities. We work closely with local leaders to identify needs, construct schools with proper facilities, train teachers in modern pedagogical methods, and provide ongoing support through curriculum development and resource allocation.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    progress: 78,
    stats: {
      completed: "45 schools built",
      beneficiaries: "8,500 students",
      timeline: "2018-2024"
    },
    icon: GraduationCap,
    color: "forest",
    achievements: [
      "Reduced illiteracy rates by 65% in target communities",
      "Trained 320 local teachers in modern education methods",
      "Established 15 community libraries with over 50,000 books",
      "Provided scholarships to 1,200 underprivileged students"
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare Access",
    description: "Establishing mobile clinics, training community health workers, and improving maternal and child health outcomes.",
    fullDescription: "Our healthcare program addresses the critical gap in medical services in remote communities. Through mobile clinics, telemedicine initiatives, and community health worker training, we ensure that quality healthcare reaches those who need it most. Our focus includes preventive care, maternal health, and building local capacity for ongoing medical support.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    progress: 92,
    stats: {
      completed: "25 clinics operational",
      beneficiaries: "12,000 patients served",
      timeline: "2017-2024"
    },
    icon: Heart,
    color: "ocean",
    achievements: [
      "Reduced child mortality rates by 40% in served areas",
      "Trained 180 community health workers",
      "Conducted 5,000+ preventive health screenings",
      "Established maternal care programs in 30 villages"
    ]
  },
  {
    id: "environment",
    title: "Environmental Conservation",
    description: "Promoting sustainable practices, reforestation projects, and clean water initiatives that protect natural resources.",
    fullDescription: "Our environmental program addresses climate change and environmental degradation through community-based conservation efforts. We implement reforestation projects, establish clean water systems, promote sustainable agriculture, and educate communities about environmental stewardship. These initiatives create both immediate benefits and long-term environmental protection.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    progress: 65,
    stats: {
      completed: "50K trees planted",
      beneficiaries: "25 communities",
      timeline: "2019-2025"
    },
    icon: Leaf,
    color: "warm-orange",
    achievements: [
      "Planted 50,000 native trees across degraded landscapes",
      "Installed 35 clean water systems serving 8,000 people",
      "Established 20 community gardens using sustainable practices",
      "Trained 400 farmers in climate-resilient agriculture"
    ]
  }
];

export default function Programs() {
  return (
    <div className="pt-20 bg-soft-gray">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">Our Programs</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We focus on three core areas that create the foundation for thriving communities: education, 
              healthcare, and environmental sustainability. Each program is designed with community input 
              and built for long-term success.
            </p>
          </motion.div>

          {/* Program Overview Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">120</div>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-ocean mb-2">85</div>
              <p className="text-gray-600 font-medium">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-warm-orange mb-2">15K+</div>
              <p className="text-gray-600 font-medium">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">$2.4M</div>
              <p className="text-gray-600 font-medium">Funds Invested</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-20 bg-soft-gray">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              const isReversed = index % 2 === 1;
              
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}
                >
                  <div className={isReversed ? 'md:col-start-2' : ''}>
                    <img 
                      src={program.image}
                      alt={`${program.title} activities`}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                  
                  <div className={isReversed ? 'md:col-start-1' : ''}>
                    <Card className="bg-white shadow-lg border-none">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 bg-${program.color} rounded-full flex items-center justify-center mb-6`}>
                          <IconComponent className="text-white h-8 w-8" />
                        </div>
                        
                        <h2 className="text-3xl font-bold text-dark-slate mb-4">{program.title}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{program.fullDescription}</p>
                        
                        {/* Progress and Stats */}
                        <div className="mb-6">
                          <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>Progress: {program.progress}%</span>
                            <span>{program.stats.timeline}</span>
                          </div>
                          <Progress value={program.progress} className="w-full mb-4" />
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Completed:</span>
                              <p className="font-medium text-dark-slate">{program.stats.completed}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Beneficiaries:</span>
                              <p className="font-medium text-dark-slate">{program.stats.beneficiaries}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold text-dark-slate mb-3 flex items-center">
                            <Target className="h-5 w-5 mr-2 text-forest" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {program.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <TrendingUp className="h-4 w-4 mt-1 mr-2 text-green-600 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6">Program Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach ensures that all programs work together to create comprehensive, 
              sustainable change in the communities we serve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community Empowerment",
                description: "Local leadership development and capacity building ensures communities can sustain and expand program benefits independently.",
                stats: "500+ local leaders trained"
              },
              {
                icon: Target,
                title: "Measurable Outcomes",
                description: "Regular monitoring and evaluation demonstrate clear improvements in education, health, and environmental indicators.",
                stats: "95% of projects meet success targets"
              },
              {
                icon: TrendingUp,
                title: "Long-term Sustainability",
                description: "Programs are designed with exit strategies that ensure continued success after direct support ends.",
                stats: "87% of completed projects remain active"
              }
            ].map((impact, index) => {
              const IconComponent = impact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center bg-gradient-to-b from-white to-soft-gray shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-dark-slate mb-4">{impact.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{impact.description}</p>
                      <div className="text-forest font-semibold">{impact.stats}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Support Our Programs</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your contribution directly funds these life-changing programs. Choose how you'd like to make an impact today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="bg-warm-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-donate-programs"
              >
                Donate to Programs
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-slate transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-volunteer-programs"
              >
                Volunteer With Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
