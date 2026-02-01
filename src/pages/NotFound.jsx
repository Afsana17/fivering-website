import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
 const location = useLocation();

 useEffect(() => {
 console.error("404 Error: User attempted to access non-existent route:", location.pathname);
 }, [location.pathname]);

 return (
 <div className="min-h-screen flex items-center justify-center pt-20">
 <div className="text-center px-4">
 <h1 className="text-8xl font-bold gradient-text-gold mb-4">404</h1>
 <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
 <p className="text-muted-foreground mb-8 max-w-md mx-auto">
 The page you're looking for doesn't exist or has been moved.
 </p>
 <Link to="/" className="btn-primary">
 <Home size={18} />
 Back to Home
 </Link>
 </div>
 </div>
 );
};

export default NotFound;
