import { Building2, User, Menu, ChevronDown } from "lucide-react";
import { NavLink } from "./NavLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function TopNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="h-14 border-b border-border bg-foreground sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-lg font-semibold text-background">Docspert Health</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            className="text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 transition-colors px-3 py-2 rounded"
            activeClassName="!text-background bg-background/15"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/patients"
            className="text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 transition-colors px-3 py-2 rounded"
            activeClassName="!text-background bg-background/15"
          >
            Patients
          </NavLink>
          <NavLink
            to="/consultations"
            className="text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 transition-colors px-3 py-2 rounded"
            activeClassName="!text-background bg-background/15"
          >
            Consultations
          </NavLink>
          <NavLink
            to="/insights"
            className="text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 transition-colors px-3 py-2 rounded"
            activeClassName="!text-background bg-background/15"
          >
            Insights
          </NavLink>
          <NavLink
            to="/faqs"
            className="text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 transition-colors px-3 py-2 rounded"
            activeClassName="!text-background bg-background/15"
          >
            FAQs
          </NavLink>
        </div>

        {/* Right Side: Company + User */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 text-background/80 hover:text-background hover:bg-background/10 hidden md:flex">
                <Building2 className="h-4 w-4" />
                <span className="text-sm">Bupa Arabia</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover w-48">
              <DropdownMenuItem>Switch Organization</DropdownMenuItem>
              <DropdownMenuItem>Organization Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 text-background/80 hover:text-background hover:bg-background/10">
                <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
                  <User className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-sm hidden md:inline">Docspert CM</span>
                <ChevronDown className="h-3 w-3 hidden md:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover w-48">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-background hover:bg-background/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-foreground border-t border-background/20">
          <div className="px-4 py-2 space-y-1">
            <NavLink
              to="/"
              className="block text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 px-3 py-2 rounded"
              activeClassName="!text-background bg-background/15"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/patients"
              className="block text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 px-3 py-2 rounded"
              activeClassName="!text-background bg-background/15"
              onClick={() => setMobileMenuOpen(false)}
            >
              Patients
            </NavLink>
            <NavLink
              to="/consultations"
              className="block text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 px-3 py-2 rounded"
              activeClassName="!text-background bg-background/15"
              onClick={() => setMobileMenuOpen(false)}
            >
              Consultations
            </NavLink>
            <NavLink
              to="/insights"
              className="block text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 px-3 py-2 rounded"
              activeClassName="!text-background bg-background/15"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </NavLink>
            <NavLink
              to="/faqs"
              className="block text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 px-3 py-2 rounded"
              activeClassName="!text-background bg-background/15"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
