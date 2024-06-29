import { MenuItem } from "@/assets/json/types"

export default function HomeMenuItem({ item: { name, description, price } }: {
    item: MenuItem;
}) {
    return(
        <div className="py-3 px-3 -mx-3 flex justify-between sm:items-center gap-4 hover:bg-tertiary rounded-md transition-colors">
            <div className="grid">
                <span className="text-lg font-medium">
                    {name}
                </span>
                <span className="text-muted">
                    {description}
                </span>
            </div>
            <span className="mt-0.5 sm:mt-0 font-medium">
                {price}kr
            </span>
        </div>
    )
}