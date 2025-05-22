
import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Inquiry } from "@/types/inquiry";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2, Inbox, ExternalLink, SortDesc, SortAsc } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminViewInquiries = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [sortField, setSortField] = useState<keyof Inquiry>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [productFilter, setProductFilter] = useState<string>("all");
  
  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = () => {
    const inquiriesData = localStorage.getItem("inquiries");
    if (inquiriesData) {
      setInquiries(JSON.parse(inquiriesData));
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      const updatedInquiries = inquiries.filter((inquiry) => inquiry.id !== id);
      localStorage.setItem("inquiries", JSON.stringify(updatedInquiries));
      setInquiries(updatedInquiries);
      toast({
        title: "Inquiry deleted",
        description: "The inquiry has been removed successfully.",
      });
    }
  };

  const handleSort = (field: keyof Inquiry) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedInquiries = [...inquiries].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (aValue < bValue) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredInquiries = productFilter === "all" 
    ? sortedInquiries 
    : sortedInquiries.filter(inquiry => inquiry.product === productFilter);

  // Get unique product names for filter
  const uniqueProducts = [...new Set(inquiries.map(inquiry => inquiry.product))];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <AdminLayout title="View Inquiries">
      {inquiries.length === 0 ? (
        <div className="text-center py-10">
          <Inbox className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="text-xl font-medium mt-4 mb-2">No inquiries yet</h3>
          <p className="text-muted-foreground">You haven't received any product inquiries yet.</p>
        </div>
      ) : (
        <>
          <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <span className="mr-2 whitespace-nowrap">Filter by product:</span>
              <Select value={productFilter} onValueChange={setProductFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="All Products" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  {uniqueProducts.map(product => (
                    <SelectItem key={product} value={product}>
                      {product}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {filteredInquiries.length} of {inquiries.length} inquiries
            </div>
          </div>
        
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead 
                    className="cursor-pointer hover:bg-muted/30"
                    onClick={() => handleSort("date")}
                  >
                    <div className="flex items-center">
                      Date
                      {sortField === "date" && (
                        sortDirection === "asc" 
                          ? <SortAsc className="ml-1 h-4 w-4" /> 
                          : <SortDesc className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-muted/30"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center">
                      Name
                      {sortField === "name" && (
                        sortDirection === "asc" 
                          ? <SortAsc className="ml-1 h-4 w-4" /> 
                          : <SortDesc className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-muted/30"
                    onClick={() => handleSort("product")}
                  >
                    <div className="flex items-center">
                      Product
                      {sortField === "product" && (
                        sortDirection === "asc" 
                          ? <SortAsc className="ml-1 h-4 w-4" /> 
                          : <SortDesc className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-muted/30"
                    onClick={() => handleSort("country")}
                  >
                    <div className="flex items-center">
                      Country
                      {sortField === "country" && (
                        sortDirection === "asc" 
                          ? <SortAsc className="ml-1 h-4 w-4" /> 
                          : <SortDesc className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInquiries.map((inquiry) => (
                  <TableRow key={inquiry.id}>
                    <TableCell>{formatDate(inquiry.date)}</TableCell>
                    <TableCell>{inquiry.name}</TableCell>
                    <TableCell>{inquiry.product}</TableCell>
                    <TableCell>{inquiry.country}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline" onClick={() => setSelectedInquiry(inquiry)}>
                              <ExternalLink className="h-4 w-4 mr-1" /> View
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Inquiry Details</DialogTitle>
                              <DialogDescription>
                                Submitted on {formatDate(inquiry.date)}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-sm mb-1">Customer</h4>
                                  <p>{inquiry.name}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm mb-1">Email</h4>
                                  <p className="break-all">{inquiry.email}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm mb-1">Product</h4>
                                  <p>{inquiry.product}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm mb-1">Quantity</h4>
                                  <p>{inquiry.quantity}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm mb-1">Country</h4>
                                  <p>{inquiry.country}</p>
                                </div>
                                <div className="md:col-span-2">
                                  <h4 className="font-medium text-sm mb-1">Message</h4>
                                  <p className="whitespace-pre-wrap">{inquiry.message}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <Button variant="outline" asChild>
                                <a href={`mailto:${inquiry.email}`}>Reply via Email</a>
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleDelete(inquiry.id)}
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
        </>
      )}
    </AdminLayout>
  );
};

export default AdminViewInquiries;
