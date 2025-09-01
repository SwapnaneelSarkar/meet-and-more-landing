import PageShell from "@/components/legal/page-shell"
import EnhanceLegal from "@/components/legal/enhance-legal"

export default function PrivacyPage() {
  const items = [
    { id: "collection", label: "Information Collection" },
    { id: "use", label: "Use of Information" },
    { id: "sharing", label: "Data Sharing" },
    { id: "retention", label: "Data Retention" },
    { id: "transfers", label: "International Transfers" },
    { id: "gdpr", label: "GDPR/UK GDPR Rights" },
    { id: "ccpa", label: "CCPA" },
    { id: "payments", label: "Payments & Razorpay" },
    { id: "contact", label: "Contact" },
  ]
  return (
    <>
      <EnhanceLegal />
      <PageShell title="Privacy Policy" items={items}>
        <section id="collection">
          <h2>Information Collection</h2>
          <p>
            We collect personal information you provide directly, such as when you create an account, update your
            profile, or communicate with other users. This may include your name, email address, phone number, and
            payment information.
          </p>
        </section>

        <section id="use">
          <h2>Use of Information</h2>
          <ul>
            <li>Provide and personalize our Service.</li>
            <li>Communicate with you about your account and our Service.</li>
            <li>Improve our Service through analysis and feedback.</li>
          </ul>
        </section>

        <section id="sharing">
          <h2>Data Sharing</h2>
          <p>
            We do not sell personal information. We may share data with trusted partners under strict confidentiality
            and data‑protection obligations.
          </p>
        </section>

        <section id="retention">
          <h2>Data Retention</h2>
          <p>
            We retain personal information only as long as needed for the purposes described here, unless a longer
            period is required by law.
          </p>
        </section>

        <section id="transfers">
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred and stored outside your country (including India, the United States, and
            Southeast Asia) under compliant mechanisms such as EU SCCs and the UK Addendum.
          </p>
        </section>

        <section id="gdpr">
          <h2>GDPR/UK GDPR Rights</h2>
          <ul>
            <li>Access, rectification, erasure, restriction, portability, and objection.</li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>
          <p>
            To exercise these rights, contact <a href="mailto:meetandmoredev@gmail.com">meetandmoredev@gmail.com</a>.
          </p>
        </section>

        <section id="ccpa">
          <h2>CCPA (California)</h2>
          <p>
            California residents have the right to know, delete, and opt‑out of sale (we do not sell data) without
            discrimination for exercising these rights.
          </p>
        </section>

        <section id="payments">
          <h2>Payments & Razorpay</h2>
          <p>
            Payments are processed by Razorpay in compliance with PCI DSS. We may share transaction data with Razorpay
            and banking partners for processing, fraud prevention, and compliance. We do not store complete card
            details.
          </p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Questions or requests: <a href="mailto:meetandmoredev@gmail.com">meetandmoredev@gmail.com</a>
          </p>
        </section>
      </PageShell>
    </>
  )
}
