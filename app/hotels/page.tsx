'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Heart, Menu, X, Star, MapPin, ChevronRight, BedDouble,
  Globe, MessageCircle
} from 'lucide-react';

import { HOTELS, HotelData } from '@/lib/hotelsData';
import { Button } from '@/components/ui/button';

// ====== آیتم‌های منو (دقیقاً مثل صفحه اصلی) ======
const MENU_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

// ====== کامپوننت کارت هتل ======
function HotelCard({ hotel, isFavourite = false }: { hotel: HotelData, isFavourite?: boolean }) {
  const router = useRouter();
  const [liked, setLiked] = useState(isFavourite);

  return (
    <motion.div 
      className="group min-w-[220px] sm:min-w-[260px] w-full flex-shrink-0 snap-start cursor-pointer"
      onClick={() => router.push(`/hotels/${hotel.id}`)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-200 mb-3">
        <Image src={hotel.image} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-gray-100 text-xs font-medium text-slate-800 flex items-center gap-1.5">
          <span>⭐</span> Guest favourite
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-sm hover:scale-110 transition-transform z-10"
        >
          <Heart className={`h-4 w-4 ${liked ? 'fill-red-500 text-red-500' : 'text-slate-700'}`} />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-slate-900 text-sm leading-tight line-clamp-1 pr-2">{hotel.name}</h3>
          <div className="flex items-center gap-1 shrink-0 text-xs text-slate-700">
            <Star className="h-3 w-3 fill-amber-600 text-amber-600" />
            <span className="font-medium">{hotel.rating}</span>
          </div>
        </div>
        <p className="text-sm text-slate-500 truncate">{hotel.area}, {hotel.location}</p>
        <div className="flex items-baseline gap-1 mt-1 text-sm">
          <span className="font-bold text-slate-900">${Math.min(...hotel.roomTypes.map(r => r.price))}</span>
          <span className="text-slate-500 font-normal text-[10px]">for 2 nights</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function HotelsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const categories = [
    { id: 1, title: "Popular homes in London", hotels: HOTELS.filter(h => h.location === "London, UK").slice(0, 5) },
    { id: 2, title: "Great hotels for your next trip", hotels: HOTELS.slice(0, 6) },
    { id: 3, title: "Available next month", hotels: HOTELS.slice(4, 8) },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 relative pb-10">
      
      {/* ====== هدر (شامل نوار جستجوی سراسری) ====== */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between max-w-6xl">
          {/* لوگوی سایت */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="h-8 w-8 bg-amber-600 rounded flex items-center justify-center">
              <BedDouble className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">StayVista</span>
          </Link>

          {/* نوار جستجوی بزرگ و گرد */}
          <div 
            onClick={() => router.push('/hotels')}
            className="flex-1 mx-4 md:mx-8 max-w-md bg-gray-50 border border-gray-200 rounded-full py-2.5 px-5 flex items-center gap-3 cursor-pointer hover:shadow-sm transition-shadow"
          >
            <Search className="h-5 w-5 text-slate-500 shrink-0" />
            <span className="text-sm text-slate-600">Start your search</span>
          </div>

          {/* ====== دکمه منوی همبرگری (دقیقاً مثل صفحه اصلی) ====== */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 relative text-slate-800 hover:text-amber-600 transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </header>

      {/* ========== منوی کشویی مدرن (فقط مخصوص موبایل - دقیقاً مثل صفحه اصلی) ========== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            {/* دکمه بستن منو */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors p-2 z-[61]"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </button>

            {/* محتوای منوی موبایل */}
            <div className="flex flex-col items-center gap-6 text-white cursor-default w-full">
              <div className="flex flex-col items-center gap-6 text-2xl font-light tracking-wide w-full max-w-[200px]">
                {MENU_ITEMS.map((item) => (
                  <div key={item.name} className="flex flex-col items-center w-full">
                    <Link 
                      href={item.href} 
                      onClick={() => setIsMenuOpen(false)} 
                      className={`text-center hover:text-amber-400 transition-colors pb-2 w-full ${
                        pathname === item.href ? 'text-amber-400' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                    {/* خط نشانگر صفحه فعال */}
                    {pathname === item.href && (
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="h-[2px] bg-amber-500 rounded-full mt-[-2px]"
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="w-24 h-[1px] bg-white/20 my-2"></div>
              
              <div className="flex items-center gap-4 mt-2">
                <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-white/80 hover:text-amber-400 transition-colors text-base font-medium">Log in</Link>
                <Button onClick={() => setIsMenuOpen(false)} className="bg-amber-600 hover:bg-amber-700 text-white h-10 px-8 rounded-full text-sm font-semibold shadow-xl shadow-amber-900/30">
                  Sign up
                </Button>
              </div>
              
              <div className="flex gap-6 mt-8 text-white/40">
                <Globe className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
                <MessageCircle className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
                <Heart className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====== لیست دسته‌بندی‌های اسکرول افقی ====== */}
      <div className="container mx-auto max-w-6xl px-4 py-6 space-y-10">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900">{category.title}</h2>
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors">
                View all <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="flex overflow-x-auto gap-5 pb-4 -mx-4 px-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth">
              {category.hotels.map((hotel) => (
                <div key={hotel.id} className="snap-start">
                  <HotelCard hotel={hotel} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ====== پاورقی ====== */}
      <footer className="bg-[#0B132B] text-white mt-8 py-8 px-6">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>© 2024 StayVista. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}