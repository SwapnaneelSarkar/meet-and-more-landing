import PageShell from "@/components/legal/page-shell"
import EnhanceLegal from "@/components/legal/enhance-legal"

export default function TermsPage() {
  const items = [
    { id: "acceptance", label: "Acceptance of Terms" },
    { id: "service", label: "Service Description" },
    { id: "accounts", label: "User Accounts" },
    { id: "international", label: "International Users & Jurisdiction" },
    { id: "data-protection", label: "Data Protection & Compliance" },
    { id: "age-restrictions", label: "Age Restrictions" },
    { id: "prohibited", label: "Prohibited Activities" },
    { id: "compliance", label: "Regulatory Compliance" },
    { id: "liability", label: "Liability & Indemnification" },
    { id: "contact", label: "Contact Information" },
  ]
  
  return (
    <>
      <EnhanceLegal />
      <PageShell 
        title="Terms & Conditions" 
        description="Terms governing your use of Meet & More's dining connection platform"
        items={items}
      >
        <section id="acceptance" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Acceptance of Terms
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              By accessing and using Meet & More ("the Service"), you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p>
              These Terms of Service ("Terms") govern your use of our website and services. Please read them carefully. 
              By using our Service, you agree to these Terms and our Privacy Policy.
            </p>
          </div>
        </section>

        <section id="service" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Service Description
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Meet & More is a platform that connects people for dining experiences. We facilitate connections 
              between users who want to share meals and create meaningful social interactions through food.
            </p>
            <p>
              Our service includes user matching, restaurant recommendations, payment processing through Razorpay, 
              and community features designed to enhance the dining experience.
            </p>
          </div>
        </section>

        <section id="accounts" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            User Accounts
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              You are responsible for maintaining the confidentiality of your account and password. You agree to 
              accept responsibility for all activities that occur under your account or password.
            </p>
            <p>
              You must provide accurate, current, and complete information during the registration process and 
              keep your account information updated.
            </p>
          </div>
        </section>

        <section id="international" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            International Users & Jurisdiction
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              Our Service is available to users worldwide, but we operate under Indian jurisdiction and comply 
              with applicable international laws and regulations.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Jurisdiction & Governing Law</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>These Terms are governed by the laws of India</li>
                <li>Any disputes will be resolved in Indian courts</li>
                <li>We comply with applicable international data protection regulations</li>
                <li>Regional variations may apply based on local laws</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">International Compliance</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>We respect local laws in all operating regions</li>
                <li>Payment processing complies with international financial regulations</li>
                <li>Data transfers follow applicable legal frameworks</li>
                <li>We adapt our services to meet regional requirements</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="data-protection" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Data Protection & Compliance
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              We are committed to protecting your personal information and complying with applicable data 
              protection laws in all regions where we operate.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Data Protection Standards</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>We implement industry-standard security measures</li>
                <li>Your data is encrypted and stored securely</li>
                <li>We limit data collection to necessary information only</li>
                <li>Regular security audits and updates are conducted</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">International Compliance</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>GDPR compliance for EU/EEA users</li>
                <li>CCPA compliance for California residents</li>
                <li>PDPA compliance for Singapore and Southeast Asia</li>
                <li>Other regional data protection regulations</li>
              </ul>
            </div>

            <div className="bg-[#F55636]/10 border border-[#F55636]/20 rounded-lg p-4">
              <p className="text-[#F55636] text-sm leading-relaxed">
                <strong>Security Note:</strong> We use Razorpay for secure payment processing. All payment 
                information is encrypted and processed according to PCI DSS standards.
              </p>
            </div>
          </div>
        </section>

        <section id="age-restrictions" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Age Restrictions
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              You must be at least 18 years old to use our Service. By using our Service, you represent and 
              warrant that you are at least 18 years of age.
            </p>
            <p>
              If you are under 18, you may not use our Service. We do not knowingly collect personal information 
              from individuals under 18 years of age.
            </p>
          </div>
        </section>

        <section id="prohibited" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Prohibited Activities
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>You agree not to use the Service to:</p>
            <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Share inappropriate or offensive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the Service for commercial purposes without permission</li>
            </ul>
          </div>
        </section>

        <section id="compliance" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Regulatory Compliance
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              We operate in compliance with various regulatory frameworks and continuously monitor changes 
              in applicable laws and regulations.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Financial Regulations</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>PCI DSS compliance for payment security</li>
                <li>RBI regulations for Indian financial services</li>
                <li>International payment processing standards</li>
                <li>Anti-money laundering (AML) compliance</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Data Protection Regulations</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>GDPR compliance for European users</li>
                <li>CCPA compliance for California residents</li>
                <li>PDPA compliance for Southeast Asian users</li>
                <li>Other regional privacy laws</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="liability" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Liability & Indemnification
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              We strive to provide a safe and reliable service, but we cannot guarantee that our Service will 
              be uninterrupted or error-free.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Limitation of Liability</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the amount you paid for our Service</li>
                <li>We are not responsible for user-generated content or third-party services</li>
                <li>Force majeure events are excluded from liability</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">User Indemnification</h3>
              <p className="leading-relaxed">You agree to indemnify and hold harmless Meet & More from:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Any claims arising from your use of the Service</li>
                <li>Violations of these Terms or applicable laws</li>
                <li>Infringement of third-party rights</li>
                <li>Any harm caused to other users or third parties</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Payment Processing Liability</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>We are not liable for payment processing errors by Razorpay</li>
                <li>Refunds and disputes are handled according to Razorpay's policies</li>
                <li>We facilitate payment processing but do not guarantee transaction success</li>
                <li>Users are responsible for providing accurate payment information</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Contact Information
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us. We're here to help 
              and ensure you have a clear understanding of our service terms.
            </p>
            
            <div className="bg-card/50 border border-border/60 rounded-lg p-6">
              <h3 className="text-foreground font-medium mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li><strong>General Questions:</strong> For questions about these Terms & Conditions</li>
                <li><strong>Legal Inquiries:</strong> For legal or compliance-related questions</li>
                <li><strong>Service Issues:</strong> For problems with our platform or services</li>
                <li><strong>Payment Concerns:</strong> For questions about payment processing or refunds</li>
              </ul>
            </div>
            
            <p className="leading-relaxed">
              <strong>Email:</strong>{" "}
              <a href="mailto:meetandmoredev@gmail.com" className="text-[#F55636] hover:text-[#F55636]/80 underline transition-colors">
                meetandmoredev@gmail.com
              </a>
            </p>
            <p className="leading-relaxed">
              We typically respond to inquiries within 24-48 hours and prioritize legal and compliance-related questions.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  )
}
