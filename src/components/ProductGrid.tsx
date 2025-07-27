import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Minus, ShoppingBag } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Fresh Onions",
    category: "Vegetables",
    price: 25,
    unit: "per kg",
    supplier: "Fresh Valley",
    rating: 4.7,
    stock: "Available",
    image: "🧅",
    trending: true
  },
  {
    id: 2,
    name: "Basmati Rice",
    category: "Grains",
    price: 85,
    unit: "per kg",
    supplier: "Grain Masters",
    rating: 4.9,
    stock: "Available",
    image: "🌾"
  },
  {
    id: 3,
    name: "Red Chili Powder",
    category: "Spices",
    price: 180,
    unit: "per kg",
    supplier: "Spice Garden",
    rating: 4.8,
    stock: "Low Stock",
    image: "🌶️"
  },
  {
    id: 4,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 45,
    unit: "per kg",
    supplier: "Fresh Valley",
    rating: 4.6,
    stock: "Available",
    image: "🍅"
  },
  {
    id: 5,
    name: "Cumin Seeds",
    category: "Spices",
    price: 220,
    unit: "per kg",
    supplier: "Spice Garden",
    rating: 4.9,
    stock: "Available",
    image: "🫘"
  },
  {
    id: 6,
    name: "Green Chilies",
    category: "Vegetables",
    price: 60,
    unit: "per kg",
    supplier: "Morning Market",
    rating: 4.5,
    stock: "Available",
    image: "🌶️"
  }
];

const ProductGrid = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  
  const updateQuantity = (productId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Today's Fresh Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare prices from multiple suppliers and add items to your cart for quick ordering.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="relative transition-all duration-300 hover:shadow-warm hover:-translate-y-1">
              {product.trending && (
                <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                  Trending
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{product.image}</div>
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={product.stock === "Low Stock" ? "destructive" : "secondary"}
                    className="text-xs"
                  >
                    {product.stock}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">₹{product.price}</div>
                    <div className="text-sm text-muted-foreground">{product.unit}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{product.supplier}</div>
                    <div className="text-xs text-muted-foreground">Supplier</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(product.id, -1)}
                      disabled={!quantities[product.id]}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">
                      {quantities[product.id] || 0}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(product.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button 
                    className={quantities[product.id] ? "bg-secondary" : ""}
                    variant={quantities[product.id] ? "secondary" : "default"}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    {quantities[product.id] ? "Added" : "Add"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button size="lg" className="bg-gradient-vendor text-secondary-foreground shadow-green">
            <ShoppingBag className="h-5 w-5 mr-2" />
            View Cart (3 items)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;