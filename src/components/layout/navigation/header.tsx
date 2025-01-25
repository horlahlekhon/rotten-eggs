"use client";

import Login from "@/components/auth/login";
import Signup from "@/components/auth/signup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LucideMenu, LucideX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header-ctn");
      if (window.scrollY > 0) {
        header?.classList.add("bg-light-blue");
      } else {
        header?.classList.remove("bg-light-blue");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="relative" id="header">
      <header
        id="header-ctn"
        className="fixed lg:px-20 lg:pt-6 top-0 w-full z-[2000] transition-all duration-500 ease-out max-lg:bg-light-blue"
      >
        <div className="container py-2 px-4">
          <nav className="navbar navbar-default navbar-custom lg:grid grid-cols-[120px_1fr] gap-5 items-center">
            <div className="navbar-header logo max-lg:flex items-center justify-between">
              <Link href="/">
                <Image
                  src="/images/logo1.png"
                  alt="nav logo"
                  width={119}
                  height={58}
                />
              </Link>
              <button
                className="navbar-toggle collapsed m-2 border border-white lg:hidden"
                aria-expanded={isNavOpen}
                onClick={toggleNav}
              >
                <span className="sr-only">Toggle navigation</span>
                <div
                  id="nav-icon1"
                  className="flex flex-col space-y-1 p-2 text-white"
                >
                  {isNavOpen ? <LucideX size={20} /> : <LucideMenu size={20} />}
                </div>
              </button>
            </div>
            <div
              className={`navbar-collapse lg:grid grid-cols-[1fr_200px] justify-between py-2 max-lg:p-5 font-bold uppercase transition-all duration-500 ease-in-out ${
                isNavOpen ? "max-lg:block" : "max-lg:hidden"
              }`}
            >
              <ul className="nav navbar-nav navbar-right lg:flex lg:space-x-20 items-center lg:pl-20 max-lg:space-y-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/movies">Movies</Link>
                </li>

                <li>
                  <Link href="/celebrities">Celebrities</Link>
                </li>

                <li></li>
              </ul>
              <div className="auth lg:flex gap-3 items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full hover:text-lemon-green">
                      LOG IN
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-full p-0 sm:rounded-none md:w-[430px] md:h-[500px] bg-white">
                    <DialogHeader className="hidden">
                      <DialogTitle></DialogTitle>
                    </DialogHeader>
                    <Login />
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="bg-pink py-2 text-white rounded-full w-full max-lg:mt-5 uppercase">
                      <p className="hover:text-white">Sign up</p>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-full p-0 sm:rounded-none md:w-[430px] bg-white">
                    <DialogHeader className="hidden">
                      <DialogTitle></DialogTitle>
                    </DialogHeader>
                    <Signup />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
