import PageShell from "@/components/legal/page-shell"
import EnhanceLegal from "@/components/legal/enhance-legal"

export default function PrivacyPolicyPage() {
  const items = [
    { id: "introduction", label: "Introduction" },
    { id: "collection", label: "Information We Collect" },
    { id: "usage", label: "How We Use Information" },
    { id: "sharing", label: "Information Sharing" },
    { id: "security", label: "Data Security" },
    { id: "rights", label: "Your Rights" },
    { id: "cookies", label: "Cookies & Tracking" },
    { id: "third-party", label: "Third-Party Services" },
    { id: "international", label: "International Transfers" },
    { id: "children", label: "Children's Privacy" },
    { id: "changes", label: "Policy Changes" },
    { id: "contact", label: "Contact Us" },
  ]
  
  return (
    <>
      <EnhanceLegal />
      <PageShell 
        title="Privacy Policy" 
        description="How we collect, use, and protect your personal information"
        items={items}
      >
        <section id="introduction" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Introduction
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Meet & More, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
            <p>
              By using our Service, you consent to the collection and use of information in accordance with this policy. 
              We are committed to transparency and will keep you informed of any changes to our privacy practices.
            </p>
          </div>
        </section>

        <section id="collection" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Information We Collect
          </h2>
          <div className="space-y-8 text-muted-foreground">
            <p className="leading-relaxed">We collect several types of information to provide and improve our services:</p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Personal Information</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Name, email address, and phone number</li>
                <li>Profile information and preferences</li>
                <li>Payment information (processed securely by Razorpay)</li>
                <li>Location data for restaurant matching</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Usage Information</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Platform usage patterns and interactions</li>
                <li>Restaurant preferences and dining history</li>
                <li>Communication with other users</li>
                <li>Device and browser information</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Automatically Collected Data</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>IP address and device identifiers</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and analytics data</li>
                <li>Performance and error information</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="usage" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            How We Use Information
          </h2>
          <div className="space-y-8 text-muted-foreground">
            <p className="leading-relaxed">We use your information for the following purposes:</p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Service Provision</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Facilitating connections between users</li>
                <li>Processing payments and transactions</li>
                <li>Providing customer support</li>
                <li>Personalizing your experience</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Communication</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Sending important service updates</li>
                <li>Responding to your inquiries</li>
                <li>Facilitating user-to-user communication</li>
                <li>Marketing communications (with consent)</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Improvement & Analytics</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Analyzing usage patterns</li>
                <li>Improving our platform and services</li>
                <li>Developing new features</li>
                <li>Ensuring platform security</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="sharing" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Information Sharing
          </h2>
          <div className="space-y-8 text-muted-foreground">
            <p className="leading-relaxed">We may share your information in the following circumstances:</p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">With Other Users</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Profile information for matching purposes</li>
                <li>Communication during dining arrangements</li>
                <li>Feedback and reviews (with consent)</li>
                <li>Group dining coordination</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Service Providers</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Razorpay for payment processing</li>
                <li>Cloud hosting and infrastructure services</li>
                <li>Analytics and monitoring tools</li>
                <li>Customer support platforms</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Legal Requirements</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Compliance with applicable laws</li>
                <li>Response to legal requests</li>
                <li>Protection of rights and safety</li>
                <li>Prevention of fraud and abuse</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="security" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Data Security
          </h2>
          <div className="space-y-8 text-muted-foreground">
            <p className="leading-relaxed">
              We implement comprehensive security measures to protect your personal information:
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Technical Safeguards</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>End-to-end encryption for sensitive data</li>
                <li>Secure socket layer (SSL) technology</li>
                <li>Regular security audits and updates</li>
                <li>Multi-factor authentication options</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Access Controls</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Limited access to personal information</li>
                <li>Employee training on data protection</li>
                <li>Regular access reviews and monitoring</li>
                <li>Secure development practices</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Incident Response</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>24/7 security monitoring</li>
                <li>Rapid incident detection and response</li>
                <li>User notification for security breaches</li>
                <li>Continuous improvement of security measures</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="rights" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Your Rights
          </h2>
          <div className="space-y-8 text-muted-foreground">
            <p className="leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Access & Control</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Access your personal information</li>
                <li>Update or correct inaccurate data</li>
                <li>Delete your account and data</li>
                <li>Export your data in a portable format</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Consent Management</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Withdraw consent for data processing</li>
                <li>Opt-out of marketing communications</li>
                <li>Control cookie preferences</li>
                <li>Manage notification settings</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Regional Rights</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>GDPR rights for EU/EEA users</li>
                <li>CCPA rights for California residents</li>
                <li>PDPA rights for Southeast Asian users</li>
                <li>Other local privacy law protections</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="cookies" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Cookies & Tracking
          </h2>
          <div className="space-y-8 text-muted-foreground">
            <p className="leading-relaxed">
              We use cookies and similar technologies to enhance your experience and provide essential functionality:
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Essential Cookies</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Authentication and session management</li>
                <li>Payment processing security</li>
                <li>Basic platform functionality</li>
                <li>Fraud prevention measures</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Analytics & Performance</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Understanding user behavior</li>
                <li>Improving platform performance</li>
                <li>Identifying and fixing issues</li>
                <li>Optimizing user experience</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Cookie Management</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Control through browser settings</li>
                <li>Opt-out of non-essential cookies</li>
                <li>Essential cookies cannot be disabled</li>
                <li>Regular cookie policy updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="third-party" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Third-Party Services
          </h2>
          <div className="space-y-8 text-muted-foreground">
            <p className="leading-relaxed">
              We work with trusted third-party service providers to deliver our services:
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Payment Processing</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Razorpay for secure payment processing</li>
                <li>PCI DSS compliant payment systems</li>
                <li>Encrypted payment information</li>
                <li>Secure transaction handling</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Infrastructure & Analytics</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Cloud hosting and storage services</li>
                <li>Performance monitoring tools</li>
                <li>Error tracking and analytics</li>
                <li>Customer support platforms</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Third-Party Obligations</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Data protection agreements</li>
                <li>Security and privacy requirements</li>
                <li>Regular compliance audits</li>
                <li>Incident notification procedures</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="international" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            International Data Transfers
          </h2>
          <div className="space-y-8 text-muted-foreground">
            <p className="leading-relaxed">
              Your information may be transferred to and processed in countries outside your own:
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Transfer Locations</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>India (primary operations)</li>
                <li>United States (cloud services)</li>
                <li>European Union (analytics)</li>
                <li>Other regions as needed</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Legal Safeguards</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Adequacy decisions where applicable</li>
                <li>Data protection agreements</li>
                <li>Regular compliance monitoring</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Your Rights</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Information about transfer locations</li>
                <li>Access to transfer safeguards</li>
                <li>Right to object to transfers</li>
                <li>Compensation for transfer-related harm</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="children" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Children's Privacy
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              Our Service is not intended for children under 18 years of age:
            </p>
            
            <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
              <li>We do not knowingly collect personal information from children under 18</li>
              <li>If you are under 18, please do not use our Service</li>
              <li>Parents or guardians should contact us if they believe we have collected information from a child</li>
              <li>We will promptly delete any such information upon verification</li>
            </ul>
          </div>
        </section>

        <section id="changes" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Changes to This Policy
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time:
            </p>
            
            <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
              <li>We will notify you of material changes through our platform</li>
              <li>Updated policies will be posted on this page</li>
              <li>Continued use of our Service constitutes acceptance of changes</li>
              <li>We encourage you to review this policy periodically</li>
            </ul>
            
            <p className="leading-relaxed">
              <strong>Last Updated:</strong> December 2024
            </p>
          </div>
        </section>

        <section id="contact" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Contact Us
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy or need to exercise your rights:
            </p>
            
            <div className="bg-card/50 border border-border/60 rounded-lg p-6">
              <h3 className="text-foreground font-medium mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li><strong>Privacy Questions:</strong> For questions about this Privacy Policy</li>
                <li><strong>Data Rights:</strong> To exercise your privacy rights</li>
                <li><strong>Security Concerns:</strong> To report privacy or security issues</li>
                <li><strong>Policy Updates:</strong> For information about policy changes</li>
              </ul>
            </div>
            
            <p className="leading-relaxed">
              <strong>Email:</strong>{" "}
              <a href="mailto:meetandmoredev@gmail.com" className="text-[#F55636] hover:text-[#F55636]/80 underline transition-colors">
                meetandmoredev@gmail.com
              </a>
            </p>
            <p className="leading-relaxed">
              We typically respond to privacy-related inquiries within 24-48 hours and prioritize 
              requests related to data rights and security concerns.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  )
}
