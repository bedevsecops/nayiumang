import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Programs from "@/pages/programs";
import GetInvolved from "@/pages/get-involved";
import Donate from "@/pages/donate";
import Events from "@/pages/events";
import Gallery from "@/pages/gallery";
import VolunteerRegistration from "@/pages/volunteer-registration";
import AdminPanel from "@/pages/admin";
import AdminLogin from "@/pages/admin-login";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs" component={Programs} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route path="/donate" component={Donate} />
          <Route path="/events" component={Events} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/volunteer-registration" component={VolunteerRegistration} />
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/admin" component={AdminPanel} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
