import "package:flutter/material.dart"
import "package:google_fonts/google_fonts.dart"
import "../resources/colors.dart"
import "../resources/font.dart"

class TermsConditionsView extends StatelessWidget {\
  const TermsConditionsView({Key? key}) : super(key: key);
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
    final cardRadius = w * 0.08;

    return Scaffold(\
      backgroundColor: ColorManager.black,\
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,\
        iconTheme: const IconThemeData(color: Colors.white),\
        title: Text(
          'Terms & Conditions',\
          style: TextStyle(
            fontFamily: FontConstants.fontFamily,\
            fontSize: headingFS.clamp(22.0, 36.0),\
            fontWeight: FontWeightManager.bold,\
            color: ColorManager.orangeAcc,\
            letterSpacing: 1.2,
          ),
        ),
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
                  _sectionTitle('📄 1. Terms of Service', sectionFS, w),
                  _bodyText('''1.1 Acceptance of Terms\nBy accessing or using the Meet & More platform ("Service"), you agree to comply with and be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please refrain from using our Service.\n\n1.2 Eligibility\nYou must be at least 18 years old or of legal age in your jurisdiction to use our Service. By using the Service, you represent and warrant that you meet these eligibility requirements.\n\n1.3 Account Registration\nTo access certain features, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate.\n\n1.4 User Conduct\nYou agree not to:\n• Violate any applicable laws or regulations.\n• Infringe upon the intellectual property rights of others.\n• Engage in any fraudulent, abusive, or harmful conduct.\n\n1.5 Termination\nWe reserve the right to suspend or terminate your access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users.\n\n1.6 Limitation of Liability\nTo the fullest extent permitted by law, Meet & More shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service.\n\n1.7 Governing Law\nThese Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which you reside.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('📌 1. International Users and Jurisdiction', sectionFS, w),
                  _bodyText('''Meet & More is a global platform. By accessing our Services, you agree that:\n• If you are a resident of the EU/EEA, these Terms are governed by the laws of Ireland.\n• If you are a resident of the UK, these Terms are governed by the laws of England and Wales.\n• If you are based in India, these Terms are governed by Indian law.\n• Users in the USA are subject to the laws of the state of Delaware.\nAny disputes shall be resolved in the respective jurisdictions’ courts unless otherwise agreed.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('📌 2. Data Protection and Compliance', sectionFS, w),
                  _bodyText('''By using our services, you acknowledge and agree that your data will be processed in accordance with our Privacy Policy and Cookie Policy, which form an integral part of these Terms.\nMeet & More complies with applicable data privacy laws, including:\n• General Data Protection Regulation (GDPR)\n• UK GDPR\n• California Consumer Privacy Act (CCPA)\n• Singapore Personal Data Protection Act (PDPA)''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('📌 3. Age Restrictions (Updated for Global Laws)', sectionFS, w),
                  _bodyText('''You must be at least 18 years old to use Meet & More.\nIn certain jurisdictions (e.g., parts of the EU), the minimum age for consent to data processing may be higher (e.g., 16 years). If you are under the minimum age required in your country, you are not permitted to use the Service.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('📌 4. Contact Information for Privacy Requests', sectionFS, w),
                  _contactInfoSection(bodyFS, w),
                  _divider(w),
                  _sectionTitle('💳 5. Payment Processing & Razorpay Terms', sectionFS, w),
                  _bodyText('''5.1 Payment Service Integration\nOur platform integrates with Razorpay Software Private Limited for payment processing services. By using our payment features, you agree to comply with Razorpay's terms and conditions in addition to these Terms.\n\n5.2 Payment Processing\n• All payments are processed securely through Razorpay's payment gateway.\n• You authorize us to share your payment information with Razorpay and their banking partners.\n• Payment processing is subject to Razorpay\'s security standards and regulatory compliance.\n• We do not store your complete payment card details on our servers.\n\n5.3 Transaction Fees & Charges\n• Payment processing fees may apply as determined by Razorpay.\n• All fees are exclusive of applicable taxes.\n• You are responsible for any additional charges imposed by your bank or payment provider.\n\n5.4 Refunds & Chargebacks\n• Refunds are processed in accordance with our refund policy and Razorpay's procedures.\n• Chargeback disputes are handled according to card network rules and banking regulations.\n• You may be liable for chargeback amounts and associated fees.''\', bodyFS, w),\
                  _divider(w),\
                  _sectionTitle('🚫 6. Prohibited Activities & Restricted Services', sectionFS, w),
                  _bodyText(''\'6.1 Prohibited Business Activities\nYou agree not to use our Service for any of the following prohibited activities:\n• Adult goods and services, pornography, or sexually suggestive materials\n• Alcohol, tobacco, or controlled substances\n• Gambling, betting, or lottery services\n• Weapons, ammunition, or explosives\n• Counterfeit goods or unauthorized replicas\n• Illegal drugs or drug paraphernalia\n• Hacking tools or unauthorized access devices\n• Money laundering or terrorist financing\n• Pyramid schemes or get-rich-quick schemes\n• Virtual currencies or cryptocurrency trading\n• Any activity that violates applicable laws or regulations\n\n6.2 Compliance Requirements\n• You must comply with all applicable laws, including anti-money laundering (AML) and know-your-customer (KYC) regulations.\n• You may be required to provide additional documentation for business verification.\n• We reserve the right to suspend or terminate services for non-compliance.\n• You must maintain accurate and up-to-date business information.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('🔒 7. Security & Fraud Prevention', sectionFS, w),
                  _bodyText('''7.1 Security Measures\n• We implement industry-standard security practices to protect your data and transactions.\n• Payment information is encrypted and processed securely.\n• We monitor transactions for suspicious activity and potential fraud.\n• You are responsible for maintaining the security of your account credentials.\n\n7.2 Fraud Prevention\n• We may flag or block transactions that appear suspicious.\n• You may be required to provide additional verification for certain transactions.\n• We reserve the right to investigate and report suspicious activities to relevant authorities.\n• You agree to cooperate with fraud prevention measures and investigations.\n\n7.3 Account Security\n• You must use strong, unique passwords for your account.\n• You are responsible for all activities conducted through your account.\n• You must immediately report any unauthorized access or suspicious activity.\n• We may require additional authentication for high-value transactions.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('📋 8. Regulatory Compliance & Reporting', sectionFS, w),
                  _bodyText('''8.1 Financial Regulations\n• Our payment services comply with applicable financial regulations and guidelines.\n• We may be required to report certain transactions to regulatory authorities.\n• You must provide accurate information for regulatory reporting purposes.\n• We may share information with banks, financial institutions, and regulatory bodies as required by law.\n\n8.2 Data Retention\n• Transaction records are retained for regulatory compliance periods (typically 5-10 years).\n• KYC documents and business information are retained as required by financial regulations.\n• You may not request deletion of data that must be retained for regulatory compliance.\n• We maintain audit trails for compliance and security purposes.\n\n8.3 Regulatory Cooperation\n• You agree to cooperate with regulatory investigations and audits.\n• We may share your information with regulatory authorities when legally required.\n• You must maintain records as required by applicable regulations.\n• We may suspend services during regulatory investigations.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('⚖️ 9. Liability & Indemnification', sectionFS, w),
                  _bodyText('''9.1 Limitation of Liability\n• Our liability is limited to the amount of fees paid for the specific service giving rise to the claim.\n• We are not liable for indirect, incidental, or consequential damages.\n• We are not responsible for losses due to third-party payment processor issues.\n• Our liability is limited to the extent permitted by applicable law.\n\n9.2 Indemnification\n• You agree to indemnify us against claims arising from your use of our services.\n• You are responsible for any losses due to your violation of these terms.\n• You must defend us against claims related to your business activities.\n• You agree to reimburse us for any costs incurred due to your actions.\n\n9.3 Force Majeure\n• We are not liable for service interruptions due to circumstances beyond our control.\n• This includes technical failures, regulatory changes, or third-party service disruptions.\n• We will use reasonable efforts to restore services as quickly as possible.''', bodyFS, w),
                  SizedBox(height: vPad * 1.5),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _sectionTitle(String text, double fontSize, double w) {
    return Padding(
      padding: EdgeInsets.only(bottom: w * 0.018, top: w * 0.045),\
      child: Text(
        text,\
        style: GoogleFonts.poppins(\
          color: ColorManager.orangeAcc,\
          fontWeight: FontWeightManager.bold,
          fontSize: fontSize.clamp(15.0, 28.0),
          letterSpacing: 0.2,
        ),
        textAlign: TextAlign.left,
      ),
    );
  }

  Widget _bodyText(String text, double fontSize, double w) {
    return Padding(
      padding: EdgeInsets.only(bottom: w * 0.018),
      child: Text(
        text,
        style: GoogleFonts.poppins(
          color: Colors.white.withOpacity(0.95),
          fontSize: fontSize.clamp(12.0, 20.0),
          fontWeight: FontWeightManager.regular,
          height: 1.7,
        ),
        textAlign: TextAlign.justify,
      ),
    );
  }

  Widget _divider(double w) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: w * 0.025),
      child: Divider(
        color: ColorManager.orangeAcc.withOpacity(0.25),
        thickness: 1.1,
      ),
    );
  }

  Widget _contactInfoSection(double fontSize, double w) {
    return Padding(
      padding: EdgeInsets.only(bottom: w * 0.018),
      child: RichText(
        textAlign: TextAlign.justify,
        text: TextSpan(
          style: GoogleFonts.poppins(
            color: Colors.white.withOpacity(0.95),
            fontSize: fontSize.clamp(12.0, 20.0),
            fontWeight: FontWeightManager.regular,
            height: 1.7,
          ),
          children: [
            const TextSpan(
              text: 'If you have questions about these Terms or want to exercise your data protection rights (e.g., access, erasure, portability), please contact our Data Protection Officer at:\n',
            ),
            TextSpan(
              text: '📧 meetandmoredev@gmail.com',
              style: GoogleFonts.poppins(
                color: ColorManager.orangeAcc,
                fontWeight: FontWeightManager.bold,
                fontSize: fontSize.clamp(12.0, 20.0),
                decoration: TextDecoration.underline,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
