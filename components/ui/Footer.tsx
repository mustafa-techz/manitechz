import Link from "next/link";

function GithubIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7.a5.2 5.2 0 0 0-1.45-3.66..."></path>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black pt-20 pb-10 border-t border-gray-200 dark:border-border">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 inline-block moirai-one-regular">
              <span className="bg-gradient-to-r from-black to-black/70 dark:from-white dark:to-white/70 bg-clip-text text-transparent">
                ManiTech
              </span>
              <span className="text-accent">Z</span>
            </Link>
            <p className="text-gray-600 dark:text-muted max-w-sm">
              Manifest Technology. Zero Limits. We build intelligent digital platforms using modern web technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-black dark:text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#" className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black dark:text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors">Docs</Link></li>
              <li><Link href="#" className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black dark:text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="#" className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="#" className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-muted text-sm text-center md:text-left">
            © 2026 <span className="moirai-one-regular">ManiTechZ</span>. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-border flex items-center justify-center text-gray-500 dark:text-muted hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 transition-all">
              <GithubIcon />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-border flex items-center justify-center text-gray-500 dark:text-muted hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 transition-all">
              <TwitterIcon />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-border flex items-center justify-center text-gray-500 dark:text-muted hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 transition-all">
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
