import menu from '@/assets/json/menu.json';
import { MenuItem } from '@/assets/json/types';
import HomeMenuItem from './HomeMenuItem';

export default function HomeMenuList() {
    const categories = menu.map(item => item.category);

    const itemsByCategories: Record<string, MenuItem[]> = {};
    for(const item of menu) {
        itemsByCategories[item.category] = item.items;
    }

    return(
        <div className="p-section pt-0 bg-secondary">
            <ul className="main-width">
                {Object.entries(itemsByCategories).map(([category, items]) => (
                    <li 
                        data-category={category}
                        key={category}
                    >
                        <span className="py-5 block text-2xl font-medium border-y-[1px] border-y-tertiary">
                            {category}
                        </span>
                        <ul className="divide-y-[1px]">
                            {items.map((item, key) => (
                                <li key={key}>
                                    <HomeMenuItem item={item} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}