import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Clock, Heart, Users } from "lucide-react";
import { Link } from "wouter";

const registrationFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
  availability: z.string().min(1, "Please select your availability"),
  message: z.string().optional()
});

type RegistrationFormData = z.infer<typeof registrationFormSchema>;

const interestOptions = [
  { id: "community-kitchen", label: "Community Kitchen Operations" },
  { id: "child-nutrition", label: "Child Nutrition Programs" }, 
  { id: "food-preparation", label: "Food Preparation & Cooking" },
  { id: "distribution", label: "Food Distribution" },
  { id: "fundraising", label: "Fundraising & Outreach" },
  { id: "fieldwork", label: "Field Work & Community Visits" }
];

const availabilityOptions = [
  { value: "weekly", label: "A few hours weekly" },
  { value: "monthly", label: "A few days monthly" },
  { value: "events", label: "Event-based" },
  { value: "flexible", label: "Flexible schedule" }
];

export default function VolunteerRegistration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interests: [],
      availability: "",
      message: ""
    }
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Send data to the API endpoint
      const response = await fetch('/api/volunteers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit registration');
      }

      // Registration successful
      setIsSubmitted(true);
    } catch (error) {
      console.error('Registration error:', error);
      // You could add error handling here, like showing a toast message
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 bg-white">
        {/* Success Section */}
        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white h-12 w-12" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Registration Successful!</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Thank you for registering with Nayiumang. Your volunteer application has been successfully submitted.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Registration Status */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
                  <CardContent className="p-12 text-center">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="text-white h-10 w-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration in Progress</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                      Our team is currently reviewing your application. You will receive an email confirmation 
                      within 2-3 business days with next steps and additional information.
                    </p>
                    
                    <div className="bg-white rounded-lg p-6 mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-orange-600 font-bold">1</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Application Review</h4>
                          <p className="text-sm text-gray-600">We'll review your skills and interests to find the best volunteer opportunity for you.</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-orange-600 font-bold">2</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Orientation Call</h4>
                          <p className="text-sm text-gray-600">We'll schedule a brief call to discuss your role and answer any questions.</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-orange-600 font-bold">3</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Start Volunteering</h4>
                          <p className="text-sm text-gray-600">Begin making a difference in children's lives through our community programs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/">
                        <Button 
                          className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                        >
                          Return to Home
                        </Button>
                      </Link>
                      <Link href="/get-involved">
                        <Button 
                          variant="outline"
                          className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-colors"
                        >
                          Learn More About Volunteering
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">While You Wait</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn more about our programs and the impact you'll be making as a volunteer with Nayiumang.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Community Kitchen Programs",
                  description: "Help prepare and distribute nutritious meals to underprivileged children in local communities.",
                  stats: "35+ kitchens operational"
                },
                {
                  icon: Users,
                  title: "Child Nutrition Initiatives",
                  description: "Support nutrition education and health monitoring programs for children and families.",
                  stats: "10,000+ children served"
                },
                {
                  icon: Clock,
                  title: "Flexible Volunteering",
                  description: "Choose from various time commitments and roles that fit your schedule and skills.",
                  stats: "500+ active volunteers"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow h-full">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="text-white h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                        <div className="text-orange-500 font-semibold">{item.stats}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-white h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Volunteer Registration</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join our mission to fight child hunger. Fill out the form below to register as a volunteer with Nayiumang.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white shadow-lg border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Heart className="h-6 w-6 text-orange-500 mr-2" />
                    Volunteer Registration Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your first name" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your last name" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Contact Fields */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your.email@example.com" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="+91 98765 43210" 
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
                            <FormLabel>Areas of Interest</FormLabel>
                            <div className="grid grid-cols-2 gap-3">
                              {interestOptions.map((option) => (
                                <FormField
                                  key={option.id}
                                  control={form.control}
                                  name="interests"
                                  render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(option.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, option.id])
                                              : field.onChange(
                                                  field.value?.filter((value) => value !== option.id)
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="text-sm font-normal">
                                        {option.label}
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Availability */}
                      <FormField
                        control={form.control}
                        name="availability"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Availability</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your availability" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {availabilityOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tell us about yourself</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Share your background, skills, or motivation to volunteer with Nayiumang..."
                                rows={4}
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Registration"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
