import Hero from "@/components/layout/hero";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const User = () => {
  return (
    <section>
      <Hero>
        <div className="breadcrumb max-lg:py-12 py-20 uppercase text-white space-y-4 flex flex-col items-center justify-center md:items-start md:ml-64">
          <h2 className="font-bold text-3xl">Edward kennedy’s profile</h2>

          <div className="flex items-center justify-center gap-2 text-foreground font-nunito">
            <Link href="/" className="text-sky-blue">
              home
            </Link>
            <ChevronRight size={15} />
            <p>profile</p>
          </div>
        </div>
      </Hero>
      <div className="mx-auto max-md:mt-64 mb-96 px-20 max-lg:px-7 md:relative z-50 md:top-[-150px]">
        <div className="max-md:w-full w-[240px] space-y-10 text-xs bg-[#020d18] border-[3px] border-light-blue rounded-[5px] mt-[-200px] mr-[30px] md:mr-0 md:mb-[60px] md:mt-0">
          <div className="text-center px-8 mb-[30px] pt-[30px] space-y-5 centralize flex-col">
            <div className="relative w-[120px] h-[120px]">
              <Image
                src="/images/user-img.png"
                alt="user-profile"
                className="mb-[30px]"
                layout="fill"
                objectFit="fit"
              />
              <br />
            </div>
            <button className="bg-pink text-white hover:text-black/80 px-6 py-3 uppercase font-bold max-xs:w-full max-lg:w-[150px] w-full rounded-sm">
              Change avatar
            </button>
          </div>
          <div className="border-t border-[#0f2133] py-[25px]">
            <p className="pl-[25px] font-nunito">Account Details</p>
            <ul className="pl-[25px] uppercase mt-5 space-y-5">
              <li>
                <a
                  href="userprofile.html"
                  className="font-bold text-white hover:text-[#dcf836]"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="userfavoritelist.html"
                  className="font-bold text-white hover:text-[#dcf836]"
                >
                  Favorite movies
                </a>
              </li>
              <li>
                <a
                  href="userrate.html"
                  className="font-bold text-white hover:text-[#dcf836]"
                >
                  Rated movies
                </a>
              </li>
            </ul>
          </div>
          <div className="border-t border-[#0f2133] py-[25px]">
            <p className="pl-[25px] font-nunito">Others</p>
            <ul className="pl-[25px] uppercase mt-5 space-y-5">
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="font-bold text-white hover:text-[#dcf836]"
                >
                  Change password
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="font-bold text-white hover:text-[#dcf836]"
                >
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:absolute md:top-32 right-0 md:mx-10 md:w-[60%] lg:w-2/3 form-style-1 p-6 max-xs:mx-5 bg-[#0b1a2a] my-10 border-[3px] border-light-blue max-md:space-y-10 md:mb-52">
          <form id="search-form" action="#">
            <h1 className="uppercase text-white font-bold mb-5">
              01. Profile details
            </h1>
            <div className="row md:grid grid-cols-2 gap-5">
              <div className="col-md-12 form-it">
                <label>Username</label>
                <input type="text" placeholder="johndoe" />
              </div>
              <div className="col-md-12 form-it">
                <label>Email Address</label>
                <input type="text" placeholder="johndoe@gmail.com" />
              </div>
              <div className="col-md-12 form-it">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="col-md-12 form-it">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
              <div className="col-md-12 form-it">
                <label>Country</label>
                <div className="group-ip">
                  <div className="ui fluid dropdown selection multiple">
                    <select name="countries">
                      <option value="united-states">United States</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-12 form-it">
                <label>States</label>
                <div className="group-ip">
                  <div className="ui fluid dropdown selection multiple">
                    <select name="states">
                      <option value="new-york">New York</option>
                      <option value="others">Others</option>
                    </select>
                    </div>
                  </div>
                </div>

              <div className="col-md-12 uppercase">
                <button
                  className="font-dosis submit uppercase max-md:mt-5 text-sm bg-pink rounded-full font-bold text-white w-full md:w-[100px] p-2"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
          <form id="search-form" action="#" className="border-t border-light-blue py-8 md:w-2/4">
          <h1 className="uppercase text-white font-bold mb-5">
          02. Change password
            </h1>
            <div className="row">
              <div className="col-md-12 form-it">
                <label>Old Password</label>
                <input type="password" placeholder="********" />
              </div>
              <div className="col-md-12 form-it">
                <label>New Password</label>
                <input type="password" placeholder="********" />
              </div>
              <div className="col-md-12 form-it">
                <label>Confirm New Password</label>
                <input type="password" placeholder="********" />
              </div>
              
              <div className="col-md-12 uppercase">
                <button
                  className="font-dosis submit uppercase mt-5 text-sm bg-pink rounded-full font-bold text-white w-full  md:w-[100px] p-2"
                  type="submit"
                >
                  Change
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default User;
