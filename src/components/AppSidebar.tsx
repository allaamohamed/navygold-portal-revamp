import { LayoutDashboard, Users, FileText, BarChart3, HelpCircle } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Patients", url: "/patients", icon: Users },
  { title: "Consultations", url: "/consultations", icon: FileText },
  { title: "Insights", url: "/insights", icon: BarChart3 },
  { title: "FAQs", url: "/faqs", icon: HelpCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className="border-r-0" collapsible="icon">
      <SidebarContent className="bg-sidebar">
        <div className="px-3 py-6">
          <div className="flex items-center gap-2 px-2">
            <div className="text-sidebar-foreground font-semibold text-sm">
              {!isCollapsed && (
                <>
                  <span className="text-sidebar-primary">DOCSPERT</span>
                  <span className="text-sidebar-foreground/70"> HEALTH</span>
                </>
              )}
              {isCollapsed && <span className="text-sidebar-primary">DH</span>}
            </div>
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end
                      className="hover:bg-sidebar-accent transition-colors"
                      activeClassName="bg-sidebar-accent border-l-2 border-sidebar-primary text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
