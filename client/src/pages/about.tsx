import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "15+ years in child nutrition and community development, leading hunger relief programs across India.",
    color: "text-orange-500"
  },
  {
    name: "Rajesh Kumar",
    role: "Program Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Nutritionist and educator with expertise in community kitchen initiatives and sustainable food programs.",
    color: "text-orange-600"
  },
  {
    name: "Dr. Meera Patel",
    role: "Healthcare Coordinator",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Public health physician specializing in child nutrition and community health systems.",
    color: "text-orange-500"
  }
];

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Nayiumang</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Since 2015, we've been dedicated to eradicating hunger among underprivileged children, 
              providing nutritious meals, and fostering hope through community kitchen initiatives across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">👶👧👦👩</div>
                    <p className="text-sm">Community kitchen serving children</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nayiumang was born from a simple belief: that no child should go to bed hungry. What started as a small 
                community kitchen initiative has grown into a movement that spans 50+ communities across India.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our approach is different. We don't just provide meals – we work alongside communities to build lasting 
                solutions that they can sustain long after we've moved on. This community-driven model has proven 
                successful in creating real, measurable change in children's lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have fed over 10,000 children through our comprehensive nutrition programs, with the 
                support of dedicated volunteers and partnerships with local organizations across India.
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
            <Card className="bg-white border-l-4 border-orange-500 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To eradicate hunger among underprivileged children by providing nutritious meals through community 
                  kitchen initiatives, ensuring every child has access to the sustenance they need to grow and thrive.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-orange-600 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where no child goes to bed hungry. We envision communities that are self-sufficient in 
                  providing nutrition to their children, creating a brighter, healthier future for generations to come.
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
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Child-First",
                  description: "Every decision we make prioritizes the well-being and nutrition of children."
                },
                {
                  title: "Community-Driven",
                  description: "We work with communities to develop sustainable solutions that meet their specific needs."
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together decades of experience in child nutrition, 
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
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
            className="text-center bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-xl p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Join Our Mission?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our commitment to eradicating child hunger in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved">
                <Button 
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Join Our Team
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button 
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
