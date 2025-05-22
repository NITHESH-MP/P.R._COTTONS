
import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminManageProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Omit<Product, "id">>({
    name: "",
    category: "",
    gsm: 0,
    width: "",
    colors: "",
    moq: 0,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    const productsData = localStorage.getItem("products");
    if (productsData) {
      setProducts(JSON.parse(productsData));
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter((product) => product.id !== id);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
      toast({
        title: "Product deleted",
        description: "The product has been removed successfully.",
      });
    }
  };

  const handleEditClick = (product: Product) => {
    setCurrentProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      gsm: product.gsm,
      width: product.width,
      colors: product.colors,
      moq: product.moq,
    });
    setImagePreview(product.image || null);
    setIsEditing(true);
  };

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
        setFormData((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentProduct) return;
    
    const updatedProducts = products.map((product) => {
      if (product.id === currentProduct.id) {
        return {
          ...product,
          ...formData,
          image: imagePreview || product.image,
        };
      }
      return product;
    });
    
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setIsEditing(false);
    toast({
      title: "Product updated",
      description: "The product information has been updated successfully.",
    });
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
    <AdminLayout title="Manage Products">
      {products.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground mb-6">You haven't added any products yet.</p>
          <Button asChild>
            <a href="/admin/add-product">Add Your First Product</a>
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>GSM</TableHead>
                <TableHead>Width</TableHead>
                <TableHead>Colors</TableHead>
                <TableHead>MOQ</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-12 h-12 object-cover rounded" 
                      />
                    ) : (
                      <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                        No image
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.gsm}</TableCell>
                  <TableCell>{product.width}</TableCell>
                  <TableCell>{product.colors}</TableCell>
                  <TableCell>{product.moq}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog open={isEditing && currentProduct?.id === product.id} onOpenChange={(open) => {
                        if (!open) setIsEditing(false);
                      }}>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline" onClick={() => handleEditClick(product)}>
                            <Pencil className="h-4 w-4 mr-1" /> Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Edit Product</DialogTitle>
                          </DialogHeader>
                          <form onSubmit={handleUpdate} className="space-y-6 py-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="edit-name">Product Name</Label>
                                <Input
                                  id="edit-name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="edit-category">Category</Label>
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
                                <Label htmlFor="edit-gsm">GSM (Weight)</Label>
                                <Input
                                  id="edit-gsm"
                                  name="gsm"
                                  type="number"
                                  value={formData.gsm || ""}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="edit-width">Width</Label>
                                <Input
                                  id="edit-width"
                                  name="width"
                                  value={formData.width}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="edit-colors">Available Colors</Label>
                                <Input
                                  id="edit-colors"
                                  name="colors"
                                  value={formData.colors}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="edit-moq">MOQ</Label>
                                <Input
                                  id="edit-moq"
                                  name="moq"
                                  type="number"
                                  value={formData.moq || ""}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="edit-image">Product Image</Label>
                              <Input
                                id="edit-image"
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

                            <div className="flex justify-end space-x-2">
                              <Button variant="outline" onClick={() => setIsEditing(false)} type="button">
                                Cancel
                              </Button>
                              <Button type="submit">
                                Update Product
                              </Button>
                            </div>
                          </form>
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminManageProducts;
