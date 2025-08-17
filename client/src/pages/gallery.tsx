import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const galleryCategories = ["all", "education", "healthcare", "environment", "events"];

const galleryItems = [
  {
    id: 1,
    category: "education",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Children celebrating completion of new school building",
    title: "New School Opening"
  },
  {
    id: 2,
    category: "education", 
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Teacher reading with children in newly established community library",
    title: "Community Library Program"
  },
  {
    id: 3,
    category: "healthcare",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Mobile healthcare clinic providing services to rural community",
    title: "Mobile Health Clinic"
  },
  {
    id: 4,
    category: "healthcare",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Healthcare workers training community health volunteers",
    title: "Health Worker Training"
  },
  {
    id: 5,
    category: "environment",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Community members participating in large-scale tree planting initiative",
    title: "Reforestation Project"
  },
  {
    id: 6,
    category: "environment",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Community water conservation and purification system installation",
    title: "Clean Water Initiative"
  },
  {
    id: 7,
    category: "events",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Annual community celebration and fundraising gala",
    title: "Annual Hope Gala"
  },
  {
    id: 8,
    category: "events",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Volunteer appreciation event showcasing diverse community engagement",
    title: "Volunteer Recognition Event"
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleItems, setVisibleItems] = useState(8);

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const loadMore = () => {
    setVisibleItems(prev => prev + 8);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">Our Impact in Photos</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See the real stories and faces behind our work. These images showcase the communities we serve 
              and the positive changes we're creating together.
            </p>
          </motion.div>

          {/* Gallery Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">1,200+</div>
              <p className="text-gray-600 font-medium">Photos Captured</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-ocean mb-2">85</div>
              <p className="text-gray-600 font-medium">Communities Featured</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-warm-orange mb-2">120</div>
              <p className="text-gray-600 font-medium">Projects Documented</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">25</div>
              <p className="text-gray-600 font-medium">Video Stories</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Filter and Grid */}
      <section className="py-20 bg-soft-gray">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setVisibleItems(8);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all capitalize ${
                  activeFilter === category
                    ? "bg-forest text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
                data-testid={`filter-${category}`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {filteredItems.slice(0, visibleItems).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                data-testid={`gallery-item-${item.id}`}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative">
                    <img 
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                      <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < filteredItems.length && (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button 
                onClick={loadMore}
                className="bg-forest text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
                data-testid="button-load-more"
              >
                Load More Photos
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6">Video Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch powerful stories from the communities we serve and see firsthand the impact of our collaborative work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Education Impact Story",
                description: "Follow Maria's journey from a rural village to university through our scholarship program.",
                thumbnail: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
                duration: "5:32"
              },
              {
                title: "Community Health Transformation",
                description: "See how mobile clinics have transformed healthcare access in remote communities.",
                thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
                duration: "7:15"
              },
              {
                title: "Reforestation Success",
                description: "Witness the incredible transformation of degraded land through community reforestation efforts.",
                thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
                duration: "4:28"
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="relative">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-all">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-forest ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-dark-slate mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Be Part of the Story</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every photo and video in our gallery represents real people whose lives have been transformed. 
              Join us in creating more stories of hope and positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="bg-warm-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-get-involved-gallery"
              >
                Get Involved Today
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-slate transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-share-story"
              >
                Share Your Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
