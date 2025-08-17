import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Target, TrendingUp, Clock } from "lucide-react";

const upcomingEvents = [
  {
    id: "annual-gala",
    title: "Annual Hope Gala",
    date: "March 15, 2024",
    time: "6:00 PM - 11:00 PM",
    location: "Downtown Convention Center",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Join us for an evening of inspiration, celebration, and fundraising to support our education initiatives.",
    category: "Fundraising",
    color: "forest"
  },
  {
    id: "cleanup-day",
    title: "Community Cleanup Day",
    date: "March 22, 2024",
    time: "8:00 AM - 4:00 PM",
    location: "Riverside Park",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Help us restore local parks and waterways while building connections with fellow environmental advocates.",
    category: "Environmental",
    color: "ocean"
  },
  {
    id: "skills-workshop",
    title: "Skills Workshop Series",
    date: "April 5, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Community Center",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Learn practical skills in community development, project management, and sustainable practices.",
    category: "Education",
    color: "warm-orange"
  },
  {
    id: "health-fair",
    title: "Community Health Fair",
    date: "April 12, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "City Park Pavilion",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Free health screenings, wellness education, and resources for community members and families.",
    category: "Healthcare",
    color: "ocean"
  }
];

const activeCampaigns = [
  {
    id: "school-library",
    title: "School Library Initiative",
    description: "Building libraries in 20 rural schools to improve literacy rates and educational outcomes.",
    raised: 84500,
    goal: 125000,
    supporters: 342,
    progress: 68,
    endDate: "June 30, 2024"
  },
  {
    id: "clean-water",
    title: "Clean Water Access",
    description: "Installing water purification systems in 15 communities to provide safe drinking water.",
    raised: 47200,
    goal: 90000,
    supporters: 198,
    progress: 52,
    endDate: "August 15, 2024"
  }
];

export default function Events() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">Events & Campaigns</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join us at upcoming events or support our ongoing campaigns. Every gathering is an opportunity 
              to build community and create positive change together.
            </p>
          </motion.div>

          {/* Event Categories */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">25+</div>
              <p className="text-gray-600 font-medium">Annual Events</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-ocean mb-2">5K+</div>
              <p className="text-gray-600 font-medium">Event Participants</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-warm-orange mb-2">$450K</div>
              <p className="text-gray-600 font-medium">Funds Raised</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">15</div>
              <p className="text-gray-600 font-medium">Active Campaigns</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-soft-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-8 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className={`absolute top-4 left-4 bg-${event.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {event.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-warm-orange mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <h3 className="text-xl font-bold text-dark-slate mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      
                      <Button 
                        className={`w-full bg-${event.color} hover:opacity-90 transition-opacity`}
                        data-testid={`button-register-${event.id}`}
                      >
                        Register for Event
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Campaigns */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-8 text-center">Active Campaigns</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {activeCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-dark-slate mb-3">{campaign.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{campaign.description}</p>
                        </div>
                        <div className="text-right ml-6">
                          <div className="text-2xl font-bold text-forest">${campaign.raised.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">raised</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Progress: {campaign.progress}%</span>
                          <span>Goal: ${campaign.goal.toLocaleString()}</span>
                        </div>
                        <Progress value={campaign.progress} className="w-full mb-4" />
                        
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500 flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {campaign.supporters} supporters
                          </span>
                          <span className="text-gray-500 flex items-center">
                            <Target className="h-4 w-4 mr-1" />
                            Ends: {campaign.endDate}
                          </span>
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-forest hover:bg-green-700 transition-colors"
                        data-testid={`button-support-${campaign.id}`}
                      >
                        Support Campaign
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Campaign Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-forest/10 to-ocean/10 rounded-xl p-12"
          >
            <h3 className="text-2xl font-bold text-dark-slate mb-4">Campaign Success Stories</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our community-driven campaigns have successfully funded critical projects that create lasting change. 
              See the impact of collective action.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-forest mb-2">45</div>
                <div className="text-gray-600">Campaigns Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean mb-2">$1.8M</div>
                <div className="text-gray-600">Total Funds Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-orange mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-20 bg-gradient-to-r from-forest to-ocean">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Never Miss an Event</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Stay connected with our community and be the first to know about upcoming events, 
              volunteer opportunities, and campaign launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="bg-warm-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-newsletter-signup"
              >
                Subscribe to Newsletter
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-slate transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-view-calendar"
              >
                View Full Calendar
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
