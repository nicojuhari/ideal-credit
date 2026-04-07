"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { List, X, Phone } from "@phosphor-icons/react";
import Logo from "@/components/icons/Logo";
import ButtonsCTA from "@/components/ui/ButtonsCTA";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const navLinks = [
  { href: "/credite", label: "Credite" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contacte", label: "Contacte" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { trackEvent } = useFacebookPixel();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle("menu-open", next);
      return next;
    });
  };

  return (
    <header className="bg-black-600 border-b sticky top-0 backdrop-blur-lg z-10">
      <div className="flex justify-between items-center gap-4 h-14 container">
        <Link href="/" title="Ideal Credit">
          <Logo className="w-8" />
        </Link>

        {/* Desktop nav */}
        <nav className="items-center gap-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.label}
              className="hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+37378805060"
            onClick={() => trackEvent("Contact")}
            className="flex items-center gap-2 h-10 px-4 rounded-full border border-brand-500 text-brand-500 hover:bg-brand-500/10 transition-colors duration-300 font-medium"
          >
            <Phone size={16} />
            078 80 50 60
          </a>
        </nav>

        {/* Mobile burger */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Deschide meniu"
            className="p-2 bg-black-400 cursor-pointer rounded-full text-white"
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
            className="fixed top-0 left-0 bg-black-600 w-full flex flex-col z-50 h-dvh overflow-y-auto"
          >
            <div className="flex justify-end py-2 px-4">
              <button
                onClick={toggleMenu}
                aria-label="Închide meniu"
                className="p-2 rounded-full bg-black-400 text-white"
              >
                <X size={20} />
              </button>
            </div>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.06 }}
              >
                <Link
                  href={link.href}
                  title={link.label}
                  className="flex w-full font-medium text-lg p-4 border-b border-gray-400/30"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-auto mb-10 space-y-4 text-center px-4"
            >
              <div className="text-lg">Solicită un credit acum!</div>
              <ButtonsCTA />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
