import prisma from "@/prisma";
import { Request, Response } from "express";

export class CopyLocation {

  // async copyLocation(req: Request, res: Response) {
  //   type ROLocation = {
  //     id: number
  //     province_id: string
  //     province: string
  //     type: string
  //     city_name: string
  //   }
  //   try {
  //     const API_KEY = process.env.RAJAONGKIR_API_KEY
  //     const url = await fetch(`https://api.rajaongkir.com/starter/city?key=${API_KEY}`)
  //     const response = await url.json()
  //     const result: ROLocation[] = response.rajaongkir.results
  //     for (const city of result) {
  //       if (result === null || undefined) throw 'No Data'
  //       const provinceName = city.province
  //       const provinceId = parseInt(city.province_id)
  //       const cityName = city.type === 'Kota' ? `Kota ${city.city_name}` : city.city_name

  //       const newData = await prisma.baseAddress.create({
  //         data: {
  //           provinceId: provinceId,
  //           province: provinceName,
  //           city: cityName
  //         }
  //       })
  //       console.log(`Success Add city_Id: ${city.id} , province: ${provinceName} , city: ${cityName} `)
  //     }
  //     res.status(200).send({
  //       status: 'ok',
  //     })
  //   }
  //   catch (err) {
  //     res.status(400).send({
  //       status: 'failed',
  //       error: err
  //     })
  //   }
  // }
  async copyDetailLocation(req: Request, res: Response) {
    type ROLocation = {
      id: number
      province_id: string
      province: string
      type: string
      city_id: string
      city_name: string
      subdistrict_id: string
      subdistrict: string
    }
    try {
      const API_KEY = process.env.BYNDERBYTE_API_KEY
      const urlProvinsi = `https://api.binderbyte.com/wilayah/provinsi?api_key=${API_KEY}`
      let idProvince = 1
      let idCity = 1
      let idSubdistrict = 1

      const resProvinsi = await fetch(urlProvinsi)
      const response = await resProvinsi.json()
      const result = response.value
      for (const province of result) {
        if (result === null || undefined) throw 'No Data'
        const provinceId = province.id
        const provinceName = province.name
        let indexProvinsi = idProvince++
        const urlKabupaten = `https://api.binderbyte.com/wilayah/kabupaten?api_key=${API_KEY}`
        const resCity = await fetch(`${urlKabupaten}&id_provinsi=${provinceId}`)
        const responseCity = await resCity.json()
        const resultCity = responseCity.value
        for (const city of resultCity) {
          if (resultCity === null || undefined) throw 'No Data in City'
          const cityId = city.id
          const cityName = city.name
          let indexCity = idCity++
          console.log(`city id : ${cityId}`, `provinsiId: ${provinceId}`)
          const urlKecamatan = `https://api.binderbyte.com/wilayah/kecamatan?api_key=${API_KEY}`
          const resSubDis = await fetch(`${urlKecamatan}&id_kabupaten=${cityId}`)
          const responseSubDis = await resSubDis.json()
          const resultSubDis = responseSubDis.value

          for (const subDis of resultSubDis) {
            if (resultSubDis === null || undefined) throw 'No Data in SubDis'
            const subdistrictId = subDis.id
            const subDisName = subDis.name
            let indexSubdistrict = idSubdistrict++
            const newData = await prisma.listAddress.create({
              data: {
                provinceId: indexProvinsi,
                province: provinceName,
                cityId: indexCity,
                city: cityName,
                subdistrictId: indexSubdistrict,
                subdistrict: subDisName
              }
            })
            console.log(`Success Add Data : ${provinceName}, ${cityName}. ${subDisName} `)
          }
        }

      }
      res.status(200).send({
        status: 'ok',
      })
    }
    catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
      console.log(err)
    }
  }
}


