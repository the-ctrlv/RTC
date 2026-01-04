import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center relative overflow-hidden">
      {/* Large 404 Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h1 className="text-[200px] sm:text-[300px] lg:text-[600px] font-bold text-white leading-none select-none">
          404
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
          Oops!
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Page not found!
        </h3>
        <p className="text-md sm:text-xl text-gray-300 mb-12 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <Link to="/">
          <Button
            size="lg"
            className="bg-[#c3d533] hover:bg-[#c3d533]/90 text-black font-semibold px-10 py-6 text-lg"
          >
            Back home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
