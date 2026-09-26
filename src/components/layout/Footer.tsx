import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const footerLinks = {
  quickLinks: [
    { href: "/about", label: "About Us" },
    { href: "/teams", label: "Our Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/resources", label: "Resources" },
  ],
  programs: [
    { href: "/programs/leadership", label: "Leadership Training" },
    { href: "/programs/academics", label: "Academic Support" },
    { href: "/programs/spiritual", label: "Spiritual Growth" },
    { href: "/programs/career", label: "Career Development" },
  ],
  resources: [
    { href: "/resources/books", label: "Books & Reading" },
    { href: "/resources/videos", label: "Video Library" },
    { href: "/resources/courses", label: "Online Courses" },
    { href: "/resources/events", label: "Events" },
  ],
};

const socialLinks = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-secondary)] flex items-center justify-center">
                <span className="text-[var(--color-primary)] font-bold text-2xl">I</span>
              </div>
              <div>
                <span className="font-bold text-2xl">IJT-UAF</span>
                <p className="text-sm text-[var(--color-on-primary)]">Islamic Student Organization</p>
              </div>
            </Link>
            <p className="text-[var(--color-on-primary)] mb-6 leading-relaxed">
              Building future leaders through Islamic values, academic excellence, and
              character development. We empower students to face challenges together
              and create sustainable solutions for society.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-on-primary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-on-primary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[var(--color-accent)] mt-1" />
                <span className="text-[var(--color-on-primary)]">
                  University of Arid Agriculture
                  <br />
                  Rawalpindi, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[var(--color-accent)]" />
                <a
                  href="mailto:info@ijtuaf.org"
                  className="text-[var(--color-on-primary)] hover:text-[var(--color-accent)]"
                >
                  info@ijtuaf.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[var(--color-accent)]" />
                <a
                  href="tel:+923001234567"
                  className="text-[var(--color-on-primary)] hover:text-[var(--color-accent)]"
                >
                  +92 300 1234567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--color-on-primary)] text-sm">
              © {new Date().getFullYear()} IJT-UAF. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-[var(--color-on-primary)] hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[var(--color-on-primary)] hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
