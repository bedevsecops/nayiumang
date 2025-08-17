import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Side - Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Nayiumang</span>
            </div>
          </div>

          {/* Center - Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about" className="hover:text-orange-500 transition-colors">Our story</Link></li>
                <li><Link href="/programs" className="hover:text-orange-500 transition-colors">Projects</Link></li>
                <li><Link href="/about" className="hover:text-orange-500 transition-colors">Whom we help</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/gallery" className="hover:text-orange-500 transition-colors">Blogs</Link></li>
                <li><Link href="/gallery" className="hover:text-orange-500 transition-colors">Videos</Link></li>
                <li><Link href="/events" className="hover:text-orange-500 transition-colors">In Media</Link></li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Location</h3>
              <p className="text-gray-600">1/2-8 kormangala, Bangalore, 760089</p>
            </div>
          </div>

          {/* Right Side - Social Media & Contact */}
          <div className="space-y-6">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter Your Mail" 
                  className="bg-orange-500 text-white placeholder:text-orange-200 border-orange-500 focus:border-orange-600 focus:ring-orange-600"
                />
                <Button 
                  className="bg-orange-500 text-white px-3 py-2 ml-2 hover:bg-orange-600 transition-colors"
                  size="sm"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">© 2023 www.nayiumang.com. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
