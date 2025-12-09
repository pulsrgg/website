import { Link } from "react-router-dom";
import { Zap, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card/50 border-t border-primary/20">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 rounded-lg rotate-45" />
                <Zap className="w-5 h-5 text-primary relative z-10" />
              </div>
              <span className="font-orbitron font-bold text-lg text-foreground">
                <span className="text-primary">LOL</span>LIVE
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Real-time League of Legends game data overlay for Twitch
              streamers.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-semibold text-sm text-primary uppercase tracking-wider">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-semibold text-sm text-primary uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/50 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/50 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary/10">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} LOL STATS. All rights reserved. Not
            endorsed by Riot Games.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
