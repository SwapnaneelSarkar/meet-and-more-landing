import "package:flutter/material.dart"
import "package:google_fonts/google_fonts.dart"
import "../resources/colors.dart"
import "../resources/font.dart"

class PrivacyPolicyView extends StatelessWidget {\
  const PrivacyPolicyView({Key? key}) : super(key: key);
\
  @override\
  Widget build(BuildContext context) {\
    final w = MediaQuery.of(context).size.width;\
    final h = MediaQuery.of(context).size.height;\
    final headingFS = w * 0.07;\
    final sectionFS = w * 0.045;\
    final bodyFS = w * 0.035;\
    final vPad = h * 0.025;\
    final hPad = w * 0.06;\
    final cardRadius = 32.0;

    return Scaffold(\
      backgroundColor: ColorManager.black,\
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,\
        iconTheme: const IconThemeData(color: Colors.white),\
        title: Text(
          'Privacy Policy',\
          style: TextStyle(
            fontFamily: FontConstants.fontFamily,
            fontSize: headingFS,
            fontWeight: FontWeightManager.bold,
            color: ColorManager.orangeAcc,
            letterSpacing: 1.2,\
          ),
        ),\
        centerTitle: true,
      ),
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            padding: EdgeInsets.symmetric(horizontal: hPad, vertical: vPad),
            child: Container(
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.08),
                borderRadius: BorderRadius.circular(cardRadius),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.18),
                    blurRadius: 16,\
                    offset: const Offset(0, 8),
                  ),
                ],
                border: Border.all(color: ColorManager.orangeAcc.withOpacity(0.18), width: 1.2),
              ),
              padding: EdgeInsets.symmetric(horizontal: w * 0.05, vertical: h * 0.03),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _sectionTitle('🔐 2. Privacy Policy', sectionFS),
                  _bodyText('''2.1 Information Collection\nWe collect personal information that you provide to us directly, such as when you create an account, update your profile, or communicate with other users. This may include your name, email address, phone number, and payment information.''', bodyFS),
                  _divider(),
                  _sectionTitle('2.2 Use of Information', sectionFS),
                  _bodyText('''We use your information to:\n• Provide and personalize our Service.\n• Communicate with you about your account and our Service.\n• Improve our Service through analysis and feedback.''', bodyFS),
                  _divider(),
                  _sectionTitle('2.3 Data Sharing', sectionFS),
                  _bodyText('''We do not sell your personal information to third parties. We may share your information with trusted partners who assist us in operating our Service, provided they agree to keep this information confidential and anonymized.''', bodyFS),
                  _divider(),
                  _sectionTitle('2.4 Data Retention', sectionFS),
                  _bodyText('''We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.''', bodyFS),
                  _divider(),
                  _sectionTitle('2.5 Your Rights', sectionFS),
                  _bodyText('''Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete your data. Please contact us to exercise these rights.''', bodyFS),
                  _divider(),
                  _sectionTitle('2.6 International Data Transfers', sectionFS),
                  _bodyText('''If you are located in the European Union (EU), United Kingdom (UK), or other jurisdictions with similar data protection laws, please be aware that your information may be transferred to, processed, and stored in countries outside of your own (including India, the United States, and Southeast Asia). We ensure that such transfers comply with applicable legal frameworks, including:\n• The EU Standard Contractual Clauses (SCCs)\n• UK Addendum to the SCCs\n• Adequacy decisions by the European Commission or UK ICO (where applicable)''', bodyFS),
                  _divider(),
                  _sectionTitle('2.7 GDPR & UK GDPR Rights (For EU/EEA and UK Users)', sectionFS),
                  _bodyText('''If you are a resident of the EU or UK, you have the following rights under the General Data Protection Regulation (GDPR) and UK GDPR:\n• Right to Access – Request access to the personal data we hold about you.\n• Right to Rectification – Correct inaccurate or incomplete data.\n• Right to Erasure (“Right to be forgotten”) – Request deletion of your personal data.\n• Right to Restrict Processing – Ask us to limit how we process your data.\n• Right to Data Portability – Receive a copy of your data in a commonly used format.\n• Right to Object – Object to processing, particularly for marketing purposes.\n• Right to Withdraw Consent – Where processing is based on consent.\nYou may exercise any of these rights by contacting us at meetandmoredev@gmail.com''', bodyFS),
                  _divider(),
                  _sectionTitle('2.8 CCPA (For California Residents)', sectionFS),
                  _bodyText('''If you reside in California, you have rights under the California Consumer Privacy Act (CCPA), including:\n• The right to know what personal information is collected, used, shared, or sold.\n• The right to delete personal information.\n• The right to opt-out of the sale of personal information (we do not sell data).\nWe will not discriminate against you for exercising your rights under the CCPA.''', bodyFS),
                  _divider(),
                  _sectionTitle('2.9 PDPA & Other Regional Laws', sectionFS),
                  _bodyText('''For users in Singapore, we adhere to the Personal Data Protection Act (PDPA). Similar protections apply in countries like Malaysia, Indonesia, and Thailand under their respective national privacy laws. We commit to:\n• Storing your data securely.\n• Collecting only data that is relevant to your experience.\n• Providing transparency and control over your data.''', bodyFS),
                  _divider(),
                  _sectionTitle('2.10 Payment Processing & Razorpay Integration', sectionFS),
                  _bodyText('''Our platform integrates with Razorpay for secure payment processing. When you make payments through our Service:\n• Payment information is processed securely by Razorpay in compliance with PCI DSS standards.\n• We may share transaction data with Razorpay and their banking partners for payment processing, fraud prevention, and regulatory compliance.\n• Razorpay may collect and process your payment information, including card details, bank account information, and transaction history.\n• Your payment data is subject to Razorpay's privacy policy and security practices.\n• We do not store your complete payment card details on our servers.''\', bodyFS),\
                  _divider(),\
                  _sectionTitle('2.11 Data Sharing with Payment Providers', sectionFS),
                  _bodyText(''\'We may share your information with payment service providers, banks, and financial institutions to:\n• Process payments and transactions.\n• Comply with anti-money laundering (AML) and know-your-customer (KYC) regulations.\n• Prevent fraud and ensure transaction security.\n• Meet regulatory reporting requirements.\n• Facilitate refunds and chargeback processing.\nThese third parties are bound by confidentiality obligations and applicable data protection laws.''', bodyFS),
                  _divider(),
                  _sectionTitle('2.12 Financial Data & Regulatory Compliance', sectionFS),
                  _bodyText('''In accordance with financial regulations and Razorpay\'s requirements:\n• We may collect and share KYC documents and business information for merchant verification.\n• Transaction data may be retained for regulatory compliance periods (typically 5-10 years).\n• We may share information with regulatory authorities as required by law.\n• Your financial information is protected under applicable banking and financial services regulations.\n• We implement industry-standard security measures to protect payment data.''', bodyFS),
                  _divider(),
                  _sectionTitle('2.13 Transaction Monitoring & Fraud Prevention', sectionFS),
                  _bodyText('''To ensure secure transactions and prevent fraud:\n• We monitor transaction patterns and may flag suspicious activities.\n• Your transaction data may be analyzed for risk assessment.\n• We may share transaction information with fraud prevention services.\n• Suspicious transactions may be reported to relevant authorities.\n• You may be required to provide additional verification for certain transactions.''', bodyFS),
                  _divider(),
                  _sectionTitle('2.14 Data Retention for Financial Records', sectionFS),
                  _bodyText('''Financial and transaction data is retained for extended periods to comply with regulatory requirements:\n• Transaction records: Minimum 5 years as per financial regulations.\n• KYC documents: Retained for the duration of our relationship plus regulatory requirements.\n• Payment processing data: Retained as required by payment processors and banking partners.\n• Audit trails: Maintained for compliance and security purposes.\n• You may request deletion of non-financial personal data while financial records are retained for regulatory compliance.''', bodyFS),
                  SizedBox(height: vPad * 1.5),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _sectionTitle(String text, double fontSize) {
    return Padding(\
      padding: const EdgeInsets.only(bottom: 8.0, top: 18.0),\
      child: Text(
        text,\
        style: GoogleFonts.poppins(\
          color: ColorManager.orangeAcc,\
          fontWeight: FontWeightManager.bold,\
          fontSize: fontSize,
          letterSpacing: 0.2,
        ),
        textAlign: TextAlign.left,
      ),
    );
  }

  Widget _bodyText(String text, double fontSize) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Text(
        text,
        style: GoogleFonts.poppins(
          color: Colors.white.withOpacity(0.95),
          fontSize: fontSize,
          fontWeight: FontWeightManager.regular,
          height: 1.7,
        ),
        textAlign: TextAlign.justify,
      ),
    );
  }

  Widget _divider() {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10.0),
      child: Divider(
        color: ColorManager.orangeAcc.withOpacity(0.25),
        thickness: 1.1,
      ),
    );
  }
}
