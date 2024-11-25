'use client'
import { Button } from "@/components/ui/button";
import { verifyEmail } from "@/services/api/customers/customers";
import { useMutation } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function VerifyEmail(){
    const { token } = useParams()
    const router = useRouter()
    const verifyMutation = useMutation({
    mutationFn: async()=> {
        const {result, ok} = await verifyEmail(token.toString())
        return {result, ok}
    },
    onSuccess: (result)=>{
        console.log(result)
        if(!result.ok) {
            if(result.result.err == "email already verified"){
                router.push('/login')
                throw new Error(result.result.err)
            }
            router.push('/customers/verify-email')
            throw new Error(result.result.err.name) 
        }
        toast.success(result.result.message)
        router.push('/login')
    },
    onError: (err)=>{
        // console.log(err)
        toast.error(err?.message)
    }
    })
    return(
        <section className="w-full h-screen flex items-center justify-center">
            <Button onClick={()=> verifyMutation.mutate()}>{verifyMutation.isPending ? "Loading..." : "Verify Email"}</Button>
        </section>
    )
}