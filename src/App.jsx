import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Sports from "./pages/Sports";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
 const [isDark, setIsDark] = useState(() => {
 if (typeof window !== 'undefined') {
 return localStorage.getItem('theme') === 'dark' ||
 (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme)').matches);
 }
 return true;
 });

 useEffect(() => {
 if (isDark) {
 document.documentElement.classList.add('dark');
 localStorage.setItem('theme', 'dark');
 } else {
 document.documentElement.classList.remove('dark');
 localStorage.setItem('theme', 'light');
 }
 }, [isDark]);

 const toggleTheme = () => setIsDark(!isDark);

 return (
 <QueryClientProvider client={queryClient}>
 <TooltipProvider>
 <Toaster />
 <Sonner />
 <BrowserRouter>
 <div className="min-h-screen flex flex-col">
 <Navbar isDark={isDark} toggleTheme={toggleTheme} />
 <div className="flex-1">
 <Routes>
 <Route path="/" element={<Index />} />
 <Route path="/about" element={<About />} />
 <Route path="/sports" element={<Sports />} />
 <Route path="/services" element={<Services />} />
 <Route path="/gallery" element={<Gallery />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="*" element={<NotFound />} />
 </Routes>
 </div>
 <Footer />
 <WhatsAppButton />
 </div>
 </BrowserRouter>
 </TooltipProvider>
 </QueryClientProvider>
 );
};

export default App;
