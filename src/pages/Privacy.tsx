import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4">
              <span className="text-primary glow-text">Privacy</span>{" "}
              <span className="text-foreground">Policy</span>
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
                1. Introduction
              </h2>
              <p>
                Welcome to PULSRGG ("we," "our," or "us"). We are committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our Twitch extension and desktop companion application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                2. Information We Collect
              </h2>
              <div className="bg-card/50 border border-primary/20 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-foreground">
                  2.1 Twitch Account Information
                </h3>
                <p>
                  When you authorize our extension, we receive your Twitch
                  username and channel ID to link the extension to your stream.
                </p>

                <h3 className="font-semibold text-foreground">
                  2.2 League of Legends Game Data
                </h3>
                <p>
                  Our desktop application reads publicly available game data
                  from the League of Legends client, including champion
                  selections, items, KDA, and game time. This data is only
                  collected during active gameplay sessions.
                </p>

                <h3 className="font-semibold text-foreground">
                  2.3 Technical Information
                </h3>
                <p>
                  We may collect basic technical information such as IP
                  addresses, browser type, and device information for debugging
                  and service improvement purposes.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  To display real-time game data on your Twitch stream overlay
                </li>
                <li>
                  To authenticate and maintain your connection between the
                  desktop app and Twitch extension
                </li>
                <li>To improve and optimize our services</li>
                <li>
                  To respond to your inquiries and provide customer support
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                4. Data Sharing and Disclosure
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share information only in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your information against unauthorized access,
                alteration, disclosure, or destruction. All data transmission
                between the desktop app and our servers is encrypted using
                industry-standard protocols.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as
                necessary to provide our services and fulfill the purposes
                outlined in this policy. Game data is processed in real-time and
                is not stored on our servers after your gaming session ends.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                7. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw your consent at any time</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                8. Third-Party Services
              </h2>
              <p>
                Our service integrates with Twitch and reads data from the
                League of Legends client. These services have their own privacy
                policies, and we encourage you to review them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-orbitron font-semibold text-foreground">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="bg-card/50 border border-primary/20 rounded-lg p-4">
                <p className="text-primary">privacy@PULSRGG.app</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
