import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-medical-700">Dr. Rajesh Karanjiya</span>
          </h2>
          <p className="text-lg text-gray-600">
            Dedicated to improving heart health through expert diagnostics, compassionate care, and evidence-based treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-medical-500 rounded-full opacity-10 blur-3xl transform rotate-12"></div>
            <img
              src="https://images.jdmagicbox.com/v2/comp/indore/n7/0731px731.x731.240808124811.b4n7/catalogue/karanjiya-clinic-and-echo-centre-sapna-sangeeta-road-indore-2d-echo-test-services-1xtbk8lswb.jpg"
              alt="Dr. Rajesh Karanjiya"
              className="relative rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-gray-900">Expertise in Heart Health</h3>
            <p className="text-gray-600">
              Dr. Rajesh Karanjiya is a highly skilled and compassionate Non-Invasive Cardiologist with over 12 years of experience in diagnosing cardiovascular diseases. He specializes in advanced cardiac diagnostic techniques and personalized care tailored to each patient’s unique needs.
            </p>
            <p className="text-gray-600">
              Currently associated with Saket and Max Hospital Patparganj, and serving as a Senior Resident in Fortis Hospital Delhi, he also works as a consulting physician and heart failure expert. He collaborates with multidisciplinary teams to ensure comprehensive care and long-term wellness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-medical-50 p-4 rounded-lg">
                <h4 className="font-semibold text-medical-700">Specializations</h4>
                <p className="text-gray-600 text-sm">Heart Failure, Non-Invasive Cardiology</p>
              </div>
              <div className="bg-medical-50 p-4 rounded-lg">
                <h4 className="font-semibold text-medical-700">Diagnostics</h4>
                <p className="text-gray-600 text-sm">Echo, ECG, TEE, DSE, Holter, ABPM, Strain Imaging</p>
              </div>
              <div className="bg-medical-50 p-4 rounded-lg">
                <h4 className="font-semibold text-medical-700">Experience</h4>
                <p className="text-gray-600 text-sm">12+ Years in Cardiac Care</p>
              </div>
              <div className="bg-medical-50 p-4 rounded-lg">
                <h4 className="font-semibold text-medical-700">Community Work</h4>
                <p className="text-gray-600 text-sm">Cardiac Awareness & Lifestyle Programs</p>
              </div>
            </div>

            <Button asChild className="mt-6 bg-medical-600 hover:bg-medical-700 text-white">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
