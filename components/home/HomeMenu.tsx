import HomeMenuHeader from './HomeMenuHeader';
import HomeMenuList from './HomeMenuList';
import HomeSectionHeader from './HomeSectionHeader';

export default function HomeMenu() {
    return(
        <section className="p-section pb-0">
            <HomeSectionHeader>
                Vår meny
            </HomeSectionHeader>
            <HomeMenuHeader />
            <HomeMenuList />
        </section>
    )
}