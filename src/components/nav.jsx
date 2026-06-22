import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Service', id: 'features' },
    { name: 'About', id: 'works' },
    { name: 'Pricing', id: 'popular' },
    { name: 'Support', id: 'reviews' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    links.forEach((link) => {
      const element = document.getElementById(link.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [links]);

  return (
    <nav className="w-full h-[80px] md:h-[128px] bg-white px-4 md:px-12 lg:px-20 sticky top-0 z-50 shadow-sm font-poppins">
      <div className="max-w-[1440px] h-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-[24px] md:text-[32px] font-bold leading-none">
            <span className="text-[#776BB3]">Bu</span>
            <span className="text-[#FF725E]">cheen</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-base transition-colors duration-200 ${
                activeSection === l.id
                  ? 'text-[#FF725E] font-semibold'
                  : 'text-[#999999] font-normal hover:text-[#FF725E]'
              }`}
            >
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#signin"
            className="flex items-center justify-center px-6 lg:px-8 py-2.5 lg:py-3 border-2 border-[#FF725E] text-[#FF725E] rounded-full text-sm lg:text-base font-medium hover:bg-[#FF725E] hover:text-white transition-all duration-200"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="flex items-center justify-center px-6 lg:px-8 py-2.5 lg:py-3 bg-[#FF725E] text-white rounded-full text-sm lg:text-base font-medium hover:bg-[#E85A47] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Sign Up
          </a>
        </div>

        <button
          className="md:hidden text-[#999999] p-2 hover:text-[#FF725E] transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white px-4 pb-6 border-t border-gray-100 shadow-md md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`text-base py-2 transition-colors ${
                  activeSection === l.id
                    ? 'text-[#FF725E] font-semibold'
                    : 'text-[#999999] hover:text-[#FF725E]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {l.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <a
                href="#signin"
                className="flex items-center justify-center w-full px-8 py-3 border-2 border-[#FF725E] text-[#FF725E] rounded-full text-base font-medium active:bg-[#FF725E] active:text-white transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </a>

              <a
                href="#signup"
                className="flex items-center justify-center w-full px-8 py-3 bg-[#FF725E] text-white rounded-full text-base font-medium active:bg-[#E85A47] transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
