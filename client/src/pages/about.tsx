import { Link } from "wouter";
import { GraduationCap, Heart, Home as HomeIcon, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Programs",
      description: "Literacy programs, scholarship opportunities, and skill development workshops that prepare individuals for sustainable employment.",
      color: "text-ngo-blue bg-blue-50"
    },
    {
      icon: Heart,
      title: "Healthcare Initiatives", 
      description: "Mobile health clinics, preventive care programs, and health education that ensure communities have access to quality healthcare.",
      color: "text-ngo-green bg-green-50"
    },
    {
      icon: HomeIcon,
      title: "Housing Support",
      description: "Emergency shelter programs and sustainable housing projects that provide safe, affordable homes for families in need.",
      color: "text-ngo-orange bg-orange-50"
    },
    {
      icon: Leaf,
      title: "Environmental Projects",
      description: "Community gardens, renewable energy initiatives, and environmental education that promote sustainable living practices.",
      color: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Hope Foundation</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Established in 2015, Hope Foundation is a non-profit organization committed to creating sustainable positive change in underserved communities worldwide.
          </p>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
            alt="Volunteers working together"
            className="rounded-xl shadow-lg w-full mb-8"
          />
          
          <Card className="bg-gray-50 border-none mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hope Foundation was born from a simple belief: that every individual deserves access to basic necessities, quality education, and opportunities for growth. What started as a small group of passionate volunteers has grown into a comprehensive organization serving thousands of families across multiple communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our work spans education, healthcare, housing, and economic development. We believe in empowering communities to become self-sufficient while providing immediate support during times of crisis.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className={`${program.color} border-none`}>
                  <CardContent className="p-6">
                    <h3 className={`text-xl font-bold mb-4 ${program.color.split(' ')[0]} flex items-center`}>
                      <IconComponent size={24} className="mr-3" />
                      {program.title}
                    </h3>
                    <p className="text-gray-700">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <Card className="bg-gradient-to-r from-ngo-blue to-blue-600 text-white border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-blue-100 mb-6">
                Whether through volunteering, donations, or spreading awareness, there are many ways to get involved and make a difference.
              </p>
              <Link href="/register">
                <Button className="bg-white text-ngo-blue px-8 py-3 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
