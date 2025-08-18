import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Utensils, Heart, Users, Target, TrendingUp, MapPin } from "lucide-react";

const programs = [
  {
    id: "community-kitchen",
    title: "Community Kitchen Initiative",
    description: "Establishing and operating community kitchens to provide nutritious meals to underprivileged children.",
    fullDescription: "Our flagship Community Kitchen Initiative focuses on establishing sustainable food distribution centers in underserved communities across India. We work closely with local leaders to identify needs, set up kitchen facilities with proper equipment, train community members in food preparation and nutrition, and provide ongoing support through meal planning and resource allocation.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    progress: 85,
    stats: {
      completed: "35 kitchens operational",
      beneficiaries: "10,000+ children",
      timeline: "2018-2024"
    },
    icon: Utensils,
    color: "orange-500",
    achievements: [
      "Reduced malnutrition rates by 60% in target communities",
      "Trained 280 local community members in food preparation",
      "Established 35 community kitchens serving daily meals",
      "Provided nutrition education to 5,000+ families"
    ]
  },
  {
    id: "child-nutrition",
    title: "Child Nutrition Program",
    description: "Comprehensive nutrition support including meal planning, health monitoring, and family education.",
    fullDescription: "Our Child Nutrition Program addresses the critical gap in proper nutrition for underprivileged children. Through regular health checkups, personalized meal plans, and family nutrition education, we ensure that every child receives the balanced nutrition they need to grow and thrive. Our focus includes preventive health, growth monitoring, and building local capacity for ongoing nutritional support.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    progress: 92,
    stats: {
      completed: "50 communities served",
      beneficiaries: "15,000 children",
      timeline: "2017-2024"
    },
    icon: Heart,
    color: "orange-600",
    achievements: [
      "Improved child growth rates by 45% in served areas",
      "Trained 220 community health workers in nutrition",
      "Conducted 8,000+ nutrition assessments",
      "Established family nutrition programs in 50 villages"
    ]
  },
  {
    id: "food-security",
    title: "Food Security & Sustainability",
    description: "Building sustainable food systems and promoting local agriculture to ensure long-term food security.",
    fullDescription: "Our Food Security program addresses long-term sustainability through community-based agricultural initiatives. We implement kitchen garden projects, establish local food cooperatives, promote sustainable farming practices, and educate communities about food preservation and storage. These initiatives create both immediate nutritional benefits and long-term food security.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    progress: 70,
    stats: {
      completed: "40 kitchen gardens established",
      beneficiaries: "30 communities",
      timeline: "2019-2025"
    },
    icon: MapPin,
    color: "red-500",
    achievements: [
      "Established 40 community kitchen gardens across villages",
      "Installed 25 food storage systems serving 6,000 people",
      "Established 30 community food cooperatives using sustainable practices",
      "Trained 350 farmers in climate-resilient agriculture"
    ]
  }
];

export default function Programs() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Programs</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We focus on three core areas that create the foundation for fighting child hunger: community kitchens, 
              child nutrition, and food security. Each program is designed with community input 
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
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">110</div>
              <p className="text-gray-600 font-medium">Events Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">50</div>
              <p className="text-gray-600 font-medium">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">25K+</div>
              <p className="text-gray-600 font-medium">Children Fed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">₹50L+</div>
              <p className="text-gray-600 font-medium">Funds Invested</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-20 bg-white">
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
                    <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="text-6xl mb-2">🍽️👶👧👦</div>
                          <p className="text-sm">{program.title} activities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={isReversed ? 'md:col-start-1' : ''}>
                    <Card className="bg-white shadow-lg border border-gray-200">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 bg-${program.color} rounded-full flex items-center justify-center mb-6`}>
                          <IconComponent className="text-white h-8 w-8" />
                        </div>
                        
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h2>
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
                              <p className="font-medium text-gray-900">{program.stats.completed}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Beneficiaries:</span>
                              <p className="font-medium text-gray-900">{program.stats.beneficiaries}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Target className="h-5 w-5 mr-2 text-orange-500" />
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
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Program Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach ensures that all programs work together to create comprehensive, 
              sustainable solutions to child hunger in the communities we serve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community Empowerment",
                description: "Local leadership development and capacity building ensures communities can sustain and expand program benefits independently.",
                stats: "300+ local leaders trained"
              },
              {
                icon: Target,
                title: "Measurable Outcomes",
                description: "Regular monitoring and evaluation demonstrate clear improvements in child nutrition and health indicators.",
                stats: "95% of events meet success targets"
              },
              {
                icon: TrendingUp,
                title: "Long-term Sustainability",
                description: "Programs are designed with exit strategies that ensure continued success after direct support ends.",
                stats: "87% of completed events remain active"
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
                  <Card className="text-center bg-gradient-to-b from-white to-orange-50 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{impact.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{impact.description}</p>
                      <div className="text-orange-500 font-semibold">{impact.stats}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
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
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-donate-programs"
              >
                Donate to Programs
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
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
