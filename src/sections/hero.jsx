import { Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [selectedGender1, setSelectedGender1] = useState('male');
  const [selectedGender2, setSelectedGender2] = useState('female');

  return (
    <section 
      id="home" 
      className="w-full bg-[#FFF8F7] md:bg-[#FFF8F7] py-12 md:py-24 px-4 md:px-12 lg:px-20 font-poppins overflow-hidden relative"
    >
      <div className="absolute lg:hidden pointer-events-none opacity-50" style={{ width: '305.4px', height: '281.3px', left: '-48px', top: '274px' }}>
        <img 
          src="/images/feature.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute lg:hidden pointer-events-none opacity-40" style={{ width: '227.4px', height: '209.46px', left: '181px', top: '692.92px' }}>
        <img 
          src="/images/feature.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute lg:hidden pointer-events-none opacity-35" style={{ width: '148.6px', height: '136.87px', left: '-25px', top: '896px' }}>
        <img 
          src="/images/feature.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>



      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="relative w-full h-[380px] lg:hidden mb-12 flex items-center justify-center">
          <img 
            src="/images/phone.png" 
            alt="App mockup" 
            className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
              Find <span className="text-[#FF725E]">Match Now</span> and Grow Your <span className="text-[#1A1A1A]">Feelings</span>
            </h1>
            
            <p className="text-[#666666] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
            </p>
            
            <div className="w-full max-w-[600px] bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-3 md:p-4 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2">
              
              <div className="relative flex-1 h-10 md:h-12 flex items-center">
                <select 
                  value={selectedGender1}
                  onChange={(e) => setSelectedGender1(e.target.value)}
                  className="w-full h-full bg-transparent px-3 md:px-4 py-2 text-sm md:text-base text-[#1A1A1A] font-medium appearance-none focus:outline-none cursor-pointer"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <ChevronDown 
                  className="absolute right-3 md:right-4 text-[#999999] pointer-events-none flex-shrink-0" 
                  size={18} 
                />
              </div>

              <div className="hidden md:block w-px h-8 bg-[#CCCCCC]" />

              <div className="relative flex-1 h-10 md:h-12 flex items-center">
                <select 
                  value={selectedGender2}
                  onChange={(e) => setSelectedGender2(e.target.value)}
                  className="w-full h-full bg-transparent px-3 md:px-4 py-2 text-sm md:text-base text-[#1A1A1A] font-medium appearance-none focus:outline-none cursor-pointer"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <ChevronDown 
                  className="absolute right-3 md:right-4 text-[#999999] pointer-events-none flex-shrink-0" 
                  size={18} 
                />
              </div>

              <button 
                className="w-full md:w-auto h-10 md:h-12 bg-[#FF725E] text-white rounded-lg md:rounded-xl px-4 md:px-6 text-sm md:text-base font-semibold hover:bg-[#F5594D] active:bg-[#E85A47] flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 flex-shrink-0"
              >
                <Search size={18} /> 
                <span>Find Now</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-end order-1 lg:order-2 relative h-[600px] items-center">
            <img 
              src="/images/phone.png" 
              alt="App mockup" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;