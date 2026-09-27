"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBook,
  FiFileText,
  FiHome,
  FiImage,
  FiInfo,
  FiLogIn,
  FiMail,
  FiMenu,
  FiUser,
  FiUsers,
  FiX,
} from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home", icon: FiHome },
  { href: "/about", label: "About", icon: FiInfo },
  { href: "/teams", label: "Teams", icon: FiUsers },
  { href: "/gallery", label: "Gallery", icon: FiImage },
  { href: "/resources", label: "Resources", icon: FiBook },
  { href: "/news", label: "News", icon: FiFileText },
  { href: "/contact", label: "Contact", icon: FiMail },
];

const dockOptions = {
  proximity: 122,
  spring: 0.19,
  damping: 0.7,
  widthGrowth: 17,
  heightGrowth: 16,
  drop: 3.5,
} as const;

const MotionLink = motion.create(Link);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const items = Array.from(dock.querySelectorAll<HTMLElement>("[data-dock-item]"));
    const springStates = items.map((item) => ({ item, value: 0, velocity: 0 }));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pointerX: number | null = null;
    let frame = 0;

    const animate = () => {
      frame = 0;
      let isMoving = false;

      springStates.forEach((state) => {
        const bounds = state.item.getBoundingClientRect();
        const distance = pointerX === null
          ? Number.POSITIVE_INFINITY
          : Math.abs(pointerX - (bounds.left + bounds.width / 2));
        const target = Math.max(0, 1 - distance / dockOptions.proximity);
        state.velocity = (state.velocity + (target - state.value) * dockOptions.spring) * dockOptions.damping;
        state.value = Math.max(0, Math.min(1, state.value + state.velocity));

        if (Math.abs(target - state.value) < 0.001 && Math.abs(state.velocity) < 0.001) {
          state.value = target;
          state.velocity = 0;
        } else {
          isMoving = true;
        }

        const influence = state.value;
        state.item.style.setProperty("--dock-pad-x", `${12 + influence * dockOptions.widthGrowth / 2}px`);
        state.item.style.setProperty("--dock-pad-y", `${8 + influence * dockOptions.heightGrowth / 2}px`);
        state.item.style.setProperty("--dock-drop", `${influence * dockOptions.drop}px`);
      });

      if (isMoving && !reduceMotion) frame = requestAnimationFrame(animate);
    };

    const scheduleAnimation = () => {
      if (!frame) frame = requestAnimationFrame(animate);
    };
    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      scheduleAnimation();
    };
    const handlePointerLeave = () => {
      pointerX = null;
      scheduleAnimation();
    };

    dock.addEventListener("pointermove", handlePointerMove, { passive: true });
    dock.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    return () => {
      dock.removeEventListener("pointermove", handlePointerMove);
      dock.removeEventListener("pointerleave", handlePointerLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="site-header site-header--dock fixed top-0 left-0 right-0 z-40"
      >
        <div className="site-header__shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="site-header__inner flex items-center justify-between">
            <Link href="/" className="site-header__brand group">
              <span className="site-header__mark flex items-center justify-center" aria-hidden="true">I</span>
              <span className="site-header__brand-copy">
                <span className="site-header__name">IJT-UAF</span>
                <span className="site-header__tagline">Islamic Student Organization</span>
              </span>
            </Link>

            <nav ref={dockRef} className="site-header__dock hidden xl:flex" aria-label="Primary navigation">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
                return (
                  <MotionLink
                    key={href}
                    href={href}
                    className={`site-header__dock-item ${isActive ? "is-active" : ""}`}
                    data-dock-item
                    aria-current={isActive ? "page" : undefined}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="site-header-active-pill"
                        className="site-header__active-pill"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        aria-hidden="true"
                      />
                    )}
                    <Icon className="site-header__dock-icon" aria-hidden="true" />
                    <span className="site-header__dock-label">{label}</span>
                  </MotionLink>
                );
              })}
            </nav>

            <div className="site-header__actions hidden xl:flex">
              <AuthLink href="/login" label="Login" isActive={pathname === "/login"} icon={<FiLogIn aria-hidden="true" />} />
              <AuthLink href="/register" label="Join" isActive={pathname === "/register"} icon={<FiUser aria-hidden="true" />} />
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="site-header__menu xl:hidden"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="site-header-mobile-menu"
            >
              {isMobileMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              id="site-header-mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="site-header__mobile xl:hidden"
              aria-label="Mobile navigation"
            >
              <div className="site-header__mobile-inner">
                {navLinks.map(({ href, label, icon: Icon }) => {
                  const isActive = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`site-header__mobile-link ${isActive ? "is-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon aria-hidden="true" />
                      {label}
                    </Link>
                  );
                })}
                <div className="site-header__mobile-actions">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}><FiLogIn aria-hidden="true" />Login</Link>
                  <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}><FiUser aria-hidden="true" />Join</Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="site-header__spacer" />
    </>
  );
}

function AuthLink({
  href,
  label,
  isActive,
  icon,
}: {
  href: string;
  label: string;
  isActive: boolean;
  icon: React.ReactNode;
}) {
  return (
    <MotionLink
      href={href}
      className={`site-header__action ${isActive ? "is-active" : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      {isActive && <motion.span layoutId="site-header-active-pill" className="site-header__active-pill" aria-hidden="true" />}
      {icon}
      <span>{label}</span>
    </MotionLink>
  );
}
