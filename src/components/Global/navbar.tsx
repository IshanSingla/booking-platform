import React, { useEffect, useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
        <nav id="header" className="fixed w-full z-30 top-0">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="flex items-center">
                    <a className="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                        Logo
                    </a>
                </div>
                <div className="block lg:hidden pr-4">
                <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
                </div>
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3">
                    <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Home</a>
                    </li>
                    <li className="mr-3">
                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#about">About Us</a>
                    </li>
                    <li className="mr-3">
                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#services">Services</a>
                    </li>
                    <li className="mr-3">
                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#contact">Contact Us</a>
                    </li>
                </ul>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Get Started</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white !rounded-xl">
                        <DialogHeader>
                        <DialogTitle>Get Started with Us!</DialogTitle>
                        <DialogDescription>
                            Please fill up your login details.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                            Name
                            </Label>
                            <Input id="name" value="John Dae" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                            Username
                            </Label>
                            <Input id="username" value="@pedujohn" className="col-span-3" />
                        </div>
                        </div>
                        <DialogFooter>
                        <Button type="submit">Create Account</Button>
                        </DialogFooter>
                    </DialogContent>
                    </Dialog>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    );
}