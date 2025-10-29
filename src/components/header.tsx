"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (pathname === '/') {
        const sections = navItems.map(item => document.querySelector(item.href.startsWith('#') ? item.href : 'non-existent-selector')).filter(Boolean);
        const scrollPosition = window.scrollY + 150;

        let currentSection = '';
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i] as HTMLElement;
          if (section && section.offsetTop <= scrollPosition) {
            currentSection = section.id;
            break;
          }
        }
        setActiveSection(`#${currentSection}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const NavLinks = ({ className, onItemClick }: { className?: string, onItemClick?: () => void }) => (
    <nav className={cn("flex items-center gap-6 text-lg font-medium", className)}>
      {navItems.map((item) => {
        const isActive = pathname === '/'
          ? (activeSection === item.href)
          : (pathname === item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "text-muted-foreground transition-colors hover:text-foreground",
              isActive && "text-primary font-semibold"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b border-border/40 bg-background/80 backdrop-blur-lg" : ""
    )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-headline text-primary">
          Abdoshy
        </Link>
        
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs bg-background">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center border-b pb-4">
                 <Link href="/" className="text-2xl font-bold font-headline text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    Abdoshy
                </Link>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </SheetTrigger>
              </div>
              <div className="flex-grow mt-8">
                <NavLinks className="flex-col gap-8 text-xl" onItemClick={() => setIsMobileMenuOpen(false)} />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
