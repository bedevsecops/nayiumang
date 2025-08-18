import { Link } from "wouter";
import { GraduationCap, Heart, Home as HomeIcon, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const programs = [
    {
      icon: GraduationCap,
      title: "शैक्षणिक मार्गदर्शन",
      description: "साक्षरता कार्यक्रम, शिष्यवृत्तीच्या संधी आणि कौशल्य विकास कार्यशाळा ज्या व्यक्तींना स्थिर रोजगारासाठी तयार करतात.",
      color: "text-ngo-blue bg-blue-50"
    },
    {
      icon: Heart,
      title: "आरोग्य सेवा", 
      description: "फिरते दवाखाने, प्रतिबंधात्मक काळजी कार्यक्रम आणि आरोग्य शिक्षण जे समुदायाला दर्जेदार आरोग्य सेवा सुनिश्चित करते.",
      color: "text-ngo-green bg-green-50"
    },
    {
      icon: HomeIcon,
      title: "निवारा सहायता",
      description: "आपत्कालीन निवारा कार्यक्रम आणि टिकाऊ गृहनिर्माण प्रकल्प जे गरजू कुटुंबांसाठी सुरक्षित, परवडणारी घरे प्रदान करतात.",
      color: "text-ngo-orange bg-orange-50"
    },
    {
      icon: Leaf,
      title: "पर्यावरण प्रकल्प",
      description: "सामुदायिक बागकाम, नूतनीकरणक्षम ऊर्जा उपक्रम आणि पर्यावरण शिक्षण जे शाश्वत जीवनशैलीला प्रोत्साहन देते.",
      color: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">नवी उमंग बद्दल</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            २०१५ मध्ये स्थापन झालेली नवी उमंग ही एक अशी संस्था आहे जी महाराष्ट्रातील गरीब आणि वंचित समुदायाला आर्थिक मदत न करता त्यांच्या जीवनातील कठीण परिस्थितीत सहाय्य करण्यास वचनबद्ध आहे.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">आमची कथा</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                नवी उमंग एका साध्या विश्वासातून जन्माला आली: प्रत्येक व्यक्तीला योग्य मार्गदर्शन, शिक्षण आणि वाढीच्या संधी मिळण्याचा हक्क आहे. काही उत्साही स्वयंसेवकांच्या छोट्या गटापासून सुरुवात झालेली ही संस्था आता हजारो कुटुंबांना सेवा देणारी संघटना बनली आहे.
              </p>
              <p className="text-gray-700 leading-relaxed">
                आमचे काम शिक्षण, आरोग्य, निवारा आणि आर्थिक विकासाच्या क्षेत्रात पसरलेले आहे. संकटाच्या वेळी तात्काळ मदत देताना समुदायाला स्वावलंबी बनवण्यावर आमचा विश्वास आहे.
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
              <h3 className="text-2xl font-bold mb-4">आमच्या मिशनमध्ये सामील व्हा</h3>
              <p className="text-blue-100 mb-6">
                स्वयंसेवा, जागरुकता किंवा इतर मार्गांनी सामील होऊन तुम्ही समाजात फरक घडवू शकता.
              </p>
              <Link href="/register">
                <Button className="bg-white text-ngo-blue px-8 py-3 hover:bg-gray-100">
                  आजच सुरुवात करा
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
