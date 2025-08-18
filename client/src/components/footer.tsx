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
              <span className="text-xl font-bold">नवी उमंग</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              शिक्षण, आरोग्य आणि शाश्वत विकासाद्वारे समुदायाला नवीन आशा आणि संधी देणे. एकत्र येऊन सकारात्मक बदल घडवणे.
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
            <h3 className="text-lg font-semibold mb-4">द्रुत दुवे</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                    मुख्यपृष्ठ
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                    आमच्याबद्दल
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                    नोंदणी
                  </Button>
                </Link>
              </li>
              <li>
                <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                  कार्यक्रम
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                  दान
                </Button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">संपर्क करा</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-ngo-blue mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  १२३ आशा रोड<br />पुणे, महाराष्ट्र ४११००१
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-ngo-blue" />
                <span className="text-gray-400">+91 98765 43210</span>
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
            © 2024 नवी उमंग. सर्व हक्क राखीव. | 
            <Button variant="ghost" className="text-gray-400 hover:text-white p-1 h-auto mx-1">
              गोपनीयता धोरण
            </Button> | 
            <Button variant="ghost" className="text-gray-400 hover:text-white p-1 h-auto mx-1">
              सेवा अटी
            </Button>
          </p>
        </div>
      </div>
    </footer>
  );
}
