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
        <div className="relative flex flex-col items-center h-full text-center text-white">
          <div className='flex flex-col gap-14 md:gap-20 lg:gap-24 mt-36 md:mt-48 lg:mt-60'>
            <h1 className='text-3xl md:text-6xl lg:text-7xl font-semibold' id='hero'>WASH NOW or Naked Later?</h1>
            <h1 className='flex justify-end text-2xl md:text-4xl lg:text-5xl font-medium' id='hero'>Your Choice</h1>
          </div>
          
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
