import Link from "next/link";
import { Container } from "@/components/ui/container";

const categories = [
    { name: "Noble Quran", color: "bg-emerald-100 text-emerald-800", count: "120+ items" },
    { name: "Seerat-un-Nabi", color: "bg-amber-100 text-amber-800", count: "85+ items" },
    { name: "Islamic Fiction", color: "bg-blue-100 text-blue-800", count: "40+ items" },
    { name: "Stationery", color: "bg-rose-100 text-rose-800", count: "200+ items" },
    { name: "Kids Corner", color: "bg-purple-100 text-purple-800", count: "50+ items" },
];

export function FeaturedCategories() {
    return (
        <section className="py-16">
            <Container>
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Explore Categories</h2>
                    <Link href="/categories" className="text-sm font-medium text-primary hover:underline">
                        View all &rarr;
                    </Link>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            href={`/category/${cat.name.toLowerCase().replace(' ', '-')}`}
                            className={`group relative flex flex-col items-center justify-center rounded-xl p-6 text-center transition-transform hover:scale-105 ${cat.color}`}
                        >
                            <div className="mb-2 text-xl font-bold">{cat.name}</div>
                            <p className="text-xs opacity-70 group-hover:opacity-100">{cat.count}</p>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
