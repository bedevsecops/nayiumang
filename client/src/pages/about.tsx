import { Link } from "wouter";
import { GraduationCap, Heart, Home as HomeIcon, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const programs = [
    {
      icon: GraduationCap,
      title: "शैक्षणिक मार्गदर्शन",
      description: "मुलांसाठी मोफत शिक्षण मार्गदर्शन, परीक्षेची तयारी, करिअर काउंसलिंग आणि शिष्यवृत्तीची माहिती. तरुणांना योग्य दिशा दाखवून त्यांच्या स्वप्नांना वास्तव बनवण्यात मदत करतो.",
      color: "text-ngo-blue bg-blue-50"
    },
    {
      icon: Heart,
      title: "भावनिक आधार व सल्ला", 
      description: "जीवनातील कठीण परिस्थितीत भावनिक आधार, कुटुंबीय समस्यांचे निराकरण, मानसिक तणावामुक्ती आणि आत्मविश्वास वाढवणे. योग्य सल्लागारांकडे पाठवणे.",
      color: "text-ngo-green bg-green-50"
    },
    {
      icon: HomeIcon,
      title: "संसाधन जुळवणूक",
      description: "शिक्षण साहित्य, कपडे, अन्नधान्य गोळा करून गरजू कुटुंबांना वितरण. सरकारी योजनांची माहिती देणे आणि अर्ज भरण्यात मदत करणे.",
      color: "text-ngo-orange bg-orange-50"
    },
    {
      icon: Leaf,
      title: "कौशल्य विकास",
      description: "मोफत कॉम्प्यूटर ट्रेनिंग, इंग्रजी भाषा, हातकाम, कुकिंग, ड्रायव्हिंग आणि इतर व्यावसायिक कौशल्यांचे प्रशिक्षण ज्यामुळे रोजगार मिळण्यास मदत होते.",
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
                आमचे काम मार्गदर्शन, भावनिक आधार, कौशल्य विकास आणि संसाधन सहायताच्या क्षेत्रात आहे. आम्ही पैशांची मदत न करता लोकांना स्वावलंबी बनवण्यासाठी योग्य दिशा दाखवतो आणि त्यांच्या समस्यांचे व्यावहारिक उपाय सुचवतो.
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
