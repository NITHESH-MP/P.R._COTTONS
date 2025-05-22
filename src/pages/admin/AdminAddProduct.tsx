
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@/types/product";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminAddProduct = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<Omit<Product, "id">>({
    name: "",
    category: "",
    gsm: 0,
    width: "",
    colors: "",
    moq: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "gsm" || name === "moq" ? Number(value) : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData(prev => ({
          ...prev,
          image: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a new product with a unique ID
      const newProduct: Product = {
        id: Date.now().toString(),
        ...formData,
      };
      
      // Get existing products from localStorage
      const existingProducts = localStorage.getItem("products");
      const products = existingProducts ? JSON.parse(existingProducts) : [];
      
      // Add new product
      products.push(newProduct);
      
      // Save back to localStorage
      localStorage.setItem("products", JSON.stringify(products));
      
      // Show success message
      toast({
        title: "Product added successfully",
        description: `${newProduct.name} has been added to your product catalog.`,
      });
      
      // Reset form
      setFormData({
        name: "",
        category: "",
        gsm: 0,
        width: "",
        colors: "",
        moq: 0,
      });
      setImagePreview(null);
      
    } catch (error) {
      console.error("Error adding product:", error);
      toast({
        title: "Error adding product",
        description: "There was a problem adding your product. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    "Bed Linen",
    "Bath Towels",
    "Kitchen Textiles",
    "Curtains",
    "Table Linen",
    "Floor Coverings"
  ];

  return (
    <AdminLayout title="Add Product">
      <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="100% Cotton Twill"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleSelectChange("category", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gsm">GSM (Weight)</Label>
              <Input
                id="gsm"
                name="gsm"
                type="number"
                value={formData.gsm || ""}
                onChange={handleChange}
                placeholder="220"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
                placeholder="60 inches"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="colors">Available Colors</Label>
              <Input
                id="colors"
                name="colors"
                value={formData.colors}
                onChange={handleChange}
                placeholder="Blue, Red, Green, etc. or 20+"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="moq">MOQ (Minimum Order Quantity)</Label>
              <Input
                id="moq"
                name="moq"
                type="number"
                value={formData.moq || ""}
                onChange={handleChange}
                placeholder="1000"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Product Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            
            {imagePreview && (
              <div className="mt-2 border rounded-md overflow-hidden">
                <img 
                  src={imagePreview} 
                  alt="Product preview" 
                  className="max-h-40 object-contain mx-auto" 
                />
              </div>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding Product..." : "Add Product"}
          </Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminAddProduct;
