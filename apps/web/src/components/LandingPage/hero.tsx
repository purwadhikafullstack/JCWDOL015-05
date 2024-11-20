'use client';
import heroImg from '../../../public/img/herobg1.webp';
import heroImg2 from '../../../public/img/herobg2.webp';
import heroImg3 from '../../../public/img/herobg3.webp';
import React, { HTMLAttributes, useEffect, useState } from 'react';
import { GsapAnimation } from '@/services/gsapAnimation';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image, { StaticImageData } from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '../ui/card';
import { serviceIcon, ServicesIcon } from './serviceIcon';
import Link from 'next/link';
import { getToken } from '@/lib/server';

const heroImages = [heroImg, heroImg2, heroImg3];
export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );
  const [token, setToken] = useState('')

  const getTokenData = async () => {
      const res = await getToken()
      console.log(res)
      setToken(res as string)
    }

  useEffect(() => {
    getTokenData()
    GsapAnimation();
  }, []);
  return (
    <section className="w-full h-screen ">
      <div className="relative w-full h-full">
        <Carousel
          plugins={[plugin.current]}
          className="absolute inset-0 bg-center bg-cover"
        >
          <CarouselContent>
            {heroImages.map((img, index) => (
              <CarouselItem key={index} className="relative hidden w-full md:block">
                <div className="w-full h-screen">
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
          <h1
            className="absolute font-bold opacity-0 text-4xl top-12 lg: top-40 lg:text-7xl"
            id="hero"
          >
            WASH NOW or Naked Later?
          </h1>
          <h2
            className="absolute text-2xl lg:text-5xl font-bold top-60 opacity-0 right-12 lg:right-72 lg:top-60"
            id="hero"
          >
            Your Choice
          </h2>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center w-full h-14 md:h-20 lg:h-20 opacity-0"
        id="card"
      >
        <div className="w-48 h-60 -translate-y-32 rounded-lg  bg-white border-2 border-steel-blue border-solid text-steel-blue flex flex-col items-center duration-300 justify-center cursor-pointer  hover:bg-steel-blue hover:text-white">
          {token ? (
            <Link href={'/service'}>
              <p className="text-2xl font-semibold">Order Now</p>
            </Link>
          ) : (
            <Link href={'/login'}>
              <p className="text-2xl font-semibold">Order Now</p>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
