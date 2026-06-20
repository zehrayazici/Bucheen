import { useState, useRef } from 'react';

const Popular = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 280 + 16; // kart genişliği + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, 2));
    }
  };

  return (
    <section id="popular" className="w-full bg-[#FFF8F7] py-16 md:py-24 lg:py-28 px-4 md:px-12 lg:px-20 font-poppins">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#262626] mb-4">
            Most Popular In This Week
          </h2>
          <p className="text-[#727272] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful.
          </p>
        </div>

        <div className="md:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
          >
            <div className="flex gap-4 w-max">
              
              <div 
                className="snap-center flex-shrink-0"
                style={{ 
                  width: '280px',
                  borderRadius: '20px',
                  boxShadow: '8px 12px 40px rgba(0, 0, 0, 0.06)'
                }}
              >
                <div 
                  className="relative h-[200px] flex justify-center items-end"
                  style={{ 
                    backgroundColor: '#FFAB9F',
                    borderRadius: '20px 20px 0 0'
                  }}
                >
                  <img 
                    src="/images/javar.png" 
                    alt="Javar Saripun" 
                    className="relative w-[150px] h-[150px] object-contain"
                    style={{ marginBottom: '-15px' }}
                  />
                </div>
                <div className="bg-white p-6 pt-8">
                  <h3 className="text-2xl font-semibold text-[#262626] mb-3">
                    Javar Saripun
                  </h3>
                  <p className="text-[#727272] text-sm leading-relaxed">
                    A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature.
                  </p>
                </div>
              </div>

              <div 
                className="snap-center flex-shrink-0"
                style={{ 
                  width: '280px',
                  borderRadius: '20px',
                  boxShadow: '8px 12px 40px rgba(0, 0, 0, 0.06)'
                }}
              >
                <div 
                  className="relative h-[200px] flex justify-center items-end"
                  style={{ 
                    backgroundColor: '#D4B5FF',
                    borderRadius: '20px 20px 0 0'
                  }}
                >
                  <img 
                    src="/images/fausiah.png" 
                    alt="Fausiah Fera" 
                    className="relative w-[150px] h-[150px] object-contain"
                    style={{ marginBottom: '-15px' }}
                  />
                </div>
                <div className="bg-white p-6 pt-8">
                  <h3 className="text-2xl font-semibold text-[#262626] mb-3">
                    Fausiah Fera
                  </h3>
                  <p className="text-[#727272] text-sm leading-relaxed">
                    Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.
                  </p>
                </div>
              </div>

              <div 
                className="snap-center flex-shrink-0"
                style={{ 
                  width: '280px',
                  borderRadius: '20px',
                  boxShadow: '8px 12px 40px rgba(0, 0, 0, 0.06)'
                }}
              >
                <div 
                  className="relative h-[200px] flex justify-center items-end"
                  style={{ 
                    backgroundColor: '#FFE8B6',
                    borderRadius: '20px 20px 0 0'
                  }}
                >
                  <img 
                    src="/images/sheryl.png" 
                    alt="Sheryl Olap" 
                    className="relative w-[150px] h-[150px] object-contain"
                    style={{ marginBottom: '-15px' }}
                  />
                </div>
                <div className="bg-white p-6 pt-8">
                  <h3 className="text-2xl font-semibold text-[#262626] mb-3">
                    Sheryl Olap
                  </h3>
                  <p className="text-[#727272] text-sm leading-relaxed">
                    Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? '8px' : '6px',
                  height: i === activeIndex ? '8px' : '6px',
                  backgroundColor: i === activeIndex ? '#FF725E' : '#FFD4C7'
                }}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-start">

          <div 
            className="bg-white overflow-hidden hover:shadow-lg transition-all duration-200"
            style={{ 
              width: '331px',
              height: '489px',
              borderRadius: '20.8748px',
              boxShadow: '8.69783px 13.9165px 46.9683px rgba(0, 0, 0, 0.06)'
            }}
          >
            <div 
              className="relative flex justify-center items-end"
              style={{ 
                width: '331px',
                height: '247.02px',
                backgroundColor: '#FF7460',
                borderRadius: '20.8748px 20.8748px 0px 0px'
              }}
            >
              <img 
                src="/images/javar.png" 
                alt="Javar Saripun" 
                className="relative"
                style={{
                  width: '175.28px',
                  height: '171.3px',
                  objectFit: 'contain',
                  marginBottom: '0px'
                }}
              />
            </div>
            <div 
              className="bg-white text-left"
              style={{ 
                width: '331px',
                height: '241.98px',   
                padding: '32px 24px'
              }}
            >
              <h3 
                className="font-semibold text-[#262626] mb-4"
                style={{ 
                  fontSize: '32px',
                  lineHeight: '48px'
                }}
              >
                Javar Saripun
              </h3>
              <p 
                className="text-[#727272]"
                style={{ 
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.
              </p>
            </div>
          </div>

          <div 
            className="bg-white overflow-hidden hover:shadow-lg transition-all duration-200"
            style={{ 
              width: '328px',
              height: '521px',
              borderRadius: '20.8748px',
              boxShadow: '8.69783px 13.9165px 46.9683px rgba(0, 0, 0, 0.06)',
              marginTop: '60px'
            }}
          >
            <div 
              className="relative flex justify-center items-end"
              style={{ 
                width: '328px',
                height: '247.02px',
                backgroundColor: '#D4B5FF',
                borderRadius: '20.8748px 20.8748px 0px 0px'
              }}
            >
              <img 
                src="/images/fausiah.png" 
                alt="Fausiah Fera" 
                className="relative"
                style={{
                  width: '175.28px',
                  height: '171.3px',
                  objectFit: 'contain',
                  marginBottom: '-20px'
                }}
              />
            </div>
            <div 
              className="bg-white text-left"
              style={{ padding: '32px 24px' }}
            >
              <h3 
                className="font-semibold text-[#262626] mb-4"
                style={{ fontSize: '32px', lineHeight: '48px' }}
              >
                Fausiah Fera
              </h3>
              <p 
                className="text-[#727272]"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.
              </p>
            </div>
          </div>

          <div 
            className="bg-white overflow-hidden hover:shadow-lg transition-all duration-200"
            style={{ 
              width: '328px',
              height: '521px',
              borderRadius: '20.8748px',
              marginTop: '120px',
              boxShadow: '8.69783px 13.9165px 46.9683px rgba(0, 0, 0, 0.06)'
            }}
          >
            <div 
              className="relative flex justify-center items-end"
              style={{ 
                width: '328px',
                height: '247.02px',
                backgroundColor: '#FFE8B6',
                borderRadius: '20.8748px 20.8748px 0px 0px'
              }}
            >
              <img 
                src="/images/sheryl.png" 
                alt="Sheryl Olap" 
                className="relative"
                style={{
                  width: '175.28px',
                  height: '171.3px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div 
              className="bg-white text-left"
              style={{ padding: '32px 24px' }}
            >
              <h3 
                className="font-semibold text-[#262626] mb-4"
                style={{ fontSize: '32px', lineHeight: '48px' }}
              >
                Sheryl Olap
              </h3>
              <p 
                className="text-[#727272]"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Popular;