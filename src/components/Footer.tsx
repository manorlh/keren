'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Keren Lahagani Law Firm</h3>
            <p className="text-gray-400">
              Professional legal services with expertise and integrity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#practice-areas" className="text-gray-400 hover:text-white">Practice Areas</a></li>
              <li><a href="#why-choose-us" className="text-gray-400 hover:text-white">Why Choose Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="text-gray-400 not-italic">
              123 Legal Street<br />
              Suite 100<br />
              San Francisco, CA 94105<br />
              <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a><br />
              <a href="mailto:contact@kerenlahagani.com" className="hover:text-white">contact@kerenlahagani.com</a>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Keren Lahagani Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 