// components/layout/Footer.tsx

import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10">
      {/* Top green bar */}
      <div className="bg-teal-600 h-4 w-full" />

      {/* Bottom dark section */}
      <div className="bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">alx</h2>
            <p className="text-sm text-gray-400">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Explore</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Apartments in Dubai
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hotels in New York
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Villa in Spain
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Mansion in Indonesia
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-white">Company</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Brand
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-white">Help</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cancel booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Report Process
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex text-center mx-4 justify-between text-xs text-gray-500 py-4 border-t border-gray-700">
          <div>
            Some hotel requires you to cancel more than 24 hours before
            check-in. Details here
          </div>
          <div>
            <ul className="flex flex-row gap-4 text-center space-y-1 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Policy service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
