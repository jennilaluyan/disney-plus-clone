import DisneyPlusLogo from "../assets/images/logo.svg"
import Background from "../assets/images/login-background.jpg"
import { ChevronRight } from "lucide-react"

export const Onboarding = () => {
    return (
        <section className="h-screen">
            <div className="relative overflow-hidden flex h-full justify-center items-end mb-32 box-border">
                <img src={Background} alt="" className="absolute object-cover w-full h-full object-top top-0 right-0 left-0 -z-1" />
                <main className="text-center max-w-[650px] w-full flex flex-col mx-8 mb-24">
                    <img src={DisneyPlusLogo} alt="Disney Plus Logo" className="max-w-72 min-w-1 w-full block mb-5 mx-auto" />
                    <h2 className="leading-10 font-semibold text-3xl mx-auto mb-5">Home of your favourites and more. Try select episodes on us.</h2>
                    <button className="max-w-90 min-w-1 w-full mx-auto bg-gradient-to-r from-[#2555d8] to-[#112993] font-semibold py-3 rounded-md text-lg flex justify-center gap-2 transition-transform duration-800 ease-in-out hover:scale-103">Subscribe Now <ChevronRight /></button>
                </main>
            </div>
        </section>
    )
}