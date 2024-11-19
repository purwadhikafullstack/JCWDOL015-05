import Image from "next/image";
import img1 from "../../../public/img/landing1.png";

export default function Section2() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen ">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row justify-center w-3/4 gap-5 ">
          <div className="w-2/3">
            <div className="space-y-5">
              <h1 className="w-full mt-32 text-5xl font-extrabold text-steel-blue">
                Clean, Fragrant, Hygienic and Timely Laundry
              </h1>
              <p className="text-2xl ">At <span className="font-semibold text-steel-blue">Shine</span>, we deliver clean, fresh laundry with fast, reliable service. Quality and timely delivery are our top priorities.</p>
            </div>
          </div>
          <Image src={img1} width={450} height={450} alt="img1" className="w-[40%]" />
        </div>
      </div>

    </section >
  )
}