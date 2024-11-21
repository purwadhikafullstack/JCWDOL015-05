'use client'
import { serviceIcon, ServicesIcon } from "./serviceIcon";

export default function Ourservices() {
  return (
    <section className="flex flex-col items-center w-full h-auto md:h-screen lg:h-screen py-8 bg-steel-blue">
      <h1 className="text-4xl font-bold text-floral-white">Our Services</h1>
      <div className="grid w-2/3 grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-16 mt-14">
        {
          serviceIcon.map((icon, index) => (
            <ServicesIcon
              key={index}
              src={icon.icon}
              title={icon.title}
              id={icon.id}
            />
          ))
        }
      </div>
    </section>
  )
}