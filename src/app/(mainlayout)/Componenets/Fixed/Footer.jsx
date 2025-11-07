



import React from 'react';

const Footer = () => {
  return (
    <div>
      <div>

        <footer className="bg-base-200 text-base-content py-10 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-4">
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>

            {/* Social Icons */}
            <nav className="flex justify-center md:justify-end gap-4">
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c..."></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c..."></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l..."></path>
                </svg>
              </a>
            </nav>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Copyright © {new Date().getFullYear()} - All rights reserved by Freshly Baked Industries Ltd</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Footer;
