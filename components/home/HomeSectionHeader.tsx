export default function HomeSectionHeader({ children }: {
    children: React.ReactNode;
}) {
    return(
        <div className="mb-6 md:mb-8 relative">
            <div className="dotted-line w-full h-[1px] -z-[1] absolute left-0 top-2/4 -translate-y-2/4" />
            <div className="flex justify-center">
                <h2 className="px-8 text-3xl text-center uppercase font-semibold tracking-widest bg-primary">
                    {children}
                </h2>
            </div>
        </div>
    )
}