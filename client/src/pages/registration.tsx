import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Check, X, Loader2 } from "lucide-react";
import { insertRegistrationSchema, type InsertRegistration } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Registration() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertRegistration>({
    resolver: zodResolver(insertRegistrationSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      interests: [],
    },
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: InsertRegistration) => {
      const response = await apiRequest("POST", "/api/registrations", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "नोंदणी यशस्वी झाली!",
        description: "नवी उमंग मध्ये सामील झाल्याबद्दल धन्यवाद. तुम्हाला लवकरच पुष्टीकरण SMS मिळेल.",
      });
      // Scroll to success message
      setTimeout(() => {
        document.getElementById('success-message')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    },
    onError: (error: any) => {
      console.error("Registration error:", error);
      toast({
        title: "नोंदणी अयशस्वी झाली",
        description: "कृपया तुमची माहिती तपासून पुन्हा प्रयत्न करा.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertRegistration) => {
    registrationMutation.mutate(data);
  };

  const interestOptions = [
    { id: "education", label: "शिक्षण" },
    { id: "healthcare", label: "आरोग्य" },
    { id: "housing", label: "निवारा" },
    { id: "environment", label: "पर्यावरण" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">आमच्या समुदायात सामील व्हा</h1>
          <p className="text-lg text-gray-600">
            स्वयंसेवक म्हणून नोंदणी करा आणि समुदायात सकारात्मक बदल घडवण्यात मदत करा.
          </p>
        </div>
        
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        पूर्ण नाव <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="तुमचे पूर्ण नाव लिहा"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ngo-blue focus:border-ngo-blue"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Mobile Number */}
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        मोबाइल नंबर <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="१०-अंकी मोबाइल नंबर लिहा"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ngo-blue focus:border-ngo-blue"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        ईमेल पत्ता <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="तुमचा ईमेल पत्ता लिहा"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ngo-blue focus:border-ngo-blue"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Areas of Interest */}
                <FormField
                  control={form.control}
                  name="interests"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        आवडीची क्षेत्रे <span className="text-gray-500">(ऐच्छिक)</span>
                      </FormLabel>
                      <div className="grid grid-cols-2 gap-3">
                        {interestOptions.map((option) => (
                          <FormField
                            key={option.id}
                            control={form.control}
                            name="interests"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={option.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, option.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== option.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm text-gray-700 font-normal">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-ngo-blue hover:bg-blue-700 text-white py-4 px-6 text-lg shadow-lg hover:shadow-xl"
                    disabled={registrationMutation.isPending}
                  >
                    {registrationMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        नोंदणी करत आहे...
                      </>
                    ) : (
                      "आता नोंदणी करा"
                    )}
                  </Button>
                </div>
                
                {/* Terms */}
                <div className="text-center text-sm text-gray-600">
                  नोंदणी करून तुम्ही नवी उमंग कडून एसएमएस सूचना आणि अपडेट प्राप्त करण्यास सहमती देत आहात.
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        {/* Success Message */}
        {isSuccess && (
          <Card id="success-message" className="bg-green-50 border-green-200 mt-8">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <Check className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800">नोंदणी यशस्वी झाली!</h3>
                  <p className="text-green-700">
                    नवी उमंग मध्ये सामील झाल्याबद्दल धन्यवाद. तुम्हाला लवकरच पुष्टीकरण SMS मिळेल.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
