import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="w-full bg-[#FFF1EF] py-16 md:py-20 lg:py-24 px-4 md:px-12 lg:px-20 border-t border-gray-100 font-poppins" id="support">
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <h3 className="text-2xl md:text-3xl font-bold leading-none mb-4">
            <span className="text-[#776BB3]">Bu</span>
            <span className="text-[#FF725E]">cheen</span>
          </h3>
          <p className="text-[#666666] text-xs md:text-sm leading-relaxed">
            The most accurate and simplest time tracking for all of you. and we have been serving for more than 4 years and have made you happy.
          </p>
        </div>
        

        <div className="col-span-1">
          <h4 className="font-semibold text-[#FF725E] mb-4 md:mb-6 text-sm md:text-base">About Us</h4>
          <ul className="space-y-2 md:space-y-3">
            <li><a href="#popular" className="text-[#666666] text-xs md:text-sm hover:text-[#FF725E] transition-colors">Our people</a></li>
            <li><a href="#about" className="text-[#666666] text-xs md:text-sm hover:text-[#FF725E] transition-colors">Our categories</a></li>
            <li><a href="#support" className="text-[#666666] text-xs md:text-sm hover:text-[#FF725E] transition-colors">Contact us</a></li>
            <li><a href="#reviews" className="text-[#666666] text-xs md:text-sm hover:text-[#FF725E] transition-colors">Testimonial</a></li>
          </ul>
        </div>
        

        <div className="col-span-1">
          <h4 className="font-semibold text-[#FF725E] mb-4 md:mb-6 text-sm md:text-base">Product</h4>
          <ul className="space-y-2 md:space-y-3">
            <li><a href="#service" className="text-[#666666] text-xs md:text-sm hover:text-[#FF725E] transition-colors">Task Management</a></li>
            <li><a href="#about" className="text-[#666666] text-xs md:text-sm hover:text-[#FF725E] transition-colors">Service</a></li>
            <li><a href="#about" className="text-[#666666] text-xs md:text-sm hover:text-[#FF725E] transition-colors">Task Schedule</a></li>
          </ul>
        </div>
        
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <h4 className="font-semibold text-[#FF725E] mb-4 md:mb-6 text-sm md:text-base">Contact us</h4>
          <ul className="space-y-3 md:space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-[#FFD4C7] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-[#FF725E]" />
              </div>
              <span className="text-[#666666] text-xs md:text-sm">(021) 3258 4930</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-[#FFD4C7] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-[#FF725E]" />
              </div>
              <span className="text-[#666666] text-xs md:text-sm">Pokan@Hola.com</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-[#FFD4C7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#FF725E]" />
              </div>
              <span className="text-[#666666] text-xs md:text-sm">Sukabumi, Jawa Barat<br />Indonesia, IDN</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;