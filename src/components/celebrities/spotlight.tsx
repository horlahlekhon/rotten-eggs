import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SpotlightProps } from "@/types";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const Spotlight: React.FC<SpotlightProps> = () => {
  return (
    <div className="py-16 uppercase">
      <h4 className="font-bold text-white text-lg border-b pb-5 mb-5 border-b-[#405266]">
        Spotlight celebrities
      </h4>

      <div className="flex items-center space-x-5 mb-8">
        <Avatar className="rounded-sm w-[70px] h-[70px]">
          <AvatarImage src="/images/celebrities/ava1.jpg" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>

        <div>
          <Link
            href="/name"
            className="font-bold text-white capitalize hover:text-lemon-green"
          >
            Cate Blanchett
          </Link>
          <p>Actor</p>
        </div>
      </div>

      <div className="flex items-center space-x-5 mb-8">
        <Avatar className="rounded-sm w-[70px] h-[70px]">
          <AvatarImage src="/images/celebrities/ava1.jpg" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>

        <div>
          <Link
            href="/name"
            className="font-bold text-white capitalize"
          >
            Cate Blanchett
          </Link>
          <p>Actor</p>
        </div>
      </div>

      <Link href="#" className="flex items-center font-bold">
        See all celebrities <ChevronRight size={14} />
      </Link>
    </div>
  );
};
