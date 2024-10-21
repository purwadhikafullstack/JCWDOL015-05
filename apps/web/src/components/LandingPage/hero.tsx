'use client'
import heroImg from "../../../public/img/herobg.png";
import heroImg2 from "../../../public/img/image.png";
import heroImg3 from "../../../public/img/herobg3.png";

import React, { HTMLAttributes, useEffect } from "react";
import { GsapAnimation } from "@/services/gsapAnimation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image, { StaticImageData } from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../ui/card";
import { serviceIcon, ServicesIcon } from "./serviceIcon";

const heroImages = [heroImg, heroImg2, heroImg3]



export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )
  useEffect(() => {
    GsapAnimation()
  }, [])
  return (
    <section className="w-full h-screen ">
      <div className="relative w-full h-full">
        <Carousel plugins={[plugin.current]} className="absolute inset-0 bg-center bg-cover">
          <CarouselContent>
            {heroImages.map((img, index) => (
              <CarouselItem key={index} className="relative w-full">
                <div className="w-full h-[737px]">
                  <Image
                    src={img}
                    alt="hero"
                    className="w-full bg-center bg-cover "
                    objectFit={'cover'}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 opacity-50 bg-steel-blue"></div>
        {/* Text content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="absolute font-bold opacity-0 text-7xl top-36" id="hero">
            WASH NOW or Naked Later?
          </h1>
          <h2 className="absolute text-5xl font-bold opacity-0 right-72 top-56" id="hero">
            Your Choice
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-20 opacity-0" id="card">
        <div className="w-1/2 -translate-y-32 rounded-lg h-72 bg-steel-blue text-floral-white ">
          <div className="flex flex-col items-center justify-center gap-3 py-3">
            <h1 className="text-2xl font-semibold">Laundry Reservation</h1>
            <div className="w-1/3 space-y-5">
              <Input type="text" placeholder="Enter your name" className="border-2 placeholder:text-floral-white focus-visible:border-white" />
              <Input type="text" placeholder="Enter your name" className="border-2 placeholder:text-floral-white" />
              <Input type="text" placeholder="Enter your name" className="border-2 placeholder:text-floral-white" />
            </div>
            <Button className="rounded-full " size={'lg'}>Reservation</Button>
          </div>
        </div>
      </div>
    </section>
  )
}