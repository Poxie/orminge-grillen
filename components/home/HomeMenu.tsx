import HomeMenuHeader from './HomeMenuHeader';
import HomeMenuList from './HomeMenuList';

export default function HomeMenu() {
    return(
        <section className="p-section pb-0">
            <div className="mb-8 relative">
                <div className="dotted-line w-full h-[1px] -z-[1] absolute left-0 top-2/4 -translate-y-2/4" />
                <div className="flex justify-center">
                    <h2 className="px-8 text-3xl text-center uppercase font-semibold tracking-widest bg-primary">
                        Vår meny
                    </h2>
                </div>
            </div>
            <HomeMenuHeader />
            <HomeMenuList />
        </section>
    )
}