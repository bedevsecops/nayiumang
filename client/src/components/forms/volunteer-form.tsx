import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertVolunteerSchema } from "@shared/schema";
import { Heart, Users, Utensils } from "lucide-react";
import { useLocation } from "wouter";

const volunteerFormSchema = insertVolunteerSchema.extend({
  interests: z.array(z.string()).min(1, "Please select at least one area of interest")
});

type VolunteerFormData = z.infer<typeof volunteerFormSchema>;

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

export default function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const form = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerFormSchema),
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

  const volunteerMutation = useMutation({
    mutationFn: (data: VolunteerFormData) => apiRequest("POST", "/api/volunteers", data),
    onSuccess: () => {
      // Redirect to registration success page instead of showing toast
      setLocation("/volunteer-registration");
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: VolunteerFormData) => {
    setIsSubmitting(true);
    volunteerMutation.mutate(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-white shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
            <Heart className="h-6 w-6 text-orange-500 mr-2" />
            Volunteer With Nayiumang
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
                          data-testid="input-first-name"
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
                          data-testid="input-last-name"
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
                        data-testid="input-email"
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
                        data-testid="input-phone"
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
                                  data-testid={`checkbox-${option.id}`}
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
                        <SelectTrigger data-testid="select-availability">
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
                        data-testid="textarea-message"
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
                data-testid="button-submit-volunteer"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
