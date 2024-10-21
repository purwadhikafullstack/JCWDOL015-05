'use client'
import Image, { StaticImageData } from "next/image";
import icon1 from "../../../public/icon/icon1.png";
import icon2 from "../../../public/icon/icon2.png";
import icon3 from "../../../public/icon/icon3.png";
import icon4 from "../../../public/icon/icon4.png";
import icon5 from "../../../public/icon/icon5.png";
import icon6 from "../../../public/icon/icon6.png";
import icon7 from "../../../public/icon/icon7.png";
import icon8 from "../../../public/icon/icon8.png";
import { Card } from "../ui/card";

export const serviceIcon = [
  { icon: icon1, title: "Daily Laundry", id: 'icon1' },
  { icon: icon2, title: "Daily Laundry", id: 'icon2' },
  { icon: icon3, title: "Daily Laundry", id: 'icon3' },
  { icon: icon4, title: "Daily Laundry", id: 'icon4' },
  { icon: icon5, title: "Daily Laundry", id: 'icon5' },
  { icon: icon6, title: "Daily Laundry", id: 'icon6' },
  { icon: icon7, title: "Daily Laundry", id: 'icon7' },
  { icon: icon8, title: "Daily Laundry", id: 'icon8' },
]
type serviceIconProps = {
  src: string | StaticImageData,
  title: string,
  id: string
}
export const ServicesIcon = ({ src, title, id }: serviceIconProps) => {
  return (
    <div className="max-w-fit">
      <Card className="flex flex-col items-center justify-center py-5 space-y-3 shadow-none px-7 " id={id}>
        <div className="absolute w-full h-full rounded-md opacity-0 bg-steel-blue" id="bg"></div>
        <Image src={src} alt="icon" />
        <p className="font-semibold">{title}</p>
      </Card>
    </div>
  )
}