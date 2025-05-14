
import { Camera, Video, Image, Film, Pencil, LineChart, Headphones, Instagram } from 'lucide-react';

const services = [
  {
    title: "Photography",
    icon: Camera,
    description: "Professional photography services tailored to capture your vision, from corporate events to artistic portfolios."
  },
  {
    title: "Videography",
    icon: Video,
    description: "Dynamic video production services, creating compelling visual stories that engage and inspire your audience."
  },
  {
    title: "Graphic Design",
    icon: Image,
    description: "Creative graphic design solutions that communicate your brand message with clarity and visual impact."
  },
  {
    title: "Video Editing & Animation",
    icon: Film,
    description: "Expert post-production services transforming raw footage into polished, professional final products."
  },
  {
    title: "Content Creation",
    icon: Pencil,
    description: "Strategic content creation combining visual assets and messaging for maximum engagement."
  },
  {
    title: "Digital Marketing",
    icon: LineChart,
    description: "Data-driven digital marketing strategies to elevate your brand's online presence and reach."
  },
  {
    title: "Media Support",
    icon: Headphones,
    description: "Comprehensive media support services to ensure your projects run smoothly from concept to completion."
  },
  {
    title: "Social Media Management",
    icon: Instagram,
    description: "End-to-end social media management, building community and driving engagement across platforms."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Our Services</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700">
            We offer a comprehensive suite of creative services designed to elevate your brand and captivate your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="p-8 flex flex-col items-center text-center h-full relative overflow-hidden">
                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-4">
                  <service.icon className="h-16 w-16 mb-6 text-allison-dark transition-all duration-300 group-hover:text-white" />
                  <h3 className="text-xl font-medium mb-4 transition-all duration-300 group-hover:text-white">{service.title}</h3>
                </div>
                
                <div className="absolute inset-0 bg-allison-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center p-6">
                  <p className="text-white">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
