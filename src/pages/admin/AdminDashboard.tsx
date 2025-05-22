
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Inbox, Users, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { Inquiry } from "@/types/inquiry";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [productCount, setProductCount] = useState(0);
  const [inquiryCount, setInquiryCount] = useState(0);

  useEffect(() => {
    // Get product count
    const productsData = localStorage.getItem('products');
    if (productsData) {
      const products: Product[] = JSON.parse(productsData);
      setProductCount(products.length);
    }

    // Get inquiry count
    const inquiriesData = localStorage.getItem('inquiries');
    if (inquiriesData) {
      const inquiries: Inquiry[] = JSON.parse(inquiriesData);
      setInquiryCount(inquiries.length);
    }
  }, []);

  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{productCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <Link to="/admin/manage-products" className="text-primary hover:underline">
                Manage products
              </Link>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inquiries</CardTitle>
            <Inbox className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inquiryCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <Link to="/admin/view-inquiries" className="text-primary hover:underline">
                View inquiries
              </Link>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-1">
              Active administrator account
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/admin/add-product">
            <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <PlusCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Add New Product</h3>
                  <p className="text-sm text-muted-foreground">Create a new product listing</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/admin/manage-products">
            <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Manage Products</h3>
                  <p className="text-sm text-muted-foreground">Edit or delete existing products</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/admin/view-inquiries">
            <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Inbox className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">View Inquiries</h3>
                  <p className="text-sm text-muted-foreground">Review customer inquiries</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
