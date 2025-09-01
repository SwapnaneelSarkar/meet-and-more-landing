import PageShell from "@/components/legal/page-shell"
import EnhanceLegal from "@/components/legal/enhance-legal"

export default function CommunityGuidelinesPage() {
  const items = [
    { id: "welcome", label: "Welcome & Mission" },
    { id: "respect", label: "Respect & Inclusion" },
    { id: "behavior", label: "Appropriate Behavior" },
    { id: "privacy", label: "Privacy & Safety" },
    { id: "content", label: "Content Guidelines" },
    { id: "enforcement", label: "Enforcement" },
    { id: "rights", label: "Regional Rights & Laws" },
    { id: "contact", label: "Contact & Support" },
  ]
  
  return (
    <>
      <EnhanceLegal />
      <PageShell 
        title="Community Guidelines" 
        description="Building a safe, respectful, and inclusive community for meaningful dining experiences"
        items={items}
      >
        <section id="welcome" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Welcome to Meet & More
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We are committed to creating a safe, respectful, and inclusive community for all our users. 
              These guidelines outline the standards of behavior we expect from everyone who uses our platform 
              to ensure meaningful connections over great food.
            </p>
            <p>
              Our mission is to transform every meal into an opportunity for genuine human connection while 
              maintaining the highest standards of safety and respect.
            </p>
          </div>
        </section>

        <section id="respect" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Respect & Inclusion
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <ul className="space-y-3 list-disc list-inside ml-4 leading-relaxed">
              <li>Treat all users with respect, kindness, and empathy</li>
              <li>Be inclusive and welcoming to people from all backgrounds, cultures, and identities</li>
              <li>Celebrate diversity and avoid discriminatory language or behavior</li>
              <li>Respect different opinions, perspectives, and dining preferences</li>
              <li>Create an environment where everyone feels safe to be themselves</li>
            </ul>
          </div>
        </section>

        <section id="behavior" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Appropriate Behavior
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <ul className="space-y-3 list-disc list-inside ml-4 leading-relaxed">
              <li>Use appropriate and respectful language in all communications</li>
              <li>Respect personal boundaries and obtain consent before sharing personal information</li>
              <li>Report inappropriate behavior, harassment, or bullying when encountered</li>
              <li>Be punctual and respectful of others' time and schedules</li>
              <li>Maintain appropriate behavior during meetups and in group chats</li>
              <li>Respect restaurant staff and other diners during meetups</li>
            </ul>
          </div>
        </section>

        <section id="privacy" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Privacy & Safety
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <ul className="space-y-3 list-disc list-inside ml-4 leading-relaxed">
              <li>Protect your personal information and that of others</li>
              <li>Do not share private conversations, photos, or personal details without explicit consent</li>
              <li>Be cautious when meeting people in person - always meet in public places initially</li>
              <li>Report any safety concerns, suspicious behavior, or uncomfortable situations immediately</li>
              <li>Use the platform's safety features including blocking and reporting tools</li>
              <li>Trust your instincts - if something feels wrong, remove yourself from the situation</li>
            </ul>
          </div>
        </section>

        <section id="content" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Content Guidelines
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <ul className="space-y-3 list-disc list-inside ml-4 leading-relaxed">
              <li>Share content that is appropriate, respectful, and relevant to dining experiences</li>
              <li>Avoid spam, scams, misleading information, or promotional content</li>
              <li>Do not share explicit, inappropriate, or offensive content</li>
              <li>Respect intellectual property rights and avoid sharing copyrighted material</li>
              <li>Keep conversations focused on food, dining, and meaningful connections</li>
              <li>Report inappropriate content or behavior through our safety tools</li>
            </ul>
          </div>
        </section>

        <section id="enforcement" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Enforcement & Consequences
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              We take these guidelines seriously and reserve the right to take action against users who violate them. 
              Our enforcement process includes:
            </p>
            <ul className="space-y-3 list-disc list-inside ml-4 leading-relaxed">
              <li><strong>Warnings:</strong> First-time violations may result in a warning and educational resources</li>
              <li><strong>Temporary Suspensions:</strong> Repeated violations may lead to temporary account restrictions</li>
              <li><strong>Permanent Bans:</strong> Severe or repeated violations may result in permanent account termination</li>
              <li><strong>Legal Action:</strong> In cases of illegal behavior, we may report to appropriate authorities</li>
            </ul>
            <p className="leading-relaxed">
              We are committed to maintaining a safe and welcoming community for all users. 
              Your safety and comfort are our top priorities.
            </p>
          </div>
        </section>

        <section id="rights" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Regional Rights & Legal Compliance
          </h2>
          <div className="space-y-8 text-muted-foreground">
            <p className="leading-relaxed">
              We comply with data protection and privacy laws in all regions where we operate. 
              Your rights and our obligations vary by location:
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">EU/EEA & UK Users (GDPR & UK GDPR)</h3>
              <p>You have the right to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li><strong>Access:</strong> Request access to personal data we hold about you</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Restrict Processing:</strong> Ask us to limit how we process your data</li>
                <li><strong>Data Portability:</strong> Receive a copy of your data in a commonly used format</li>
                <li><strong>Object:</strong> Object to processing, particularly for marketing purposes</li>
                <li><strong>Withdraw Consent:</strong> Where processing is based on consent</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">California Residents (CCPA)</h3>
              <p>Under the California Consumer Privacy Act, you have the right to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Know what personal information is collected, used, shared, or sold</li>
                <li>Delete personal information</li>
                <li>Opt-out of the sale of personal information (we do not sell your data)</li>
              </ul>
              <p className="leading-relaxed">We will not discriminate against you for exercising your rights under the CCPA.</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Singapore & Southeast Asia (PDPA & Similar Laws)</h3>
              <p>For users in Singapore, Malaysia, Indonesia, Thailand, and other Southeast Asian countries:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>We store your data securely using industry-standard encryption</li>
                <li>We collect only data that is relevant and necessary for your experience</li>
                <li>We provide transparency and control over your data</li>
                <li>We comply with local data protection regulations</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">International Data Transfers</h3>
              <p className="leading-relaxed">
                Your information may be transferred to, processed, and stored in countries outside your own 
                (including India, the United States, and Southeast Asia). We ensure such transfers comply with 
                applicable legal frameworks including EU Standard Contractual Clauses (SCCs) and adequacy decisions.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Contact & Support
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              We're here to help ensure your experience on Meet & More is safe and enjoyable. 
              If you have questions, concerns, or need to report violations:
            </p>
            
            <div className="bg-card/50 border border-border/60 rounded-lg p-6">
              <h3 className="text-foreground font-medium mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li><strong>Safety Issues:</strong> Use our in-app reporting tools for immediate concerns</li>
                <li><strong>Privacy Rights:</strong> Contact us to exercise your data protection rights</li>
                <li><strong>General Support:</strong> Reach out for any questions about these guidelines</li>
                <li><strong>Legal Inquiries:</strong> For legal or compliance-related questions</li>
              </ul>
            </div>
            
            <p className="leading-relaxed">
              <strong>Email:</strong>{" "}
              <a href="mailto:meetandmoredev@gmail.com" className="text-[#F55636] hover:text-[#F55636]/80 underline transition-colors">
                meetandmoredev@gmail.com
              </a>
            </p>
            <p className="leading-relaxed">
              We typically respond to inquiries within 24-48 hours and prioritize safety-related concerns.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  )
}
