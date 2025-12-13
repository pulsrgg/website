import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4">
              <span className="text-primary glow-text">Terms</span>{" "}
              <span className="text-foreground">of Service</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-muted-foreground">
            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using PULSRGG ("Service"), you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use our Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                2. Description of Service
              </h2>
              <p>
                PULSRGG provides a Twitch extension and desktop companion
                application that displays real-time League of Legends game data
                on your stream. The Service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  A Twitch overlay extension for displaying game statistics
                </li>
                <li>
                  A desktop application that connects to the League of Legends
                  client
                </li>
                <li>
                  Real-time data synchronization between the client and overlay
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                3. User Eligibility
              </h2>
              <p>
                You must be at least 13 years of age to use this Service. By
                using the Service, you represent that you meet this requirement
                and have the legal capacity to enter into this agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                4. Account and Authentication
              </h2>
              <div className="bg-card/50 border border-primary/20 rounded-lg p-6 space-y-4">
                <p>To use our Service, you must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Have a valid Twitch account</li>
                  <li>Authorize our extension through Twitch</li>
                  <li>Download and install our desktop application</li>
                </ul>
                <p>
                  You are responsible for maintaining the security of your
                  accounts and for all activities that occur under your account.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                5. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the Service for any illegal purpose</li>
                <li>
                  Attempt to reverse engineer, decompile, or disassemble the
                  desktop application
                </li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Transmit any malware or malicious code</li>
                <li>Violate Twitch's or Riot Games' terms of service</li>
                <li>
                  Use the Service to gain unfair competitive advantage in games
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                6. Intellectual Property
              </h2>
              <p>
                The Service, including all content, features, and functionality,
                is owned by PULSRGG and is protected by international
                copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                League of Legends and related content are trademarks of Riot
                Games, Inc. Twitch and related content are trademarks of
                Amazon.com, Inc. We are not endorsed by or affiliated with these
                companies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                7. Disclaimer of Warranties
              </h2>
              <div className="bg-card/50 border border-primary/20 rounded-lg p-6">
                <p className="uppercase text-sm">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY
                  WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT
                  GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE,
                  OR SECURE.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, PULSRGG shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of or related to your use of the
                Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                9. Service Modifications
              </h2>
              <p>
                We reserve the right to modify, suspend, or discontinue the
                Service at any time without notice. We may also update these
                Terms from time to time. Continued use of the Service after
                changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                10. Termination
              </h2>
              <p>
                We may terminate or suspend your access to the Service
                immediately, without prior notice, for any reason, including
                breach of these Terms. Upon termination, your right to use the
                Service will cease immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                11. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with applicable laws, without regard to conflict of law
                principles.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                12. Contact Information
              </h2>
              <p>
                For any questions about these Terms of Service, please contact
                us at:
              </p>
              <div className="bg-card/50 border border-primary/20 rounded-lg p-4">
                <p className="text-primary">contactpulsrgg@gmail.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
