import React from 'react'
import Link from 'next/link'
import { MountainIcon } from 'lucide-react'

export default function Navbar() {
    // const [isScrolled, setIsScrolled] = useState(false);
    // const scrollRef = useRef<HTMLElement|null>(null); 
    // const handleScroll = () => {
    //     // Check for scroll only once on component mount
    //     if (!scrollRef.current) {
    //       setIsScrolled(window.scrollY > 0);
    //       scrollRef.current = true; // Flag to prevent further checks
    //     }
    //   };

    //   React.useEffect(() => {
    //     // Run handleScroll on initial render and window resize
    //     handleScroll();
    //     window.addEventListener('resize', handleScroll);

    //     return () => window.removeEventListener('resize', handleScroll);
    //   }, []);
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="/">
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only text-gray-500 dark:text-gray-400">LOGO</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 mr-5">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#home">
                    Home
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
                    About
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#ourServices">
                    Our Services
                </Link>
            </nav>
            <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 "
                href="/app"
            >
                Get Started
            </Link>
        </header>
    );
}