'use client'

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
          <p className="text-sm">
            We are a leading company specializing in immersive virtual reality
            experiences and cutting-edge hardware.
          </p>
        </div>
        {/* Links Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        {/* Social Media / Contact */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">
            Connect With Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4 text-2xl">
            <a href="#" className="hover:text-white" aria-label="Twitter">
              🐦
            </a>
            <a href="#" className="hover:text-white" aria-label="Instagram">
              📸
            </a>
            <a href="#" className="hover:text-white" aria-label="Facebook">
              📘
            </a>
          </div>
          <p className="text-sm">&copy; 2025 Light. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
