import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

const Review = () => {
  return (
    <div className="font-nunito">
      <div className="relative flex gap-5">
        <div>
          <Image
            src="/images/celebrities/ava1.jpg"
            className="rounded-sm"
            alt="ava1"
            width={42}
            height={42}
          />
        </div>

        <div>
          <h4 className="font-bold text-lg">Best Marvel movie in my opinion</h4>
          <div className="my-2 space-x-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <IoStar key={index} className="text-[#f5b50a] inline" size={15} />
            ))}
          </div>

          <p>
            17 December 2016 by{" "}
            <span className="text-sky-blue">hawaiipierson</span>
          </p>
        </div>
      </div>

      <div className="my-2">
        <p>
          This is by far one of my favorite movies from the MCU. The
          introduction of new Characters both good and bad also makes the movie
          more exciting. giving the characters more of a back story can also
          help audiences relate more to different characters better, and it
          connects a bond between the audience and actors or characters. Having
          seen the movie three times does not bother me here as it is as
          thrilling and exciting every time I am watching it. In other words,
          the movie is by far better than previous movies (and I do love
          everything Marvel), the plotting is splendid (they really do out do
          themselves in each film, there are no problems watching it more than
          once.
        </p>
      </div>
    </div>
  );
};

export default Review;
