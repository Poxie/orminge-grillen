import { MenuItem } from "@/assets/json/types"

export default function HomeMenuItem({ item: { name, description, price } }: {
    item: MenuItem;
}) {
    return(
        <div className="py-3 px-3 -mx-3 grid hover:bg-tertiary rounded-md transition-colors">
            <div className="flex justify-between">
                <span className="text-lg font-medium">
                    {name}
                </span>
                <span className="font-medium">
                    {price}kr
                </span>
            </div>
            <span className="text-muted">
                {description}
            </span>
        </div>
    )
}