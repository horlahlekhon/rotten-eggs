import Hero from "@/components/layout/hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Favorites from "@/components/user-profile/favorites";
import Profile from "@/components/user-profile/profile";
import UserRated from "@/components/user-profile/user-rated";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const User = () => {
  return (
    <section>
      <Hero>
        <div className="breadcrumb max-lg:py-12 py-20 uppercase text-white space-y-4 flex flex-col items-center justify-center md:items-start md:ml-64 2xl:ml-[380px]">
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
      <Tabs defaultValue="profile">
        <div className="container max-md:mt-64 mb-96 px-20 max-lg:px-7 md:relative z-50 md:top-[-150px]">
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
              <ul>
                <TabsList className="block p-0 pl-[25px] bg-transparent my-5 space-y-5">
                  <TabsTrigger
                    value="profile"
                    className="block p-0 uppercase font-bold text-white hover:text-[#dcf836] data-[state=active]:text-lemon-green"
                  >
                    Profile
                  </TabsTrigger>
                  <TabsTrigger
                    value="favorites"
                    className="block p-0 uppercase font-bold text-white hover:text-[#dcf836] data-[state=active]:text-lemon-green"
                  >
                    Favorite movies
                  </TabsTrigger>
                  <TabsTrigger
                    value="user-rated"
                    className="block p-0 uppercase font-bold text-white hover:text-[#dcf836] data-[state=active]:text-lemon-green"
                  >
                    Rated movies
                  </TabsTrigger>
                </TabsList>
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

          <TabsContent value="profile">
            <Profile />
          </TabsContent>
          <TabsContent value="favorites">
            <Favorites />
          </TabsContent>
          <TabsContent value="user-rated">
            <UserRated />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default User;
