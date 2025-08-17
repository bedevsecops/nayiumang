import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import DonationForm from "@/components/forms/donation-form";
import { Shield, Award, CheckCircle, TrendingUp, DollarSign, Users } from "lucide-react";

const impactExamples = [
  {
    amount: "$25",
    icon: DollarSign,
    color: "bg-forest",
    impact: "School supplies for one child for a full semester",
    description: "Provides textbooks, notebooks, pens, and other essential materials"
  },
  {
    amount: "$50",
    icon: Users,
    color: "bg-ocean", 
    impact: "Basic healthcare checkup for a family of four",
    description: "Includes preventive screenings and basic medical consultations"
  },
  {
    amount: "$100",
    icon: TrendingUp,
    color: "bg-warm-orange",
    impact: "Materials to plant and maintain 25 trees in reforestation projects",
    description: "Includes seedlings, tools, and ongoing care for environmental restoration"
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
    title: "501(c)(3) Tax Exempt",
    description: "Your donation is tax-deductible"
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
  "Tax-deductible receipt provided immediately", 
  "Donor privacy respected - no information shared"
];

export default function Donate() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">Make a Donation</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your support directly funds programs that create lasting change. Every contribution, 
              no matter the size, makes a meaningful difference in someone's life.
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
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">$2.4M</div>
              <p className="text-gray-600 font-medium">Total Raised</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-ocean mb-2">3,200+</div>
              <p className="text-gray-600 font-medium">Active Donors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-warm-orange mb-2">95%</div>
              <p className="text-gray-600 font-medium">Goes to Programs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">120</div>
              <p className="text-gray-600 font-medium">Projects Funded</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Form and Transparency */}
      <section className="py-20 bg-soft-gray">
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
                  <h3 className="text-2xl font-bold text-dark-slate mb-6">Where Your Money Goes</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-forest rounded-full mr-3"></div>
                          <span className="font-medium">Direct Program Support</span>
                        </div>
                        <span className="font-semibold">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-forest h-3 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-ocean rounded-full mr-3"></div>
                          <span className="font-medium">Operations & Administration</span>
                        </div>
                        <span className="font-semibold">20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-ocean h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-warm-orange rounded-full mr-3"></div>
                          <span className="font-medium">Fundraising & Outreach</span>
                        </div>
                        <span className="font-semibold">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-warm-orange h-3 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Examples */}
                <Card className="bg-gradient-to-r from-forest/5 to-ocean/5">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-dark-slate mb-6">Your Impact Examples</h4>
                    <div className="space-y-4">
                      {impactExamples.map((example, index) => {
                        const IconComponent = example.icon;
                        return (
                          <div key={index} className="flex items-start space-x-4">
                            <div className={`w-10 h-10 ${example.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                              <IconComponent className="text-white h-5 w-5" />
                            </div>
                            <div>
                              <h5 className="font-medium text-dark-slate">{example.amount} provides</h5>
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
                    <h4 className="text-lg font-semibold text-dark-slate mb-4 flex items-center">
                      <Award className="h-6 w-6 text-warm-orange mr-2" />
                      Recognition & Transparency
                    </h4>
                    <ul className="space-y-3">
                      {recognitionFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-forest mr-3 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6">Safe & Secure Donations</h2>
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
                      <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-dark-slate mb-4">{element.title}</h3>
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
            className="text-center bg-gradient-to-r from-forest/10 to-ocean/10 rounded-xl p-12"
          >
            <h3 className="text-2xl font-bold text-dark-slate mb-4">Join Our Community of Changemakers</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              When you donate to Hope Foundation, you become part of a global community working together 
              to create positive change. Your generosity inspires others and multiplies your impact.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-forest">3,200+</div>
                <div className="text-sm text-gray-600">Active Donors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ocean">50+</div>
                <div className="text-sm text-gray-600">Countries Represented</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warm-orange">$75</div>
                <div className="text-sm text-gray-600">Average Donation</div>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Every Donation Creates Ripples of Change</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your contribution today helps build a better tomorrow for communities around the world. 
              Start making an impact with Hope Foundation.
            </p>
            <motion.button 
              className="bg-warm-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 transition-all duration-300 shadow-lg"
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
