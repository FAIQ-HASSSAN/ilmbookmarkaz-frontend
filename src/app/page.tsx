import { MartHero } from "@/components/home/mart-hero";
import { FlashSale } from "@/components/home/flash-sale";
import { MallCategories } from "@/components/home/mall-categories";
import { JustForYou } from "@/components/home/just-for-you";
import { FeaturesSection } from "@/components/home/features-section";
import { PromotionalBanner } from "@/components/home/promotional-banner";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 pb-20">
      <MartHero />
      <FlashSale />
      <MallCategories />
      {/* <PromotionalBanner /> */}
      <JustForYou />
      <TestimonialsSection />
      <FeaturesSection />
    </div>
  );
}
