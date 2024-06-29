import HomeAbout from "./HomeAbout";
import HomeHero from "./HomeHero";
import HomeMenu from "./HomeMenu";

export default function Home() {
    return(
        <main>
            <HomeHero />
            <HomeMenu />
            <HomeAbout />
        </main>
    )
}