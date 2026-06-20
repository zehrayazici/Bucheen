import { Heart, UserRoundCheck, Search } from 'lucide-react';

const Works = () => {
  const steps = [
    { 
      icon: Search,
      desc: 'Find your dating relationship in app and waiting until you get a notification. have a good relationship its started.' 
    },
    { 
      icon: Heart,
      desc: 'Dating with benefits and you redefine the expectations of a perfect relationship with your partner.' 
    },
    { 
      icon: UserRoundCheck,
      desc: 'Ideal relationship makes your online dating relationship run more smoothly using this app.' 
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-16 md:py-24 lg:py-28 px-4 md:px-12 lg:px-20 font-poppins">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
        <div className="space-y-12 md:space-y-16">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
            How It Works To Find Your <span className="text-[#FF725E]">Relationship</span>
          </h2>

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <div key={i} className="flex flex-row items-start gap-6">
                  
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFD4C7] rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent 
                      size={24} 
                      className="text-[#FF725E]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="text-[#666666] text-sm md:text-base leading-relaxed pt-1 md:pt-2">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default Works;