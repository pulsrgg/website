import { Monitor, Zap, Users, BarChart3, Shield, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Stream Overlay",
    description: "Beautiful overlay displays game data directly on your stream for viewers to see.",
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Live synchronization with the LoL client ensures instant data updates.",
  },
  {
    icon: Users,
    title: "Team Stats",
    description: "Show both teams with champion icons, summoner names, KDA, and items.",
  },
  {
    icon: BarChart3,
    title: "Game Score",
    description: "Display total kills for each team and current game time.",
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description: "Encrypted communication between your desktop app and Twitch extension.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Sync",
    description: "Automatic game detection and data synchronization when you start playing.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold">
            <span className="text-primary glow-text">Powerful</span>{" "}
            <span className="text-foreground">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to enhance your League of Legends stream with real-time game data.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card/50 border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:glow-box transition-all">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-orbitron font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
