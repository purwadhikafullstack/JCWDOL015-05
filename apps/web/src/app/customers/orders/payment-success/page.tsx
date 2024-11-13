import { useRouter } from "next/navigation"

export default function PaymentSuccess (){
    const router = useRouter()
    const checkPayment = async ()=>{
        // if result ok go to orders page 
        router.push('/orders')
    }
    return (
        <section>

        </section>
    )
}