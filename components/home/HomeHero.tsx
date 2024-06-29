import Image from "next/image";
import Button from "../button";
import ArrowIcon from "@/assets/icons/ArrowIcon";

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
                <h1 className="text-4xl md:text-6xl text-light font-medium">
                    {TITLE}
                </h1>
                <p className="w-[600px] max-w-full mt-3 md:mt-6 text-center text-2xl md:text-3xl text-light">
                    {SUBTITLE}
                </p>
                <div className="[--button-width:100%] sm:[--button-width:12rem] w-full mt-8 md:mt-10 flex justify-center flex-col sm:flex-row gap-2 sm:gap-4">
                    <Button 
                        className="w-[--button-width]"
                        href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                    >
                        Beställ nu
                    </Button>
                    <Button
                        className="w-[--button-width] gap-3 bg-transparent hover:bg-black/20 border-[1px] border-priamry text-light"
                    >
                        Till vår meny
                        <ArrowIcon className="w-6 -rotate-90" />
                    </Button>
                </div>
            </div>
        </section>
    )
}