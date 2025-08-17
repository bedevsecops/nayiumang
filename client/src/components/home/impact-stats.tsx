import { motion } from "framer-motion";
import { Users, Heart, Utensils, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Children Fed",
    description: "Through our community kitchen initiatives"
  },
  {
    icon: Heart,
    value: "50+",
    label: "Communities Served",
    description: "Across multiple regions in India"
  },
  {
    icon: Utensils,
    value: "500,000+",
    label: "Meals Provided",
    description: "Nutritious meals served to date"
  },
  {
    icon: Target,
    value: "95%",
    label: "Success Rate",
    description: "Of children showing improved nutrition"
  }
];

export default function ImpactStats() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every number represents a life changed, a child nourished, and a community strengthened.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
