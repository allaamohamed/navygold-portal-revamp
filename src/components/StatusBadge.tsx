import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  showDot?: boolean;
}

export function StatusBadge({ status, showDot = false }: StatusBadgeProps) {
  const getStatusStyle = (status: string) => {
    const normalized = status.toLowerCase();
    
    // Bootstrap-style badge colors
    if (normalized.includes("processing")) {
      return "bg-info text-info-foreground";
    }
    if (normalized.includes("ready")) {
      return "bg-success text-success-foreground";
    }
    if (normalized.includes("info") || normalized.includes("requested")) {
      return "bg-warning text-warning-foreground";
    }
    if (normalized.includes("preparing")) {
      return "bg-badge-preparing text-white";
    }
    if (normalized.includes("closed")) {
      return "bg-secondary text-secondary-foreground";
    }
    
    return "bg-muted text-muted-foreground";
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded",
      getStatusStyle(status)
    )}>
      {showDot && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />}
      {status}
    </span>
  );
}
