import Login from "@/Pages/Auth/Login"
import GuestLayout from "@/Layouts/GuestLayout"
export default function Home(){
    return (
        <GuestLayout>
            <Login/>
        </GuestLayout>
    )
}
