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
      className="bg-transparent backdrop-blur-[5px] rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:translate-y-[-2px] opacity-0 animate-fade-up flex flex-col items-center text-center"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="mb-4">
        <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
      </div>
      <div className="text-foreground font-display text-2xl lg:text-3xl font-bold mb-1">
        {value}
      </div>
      <div className="text-muted-foreground text-sm font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
