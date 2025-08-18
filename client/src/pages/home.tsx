import HeroSection from "@/components/home/hero-section";
import ImpactStats from "@/components/home/impact-stats";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ImpactStats />
      
      {/* "We Believe that We can Save more Lives with you" Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We Believe that We can Save more Lives with you
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full ml-2"></span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Start Donating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-orange-500/90 to-orange-600/90 text-white overflow-hidden h-full">
                <div className="relative h-48 bg-black/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">📱</div>
                      <p className="text-sm opacity-80">Hand holding smartphone with DONATE button</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Start Donating</h3>
                  <p className="text-orange-100 mb-6 leading-relaxed">
                    Begin donating now to provide essential nutrition for underprivileged children, supporting their health and brighter futures.
                  </p>
                  <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 transition-colors">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Become Volunteer Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-yellow-500/90 to-orange-500/90 text-white overflow-hidden h-full">
                <div className="relative h-48 bg-black/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">👥</div>
                      <p className="text-sm opacity-80">Blurry background of children</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Become Volunteer</h3>
                  <p className="text-orange-100 mb-6 leading-relaxed">
                    Join our incredible staff dedicated to vital nourishment for underprivileged children. Your time and effort can make a big impact.
                  </p>
                  <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 transition-colors">
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Share with Friends Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-red-500/90 to-red-600/90 text-white overflow-hidden h-full">
                <div className="relative h-48 bg-black/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">👥</div>
                      <p className="text-sm opacity-80">Blurry background of children</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Share with Friends</h3>
                  <p className="text-red-100 mb-6 leading-relaxed">
                    Help us make a difference in children's lives by sharing our mission with friends and spreading awareness about our cause.
                  </p>
                  <Button className="w-full bg-white text-red-600 hover:bg-gray-100 transition-colors">
                    Share Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PJR is a dedicated NGO committed to eradicating hunger among underprivileged children, providing nutritious meals, and fostering hope. We believe in transparency and accountability in all our initiatives.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our mission is to ensure that no child goes to bed hungry and that every child has access to the nutrition they need to grow, learn, and thrive.
              </p>
              <Link href="/about">
                <Button 
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">👶👧👦👩</div>
                    <p className="text-sm">Children with adult woman in background</p>
                  </div>
                </div>
                {/* Orange brushstroke element */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-32 bg-orange-400 transform rotate-12"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Events / The Hunger Event Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-500/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🍽️👶👧👦</div>
                    <p className="text-sm">Children eating meals from metal plates</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-orange-500 text-white p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white rounded-full mr-3"></div>
                <h2 className="text-3xl font-bold">Our Events</h2>
              </div>
              <h3 className="text-2xl font-bold mb-4">The Hunger Event</h3>
              <p className="text-orange-100 mb-6 leading-relaxed">
                PJR's Hunger Event is dedicated to feeding underprivileged children through community kitchen initiatives, providing nutritious meals, and creating sustainable solutions. We have successfully implemented past initiatives and continue to raise funds for ongoing missions.
              </p>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-500 transition-colors"
              >
                Learn More
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              
              {/* Pagination dots */}
              <div className="flex space-x-2 mt-6">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Mentions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Media Mentions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">The Times of India</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">दैनिक भास्कर</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">CNBC</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">ZEENEWS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join our cause! Everyone can help. Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join our cause!</h2>
            <p className="text-2xl text-white/90 mb-8">Everyone can help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/donate">
                <Button 
                  className="bg-orange-500 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                  size="lg"
                >
                  Donate now
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button 
                  variant="outline"
                  className="border-2 border-orange-500 bg-yellow-500 text-orange-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                  size="lg"
                >
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-2">👶👧👦</div>
              <p className="text-sm">Children looking at camera and smiling</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
