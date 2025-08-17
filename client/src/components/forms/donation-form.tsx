import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertDonationSchema } from "@shared/schema";
import { CreditCard, Shield, Lock } from "lucide-react";

const donationFormSchema = insertDonationSchema.extend({
  amount: z.number().min(1, "Amount must be at least $1"),
  donorName: z.string().optional(),
  donorEmail: z.string().email("Please enter a valid email address").optional()
});

type DonationFormData = z.infer<typeof donationFormSchema>;

const predefinedAmounts = [25, 50, 100, 250];

const designationOptions = [
  { value: "general", label: "Where Most Needed" },
  { value: "education", label: "Education Programs" },
  { value: "healthcare", label: "Healthcare Initiatives" },
  { value: "environment", label: "Environmental Projects" },
  { value: "emergency", label: "Emergency Relief Fund" }
];

const paymentMethods = [
  { value: "card", label: "Credit/Debit Card", icon: CreditCard },
  { value: "paypal", label: "PayPal", icon: Shield },
  { value: "bank", label: "Bank Transfer", icon: Lock }
];

export default function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<DonationFormData>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      amount: 0,
      donationType: "one-time",
      designation: "general",
      paymentMethod: "card",
      donorName: "",
      donorEmail: ""
    }
  });

  const donationMutation = useMutation({
    mutationFn: (data: DonationFormData) => 
      apiRequest("POST", "/api/donations", {
        ...data,
        amount: Math.round(data.amount * 100) // Convert to cents
      }),
    onSuccess: () => {
      toast({
        title: "Thank You for Your Donation!",
        description: "Your contribution will make a real difference in our communities.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/donations"] });
    },
    onError: () => {
      toast({
        title: "Donation Failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: DonationFormData) => {
    setIsSubmitting(true);
    donationMutation.mutate(data);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    form.setValue("amount", amount);
  };

  const handleCustomAmount = (value: string) => {
    const amount = parseFloat(value) || 0;
    setSelectedAmount(null);
    form.setValue("amount", amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-soft-gray shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-dark-slate">Choose Your Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Donation Amount */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Donation Amount</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant="outline"
                          className={`py-3 px-4 text-center transition-all ${
                            selectedAmount === amount
                              ? "border-forest bg-forest text-white"
                              : "border-gray-200 hover:border-forest hover:bg-forest hover:text-white"
                          }`}
                          onClick={() => handleAmountSelect(amount)}
                          data-testid={`button-amount-${amount}`}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-4 top-3 text-gray-500">$</span>
                        <Input
                          type="number"
                          placeholder="Custom amount"
                          className="pl-8"
                          onChange={(e) => handleCustomAmount(e.target.value)}
                          data-testid="input-custom-amount"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Donation Type */}
              <FormField
                control={form.control}
                name="donationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Donation Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                        data-testid="radio-group-donation-type"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="one-time" id="one-time" />
                          <label htmlFor="one-time">One-time</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <label htmlFor="monthly">Monthly</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Designation */}
              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Direct Your Donation</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-designation">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {designationOptions.map((option) => (
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

              {/* Payment Method */}
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <div className="grid grid-cols-3 gap-3">
                      {paymentMethods.map((method) => {
                        const IconComponent = method.icon;
                        return (
                          <Button
                            key={method.value}
                            type="button"
                            variant="outline"
                            className={`py-4 px-4 flex items-center justify-center transition-all ${
                              field.value === method.value
                                ? "border-forest bg-forest/5"
                                : "border-gray-200 hover:border-forest"
                            }`}
                            onClick={() => field.onChange(method.value)}
                            data-testid={`button-payment-${method.value}`}
                          >
                            <IconComponent className="h-6 w-6" />
                          </Button>
                        );
                      })}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Optional Donor Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="donorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          data-testid="input-donor-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="donorEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your.email@example.com" 
                          {...field} 
                          data-testid="input-donor-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-warm-orange text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 transition-colors flex items-center justify-center"
                data-testid="button-donate-securely"
              >
                <Lock className="mr-2 h-5 w-5" />
                {isSubmitting ? "Processing..." : "Donate Securely"}
              </Button>

              {/* Trust Badges */}
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-forest mr-1" />
                  SSL Secure
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-forest rounded-full mr-1 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  501(c)(3) Tax Exempt
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
