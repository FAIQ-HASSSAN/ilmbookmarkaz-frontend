import { Container } from "@/components/ui/container";

const features = [
    {
        title: "Authentic Sources",
        description: "Verified by scholars.",
        color: "bg-emerald-500/10 text-emerald-600",
        icon: (props: any) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        )
    },
    {
        title: "Fast Shipping",
        description: "3-5 day delivery.",
        color: "bg-blue-500/10 text-blue-600",
        icon: (props: any) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                <rect width="20" height="13" x="2" y="5" rx="2" />
                <path d="M16 18h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H2" />
                <path d="M10 2v3" /><path d="M14 2v3" /><path d="M6 2v3" />
            </svg>
        )
    },
    {
        title: "Secure Payment",
        description: "100% safe & encrypted.",
        color: "bg-purple-500/10 text-purple-600",
        icon: (props: any) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <path d="M12 15v3" />
            </svg>
        )
    },
    {
        title: "Premium Quality",
        description: "Top-tier binding & print.",
        color: "bg-amber-500/10 text-amber-600",
        icon: (props: any) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        )
    },
];

export function FeaturesSection() {
    return (
        <section className="py-12 bg-gray-50/50">
            <Container>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Icon Container */}
                            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="h-8 w-8" />
                            </div>

                            {/* Text */}
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-500 font-medium">{feature.description}</p>

                            {/* Hover Border Glow */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/5 transition-colors pointer-events-none" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
