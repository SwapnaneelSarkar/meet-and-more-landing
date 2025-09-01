import PageShell from "@/components/legal/page-shell"
import EnhanceLegal from "@/components/legal/enhance-legal"

export default function CookiesPage() {
  const items = [
    { id: "what", label: "What Are Cookies?" },
    { id: "types", label: "Types We Use" },
    { id: "payment", label: "Payment Cookies" },
    { id: "security", label: "Security & Fraud" },
    { id: "analytics", label: "Analytics & Performance" },
    { id: "third-party", label: "Third-Party Cookies" },
    { id: "manage", label: "Managing Cookies" },
    { id: "consent", label: "Consent & Updates" },
    { id: "contact", label: "Contact" },
  ]
  
  return (
    <>
      <EnhanceLegal />
      <PageShell 
        title="Cookies Policy" 
        description="Understanding how we use cookies to enhance your experience and ensure secure transactions"
        items={items}
      >
        <section id="what" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            What Are Cookies?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Cookies are small text files placed on your device that help us enhance your experience on our Service. 
              They allow us to remember your preferences, understand how you interact with our Service, and provide 
              secure, personalized functionality.
            </p>
            <p>
              These tiny files work behind the scenes to make your Meet & More experience smoother, safer, and more 
              enjoyable while maintaining the highest standards of security for your transactions and personal information.
            </p>
          </div>
        </section>

        <section id="types" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Types of Cookies We Use
          </h2>
          <div className="space-y-8 text-muted-foreground">
            <p className="leading-relaxed">We use several categories of cookies to provide different aspects of our service:</p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Essential Cookies</h3>
              <p className="leading-relaxed">These cookies are necessary for the basic functionality of our Service and cannot be disabled:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Authentication and login sessions</li>
                <li>Payment processing and security</li>
                <li>Basic platform functionality</li>
                <li>Fraud prevention and security measures</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Performance Cookies</h3>
              <p className="leading-relaxed">Help us analyze how users interact with our Service to improve performance:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Page load times and user experience metrics</li>
                <li>Feature usage patterns and optimization</li>
                <li>Error tracking and debugging</li>
                <li>Platform performance monitoring</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Functionality Cookies</h3>
              <p className="leading-relaxed">Allow us to remember your preferences and settings:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Language and regional preferences</li>
                <li>Dining preferences and dietary restrictions</li>
                <li>Payment method preferences</li>
                <li>Interface customization settings</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Targeting Cookies</h3>
              <p className="leading-relaxed">Used to deliver personalized content and advertisements:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Restaurant recommendations based on preferences</li>
                <li>Personalized dining suggestions</li>
                <li>Relevant promotional content</li>
                <li>Location-based service optimization</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="payment" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Payment-Related Cookies
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              Our payment partner Razorpay uses essential cookies to ensure secure, reliable payment processing. 
              These cookies are critical for your financial security and cannot be disabled without affecting payment functionality.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Payment Processing Cookies</h3>
              <p className="leading-relaxed">Razorpay places cookies on your device to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li><strong>Secure Transactions:</strong> Ensure secure payment processing and prevent fraud</li>
                <li><strong>Session Management:</strong> Maintain secure session information during payment flows</li>
                <li><strong>Fraud Prevention:</strong> Analyze payment transaction patterns for security purposes</li>
                <li><strong>User Experience:</strong> Remember your payment preferences and settings</li>
                <li><strong>Personalization:</strong> Provide payment options based on your location and device</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Third-Party Payment Cookies</h3>
              <p className="leading-relaxed">Additional cookies from our payment ecosystem:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Razorpay and their banking partners use cookies for payment verification</li>
                <li>These cookies are essential for secure transaction processing</li>
                <li>Payment-related cookies may persist for security and compliance purposes</li>
                <li>You cannot disable payment processing cookies without affecting payment functionality</li>
              </ul>
            </div>

            <div className="bg-[#F55636]/10 border border-[#F55636]/20 rounded-lg p-4">
              <p className="text-[#F55636] text-sm leading-relaxed">
                <strong>Important:</strong> Payment processing cookies are essential for secure transactions. 
                Disabling them may prevent you from completing payments or compromise transaction security.
              </p>
            </div>
          </div>
        </section>

        <section id="security" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Security & Fraud Prevention Cookies
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              Security cookies are fundamental to protecting your account, transactions, and personal information. 
              They work continuously to detect and prevent unauthorized access and fraudulent activities.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Security Cookies</h3>
              <p className="leading-relaxed">We use security cookies to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li><strong>Authentication:</strong> Detect and prevent fraudulent login attempts</li>
                <li><strong>Session Protection:</strong> Protect against cross-site request forgery (CSRF) attacks</li>
                <li><strong>Account Security:</strong> Maintain secure session information across our platform</li>
                <li><strong>Access Control:</strong> Track authentication status and prevent unauthorized access</li>
                <li><strong>Device Verification:</strong> Identify trusted devices and detect suspicious activity</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Fraud Prevention</h3>
              <p className="leading-relaxed">Advanced fraud detection capabilities:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Cookies help identify unusual transaction patterns and behaviors</li>
                <li>They assist in real-time risk assessment and fraud detection</li>
                <li>Security cookies may be required for high-value transactions</li>
                <li>These cookies are essential for maintaining platform security</li>
                <li>They help protect both users and our platform from financial fraud</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="analytics" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Analytics & Performance Cookies
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              Analytics cookies help us understand how our platform performs and how users interact with our services. 
              This information is crucial for continuous improvement and optimization.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Service Analytics</h3>
              <p className="leading-relaxed">We use analytics cookies to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li><strong>User Experience:</strong> Understand how users interact with our payment features</li>
                <li><strong>Performance Optimization:</strong> Improve platform performance and reliability</li>
                <li><strong>Transaction Analysis:</strong> Analyze transaction success rates and payment flows</li>
                <li><strong>Feature Development:</strong> Identify areas for service improvement</li>
                <li><strong>Quality Assurance:</strong> Monitor platform performance and detect issues</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Third-Party Analytics</h3>
              <p className="leading-relaxed">Our partners also use analytics for service improvement:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Razorpay may use analytics cookies to improve their payment services</li>
                <li>These cookies help optimize payment processing performance</li>
                <li>Analytics data is anonymized and used for service improvement</li>
                <li>You can opt out of non-essential analytics cookies</li>
                <li>Performance data helps ensure reliable payment processing</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="third-party" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Third-Party Cookies
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              We may allow third-party service providers to place cookies on your device to assist us in analyzing 
              and improving our Service. These partners are carefully selected and obligated to protect your information.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Our Trusted Partners</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li><strong>Razorpay:</strong> Payment processing and security</li>
                <li><strong>Analytics Services:</strong> Performance monitoring and user experience optimization</li>
                <li><strong>Security Providers:</strong> Fraud detection and account protection</li>
                <li><strong>Support Tools:</strong> Customer service and technical support</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Third-Party Obligations</h3>
              <p className="leading-relaxed">All third-party providers must:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Keep your information confidential and secure</li>
                <li>Use cookies only for specified, approved purposes</li>
                <li>Comply with applicable data protection regulations</li>
                <li>Provide clear information about their cookie usage</li>
                <li>Offer opt-out mechanisms where appropriate</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="manage" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Managing Your Cookies
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              You have control over your cookie preferences, though some cookies are essential for core functionality. 
              Here's how to manage them effectively:
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Browser Settings</h3>
              <p className="leading-relaxed">You can manage cookies through your browser settings:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Cookie Management for Payment Services</h3>
              <p className="leading-relaxed">Understanding what you can and cannot control:</p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-foreground">Essential Payment Cookies</h4>
                <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                  <li>Payment processing cookies cannot be disabled without affecting payment functionality</li>
                  <li>These cookies are necessary for secure transaction processing</li>
                  <li>Disabling payment cookies may prevent you from completing transactions</li>
                  <li>Security cookies are required for fraud prevention and account protection</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-foreground">Optional Cookies</h4>
                <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                  <li>You can disable non-essential cookies through your browser settings</li>
                  <li>Disabling certain cookies may affect personalized features</li>
                  <li>Performance and analytics cookies can be disabled without affecting core functionality</li>
                  <li>We respect your cookie preferences while maintaining security requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="consent" className="rounded-xl border border-border/60 bg-card/90 p-8 backdrop-blur-sm shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F55636]"></div>
            Consent & Policy Updates
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              By using our Service, you consent to the use of cookies in accordance with this Cookies Policy. 
              We're committed to transparency and will keep you informed of any changes.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Your Consent</h3>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>You can withdraw your consent at any time by adjusting your browser settings</li>
                <li>Essential cookies will continue to function to maintain service security</li>
                <li>Non-essential cookies can be disabled through browser preferences</li>
                <li>We respect your choices while ensuring platform security</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-foreground">Policy Updates</h3>
              <p className="leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in our practices, 
                technology, or legal requirements. We will notify you of any material changes by:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4 leading-relaxed">
                <li>Posting the updated policy on this page</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending notifications through our platform for significant changes</li>
                <li>Providing advance notice for major policy modifications</li>
              </ul>
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
              We're here to help you understand and manage your cookie preferences. If you have questions 
              about our Cookies Policy or need assistance with cookie management:
            </p>
            
            <div className="bg-card/50 border border-border/60 rounded-lg p-6">
              <h3 className="text-foreground font-medium mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li><strong>General Questions:</strong> For questions about our Cookies Policy</li>
                <li><strong>Technical Support:</strong> For help with browser settings and cookie management</li>
                <li><strong>Privacy Concerns:</strong> Questions about data protection and cookie usage</li>
                <li><strong>Payment Issues:</strong> Problems related to payment processing cookies</li>
              </ul>
            </div>
            
            <p className="leading-relaxed">
              <strong>Email:</strong>{" "}
              <a href="mailto:meetandmoredev@gmail.com" className="text-[#F55636] hover:text-[#F55636]/80 underline transition-colors">
                meetandmoredev@gmail.com
              </a>
            </p>
            <p className="leading-relaxed">
              We typically respond to inquiries within 24-48 hours and prioritize questions related to 
              security and payment functionality.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  )
}
