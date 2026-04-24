import { ArrowUp } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-portfolio-dark text-portfolio-bg py-8 border-t border-portfolio-medium/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-portfolio-bg/70 text-center md:text-left">
            &copy; {new Date().getFullYear()} Minimal Portfolio. All rights reserved.
          </div>
          
          <Link 
            href="#home"
            className="flex items-center gap-2 text-sm text-portfolio-bg/70 hover:text-portfolio-bg transition-colors p-2"
          >
            Back to Top
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
