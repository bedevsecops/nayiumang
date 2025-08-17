import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Nourishing Futures:{" "}
                <span className="relative">
                  Our Kitchen
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-orange-400 transform -rotate-1"></div>
                </span>
                , Their Smiles
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Partner with us in supplying nutritious meals to disadvantaged children. Your support helps us ensure that every child receives the sustenance they need for a brighter, healthier future. Join our mission today and make a difference.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-involved">
                <Button 
                  className="bg-orange-500 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                  size="lg"
                >
                  Join now
                </Button>
              </Link>
              <Link href="/programs">
                <Button 
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                  size="lg"
                >
                  Discover
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* India Map Shaped Children's Faces */}
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative">
                {/* Placeholder for India map shaped image */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">👶👧👦</div>
                      <p className="text-sm">Children's faces shaped like India map</p>
                    </div>
                  </div>
                </div>
                
                {/* Orange text box above the map */}
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium text-center">
                    900 Children die in India everyday due to malnutrition
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
