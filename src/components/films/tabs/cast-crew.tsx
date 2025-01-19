import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CastCrewTab = () => {
  return (
    <div className="my-10 lg:overflow-y-auto hide-scrollbar lg:h-[350vh]">
    <h4 className="font-bold text-lg">
      Cast & Crew of
      <span className="block text-sky-blue text-2xl">
        Skyfall: Quantum of Spectre
      </span>
    </h4>
    <section>
      <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
        <h4 className="text-white font-bold font-dosis uppercase">
          Directors & Credit Writers
        </h4>
      </div>

      <div>
        {Array.from({ length: 1 }).map((_, index) => (
          <div
            key={index}
            className="cast-it flex items-center font-nunito mb-7"
          >
            <div className="cast-left relative flex items-center gap-2 w-[60%]">
              <Image
                src="/images/celebrities/ava1.jpg"
                className="rounded-sm"
                alt="ava1"
                width={40}
                height={40}
              />
              <Link href="/celeb" className="text-sky-blue">
                Robert Downey Jr.
              </Link>
            </div>
            <p>... Robert Downey Jr.</p>
          </div>
        ))}
      </div>
    </section>
    <section>
      <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
        <h4 className="text-white font-bold font-dosis uppercase">
          Directors & Credit Writers
        </h4>
      </div>

      <div>
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="cast-it flex items-center font-nunito mb-7"
          >
            <div className="cast-left relative flex items-center gap-2 w-[60%]">
              <Image
                src="/images/celebrities/ava1.jpg"
                className="rounded-sm"
                alt="ava1"
                width={40}
                height={40}
              />
              <Link href="/celeb" className="text-sky-blue">
                Robert Downey Jr.
              </Link>
            </div>
            <p>... Robert Downey Jr.</p>
          </div>
        ))}
      </div>
    </section>
    <section>
      <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
        <h4 className="text-white font-bold font-dosis uppercase">
          Cast
        </h4>
      </div>

      <div>
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="cast-it flex items-center font-nunito mb-7"
          >
            <div className="cast-left relative flex items-center gap-2 w-[60%]">
              <Image
                src="/images/celebrities/ava1.jpg"
                className="rounded-sm"
                alt="ava1"
                width={40}
                height={40}
              />
              <Link href="/celeb" className="text-sky-blue">
                Robert Downey Jr.
              </Link>
            </div>
            <p>... Robert Downey Jr.</p>
          </div>
        ))}
      </div>
    </section>
    <section>
      <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
        <h4 className="text-white font-bold font-dosis uppercase">
          Produced by
        </h4>
      </div>

      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="cast-it flex items-center font-nunito mb-7"
          >
            <div className="cast-left relative flex items-center gap-2 w-[60%]">
              <Image
                src="/images/celebrities/ava1.jpg"
                className="rounded-sm"
                alt="ava1"
                width={40}
                height={40}
              />
              <Link href="/celeb" className="text-sky-blue">
                Robert Downey Jr.
              </Link>
            </div>
            <p>... Robert Downey Jr.</p>
          </div>
        ))}
      </div>
    </section>
  </div>
  )
}

export default CastCrewTab