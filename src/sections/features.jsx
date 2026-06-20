const Features = () => (
  <section id="service" className="w-full bg-white py-20 md:py-20 lg:py-28 pb-30 md:pb-0 px-4 md:px-12 lg:px-20 font-poppins overflow-hidden relative">
    
    <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 w-[445px] h-[409px] pointer-events-none opacity-40">
      <img 
        src="/images/feature.png" 
        alt="" 
        className="w-full h-full object-contain"
      />
    </div>

    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center relative z-10">
      
      <div className="space-y-6 md:space-y-8 lg:col-start-2">

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
          Find Match Now and <span className="text-[#FF725E]">Develop Your Feelings</span>
        </h2>
        

        <p className="text-[#666666] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
          There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful.
        </p>
        <a 
          href="#about"
          className="inline-flex items-center justify-center px-8 py-3 md:py-4 bg-[#FF725E] text-white rounded-lg md:rounded-xl text-sm md:text-base font-semibold hover:bg-[#F5594D] active:bg-[#E85A47] transition-all duration-200 shadow-sm hover:shadow-md w-fit"
        >
          Read More
        </a> 
      </div>
    </div>
  </section>
);

export default Features;