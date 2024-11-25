import Image from "next/image";
import img1 from "../../../public/img/landing1.png";

export default function Section2() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto my-2 lg:my-0 lg:h-screen ">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col-reverse  md:flex-row lg:flex-row justify-center w-3/4 gap-5 ">
          <div className="w-auto lg:w-2/3">
            <div className="space-y-5">
              <h1 className="w-full mt-5 lg:mt-32 text-3xl font-extrabold text-steel-blue text-left lg:text-5xl">
                Clean, Fragrant, Hygienic and Timely Laundry
              </h1>
              <p className="text-2xl ">At <span className="font-semibold text-steel-blue">Shine</span>, we deliver clean, fresh laundry with fast, reliable service. Quality and timely delivery are our top priorities.</p>
            </div>
          </div>
          <Image src={img1} width={450} height={450} alt="img1" className="" />
        </div>
      </div>

    </section >
  )
}