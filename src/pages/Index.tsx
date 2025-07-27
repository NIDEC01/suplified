import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VendorMarketplace from "@/components/VendorMarketplace";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <section id="marketplace">
          <VendorMarketplace />
        </section>
        <section id="products">
          <ProductGrid />
        </section>
      </main>
    </div>
  );
};

export default Index;
