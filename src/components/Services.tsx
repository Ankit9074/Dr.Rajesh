import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Internal Medicine",
    description:
      "Management of general medical conditions as a physician in internal medicine.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-medical-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Heart Failure",
    description:
      "Specialized care and evidence-based treatment plans for patients with heart failure to enhance cardiac function and quality of life.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-medical-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8a7 7 0 0114 0c0 4-7 11-7 11S3 12 3 8z"
        />
      </svg>
    ),
  },
 {
  title: "Preventive Cardiology",
  description:
    "Focused on reducing the risk of heart disease through early detection, lifestyle modification, and proactive management of risk factors.",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-medical-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8a7 7 0 0114 0c0 4-7 11-7 11S3 12 3 8z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 11l2 2 4-4"
      />
    </svg>
  ),
},
 {
  title: "Non-Invasive Cardiology",
  description:
    "Techniques like ECHO, TEE, stress testing, and TMT to assess heart health without surgical intervention.",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-medical-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8h16M4 16h16M4 12h4m4 0h4m4 0h.01"
      />
    </svg>
  ),
}
,
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="text-medical-700">
              Specialization and Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive healthcare services focused on improving your health
            and quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
                <Button
                  asChild
                  variant="link"
                  className="mt-4 p-0 text-medical-700 hover:text-medical-800"
                >
                  <Link
                    to={`/services#${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-medical-600 hover:bg-medical-700 text-white"
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
