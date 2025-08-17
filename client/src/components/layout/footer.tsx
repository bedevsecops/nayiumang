import { Link } from "wouter";
import { Heart, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-slate text-white py-16" data-testid="footer-main">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-warm-orange rounded-full flex items-center justify-center">
                <Heart className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-bold">Hope Foundation</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating lasting change through community-driven programs that address education, 
              healthcare, and environmental challenges.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors"
                data-testid="social-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors cursor-pointer" data-testid="footer-link-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors cursor-pointer" data-testid="footer-link-programs">
                    Our Programs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/get-involved">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors cursor-pointer" data-testid="footer-link-get-involved">
                    Get Involved
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors cursor-pointer" data-testid="footer-link-events">
                    Events
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors cursor-pointer" data-testid="footer-link-gallery">
                    Gallery
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/donate">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors cursor-pointer" data-testid="footer-link-donate">
                    Donate
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/get-involved">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors cursor-pointer" data-testid="footer-link-volunteer">
                    Volunteer
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-warm-orange transition-colors" data-testid="footer-link-partnerships">
                  Corporate Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-warm-orange transition-colors" data-testid="footer-link-grants">
                  Grant Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-warm-orange transition-colors" data-testid="footer-link-reports">
                  Annual Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-warm-orange mt-1 h-5 w-5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Hope Street</p>
                  <p>Community City, CC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-warm-orange h-5 w-5 flex-shrink-0" />
                <a 
                  href="tel:+15551234567" 
                  className="text-gray-300 hover:text-warm-orange transition-colors"
                  data-testid="contact-phone"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-warm-orange h-5 w-5 flex-shrink-0" />
                <a 
                  href="mailto:info@hopefoundation.org" 
                  className="text-gray-300 hover:text-warm-orange transition-colors"
                  data-testid="contact-email"
                >
                  info@hopefoundation.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300">© {currentYear} Hope Foundation. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-warm-orange transition-colors" data-testid="footer-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-warm-orange transition-colors" data-testid="footer-terms">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-warm-orange transition-colors" data-testid="footer-transparency">
                Financial Transparency
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
