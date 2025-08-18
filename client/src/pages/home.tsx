import { Link } from "wouter";
import { Eye, Target, Users, GraduationCap, Heart, Home as HomeIcon, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VolunteerCard from "@/components/volunteer-card";

export default function Home() {
  const volunteers = [
    {
      name: "Sarah Johnson",
      role: "Education Coordinator",
      description: "Passionate about childhood education and literacy programs. Sarah has been with us for 3 years, leading our community learning initiatives.",
      imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Michael Chen",
      role: "Community Outreach",
      description: "Dedicated to food security and nutrition programs. Michael organizes food drives and connects families with essential resources.",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Dr. Priya Patel",
      role: "Healthcare Director",
      description: "Medical professional providing healthcare services to underserved communities. Dr. Patel leads our mobile health clinics.",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "David Rodriguez",
      role: "Skills Development",
      description: "Technology instructor focusing on digital literacy and job training programs for young adults seeking employment opportunities.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const impactStats = [
    { icon: Users, value: "25,000+", label: "Lives Impacted", color: "text-ngo-blue bg-ngo-blue" },
    { icon: GraduationCap, value: "500+", label: "Students Educated", color: "text-ngo-green bg-ngo-green" },
    { icon: HomeIcon, value: "150+", label: "Families Housed", color: "text-ngo-orange bg-ngo-orange" },
    { icon: Heart, value: "75+", label: "Health Programs", color: "text-purple-600 bg-purple-600" }
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hope Foundation</h1>
            <p className="text-xl md:text-2xl text-blue-100">Building Better Communities Together</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated to creating positive change in communities through sustainable development and social empowerment.
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
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To create a world where every individual has access to basic necessities, education, and opportunities for growth. We envision communities that are self-sufficient, resilient, and thriving with dignity and hope.
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
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To empower communities through education, healthcare, and sustainable development programs. We work hand-in-hand with local partners to implement solutions that create lasting positive impact.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Volunteers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to making a difference in their communities.
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
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Together, we're creating meaningful change in communities around the world.
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
