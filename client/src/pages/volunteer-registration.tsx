import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Heart, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function VolunteerRegistration() {
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
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Thank You for Registering!</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your volunteer registration with Nayiumang has been successfully submitted. 
              We're excited to have you join our mission to fight child hunger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Status */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="text-white h-10 w-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration in Progress</h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Our team is currently reviewing your application. You will receive an email confirmation 
                    within 2-3 business days with next steps and additional information.
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-orange-600 font-bold">1</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Application Review</h4>
                        <p className="text-sm text-gray-600">We'll review your skills and interests to find the best volunteer opportunity for you.</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-orange-600 font-bold">2</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Orientation Call</h4>
                        <p className="text-sm text-gray-600">We'll schedule a brief call to discuss your role and answer any questions.</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-orange-600 font-bold">3</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Start Volunteering</h4>
                        <p className="text-sm text-gray-600">Begin making a difference in children's lives through our community programs.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                      <Button 
                        className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                      >
                        Return to Home
                      </Button>
                    </Link>
                    <Link href="/get-involved">
                      <Button 
                        variant="outline"
                        className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        Learn More About Volunteering
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">While You Wait</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our programs and the impact you'll be making as a volunteer with Nayiumang.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Community Kitchen Programs",
                description: "Help prepare and distribute nutritious meals to underprivileged children in local communities.",
                stats: "35+ kitchens operational"
              },
              {
                icon: Users,
                title: "Child Nutrition Initiatives",
                description: "Support nutrition education and health monitoring programs for children and families.",
                stats: "10,000+ children served"
              },
              {
                icon: Clock,
                title: "Flexible Volunteering",
                description: "Choose from various time commitments and roles that fit your schedule and skills.",
                stats: "500+ active volunteers"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                      <div className="text-orange-500 font-semibold">{item.stats}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-orange-500/5 to-red-500/5 inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  If you have any questions about your registration or would like to learn more about 
                  our volunteer opportunities, please don't hesitate to reach out to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    Contact Us
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    View Our Programs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
