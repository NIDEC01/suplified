import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Phone } from "lucide-react";
import supplierIcon from "@/assets/supplier-icon.jpg";

const suppliers = [
  {
    id: 1,
    name: "Fresh Valley Supplies",
    rating: 4.8,
    reviews: 156,
    distance: "2.3 km",
    deliveryTime: "30 mins",
    specialties: ["Vegetables", "Fruits", "Spices"],
    priceRange: "₹₹",
    featured: true
  },
  {
    id: 2,
    name: "Spice Garden Co.",
    rating: 4.6,
    reviews: 89,
    distance: "1.8 km",
    deliveryTime: "25 mins",
    specialties: ["Spices", "Dry Goods", "Oils"],
    priceRange: "₹"
  },
  {
    id: 3,
    name: "Morning Market Hub",
    rating: 4.9,
    reviews: 234,
    distance: "3.1 km",
    deliveryTime: "45 mins",
    specialties: ["Fresh Produce", "Dairy", "Grains"],
    priceRange: "₹₹₹"
  }
];

const VendorMarketplace = () => {
  return (
    <div className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect Supplier
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse trusted suppliers near you, compare prices, and place orders with just a few taps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suppliers.map((supplier) => (
            <Card key={supplier.id} className={`relative transition-all duration-300 hover:shadow-green hover:-translate-y-1 ${supplier.featured ? 'ring-2 ring-secondary' : ''}`}>
              {supplier.featured && (
                <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground">
                  Featured
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={supplierIcon} 
                      alt={supplier.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{supplier.name}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{supplier.rating}</span>
                        <span>({supplier.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {supplier.priceRange}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {supplier.distance}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {supplier.deliveryTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {supplier.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1" variant="default">
                    View Products
                  </Button>
                  <Button variant="outline" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Suppliers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VendorMarketplace;