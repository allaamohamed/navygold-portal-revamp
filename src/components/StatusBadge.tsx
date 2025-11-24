import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  showDot?: boolean;
}

export function StatusBadge({ status, showDot = false }: StatusBadgeProps) {
  const getStatusStyle = (status: string) => {
    const normalized = status.toLowerCase();
    
    if (normalized.includes("processing")) {
      return "bg-warning/10 text-warning border-warning/20";
    }
    if (normalized.includes("ready")) {
      return "bg-success/10 text-success border-success/20";
    }
    if (normalized.includes("info") || normalized.includes("requested")) {
      return "bg-info/10 text-info border-info/20";
    }
    if (normalized.includes("preparing")) {
      return "bg-badge-preparing/10 text-badge-preparing border-badge-preparing/20";
    }
    if (normalized.includes("closed")) {
      return "bg-muted text-muted-foreground border-border";
    }
    
    return "bg-muted text-muted-foreground border-border";
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border",
      getStatusStyle(status)
    )}>
      {showDot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {status}
    </span>
  );
}
