import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const products = [
    { id: 1, title: "The Sealed Nectar", author: "Safiur Rahman", price: "$15.00", category: "Seerat" },
    { id: 2, title: "Riyad as-Salihin", author: "Imam Nawawi", price: "$22.50", category: "Hadith" },
    { id: 3, title: "Fortress of the Muslim", author: "Dar-us-Salam", price: "$5.00", category: "Dua" },
    { id: 4, title: "Don't Be Sad", author: "Aaidh Quotes", price: "$18.99", category: "Self-Help" },
];

export function ProductShowcase() {
    return (
        <section className="bg-muted/30 py-16">
            <Container>
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Best Sellers</h2>
                        <p className="mt-2 text-muted-foreground">Handpicked favorites from our community.</p>
                    </div>
                    <Button variant="outline" className="hidden sm:flex">View Best Sellers</Button>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group overflow-hidden rounded-lg bg-background shadow-sm transition-shadow hover:shadow-md">
                            {/* Placeholder for Product Image */}
                            <div className="aspect-[3/4] w-full bg-muted object-cover transition-transform group-hover:scale-105">
                                <div className="flex h-full items-center justify-center text-muted-foreground">
                                    Book Cover
                                </div>
                            </div>

                            <div className="p-4">
                                <p className="text-xs text-primary">{product.category}</p>
                                <h3 className="mt-1 font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                                    {product.title}
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground">{product.author}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="font-bold">{product.price}</span>
                                    <Button size="sm" variant="secondary" className="h-8 text-xs">Add to Cart</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center sm:hidden">
                    <Button variant="outline">View All Products</Button>
                </div>
            </Container>
        </section>
    );
}
