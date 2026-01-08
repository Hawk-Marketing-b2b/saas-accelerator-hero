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
        className="font-display text-4xl lg:text-5xl font-bold mb-1 bg-gradient-to-t from-black to-white bg-clip-text text-transparent"
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
