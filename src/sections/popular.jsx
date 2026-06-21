import { useState, useRef } from 'react';

const cards = [
  {
    key: 'javar',
    bg: '#FFAB9F',
    img: '/images/javar.png',
    name: 'Javar Saripun',
    desc: 'A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.'
  },
  {
    key: 'fausiah',
    bg: '#D4B5FF',
    img: '/images/fausiah.png',
    name: 'Fausiah Fera',
    desc: 'Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.'
  },
  {
    key: 'sheryl',
    bg: '#FFE8B6',
    img: '/images/sheryl.png',
    name: 'Sheryl Olap',
    desc: 'Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.'
  }
];

const desktopOffsetTop = [0, 60, 120];

const Popular = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = 280 + 16;
    const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), cards.length - 1));
  };

  return (
    <section id="popular" className="w-full bg-[#FFF8F7] py-10 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#000026] mb-4">
            Most Popular In This Week
          </h2>
          <p className="text-[#727272] text-sm md:text-base max-w-md mx-auto leading-relaxed">
            There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
          </p>
        </div>

        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4 w-max">
              {cards.map((card) => (
                <div
                  key={card.key}
                  className="snap-center flex-shrink-0"
                  style={{
                    width: '280px',
                    height: '520px',
                    borderRadius: '20px',
                    boxShadow: '8px 12px 40px rgba(0, 0, 0, 0.06)',
                    opacity: 0.9,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    className="relative flex justify-center items-end flex-shrink-0"
                    style={{
                      height: '196px',
                      backgroundColor: card.bg,
                      borderRadius: '20px 20px 0 0'
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.name}
                      className="object-contain"
                      style={{ 
                        width: '130px', 
                        height: '130px',
                        marginBottom: '0px' 
                      }}
                    />
                  </div>
                  <div 
                    className="bg-white flex-1"
                    style={{ padding: '32px 24px 24px' }}
                  >
                    <h3 className="text-lg font-semibold text-[#262626] mb-3">
                      {card.name}
                    </h3>
                    <p className="text-[#727272] text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {cards.map((_, i) => (
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

        <div className="hidden md:flex justify-center items-start gap-8 lg:gap-12 mt-16">
          {cards.map((card, i) => (
            <div
              key={card.key}
              className="hover:shadow-lg transition-all duration-200"
              style={{
                width: i === 0 ? '331px' : '328px',
                height: '580px',
                borderRadius: '20.8748px',
                boxShadow: '8.69783px 13.9165px 46.9683px rgba(0, 0, 0, 0.06)',
                opacity: 0.9,
                marginTop: `${desktopOffsetTop[i]}px`,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                className="relative flex justify-center items-end flex-shrink-0"
                style={{
                  width: '100%',
                  height: '247.02px',
                  backgroundColor: card.bg,
                  borderRadius: '20.8748px 20.8748px 0 0'
                }}
              >
                <img
                  src={card.img}
                  alt={card.name}
                  className="object-contain"
                  style={{
                    width: '175.28px',
                    height: '171.3px',
                    marginBottom: '0px'  
                  }}
                />
              </div>
              <div 
                className="bg-white flex-1"
                style={{ padding: '40px 24px 32px' }}
              >
                <h3
                  className="font-semibold text-[#262626] mb-4"
                  style={{ fontSize: '32px', lineHeight: '48px' }}
                >
                  {card.name}
                </h3>
                <p
                  className="text-[#727272]"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Popular;