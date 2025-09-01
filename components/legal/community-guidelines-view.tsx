import "package:flutter/material.dart"
import "package:google_fonts/google_fonts.dart"
import "../resources/colors.dart"
import "../resources/font.dart"

class CommunityGuidelinesView extends StatelessWidget {\
  const CommunityGuidelinesView({Key? key}) : super(key: key);
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
          'Community Guidelines',\
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
                  _sectionTitle('🌍 1. Community Guidelines', sectionFS, w),
                  _bodyText('''Welcome to Meet & More! We are committed to creating a safe, respectful, and inclusive community for all our users. These guidelines outline the standards of behavior we expect from everyone who uses our platform.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('2. Respect and Kindness', sectionFS, w),
                  _bodyText('''• Treat all users with respect and kindness\n• Be inclusive and welcoming to people from all backgrounds\n• Avoid discriminatory language or behavior\n• Respect different opinions and perspectives''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('3. Appropriate Behavior', sectionFS, w),
                  _bodyText('''• Use appropriate language in all communications\n• Avoid harassment, bullying, or threatening behavior\n• Respect personal boundaries and consent\n• Report inappropriate behavior when you encounter it''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('4. Privacy and Safety', sectionFS, w),
                  _bodyText('''• Protect your personal information and that of others\n• Do not share private conversations without consent\n• Be cautious when meeting people in person\n• Report any safety concerns immediately''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('5. Content Guidelines', sectionFS, w),
                  _bodyText('''• Share content that is appropriate and respectful\n• Avoid spam, scams, or misleading information\n• Do not share explicit or inappropriate content\n• Respect intellectual property rights''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('6. Enforcement', sectionFS, w),
                  _bodyText('''We reserve the right to take action against users who violate these guidelines, including warnings, temporary suspensions, or permanent bans. We are committed to maintaining a safe and welcoming community for all users.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('7. International Data Transfers', sectionFS, w),
                  _bodyText('''If you are located in the European Union (EU), United Kingdom (UK), or other jurisdictions with similar data protection laws, please be aware that your information may be transferred to, processed, and stored in countries outside of your own (including India, the United States, and Southeast Asia). We ensure that such transfers comply with applicable legal frameworks, including:\n• The EU Standard Contractual Clauses (SCCs)\n• UK Addendum to the SCCs\n• Adequacy decisions by the European Commission or UK ICO (where applicable)''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('8. GDPR & UK GDPR Rights (For EU/EEA and UK Users)', sectionFS, w),
                  _bodyText('''If you are a resident of the EU or UK, you have the following rights under the General Data Protection Regulation (GDPR) and UK GDPR:\n• Right to Access – Request access to the personal data we hold about you.\n• Right to Rectification – Correct inaccurate or incomplete data.\n• Right to Erasure (“Right to be forgotten”) – Request deletion of your personal data.\n• Right to Restrict Processing – Ask us to limit how we process your data.\n• Right to Data Portability – Receive a copy of your data in a commonly used format.\n• Right to Object – Object to processing, particularly for marketing purposes.\n• Right to Withdraw Consent – Where processing is based on consent.\nYou may exercise any of these rights by contacting us at meetandmoredev@gmail.com.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('9. CCPA (For California Residents)', sectionFS, w),
                  _bodyText('''If you reside in California, you have rights under the California Consumer Privacy Act (CCPA), including:\n• The right to know what personal information is collected, used, shared, or sold.\n• The right to delete personal information.\n• The right to opt-out of the sale of personal information (we do not sell data).\nWe will not discriminate against you for exercising your rights under the CCPA.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('10. PDPA & Other Regional Laws', sectionFS, w),
                  _bodyText('''For users in Singapore, we adhere to the Personal Data Protection Act (PDPA). Similar protections apply in countries like Malaysia, Indonesia, and Thailand under their respective national privacy laws. We commit to:\n• Storing your data securely.\n• Collecting only data that is relevant to your experience.\n• Providing transparency and control over your data.''', bodyFS, w),
                  _divider(w),
                  _contactInfoSection(bodyFS, w),
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
    return Padding(\
      padding: EdgeInsets.only(bottom: w * 0.018, top: w * 0.045),
      child: Text(\
        text,\
        style: GoogleFonts.poppins(\
          color: ColorManager.orangeAcc,\
          fontWeight: FontWeightManager.bold,\
          fontSize: fontSize.clamp(15.0, 28.0),\
          letterSpacing: 0.2,
        ),\
        textAlign: TextAlign.left,
      ),
    );\
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
              text: 'You may exercise any of these rights by contacting us at ',
            ),
            TextSpan(
              text: 'meetandmoredev@gmail.com',
              style: GoogleFonts.poppins(
                color: ColorManager.orangeAcc,
                fontWeight: FontWeightManager.bold,
                fontSize: fontSize.clamp(12.0, 20.0),
                decoration: TextDecoration.underline,
              ),
            ),
            const TextSpan(text: '.'),
          ],
        ),
      ),
    );
  }
}
