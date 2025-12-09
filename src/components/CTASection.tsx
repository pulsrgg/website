import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-glow-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold">
            <span className="text-foreground">Ready to </span>
            <span className="text-primary glow-text">Enhance</span>
            <br />
            <span className="text-foreground">Your Stream?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join streamers who use LOLLIVE to provide their viewers with real-time game insights.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://www.twitch.tv/ext/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Get Started Free
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#download" className="flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Trust badge */}
          <p className="text-sm text-muted-foreground pt-4">
            Free to use • No credit card required • Works with any Twitch account
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
