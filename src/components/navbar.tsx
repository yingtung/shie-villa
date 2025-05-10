import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import Logo from '../images/whiteLogo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const menuList = [
  {
    linkTo: '/about',
    title: '關於我們',
  },
  {
    linkTo: '/rooms',
    title: '房型介紹',
  },
  {
    linkTo: '/facilities',
    title: '民宿設施',
  },
  {
    linkTo: '/information',
    title: '訂房須知',
  },
  {
    linkTo: '/news',
    title: '最新消息',
  },
  {
    linkTo: '/contact',
    title: '聯繫我們',
  },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 根據當前路徑決定是否顯示透明背景
  const isHomePage = location.pathname === '/';
  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`h-(--navbar-height) fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent ? 'bg-transparent' : 'bg-(--color-primary)'
      }`}
    >
      <nav
        aria-label="Global"
        className="flex max-w-7xl items-center justify-between p-6 lg:px-8 mx-auto"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-8">
            <span className="sr-only">Shie</span>
            <img alt="icon" src={Logo} className="h-20 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md px-2.5 bg-transparent"
          >
            <Bars3Icon aria-hidden="true" className="size-8 text-white " />
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-white text-base/6">
          {menuList.map(({ linkTo, title }, index) => (
            <Link key={index} to={linkTo}>
              {title}
            </Link>
          ))}
        </PopoverGroup>
      </nav>
      {/** mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="mobile-menu fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Shie Villa</span>
              <img alt="icon" src={Logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-8 text-white" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col text-white text-xl/12">
                {menuList.map(({ linkTo, title }) => (
                  <Link to={linkTo} onClick={() => setMobileMenuOpen(false)}>
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
