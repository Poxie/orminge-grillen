"use client";
import menu from '@/assets/json/menu.json';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const BANNER_OFFSET = 44;
const MOBILE_BANNER_OFFSET = 69;
export default function HomeMenuHeader() {
    const categories = menu.map(item => item.category);

    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [bannerOffset, setBannerOffset] = useState(BANNER_OFFSET);

    const ref = useRef<HTMLUListElement>(null);

    const getBannerOffset = () => {
        if(typeof window === 'undefined') return BANNER_OFFSET;
        return window.innerWidth >= 768 ? BANNER_OFFSET : MOBILE_BANNER_OFFSET;
    };
    useEffect(() => {
        const onResize = () => {
            setBannerOffset(getBannerOffset());
        }
        onResize();

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll('li[data-category]');

        const onScroll = () => {
            if(!ref.current) return;

            const offset = ref.current.offsetHeight + getBannerOffset() + 1;

            sections.forEach(section => {
                const { top } = section.getBoundingClientRect();
                if(top <= offset) {
                    setActiveCategory(section.getAttribute('data-category')!);
                }
            })
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onClick = (category: string) => {
        if(!ref.current) return;

        const section = document.querySelector(`li[data-category="${category}"]`);
        if(!section) return;

        const { top } = section.getBoundingClientRect();

        const offset = ref.current.offsetHeight + getBannerOffset();

        if(section) {
            window.scrollTo({ 
                top: top + window.document.documentElement.scrollTop - offset,
                behavior: 'smooth',
            });
        }
    }

    return(
        <div 
            className="sticky bg-primary border-b-[1px] border-b-tertiary"
            style={{ top: bannerOffset }}
        >
            <ul className="sm:main-width px-6 sm:p-0 flex gap-5 overflow-auto" ref={ref}>
                {categories.map(categrory => {
                    const isActive = categrory === activeCategory;

                    return(
                        <li key={categrory}>
                            <button 
                                onClick={() => onClick(categrory)}
                                className={twMerge(
                                    "py-5 font-medium whitespace-nowrap border-b-2 border-b-transparent hover:text-primary transition-colors",
                                    !isActive && "text-muted",
                                    isActive && "text-primary border-b-t-primary",
                                )}
                                data-category-button={categrory}
                            >
                                {categrory}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}