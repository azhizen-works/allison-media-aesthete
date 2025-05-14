
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Azhizen Media</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up order-2 lg:order-1">
            <h3 className="text-3xl font-playfair mb-6 text-allison-dark relative after:content-[''] after:block 
            after:w-16 after:h-0.5 after:bg-allison-dark after:mt-4">Our Story</h3>
            
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              Founded with a vision to redefine visual storytelling, Azhizen Media has evolved from a passionate 
              photography studio to a full-service creative powerhouse. Our journey began with a simple mission: 
              to capture authentic moments and transform them into compelling visual narratives.
            </p>
            
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              Today, we bring together a diverse team of visionaries, technicians, and strategists who share 
              a common purpose: to create impactful visual content that resonates deeply with audiences 
              and delivers meaningful results for our clients.
            </p>
            
            <div className="border-l-4 border-allison-dark pl-6 my-8">
              <p className="text-xl font-playfair italic text-allison-dark">
                "We don't just create images and videos – we craft visual experiences that tell your unique story."
              </p>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              What distinguishes us is our unwavering commitment to excellence, our collaborative approach, 
              and our ability to see beyond the obvious to capture the extraordinary in every project.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <AspectRatio ratio={3/4}>
                  <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                    alt="Azhizen Media team" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                    alt="Creative process" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                    alt="Photography equipment" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <AspectRatio ratio={3/4}>
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Client meeting" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
