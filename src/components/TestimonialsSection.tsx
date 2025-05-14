
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, Check, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    company: "Luxe Interiors",
    testimonial: "Azhizen Media transformed our brand imagery with their exceptional photography. Their team understood our aesthetic perfectly and delivered beyond our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    status: "Verified Client",
    project: "Brand Photography"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Vertex Studios",
    testimonial: "Working with Azhizen Media on our corporate videos was a seamless experience from start to finish. Their attention to detail and creative vision elevated our messaging.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    status: "Returning Client",
    project: "Corporate Video Series"
  },
  {
    id: 3,
    name: "Sarah Reynolds",
    company: "Boutique Fashion",
    testimonial: "The social media content created by Azhizen Media has significantly increased our engagement metrics. Their strategic approach to visual storytelling has been invaluable.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    status: "Verified Client",
    project: "Social Media Campaign"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Client Testimonials</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                        />
                        <span className="absolute -bottom-2 -right-2 bg-allison-dark text-white p-1 rounded-full">
                          <User className="w-4 h-4" />
                        </span>
                      </div>
                      <div className="ml-6">
                        <h4 className="font-playfair text-xl">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.company}</p>
                        <div className="flex mt-2">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-gray-700 italic text-lg">"{testimonial.testimonial}"</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-between items-center border-t border-gray-100 pt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="flex items-center text-green-600 mr-4">
                          <Check className="w-4 h-4 mr-1" />
                          {testimonial.status}
                        </span>
                        <span>{testimonial.project}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="p-2 border border-allison-dark hover:bg-allison-dark hover:text-allison-light transition-colors duration-300 rounded-full"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 border border-allison-dark hover:bg-allison-dark hover:text-allison-light transition-colors duration-300 rounded-full"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-allison-dark' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
