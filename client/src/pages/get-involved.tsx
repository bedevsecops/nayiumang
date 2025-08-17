import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import VolunteerForm from "@/components/forms/volunteer-form";
import { Users, Briefcase, Calendar, Heart, Handshake, BookOpen } from "lucide-react";

const volunteerTestimonials = [
  {
    name: "David Kim",
    role: "Education Program Volunteer, 2 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    quote: "Volunteering with Hope Foundation has been life-changing. Seeing the direct impact of our education programs on children's lives reminds me why this work matters so much."
  },
  {
    name: "Maria Rodriguez",
    role: "Healthcare Initiative Volunteer, 18 months",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    quote: "The community-based approach here is incredible. We're not just helping – we're learning and growing together. It's created lasting friendships and opened my perspective."
  }
];

const partnershipOpportunities = [
  {
    icon: Briefcase,
    title: "Corporate Volunteer Programs",
    description: "Engage your team in meaningful volunteer activities that build skills while supporting communities."
  },
  {
    icon: BookOpen,
    title: "Skills-Based Consulting Projects",
    description: "Share your professional expertise to help us improve operations and program effectiveness."
  },
  {
    icon: Handshake,
    title: "Infrastructure & Technology Support",
    description: "Provide technical resources, equipment, or infrastructure to enhance our program delivery."
  },
  {
    icon: Heart,
    title: "Educational Scholarship Programs",
    description: "Sponsor scholarships or educational initiatives that create opportunities for underprivileged students."
  }
];

const opportunityTypes = [
  {
    icon: Calendar,
    title: "Event-Based Volunteering",
    description: "Join us for specific events, fundraisers, and community activities throughout the year.",
    commitment: "Flexible timing"
  },
  {
    icon: Users,
    title: "Ongoing Program Support",
    description: "Become a regular volunteer supporting our education, healthcare, or environmental programs.",
    commitment: "Weekly or monthly"
  },
  {
    icon: Briefcase,
    title: "Professional Skills Volunteering",
    description: "Contribute your professional expertise in areas like marketing, finance, IT, or project management.",
    commitment: "Project-based"
  }
];

export default function GetInvolved() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">Get Involved</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              There are many ways to make a difference. Whether you have time, skills, or resources to share, 
              we have opportunities that match your passion and availability.
            </p>
          </motion.div>

          {/* Volunteer Opportunities */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {opportunityTypes.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="text-white h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-slate mb-4">{opportunity.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{opportunity.description}</p>
                    <div className="text-sm text-forest font-medium">{opportunity.commitment}</div>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Volunteer Form and Testimonials */}
      <section className="py-20 bg-soft-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Volunteer Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <VolunteerForm />
            </motion.div>

            {/* Testimonials */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-dark-slate mb-6">Hear from Our Volunteers</h3>
              </div>
              
              {volunteerTestimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={testimonial.image}
                        alt={`Volunteer testimonial from ${testimonial.name}`}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="text-gray-600 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="font-semibold text-dark-slate">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Stats */}
              <Card className="bg-gradient-to-r from-forest/10 to-ocean/10">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-dark-slate mb-4">Volunteer Impact</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-forest">2,500+</div>
                      <div className="text-sm text-gray-600">Active Volunteers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-ocean">50K+</div>
                      <div className="text-sm text-gray-600">Volunteer Hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations interested in long-term partnerships or sponsorship opportunities can make 
              a significant impact through collaborative initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnershipOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-dark-slate mb-3">{opportunity.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{opportunity.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-forest/5 to-ocean/5 inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Interested in Partnering?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're always looking for innovative partnerships that can amplify our impact. 
                  Let's discuss how we can work together to create meaningful change.
                </p>
                <motion.button 
                  className="bg-ocean text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-partnership-contact"
                >
                  Contact Partnership Team
                </motion.button>
              </CardContent>
            </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Making a Difference Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every contribution, whether time, skills, or resources, creates ripple effects that transform communities. 
              Join our mission and be part of the solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="bg-warm-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-volunteer-now"
              >
                Volunteer Now
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-slate transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-explore-programs"
              >
                Explore Programs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
