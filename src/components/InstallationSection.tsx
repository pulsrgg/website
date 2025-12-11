import { Button } from "@/components/ui/button";
import {
  Download,
  ExternalLink,
  Play,
  Settings,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install Twitch Extension",
    description:
      "Add the PULSRGG extension to your Twitch channel from the Twitch Extensions panel.",
    icon: ExternalLink,
    action: {
      label: "Go to Twitch Extensions",
      href: "https://www.twitch.tv/ext/",
    },
  },
  {
    number: "02",
    title: "Download Desktop App",
    description:
      "Download and install the companion app that connects to your League of Legends client.",
    icon: Download,
    action: {
      label: "Download for Windows",
      href: "#",
    },
  },
  {
    number: "03",
    title: "Configure & Launch",
    description:
      "Open the desktop app and log in with your Twitch account to link everything together.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Start Streaming",
    description:
      "Launch League of Legends and start your stream. The overlay will appear automatically.",
    icon: Play,
  },
];

const InstallationSection = () => {
  return (
    <section id="download" className="relative py-24 bg-card/30">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Decorative diagonal */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-primary/5 rotate-12 rounded-3xl blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold">
            <span className="text-foreground">Get Started in </span>
            <span className="text-primary glow-text">Minutes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to set up PULSRGG on your stream.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-6 items-start group"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[27px] top-16 w-0.5 h-[calc(100%+24px)] bg-gradient-to-b from-primary/50 to-primary/10" />
                )}

                {/* Number circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:glow-box transition-all">
                    <span className="font-orbitron font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-card/80 border border-primary/20 rounded-xl p-6 group-hover:border-primary/40 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="w-5 h-5 text-primary" />
                        <h3 className="font-orbitron font-semibold text-lg text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {step.description}
                      </p>
                      {step.action && (
                        <Button variant="hud" size="sm" asChild>
                          <a
                            href={step.action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {step.action.label}
                          </a>
                        </Button>
                      )}
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-primary/30 group-hover:text-primary/60 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-primary/20">
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Requires Windows 10+ and League of Legends installed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
