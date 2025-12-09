import Link from "next/link";
import { Icons } from "@/components/ui/icons";

const categories = [
    { name: "Electronic Accessories", icon: Icons.Search }, // Placeholder icons
    { name: "TV & Home Appliances", icon: Icons.Search },
    { name: "Health & Beauty", icon: Icons.Search },
    { name: "Babies & Toys", icon: Icons.Search },
    { name: "Groceries & Pets", icon: Icons.Search },
    { name: "Home & Lifestyle", icon: Icons.Search },
    { name: "Women's Fashion", icon: Icons.Search },
    { name: "Men's Fashion", icon: Icons.Search },
    { name: "Watches, Bags & Jewelery", icon: Icons.Search },
    { name: "Sports & Outdoor", icon: Icons.Search },
    { name: "Automotive & Motorbike", icon: Icons.Search },
];

export function CategorySidebar() {
    return (
        <div className="w-64 flex-shrink-0 bg-white shadow-sm border-r hidden lg:block h-full min-h-[400px]">
            <div className="py-2">
                <h3 className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hidden">Categories</h3>
                <ul className="flex flex-col">
                    {categories.map((cat, idx) => (
                        <li key={idx}>
                            <Link
                                href={`/category/${cat.name.toLowerCase().replace(/ /g, '-')}`}
                                className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    {/* <cat.icon className="w-4 h-4 opacity-50 group-hover:text-primary" /> */}
                                    <span>{cat.name}</span>
                                </div>
                                <Icons.X className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-50" /> {/* Chevron Right trick */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
