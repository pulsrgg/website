import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Sparkles } from "lucide-react";
import overlayScreenshot from "@/assets/screen.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Decorative diagonal shapes */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/5 rotate-45 rounded-3xl blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-glow-secondary/5 -rotate-12 rounded-3xl blur-3xl" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Twitch Extension
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold leading-tight">
                <span className="text-foreground">Real-Time </span>
                <span className="glow-text text-primary">LoL Data</span>
                <br />
                <span className="text-foreground">On Your Stream</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg font-rajdhani">
                Display live League of Legends game stats directly on your
                Twitch stream. Show your viewers KDA, items, and team
                composition in real-time.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://www.twitch.tv/ext/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Install Extension
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#download" className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Get Desktop App
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="font-orbitron text-2xl font-bold text-primary">
                  Free
                </div>
                <div className="text-sm text-muted-foreground">To Use</div>
              </div>
              <div className="w-px bg-primary/20" />
              <div className="text-center">
                <div className="font-orbitron text-2xl font-bold text-primary">
                  Live
                </div>
                <div className="text-sm text-muted-foreground">Data Sync</div>
              </div>
              <div className="w-px bg-primary/20" />
              <div className="text-center">
                <div className="font-orbitron text-2xl font-bold text-primary">
                  Easy
                </div>
                <div className="text-sm text-muted-foreground">Setup</div>
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative">
            <div className="relative floating">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-2xl" />

              {/* HUD Frame */}
              <div className="relative bg-card/80 rounded-xl border border-primary/30 p-2 glow-border backdrop-blur-sm">
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg" />

                <img
                  src={overlayScreenshot}
                  alt="LOL STATS overlay showing real-time game stats"
                  className="w-full rounded-lg"
                />

                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/90 px-3 py-1.5 rounded-full border border-primary/30">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-primary">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
