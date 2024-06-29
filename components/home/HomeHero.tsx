import Image from "next/image";
import Button from "../button";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import HomeHeroButtons from "./HomeHeroButtons";

const TITLE = 'Orminge Grillen';
const SUBTITLE = 'Hamburgare, kebab, tunnbrödsrullar, korv, glass, smårätter och mer.';
export default function HomeHero() {
    return(
        <section className="h-[70vh] relative flex flex-col justify-center items-center">
            <div className="h-full -z-[1] absolute after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-black/45">
                <Image 
                    className="h-full object-cover"
                    src="/imgs/hero.jpg"
                    width={1920}
                    height={1080}
                    alt=""
                />
            </div>
            <div className="main-width flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-5xl text-light font-medium">
                    {TITLE}
                </h1>
                <p className="w-[600px] max-w-full mt-3 md:mt-6 text-center text-xl md:text-2xl text-light">
                    {SUBTITLE}
                </p>
                <HomeHeroButtons />
            </div>
        </section>
    )
}