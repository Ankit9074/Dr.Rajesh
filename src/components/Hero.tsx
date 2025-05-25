import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
              <span className="text-medical-700">Dr. Rajesh Karanjiya</span>
              <br />
              Compassionate Care for Your Health
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Consultant – Internal Medicine & Non-Invasive Cardiology A heart
              failure expert with 12+ years of experience in advanced cardiac
              diagnostics like ECG, Echo, TEE, and Stress Testing. Known for
              precise, personalized care and a strong focus on heart disease
              prevention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-medical-600 hover:bg-medical-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/book">Book an Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-medical-600 text-medical-700 hover:bg-medical-50 transition-all duration-300"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            <div className="flex items-center pt-4">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white animate-fade-in"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white animate-fade-in delay-100"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white animate-fade-in delay-200"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <span className="text-gray-700 font-medium">
                  Trusted by 1000+ patients
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-full animate-fade-in">
            <div className="absolute inset-0 bg-medical-600 rounded-full opacity-10 blur-3xl transform -rotate-12 animate-pulse"></div>
            <img
              src="https://images.jdmagicbox.com/v2/comp/indore/n7/0731px731.x731.240808124811.b4n7/catalogue/karanjiya-clinic-and-echo-centre-sapna-sangeeta-road-indore-2d-echo-test-services-1xtbk8lswb.jpg"
              alt="Dr. Rajesh Karanjiya"
              className="relative rounded-3xl shadow-xl object-cover w-full h-[500px] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
