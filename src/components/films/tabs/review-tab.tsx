import Review from '@/components/review'
import React from 'react'
import { FaCaretRight } from 'react-icons/fa'

const ReviewTab = () => {
  return (
    <div className="my-10">
    <button className="bg-pink rounded-full h-11 w-36 font-bold text-white hover:text-black uppercase">
      Write Review
    </button>

    {/* filter */}
    <div className="my-10 text-sm font-nunito topbar-filter flex max-md:flex-col max-md:py-4 max-md:mx-auto justify-between items-center gap-2 border-y border-[#405266]">
      <p>
        Found <span className="text-sky-blue">56 reviews</span> in
        total
      </p>

      <div className="flex max-md:flex-col">
        <label className="self-center mx-2">Filter by:</label>
        <select className="p-2 bg-[#020d18] max-md:border md:border-l border-[#405266] text-white outline-none">
          <option value="popularity">Popularity Descending</option>
          <option value="popularity">Popularity Ascending</option>
          <option value="ating">Rating Descending</option>
          <option value="rating">Rating Ascending</option>
          <option value="date">Release date Descending</option>
          <option value="date">Release date Ascending</option>
        </select>
      </div>
    </div>

    <div className="space-y-10 lg:overflow-y-auto hide-scrollbar lg:h-[300vh]">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="first:border-none border-t border-[#405266] pt-5"
        >
          <Review />
        </div>
      ))}
    </div>

    <div className="text-sm font-nunito topbar-filter flex max-md:flex-col max-md:py-4 max-md:mx-auto justify-between items-center gap-2 border-y border-[#405266]">
      <p>Reviews per page:</p>

      <select className="p-2 bg-[#020d18] max-md:border md:border-x border-[#405266] text-white outline-none">
        <option value="5">5 Reviews</option>
        <option value="10">10 Reviews</option>
      </select>

      {/* custom pagination  */}
      <div className="flex gap-3">
        <p>Page 1 of 6:</p>

        <div className="flex gap-3 text-sky-blue">
          <button className="text-lemon-green">1</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>
            <FaCaretRight />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ReviewTab