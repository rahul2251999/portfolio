import { useState, useEffect } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#publications', label: 'Publications' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-pure-black/95 backdrop-blur-md py-4 shadow-xl border-b border-dark-gray' : 'bg-pure-black/80 backdrop-blur-sm py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="#hero" className="logo-link flex items-center text-2xl font-bold font-mono">
              <span className="text-accent-white">&lt;</span>
              <span className="mx-2 text-accent-white">RP</span>
              <span className="text-accent-white">/&gt;</span>
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="menu-toggle lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hamburger w-8 h-6 flex flex-col justify-between"
            >
              <span className={`block h-0.5 w-full bg-accent-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-accent-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-accent-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></span>
            </button>
          </div>
          
          {/* Navigation Menu */}
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''} hidden lg:flex`}>
            <ul className="nav-list flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a 
                    href={item.href} 
                    className="nav-link text-accent-gray hover:text-accent-white transition-colors duration-300 relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <div className={`nav-menu-mobile lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="nav-list-mobile flex flex-col space-y-4 py-4">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item-mobile">
                <a 
                  href={item.href} 
                  className="nav-link-mobile text-accent-gray hover:text-accent-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
