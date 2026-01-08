import { Users, Clock, TrendingUp, DollarSign, type LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  delay?: number;
}

const StatCard = ({ value, label, icon: Icon, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="flex flex-col items-center text-center opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div 
        className="font-display text-5xl lg:text-7xl font-bold mb-2 bg-gradient-to-t from-black/40 to-white bg-clip-text text-transparent opacity-0 animate-fade-up"
        style={{ animationDelay: `${delay + 100}ms`, animationFillMode: 'forwards' }}
      >
        {value}
      </div>
      <div className="text-muted-foreground text-sm font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
