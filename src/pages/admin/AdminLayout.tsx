
import { ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { PlusCircle, Package, Inbox, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin panel",
    });
    navigate('/admin/login');
  };

  const navItems = [
    { path: '/admin/add-product', label: 'Add Product', icon: <PlusCircle className="w-5 h-5 mr-2" /> },
    { path: '/admin/manage-products', label: 'Manage Products', icon: <Package className="w-5 h-5 mr-2" /> },
    { path: '/admin/view-inquiries', label: 'View Inquiries', icon: <Inbox className="w-5 h-5 mr-2" /> },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-muted/30">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary font-playfair">Admin Panel</h2>
        </div>
        <nav className="flex-1 px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center px-4 py-3 text-sm rounded-md transition-colors",
                location.pathname === item.path 
                  ? "bg-primary text-white" 
                  : "hover:bg-muted"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            className="flex w-full items-center px-4 py-3 text-sm rounded-md hover:bg-muted justify-start mt-auto"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </nav>
      </aside>

      {/* Mobile header */}
      <div className="flex flex-col flex-1">
        <header className="md:hidden border-b p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold font-playfair">Admin Panel</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </Button>
          </div>
        </header>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex overflow-x-auto border-b scrollbar-hide py-2 px-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center px-3 py-2 text-sm whitespace-nowrap rounded-md mr-2",
                location.pathname === item.path 
                  ? "bg-primary text-white" 
                  : "bg-secondary/20"
              )}
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold font-playfair">{title}</h1>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
