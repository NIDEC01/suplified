import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, ShoppingCart, Truck } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-4">
              🇮🇳 Empowering Indian Street Food Vendors
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Simplify Your
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Supply Chain
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg">
              Connect with trusted local suppliers, compare prices, and order fresh ingredients - all from your mobile device.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" variant="secondary" className="shadow-green">
                <Users className="mr-2 h-5 w-5" />
                I'm a Vendor
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <ShoppingCart className="mr-2 h-5 w-5" />
                I'm a Supplier
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">500+</div>
                <div className="text-sm text-primary-foreground/80">Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">200+</div>
                <div className="text-sm text-primary-foreground/80">Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">₹5L+</div>
                <div className="text-sm text-primary-foreground/80">Saved</div>
              </div>
            </div>
          </div>
          
          {/* Features Card */}
          <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-warm border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Why Suplified?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                  <Star className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-card-foreground">Trusted Reviews</div>
                  <div className="text-sm text-muted-foreground">Real feedback from verified vendors</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                  <ShoppingCart className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-card-foreground">Compare Prices</div>
                  <div className="text-sm text-muted-foreground">Find the best deals instantly</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <Truck className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-card-foreground">Quick Delivery</div>
                  <div className="text-sm text-muted-foreground">Same-day pickup or delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;