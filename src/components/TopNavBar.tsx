import { Building2, User, Menu, HelpCircle } from "lucide-react";
import { NavLink } from "./NavLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SupportModal } from "./SupportModal";

export function TopNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  return (
    <nav className="h-16 border-b border-border bg-primary sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary-foreground">Docspert Health</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors px-1 py-2 relative"
            activeClassName="!text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/patients"
            className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors px-1 py-2 relative"
            activeClassName="!text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
          >
            Patients
          </NavLink>
          <NavLink
            to="/consultations"
            className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors px-1 py-2 relative"
            activeClassName="!text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
          >
            Consultations
          </NavLink>
          <NavLink
            to="/insights"
            className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors px-1 py-2 relative"
            activeClassName="!text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
          >
            Insights
          </NavLink>
          <NavLink
            to="/faqs"
            className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors px-1 py-2 relative"
            activeClassName="!text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
          >
            FAQs
          </NavLink>
        </div>

        {/* Right Side: Support + Company + User */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex gap-2 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setSupportModalOpen(true)}
          >
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm">Support</span>
          </Button>

          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-primary-foreground/20 rounded-md bg-primary/50">
            <Building2 className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Bupa Arabia</span>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 text-primary-foreground hover:bg-primary-foreground/10">
                <User className="h-4 w-4" />
                <span className="text-sm hidden md:inline">Docspert CM</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/20">
          <div className="px-6 py-4 space-y-3">
            <NavLink
              to="/"
              className="block text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground py-2"
              activeClassName="!text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/patients"
              className="block text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground py-2"
              activeClassName="!text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Patients
            </NavLink>
            <NavLink
              to="/consultations"
              className="block text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground py-2"
              activeClassName="!text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Consultations
            </NavLink>
            <NavLink
              to="/insights"
              className="block text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground py-2"
              activeClassName="!text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </NavLink>
            <NavLink
              to="/faqs"
              className="block text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground py-2"
              activeClassName="!text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </NavLink>
          </div>
        </div>
      )}

      <SupportModal open={supportModalOpen} onOpenChange={setSupportModalOpen} />
    </nav>
  );
}
