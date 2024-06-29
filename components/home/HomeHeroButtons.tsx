"use client";

import ArrowIcon from "@/assets/icons/ArrowIcon";
import Button from "../button";

export default function HomeHeroButtons() {
    const toMenu = () => {
        const menuSection = document.querySelectorAll('section')[1];

        const { top } = menuSection.getBoundingClientRect();

        window.scrollTo({
            top: top + window.document.documentElement.scrollTop,
            behavior: "smooth",
        })
    }

    return(
        <div className="[--button-width:100%] sm:[--button-width:12rem] w-full mt-8 md:mt-10 flex justify-center flex-col sm:flex-row gap-2 sm:gap-4">
            <Button 
                className="w-[--button-width]"
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
            >
                Beställ nu
            </Button>
            <Button
                onClick={toMenu}
                className="w-[--button-width] gap-3 bg-transparent hover:bg-black/20 border-[1px] border-priamry text-light"
            >
                Till vår meny
                <ArrowIcon className="w-6 -rotate-90" />
            </Button>
        </div>
    )
}