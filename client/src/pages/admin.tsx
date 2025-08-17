import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Heart, 
  DollarSign, 
  Calendar, 
  Mail, 
  Eye, 
  Edit, 
  Trash2,
  Plus,
  Download,
  Search,
  Filter,
  LogOut,
  UserPlus
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocation, Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

interface Volunteer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interests: string[];
  availability: string;
  message?: string;
  createdAt: string;
}

interface Donation {
  id: string;
  amount: number;
  donationType: string;
  designation: string;
  paymentMethod: string;
  donorEmail?: string;
  donorName?: string;
  createdAt: string;
}

export default function AdminPanel() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (!isAuthenticated) {
      setLocation("/admin-login");
      return;
    }
    
    fetchData();
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    setLocation("/admin-login");
  };

  const fetchData = async () => {
    try {
      const [volunteersRes, donationsRes] = await Promise.all([
        fetch('/api/volunteers'),
        fetch('/api/donations')
      ]);
      
      if (volunteersRes.ok) {
        const volunteersData = await volunteersRes.json();
        setVolunteers(volunteersData);
      }
      
      if (donationsRes.ok) {
        const donationsData = await donationsRes.json();
        setDonations(donationsData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteVolunteer = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete ${name}? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/volunteers/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setVolunteers(volunteers.filter(v => v.id !== id));
        toast({
          title: "Success",
          description: "Volunteer deleted successfully",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to delete volunteer",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete volunteer",
        variant: "destructive",
      });
    }
  };

  const handleDeleteDonation = async (id: string, amount: number) => {
    if (!confirm(`Are you sure you want to delete this donation of ₹${(amount / 100).toLocaleString()}? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/donations/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDonations(donations.filter(d => d.id !== id));
        toast({
          title: "Success",
          description: "Donation deleted successfully",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to delete donation",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete donation",
        variant: "destructive",
      });
    }
  };

  const handleDeleteAdmin = async (id: string, name: string, role: string) => {
    if (role === "Super Admin") {
      toast({
        title: "Error",
        description: "Super Admin users cannot be deleted",
        variant: "destructive",
      });
      return;
    }

    if (!confirm(`Are you sure you want to delete ${name}? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Admin user deleted successfully",
        });
        // Refresh admin users list
        fetchData();
      } else {
        toast({
          title: "Error",
          description: "Failed to delete admin user",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete admin user",
        variant: "destructive",
      });
    }
  };

  const filteredVolunteers = volunteers.filter(volunteer => {
    const matchesSearch = 
      volunteer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      volunteer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      volunteer.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);
  const recentVolunteers = volunteers.slice(0, 5);
  const recentDonations = donations.slice(0, 5);

  const stats = [
    {
      title: "Total Volunteers",
      value: volunteers.length,
      icon: Users,
      color: "bg-blue-500",
      change: "+12% from last month"
    },
    {
      title: "Total Donations",
      value: `₹${(totalDonations / 100).toLocaleString()}`,
      icon: DollarSign,
      color: "bg-green-500",
      change: "+8% from last month"
    },
    {
      title: "Active Programs",
      value: "3",
      icon: Heart,
      color: "bg-orange-500",
      change: "2 community kitchens"
    },
    {
      title: "Pending Reviews",
      value: volunteers.filter(v => new Date(v.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length,
      icon: Calendar,
      color: "bg-purple-500",
      change: "New applications"
    }
  ];

  if (loading) {
    return (
      <div className="pt-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading admin panel...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600 mt-1">Manage volunteers, donations, and programs</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="flex items-center text-red-600 hover:text-red-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                      </div>
                      <div className={`${stat.color} p-3 rounded-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="volunteers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="volunteers" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Volunteers
            </TabsTrigger>
            <TabsTrigger value="donations" className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              Donations
            </TabsTrigger>
            <TabsTrigger value="programs" className="flex items-center">
              <Heart className="h-4 w-4 mr-2" />
              Programs
            </TabsTrigger>
            <TabsTrigger value="admins" className="flex items-center">
              <UserPlus className="h-4 w-4 mr-2" />
              Admin Users
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Volunteers Tab */}
          <TabsContent value="volunteers" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Volunteer Management</CardTitle>
                  <div className="flex space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search volunteers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Interests</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Availability</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredVolunteers.map((volunteer) => (
                        <tr key={volunteer.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium text-gray-900">
                                {volunteer.firstName} {volunteer.lastName}
                              </p>
                              <p className="text-sm text-gray-500">{volunteer.phone}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-900">{volunteer.email}</td>
                          <td className="py-3 px-4">
                            <div className="flex flex-wrap gap-1">
                              {volunteer.interests.slice(0, 2).map((interest, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {interest}
                                </Badge>
                              ))}
                              {volunteer.interests.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{volunteer.interests.length - 2} more
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-900">{volunteer.availability}</td>
                          <td className="py-3 px-4">
                            <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {new Date(volunteer.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="text-red-600 hover:text-red-700"
                                onClick={() => handleDeleteVolunteer(volunteer.id, `${volunteer.firstName} ${volunteer.lastName}`)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Donations Tab */}
          <TabsContent value="donations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Donation Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Donor</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Designation</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Payment</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.map((donation) => (
                        <tr key={donation.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium text-gray-900">
                                {donation.donorName || 'Anonymous'}
                              </p>
                              <p className="text-sm text-gray-500">{donation.donorEmail}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 font-medium text-gray-900">
                            ₹{(donation.amount / 100).toLocaleString()}
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant={donation.donationType === 'monthly' ? 'default' : 'secondary'}>
                              {donation.donationType}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-gray-900">{donation.designation}</td>
                          <td className="py-3 px-4 text-gray-900">{donation.paymentMethod}</td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {new Date(donation.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="text-red-600 hover:text-red-700"
                                onClick={() => handleDeleteDonation(donation.id, donation.amount)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Programs Tab */}
          <TabsContent value="programs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Program Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Community Kitchen Initiative",
                      status: "Active",
                      volunteers: 45,
                      beneficiaries: "10,000+",
                      progress: 85
                    },
                    {
                      title: "Child Nutrition Program",
                      status: "Active",
                      volunteers: 32,
                      beneficiaries: "5,000+",
                      progress: 72
                    },
                    {
                      title: "Food Security & Sustainability",
                      status: "Planning",
                      volunteers: 18,
                      beneficiaries: "2,000+",
                      progress: 45
                    }
                  ].map((program, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-900">{program.title}</h3>
                          <Badge variant={program.status === 'Active' ? 'default' : 'secondary'}>
                            {program.status}
                          </Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Volunteers:</span>
                            <span className="font-medium">{program.volunteers}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Beneficiaries:</span>
                            <span className="font-medium">{program.beneficiaries}</span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progress:</span>
                              <span className="font-medium">{program.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-orange-500 h-2 rounded-full transition-all"
                                style={{ width: `${program.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admin Users Tab */}
          <TabsContent value="admins" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Admin User Management</CardTitle>
                  <Link href="/admin-register">
                    <Button className="bg-orange-500 hover:bg-orange-600 flex items-center">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add New Admin
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Username</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Role</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Created</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: "1",
                          fullName: "Super Administrator",
                          username: "admin",
                          email: "admin@nayiumang.com",
                          role: "Super Admin",
                          status: "Active",
                          createdAt: "2024-01-15"
                        },
                        {
                          id: "2",
                          fullName: "Program Manager",
                          username: "program_manager",
                          email: "programs@nayiumang.com",
                          role: "Admin",
                          status: "Active",
                          createdAt: "2024-02-01"
                        },
                        {
                          id: "3",
                          fullName: "Volunteer Coordinator",
                          username: "volunteer_coord",
                          email: "volunteers@nayiumang.com",
                          role: "Moderator",
                          status: "Active",
                          createdAt: "2024-02-15"
                        },
                        {
                          id: "4",
                          fullName: "Finance Manager",
                          username: "finance_mgr",
                          email: "finance@nayiumang.com",
                          role: "Admin",
                          status: "Inactive",
                          createdAt: "2024-01-20"
                        }
                      ].map((admin) => (
                        <tr key={admin.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <p className="font-medium text-gray-900">{admin.fullName}</p>
                          </td>
                          <td className="py-3 px-4 text-gray-900">{admin.username}</td>
                          <td className="py-3 px-4 text-gray-900">{admin.email}</td>
                          <td className="py-3 px-4">
                            <Badge 
                              variant={
                                admin.role === "Super Admin" ? "default" : 
                                admin.role === "Admin" ? "secondary" : "outline"
                              }
                            >
                              {admin.role}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge 
                              className={admin.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                            >
                              {admin.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {new Date(admin.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="text-red-600 hover:text-red-700"
                                onClick={() => handleDeleteAdmin(admin.id, admin.fullName, admin.role)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>New volunteer registrations</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Donation confirmations</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Weekly reports</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Data Management</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        Export all data
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Mail className="h-4 w-4 mr-2" />
                        Backup database
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
