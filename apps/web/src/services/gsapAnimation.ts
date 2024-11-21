'use client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function GsapAnimation() {
  gsap.registerPlugin(ScrollTrigger)

  let TextFromLeft = document.querySelectorAll("#hero");
  let FromBottom = document.querySelector("#card");

  let cardIconId = ["icon1", "icon2", "icon3", "icon4", "icon5", "icon6", "icon7", "icon8"];
  let cardIcon = cardIconId.map((id) => document.querySelector(`#${id}`))
  var iconTl = gsap.timeline({
    scrollTrigger: {
      trigger: cardIcon[0],
      start: "0% center",
    }
  })
  var tl = gsap.timeline({ repeat: 0 });
  cardIcon.forEach((icon) => {
    if (icon) {
      var hoverIcon = gsap.to(icon, {
        duration: 0.5,
        paused: true,
        ease: "power1.inOut",
        backgroundPosition: "left bottom",
        color: "white",
        backgroundImage: "linear-gradient(to right, #00FFFF 100%, white 0%)"
      });

      icon.addEventListener("mouseenter", () => {
        hoverIcon.play();
      });
      icon.addEventListener("mouseleave", () => {
        hoverIcon.reverse();
      });
    }
  });

  const getResponsiveStart = () => {
    if (window.innerWidth < 768) {
      // Mobile
      return "top 80%";
    } else if (window.innerWidth < 1024) {
      // Tablet
      return "top 70%";
    } else {
      // Desktop
      return "350% center";
    }
  };
  tl.fromTo(TextFromLeft,
    { rotation: 0, x: -200, duration: 1, delay: 0.5, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, delay: 0.5 }
  )
  iconTl.fromTo(
    cardIcon[3],
    { x: -150, opacity: 0, immediateRender: false },
    { x: 0, opacity: 1, duration: 0.3, }
  ).fromTo(
    cardIcon[2],
    { x: -100, duration: 0, opacity: 0, immediateRender: false },
    { x: 0, opacity: 1, duration: 0.3 }
  ).fromTo(
    cardIcon[1],
    { x: -100, duration: 0, opacity: 0, immediateRender: false },
    { x: 0, opacity: 1, duration: 0.3 }
  ).fromTo(
    cardIcon[0],
    { x: -100, duration: 0, opacity: 0, immediateRender: false },
    { x: 0, opacity: 1, duration: 0.3 }
  )
  iconTl.fromTo(
    cardIcon[7],
    { x: -150, duration: 1, opacity: 0, immediateRender: false },
    { x: 0, opacity: 1, duration: 0.3 }
  ).fromTo(
    cardIcon[6],
    { x: -100, duration: 0, opacity: 0, immediateRender: false },
    { x: 0, opacity: 1, duration: 0.3 }
  ).fromTo(
    cardIcon[5],
    { x: -100, duration: 0, opacity: 0, immediateRender: false },
    { x: 0, opacity: 1, duration: 0.3 }
  ).fromTo(
    cardIcon[4],
    { x: -100, duration: 0, opacity: 0, immediateRender: false },
    { x: 0, opacity: 1, duration: 0.3 }
  )
  const isMobile = window.innerWidth < 768;
  gsap.fromTo(
    FromBottom,
    { opacity: 0, y: isMobile ? 900 : 500 },
    {
      y: 0, opacity: 1,
      scrollTrigger: {
        trigger: TextFromLeft,
        start: getResponsiveStart(),
      },
    }
  )
}