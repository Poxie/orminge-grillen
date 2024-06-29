export default function Footer() {
    return(
        <footer className="relative py-5 text-center bg-secondary">
            <div className="dotted-line h-[1px] w-full absolute top-0 left-0" />
            <span className="text-sm">
                Copyright © {new Date().getFullYear()} Orminge Grillen. All rights reserved.
            </span>
        </footer>
    )
}