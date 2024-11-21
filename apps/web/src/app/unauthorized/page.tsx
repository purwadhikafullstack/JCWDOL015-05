'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function Unauthorized(){
    const router = useRouter()
    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 1000);
    },[])
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center">
            <p className="text-2xl">You Dont Have Access for this Page</p>
        </section>
    )
}