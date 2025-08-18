import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import DonationForm from "@/components/forms/donation-form";
import { Shield, Award, CheckCircle, TrendingUp, DollarSign, Users, Utensils, Heart } from "lucide-react";

const impactExamples = [
  {
    amount: "₹500",
    icon: Utensils,
    color: "bg-orange-500",
    impact: "One month of nutritious meals for a child",
    description: "Provides daily balanced nutrition including proteins, vitamins, and minerals"
  },
  {
    amount: "₹1000",
    icon: Users,
    color: "bg-orange-600", 
    impact: "Weekly meals for a family of four",
    description: "Ensures entire families have access to proper nutrition"
  },
  {
    amount: "₹2500",
    icon: Heart,
    color: "bg-red-500",
    impact: "Monthly nutrition program for 5 children",
    description: "Supports ongoing community kitchen operations and meal planning"
  }
];

const trustElements = [
  {
    icon: Shield,
    title: "SSL Secure",
    description: "All transactions are encrypted and secure"
  },
  {
    icon: Award,
    title: "NGO Registered",
    description: "Your donation supports registered charitable work"
  },
  {
    icon: CheckCircle,
    title: "Verified Impact",
    description: "Regular reports on how funds are used"
  }
];

const recognitionFeatures = [
  "Annual impact reports sent to all donors",
  "Real-time project updates via email",
  "Donation receipt provided immediately", 
  "Donor privacy respected - no information shared"
];

export default function Donate() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Make a Donation</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your support directly funds our community kitchen initiatives that provide nutritious meals to underprivileged children. Every contribution, 
              no matter the size, makes a meaningful difference in a child's life.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">₹50L+</div>
              <p className="text-gray-600 font-medium">Total Raised</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">2,500+</div>
              <p className="text-gray-600 font-medium">Active Donors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">95%</div>
              <p className="text-gray-600 font-medium">Goes to Programs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">50+</div>
              <p className="text-gray-600 font-medium">Communities Served</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Form and Transparency */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Donation Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <DonationForm />
              </motion.div>

              {/* Impact Transparency */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Where Your Money Goes</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                          <span className="font-medium">Direct Program Support</span>
                        </div>
                        <span className="font-semibold">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-orange-500 h-3 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-orange-600 rounded-full mr-3"></div>
                          <span className="font-medium">Operations & Administration</span>
                        </div>
                        <span className="font-semibold">20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-orange-600 h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                          <span className="font-medium">Fundraising & Outreach</span>
                        </div>
                        <span className="font-semibold">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Examples */}
                <Card className="bg-gradient-to-r from-orange-500/5 to-red-500/5">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Your Impact Examples</h4>
                    <div className="space-y-4">
                      {impactExamples.map((example, index) => {
                        const IconComponent = example.icon;
                        return (
                          <div key={index} className="flex items-start space-x-4">
                            <div className={`w-10 h-10 ${example.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                              <IconComponent className="text-white h-5 w-5" />
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">{example.amount} provides</h5>
                              <p className="text-gray-700 font-medium">{example.impact}</p>
                              <p className="text-sm text-gray-600">{example.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Recognition & Transparency */}
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="h-6 w-6 text-orange-500 mr-2" />
                      Recognition & Transparency
                    </h4>
                    <ul className="space-y-3">
                      {recognitionFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Security */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Safe & Secure Donations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-standard security measures to protect your personal and financial information. 
              Your trust is important to us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {trustElements.map((element, index) => {
              const IconComponent = element.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{element.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{element.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Donor Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community of Changemakers</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              When you donate to Nayiumang, you become part of a community working together 
              to eradicate child hunger in India. Your generosity inspires others and multiplies your impact.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-500">2,500+</div>
                <div className="text-sm text-gray-600">Active Donors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Communities Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">₹2,000</div>
                <div className="text-sm text-gray-600">Average Donation</div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Every Donation Feeds a Child</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your contribution today helps provide nutritious meals to underprivileged children across India. 
              Start making an impact with Nayiumang.
            </p>
            <motion.button 
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-donate-now-cta"
            >
              Donate Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
