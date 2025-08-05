
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/ui/scroll-to-top";
import Index from "./pages/Index";
import HomeV1 from "./pages/HomeV1";
import HomeV2 from "./pages/HomeV2";
import HomeV3 from "./pages/HomeV3";
import HomeV4 from "./pages/HomeV4";
import HomeV5 from "./pages/HomeV5";
import About from "./pages/About";
import Services from "./pages/Services";
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import Packages from "./pages/Packages";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Help from "./pages/Help";
import Docs from "./pages/Docs";
import Community from "./pages/Community";
import Api from "./pages/Api";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/home-v1" element={<HomeV1 />} />
              <Route path="/home-v2" element={<HomeV2 />} />
              <Route path="/home-v3" element={<HomeV3 />} />
              <Route path="/home-v4" element={<HomeV4 />} />
              <Route path="/home-v5" element={<HomeV5 />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/listings/:slug" element={<ListingDetail />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/help" element={<Help />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/community" element={<Community />} />
              <Route path="/api" element={<Api />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
