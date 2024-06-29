import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ children, className, href, hrefTarget, onClick }: {
    children: React.ReactNode;
    className?: string;
    href?: string;
    hrefTarget?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
    onClick?: () => void;
}) {
    const props = {
        className: twMerge(
            "px-4 py-3 flex justify-center items-center text-primary text-lg font-medium rounded-lg bg-primary hover:bg-primary/80 transition-colors",
            className,
        ),
        onClick,
    }

    if(href) {
        return(
            <a
                {...props}
                href={href}
                target={hrefTarget}
            >
                {children}
            </a>
        )
    }

    return(
        <button {...props}>
            {children}
        </button>
    )
}