'use client'

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Role, Station } from "@/type/role"
import { useDispatch } from "react-redux"
import WashingPage from "./stationPage.tsx/washing"
import IroningPage from "./stationPage.tsx/ironing"
import PackingPage from "./stationPage.tsx/packing"

export default function WorkerPage() {

    const dispatch = useDispatch()
    const worker = useAppSelector((state) => state.worker)

    const checkStation = (station: Station) => {
        return worker?.station === station
    }
    return (
        <div>
            {worker?.workerId}
            {checkStation(Station.washing) && (
                <WashingPage/>
            )}
            {checkStation(Station.ironing) && (
                <IroningPage/>
            )}
            {checkStation(Station.packing) && (
                <PackingPage/>
            )}
        </div>
    )
}