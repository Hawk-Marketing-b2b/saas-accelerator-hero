interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="card-glass rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="text-gradient font-display text-3xl lg:text-4xl font-bold mb-1">
        {value}
      </div>
      <div className="text-muted-foreground text-sm font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
