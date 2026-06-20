import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Reviews = () => {
  const [mobileIndex, setMobileIndex] = useState(0);

  const reviews = [
    { 
      name: 'Tasha Wijayanti', 
      loc: 'Curug', 
      country: 'Indonesia',
      text: 'This Bucheen is so cool, I found the partner I wanted. and it is very easy to use and steady for bucheen. cheers and hopefully many other people can find their partner here',
      img: '/images/tasha.png'
    },
    { 
      name: 'Sizuka Engkol', 
      loc: 'Bulgaria',
      country: 'Bulgaria', 
      text: 'Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine.',
      img: '/images/sizuka.png'
    },
    { 
      name: 'Gundam Gandim', 
      loc: 'Indonesia',
      country: 'Indonesia',
      text: 'This application can make me find my soul mate very easily and quickly. the information contained in this bucheen is very accurate and really real, not a hoax',
      img: '/images/gundam.png'
    },
  ];

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviews[mobileIndex];

  return (
    <section id="reviews" className="w-full bg-white py-16 md:py-24 lg:py-28 px-4 md:px-12 lg:px-20 font-poppins">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
            What Our Customers<br />Have To Say
          </h2>
          <p className="text-[#666666] text-sm sm:text-base md:text-lg">
            Here's what our customers say with Bucheen
          </p>
        </div>

        <div className="md:hidden space-y-6">
          {/* Kart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={currentReview.img}
                alt={currentReview.name}
                className="w-12 h-12 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <h4 className="font-semibold text-[#1A1A1A] text-sm">
                  {currentReview.name}
                </h4>
                <p className="text-[#999999] text-xs">
                  {currentReview.loc}
                </p>
              </div>
            </div>

            <p className="text-[#666666] text-sm leading-relaxed mb-6">
              "{currentReview.text}"
            </p>

            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Star 
                  key={j} 
                  size={18}
                  className="text-[#FFB800] fill-[#FFB800]"
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border-2 border-[#FFD4C7] text-[#FFD4C7] hover:bg-[#FFD4C7] hover:text-white transition-all flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#FF725E] text-white hover:bg-[#F5594D] transition-all flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={r.img}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] text-sm">
                    {r.name}
                  </h4>
                  <p className="text-[#999999] text-xs">
                    {r.loc}, {r.country}
                  </p>
                </div>
              </div>

              <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-6">
                "{r.text}"
              </p>

              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star 
                    key={j} 
                    size={20}
                    className="text-[#FFB800] fill-[#FFB800]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;