import PlaceIcon from "@/assets/icons/PlaceIcon";
import HomeSectionHeader from "./HomeSectionHeader";
import FoodoraIcon from "@/assets/icons/FoodoraIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";

const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=ormingegrillen`;
const IFRAME_SRC = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.403091380689!2d18.25476881215915!3d59.326223811164056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f822104be85d5%3A0x77fcae8c57be5fff!2sOrmingegrillen!5e0!3m2!1ssv!2sse!4v1719701060299!5m2!1ssv!2sse`;
export default function HomeAbout() {
    return(
        <section className="p-section">
            <HomeSectionHeader>
                Beställ & Hitta
            </HomeSectionHeader>
            <div className="main-width md:flex border-[1px] border-tertiary rounded-lg">
                <div className="flex-1 p-6 pr-0 text-muted">
                    <SectionHeader>
                        Beställ
                    </SectionHeader>
                    <div>
                        <AboutLink 
                            href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                            newTab={false}
                        >
                            <PhoneIcon className="w-5" />
                            {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                        </AboutLink>
                    </div>
                    <div className="mt-2">
                        <AboutLink href={process.env.NEXT_PUBLIC_FOODORA_LINK}>
                            <FoodoraIcon className="w-5" />
                            Beställ med Foodora
                        </AboutLink>
                    </div>
                    <SectionHeader>
                        Hitta hit
                    </SectionHeader>

                    <AboutLink href={MAPS_LINK}>
                        <PlaceIcon className="w-5" />
                        {process.env.NEXT_PUBLIC_ADRESS}
                    </AboutLink>

                    <SectionHeader>
                        Öppettider
                    </SectionHeader>
                    <div className="grid gap-1">
                        <span>
                            Vardag
                            {' '}
                            {process.env.NEXT_PUBLIC_OPEN_NORMAL}
                        </span>
                        <span>
                            Lördag
                            {' '}
                            {process.env.NEXT_PUBLIC_OPEN_SATURDAY}
                        </span>
                        <span>
                            Söndag
                            {' '}
                            {process.env.NEXT_PUBLIC_OPEN_SUNDAY}
                        </span>
                    </div>
                </div>
                <iframe className="w-full md:w-2/5 aspect-video" src={IFRAME_SRC}></iframe>
            </div>
        </section>
    )
}

function SectionHeader({ children }: {
    children: React.ReactNode;
}) {
    return(
        <div className="my-4 first:mt-0 flex items-center gap-3">
            <span className="text-sm text-primary font-semibold">
                {children}
            </span>
            <div className="flex-1 h-[1px] bg-tertiary" />
        </div>
    )
}
function AboutLink({ children, href, newTab= true }: {
    children: React.ReactNode;
    href: string;
    newTab?: boolean;
}) {
    return(
        <a 
            className="flex items-center gap-2 hover:underline"
            target={newTab ? "_blank" : "_self"}
            href={href}
        >
            {children}
        </a>
    )
}