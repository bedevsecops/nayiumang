import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "15+ years in international development, leading community-based programs across Southeast Asia.",
    color: "text-forest"
  },
  {
    name: "Marcus Johnson",
    role: "Program Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Environmental scientist and educator with expertise in sustainable community development.",
    color: "text-ocean"
  },
  {
    name: "Dr. Amira Hassan",
    role: "Healthcare Coordinator",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Public health physician specializing in community health systems and maternal care.",
    color: "text-warm-orange"
  }
];

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">About Hope Foundation</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Since 2015, we've been dedicated to creating sustainable change through community-driven initiatives 
              that address education, healthcare, and environmental challenges across 85 communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-soft-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Hope Foundation founder speaking at community event" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-dark-slate mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hope Foundation was born from a simple belief: that every person deserves access to quality education, 
                healthcare, and a sustainable environment. What started as a small community initiative has grown into 
                a movement that spans 85 communities across the region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our approach is different. We don't just provide aid – we work alongside communities to build lasting 
                solutions that they can sustain long after we've moved on. This community-driven model has proven 
                successful in creating real, measurable change.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have impacted over 15,000 lives through our comprehensive programs, with the 
                support of 2,500 active volunteers and partnerships with local organizations worldwide.
              </p>
            </motion.div>
          </div>

          {/* Mission and Vision */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-l-4 border-forest shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Empowering communities through sustainable programs that create lasting social, educational, 
                  and environmental impact. We believe in working with communities, not for them, to build 
                  solutions that address their specific needs and challenges.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-ocean shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where every community has the resources and knowledge to thrive independently and 
                  sustainably. We envision communities that are self-sufficient, resilient, and equipped to 
                  overcome challenges while preserving their cultural identity.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-dark-slate mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Community-Driven",
                  description: "We work with communities to develop solutions that meet their specific needs and priorities."
                },
                {
                  title: "Sustainability",
                  description: "Our programs are designed to create lasting change that communities can maintain independently."
                },
                {
                  title: "Transparency",
                  description: "We believe in open communication about our work, impact, and how resources are used."
                },
                {
                  title: "Cultural Respect",
                  description: "We honor and preserve the cultural traditions and values of the communities we serve."
                }
              ].map((value, index) => (
                <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-dark-slate mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together decades of experience in international development, 
              community organizing, and sustainable program implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <img 
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                    />
                    <h3 className="text-xl font-semibold text-dark-slate mb-2">{member.name}</h3>
                    <p className={`${member.color} font-medium mb-4`}>{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-forest/5 to-ocean/5 rounded-xl p-12"
          >
            <h3 className="text-2xl font-bold text-dark-slate mb-4">Want to Join Our Mission?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our commitment to creating positive change in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-forest text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-join-team"
              >
                Join Our Team
              </motion.button>
              <motion.button 
                className="bg-ocean text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-volunteer-about"
              >
                Become a Volunteer
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
