import './globals.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';


const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Bulk Business | Global Wholesale & Procurement',
  description: 'The B2B platform transforming supply chain logistics.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}>

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        {/* ENHANCED FOOTER SECTION */}
        {/* All contrast colors (text-gray-700 on bg-gray-100) are high enough for WCAG AA. */}
        <footer className="bg-gray-100 border-t border-gray-400 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* --- 4-Column Navigation Grid --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-10 border-b border-gray-300">

              {/* Column 1: Company Logo, Slogan, and Socials */}
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-2xl font-extrabold text-blue-700">SKyeVerse</h4>
                <p className="mt-2 text-sm text-gray-700">
                  Built for What’s Next.
                </p>

                {/* Simplified Social Media Icons */}
                <div className="flex space-x-4 mt-6">
                  {/* Contrast is good (text-gray-700 on bg-gray-100) */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="text-gray-700 hover:text-blue-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                    className="text-gray-700 hover:text-blue-600 transition-colors"><Youtube className="w-5 h-5" /></a>
                  <a href="https://linkedin.com" target="_blue" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="text-gray-700 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="text-gray-700 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>


              {/* Column 2: Company Links */}
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-4">Company</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Careers </a></li>
                  <li><a href="/investors" className="text-gray-700 hover:text-blue-600 transition-colors">Investors</a></li>
                  <li><a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Column 3: Ecosystem Links */}
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-4">Ecosystem</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="/help" className="text-gray-700 hover:text-blue-600 transition-colors">SkyeCentral</a></li>
                  <li><a href="/guides" className="text-gray-700 hover:text-blue-600 transition-colors">SkyeCart</a></li>
                  <li><a href="/security" className="text-gray-700 hover:text-blue-600 transition-colors">SkyeSphere</a></li>
                  <li><a href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">SkyeAccess</a></li>
                </ul>
              </div>

              {/* Column 4: Legal & Policy Links */}
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms of Service</a></li>
                  <li><a href="/sitemap" className="text-gray-700 hover:text-blue-600 transition-colors">Compliance & Governance</a></li>
                </ul>
              </div>

            </div>

            {/* --- Bottom Row (Copyright & Credit) --- */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-700">

              {/* Copyright */}
              <p>
                &copy; {new Date().getFullYear()} SkyeVerse. Built for What’s Next
              </p>

              {/* Credit */}
              <p className="mt-2 md:mt-0">
                Made in India  by <span className="text-blue-600 font-bold">Chhitiz Upadhyay</span>
              </p>

            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}