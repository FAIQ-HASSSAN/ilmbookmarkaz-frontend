import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-primary py-20 text-white md:py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px"
                }}
            />
            <div className="absolute top-0 right-0 -m-20 h-96 w-96 rounded-full bg-secondary opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -m-20 h-96 w-96 rounded-full bg-accent opacity-20 blur-3xl"></div>

            <Container className="relative z-10 text-center">
                <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Discover Knowledge, <br />
                    <span className="text-secondary">Ignite Your Soul</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
                    Your premium destination for authentic Islamic books, stationery, and lifestyle products.
                    Curated for the modern seeker.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="min-w-[160px] bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        Shop Books
                    </Button>
                    <Button size="lg" variant="outline" className="min-w-[160px] border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                        View Collections
                    </Button>
                </div>
            </Container>
        </section>
    );
}
