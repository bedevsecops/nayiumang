import { Link } from "wouter";
import { Eye, Target, Users, GraduationCap, Heart, Home as HomeIcon, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VolunteerCard from "@/components/volunteer-card";

export default function Home() {
  const volunteers = [
    {
      name: "सुनिता देशमुख",
      role: "मार्गदर्शन समन्वयक",
      description: "शिक्षण आणि व्यक्तिमत्व विकासाबाबत उत्कट आस्था असलेल्या सुनिता गेली ३ वर्षे समुदायातील लोकांना योग्य दिशा दाखवत आहेत.",
      imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "राहुल कुलकर्णी",
      role: "समुदाय संपर्क",
      description: "गरजू लोकांसाठी आवश्यक संसाधने जुळवून देण्यात तज्ञ. राहुल नेहमी समुदायातील समस्या सोडवण्यासाठी पुढे राहतो.",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "डॉ. प्रिया शर्मा",
      role: "आरोग्य सल्लागार",
      description: "वैद्यकीय व्यावसायिक म्हणून डॉ. प्रिया गरीब समुदायाला आरोग्य सेवा आणि योग्य सल्ला देण्याचे काम करतात.",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "अमित जाधव",
      role: "कौशल्य विकास",
      description: "तरुणांसाठी तंत्रज्ञान शिक्षण आणि रोजगार प्रशिक्षणाचे काम करणारे अमित नवीन संधी निर्माण करण्यात तज्ञ आहेत.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const impactStats = [
    { icon: Users, value: "१५,०००+", label: "लोकांना मदत केली", color: "text-ngo-blue bg-ngo-blue" },
    { icon: GraduationCap, value: "८००+", label: "मार्गदर्शन दिले", color: "text-ngo-green bg-ngo-green" },
    { icon: HomeIcon, value: "३००+", label: "कुटुंबांना आधार", color: "text-ngo-orange bg-ngo-orange" },
    { icon: Heart, value: "१२०+", label: "सहायता कार्यक्रम", color: "text-purple-600 bg-purple-600" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ngo-blue to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-3xl" size={48} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">नवी उमंग</h1>
            <p className="text-xl md:text-2xl text-blue-100">एकत्र येऊन समुदायाची सेवा करूया</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">आमचे ध्येय</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              गरिबांना आर्थिक मदत न करता त्यांच्या जीवनातील कठीण परिस्थितीत मार्गदर्शन, संसाधने आणि भावनिक आधार देणे.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-none shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-ngo-blue rounded-lg flex items-center justify-center mr-4">
                    <Eye className="text-white text-xl" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">आमची दृष्टी</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  असे समाज निर्माण करणे ज्यात प्रत्येक व्यक्तीला योग्य मार्गदर्शन, शिक्षण आणि वाढीची संधी मिळेल. आम्ही अशा समुदायांची कल्पना करतो ज्या स्वयंपूर्ण, मजबूत आणि आशेने भरलेल्या असतील.
                </p>
              </CardContent>
            </Card>
            
            {/* Mission */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-none shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-ngo-green rounded-lg flex items-center justify-center mr-4">
                    <Target className="text-white text-xl" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">आमचे कार्य</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  गरीब आणि वंचित लोकांना जीवनातील कठीण परिस्थितीत मार्गदर्शन, भावनिक आधार आणि आवश्यक संसाधने पुरवणे. आम्ही समुदायिक सहकार्याने चिरकाल टिकणारा सकारात्मक बदल घडवतो.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">आमच्या स्वयंसेवकांना भेटा</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              समाजसेवेसाठी समर्पित असलेले आणि समुदायात बदल घडवण्यासाठी कटिबद्ध व्यक्ती.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteers.map((volunteer, index) => (
              <VolunteerCard key={index} {...volunteer} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/register">
              <Button className="bg-ngo-orange hover:bg-orange-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl">
                आमच्या संघात सामील व्हा
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">आमचा प्रभाव</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              एकत्र मिळून आम्ही महाराष्ट्रातील समुदायांमध्ये अर्थपूर्ण बदल घडवत आहोत.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="text-white text-2xl" size={32} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color.split(' ')[0]}`}>{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
