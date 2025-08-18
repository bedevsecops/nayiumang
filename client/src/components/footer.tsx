import { Heart, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-ngo-blue rounded-full flex items-center justify-center">
                <Heart className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">Nayi Umang</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering communities with new hope and opportunities through education, healthcare, and sustainable development. Creating positive change together.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 bg-gray-800 rounded-full p-0 hover:bg-ngo-blue"
              >
                <FaFacebookF size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 bg-gray-800 rounded-full p-0 hover:bg-ngo-blue"
              >
                <FaTwitter size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 bg-gray-800 rounded-full p-0 hover:bg-ngo-blue"
              >
                <FaInstagram size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 bg-gray-800 rounded-full p-0 hover:bg-ngo-blue"
              >
                <FaLinkedinIn size={16} />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                    About Us
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                    Register
                  </Button>
                </Link>
              </li>
              <li>
                <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                  Programs
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                  Donate
                </Button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-ngo-blue mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Hope Street<br />Community City, CC 12345
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-ngo-blue" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-ngo-blue" />
                <span className="text-gray-400">info@nayiumang.org</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Nayi Umang. All rights reserved. | 
            <Button variant="ghost" className="text-gray-400 hover:text-white p-1 h-auto mx-1">
              Privacy Policy
            </Button> | 
            <Button variant="ghost" className="text-gray-400 hover:text-white p-1 h-auto mx-1">
              Terms of Service
            </Button>
          </p>
        </div>
      </div>
    </footer>
  );
}
