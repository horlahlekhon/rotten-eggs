"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="relative z-[1000] pt-20 bg-[url('/images/ft-bg.jpg')] font-nunito">
      {/* contains company or brand info */}
      <section className="p-3 lg:px-20 lg:grid grid-cols-4">
        <div className="company-info">
          <Link href="/">
            <Image
              className="logo"
              src="/images/logo1.png"
              alt="footer logo"
              width={119}
              height={58}
            />
          </Link>

          <div className="mt-14">
            <p>
              5th Avenue st, manhattan <br /> New York, NY 10001
            </p>

            <p className="mt-5">
              Call us:{" "}
              <span className="text-white text-lg">(+01) 202 342 6789</span>
            </p>
          </div>
        </div>

        {/* contains useful Account */}
        <div className="resources max-lg:mt-4">
          <h4 className="text-white font-bold mb-7 text-lg font-dosis">Resources</h4>
          <ul className="space-y-2">
            <li className="hover:text-lemon-green">
              <Link href="/">About</Link>
            </li>
            <li className="hover:text-lemon-green">
              <Link href="/">Blockbuster</Link>
            </li>
            <li className="hover:text-lemon-green">
              <Link href="/">Contact Us</Link>
            </li>
            <li className="hover:text-lemon-green">
              <Link href="/">Forums</Link>
            </li>
            <li className="hover:text-lemon-green">
              <Link href="/">Blog</Link>
            </li>
            <li className="hover:text-lemon-green">
              <Link href="/">Help Center</Link>
            </li>
          </ul>
        </div>

        <div className="legal max-lg:mt-10">
          <h4 className="text-white font-bold mb-7 text-lg font-dosis">Legal</h4>
          <ul className="space-y-2">
            <li className="hover:text-lemon-green">
              <Link href="/">Terms of Use </Link>
            </li>
            <li className="hover:text-lemon-green">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="hover:text-lemon-green">
              <Link href="/">Security</Link>
            </li>
          </ul>
        </div>

        <div className="account max-lg:mt-10">
          <h4 className="text-white font-bold mb-7 text-lg font-dosis">Account</h4>
          <ul className="space-y-2">
            <li className="hover:text-lemon-green">
              <Link href="/">My Account</Link>
            </li>
            <li className="hover:text-lemon-green">
              <Link href="/">Watchlist</Link>
            </li>
            <li className="hover:text-lemon-green">
              <Link href="/">Collections</Link>
            </li>
            <li className="hover:text-lemon-green">
              <Link href="/">User Guide</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="ft-copyright p-4 gap-2 md:px-32 flex flex-col lg:flex-row lg:justify-between  mt-20 bg-[#020d18] border-t border-[#405266] opacity-70">
        <div className="ft-left">
          <p>© 2017 Blockbuster. All Rights Reserved. Designed by leehari.</p>
        </div>
        <div className="backtotop">
          <p>
            <button
              className="inline-flex text-[#666]"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("header")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Back to top <ArrowUp size={16} />
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};
