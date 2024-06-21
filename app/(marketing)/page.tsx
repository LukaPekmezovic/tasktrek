import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { headingFont, textFont } from "@/styles/fonts";
import { Medal } from "lucide-react"
import Link from "next/link";


const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn ("flex items-center justify-center flex-col", headingFont.className)}>
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2" />
                    No 1 task managment
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    TaskTrek helps team move
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-sky-400 to-sky-700 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    work forwrad
                </div>
            </div>
            <div className={cn("text-sm md:text-xl bg-neutral-100 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
                Collaborate seamlessly, manage projects efficiently, and achieve new productivity heights with TaskTrek. Whether in a high-rise office or working from home, empower your team to accomplish it all with our unique solution.
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">
                    Get Tasktrek for free
                </Link>
            </Button>
        </div>
    )
}

export default MarketingPage;