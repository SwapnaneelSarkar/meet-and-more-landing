import "package:flutter/material.dart"
import "package:google_fonts/google_fonts.dart"
import "../resources/colors.dart"
import "../resources/font.dart"

class CookiesPolicyView extends StatelessWidget {\
  const CookiesPolicyView({Key? key}) : super(key: key);
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
          'Cookies Policy',\
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
                  _sectionTitle('🍪 1. What Are Cookies?', sectionFS, w),
                  _bodyText('''Cookies are small text files placed on your device that help us enhance your experience on our Service. They allow us to remember your preferences and understand how you interact with our Service.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('2. Types of Cookies We Use', sectionFS, w),
                  _bodyText('''Essential Cookies: Necessary for the basic functionality of the Service.\n\nPerformance Cookies: Help us analyze how users interact with our Service.\n\nFunctionality Cookies: Allow us to remember your preferences and settings.\n\nTargeting Cookies: Used to deliver personalized advertisements to you.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('3. Managing Cookies', sectionFS, w),
                  _bodyText('''You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our Service.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('4. Third-Party Cookies', sectionFS, w),
                  _bodyText('''We may allow third-party service providers to place cookies on your device to assist us in analyzing and improving our Service. These third parties are obligated to keep your information confidential.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('5. Cookie Consent', sectionFS, w),
                  _bodyText('''By using our Service, you consent to the use of cookies in accordance with this Cookies Policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us.''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('6. Payment-Related Cookies', sectionFS, w),
                  _bodyText('''6.1 Payment Processing Cookies\nOur payment partner Razorpay may place cookies on your device to:\n• Ensure secure payment processing and prevent fraud\n• Remember your payment preferences and settings\n• Analyze payment transaction patterns for security purposes\n• Maintain session information during payment flows\n• Provide personalized payment options based on your location and device\n\n6.2 Third-Party Payment Cookies\n• Razorpay and their banking partners may use cookies for payment verification\n• These cookies are essential for secure transaction processing\n• Payment-related cookies may persist for security and compliance purposes\n• You cannot disable payment processing cookies without affecting payment functionality''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('7. Security & Fraud Prevention Cookies', sectionFS, w),
                  _bodyText('''7.1 Security Cookies\nWe use security cookies to:\n• Detect and prevent fraudulent activities\n• Monitor for suspicious login attempts\n• Protect against cross-site request forgery (CSRF) attacks\n• Maintain secure session information\n• Track authentication status across our platform\n\n7.2 Fraud Prevention\n• Cookies help identify unusual transaction patterns\n• They assist in risk assessment and fraud detection\n• Security cookies may be required for high-value transactions\n• These cookies are essential for maintaining platform security''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('8. Analytics & Performance Cookies', sectionFS, w),
                  _bodyText('''8.1 Service Analytics\nWe use analytics cookies to:\n• Understand how users interact with our payment features\n• Improve the user experience and platform performance\n• Analyze transaction success rates and payment flows\n• Identify areas for service improvement\n• Monitor platform performance and reliability\n\n8.2 Third-Party Analytics\n• Razorpay may use analytics cookies to improve their payment services\n• These cookies help optimize payment processing performance\n• Analytics data is anonymized and used for service improvement\n• You can opt out of non-essential analytics cookies''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('9. Cookie Management for Payment Services', sectionFS, w),
                  _bodyText('''9.1 Essential Payment Cookies\n• Payment processing cookies cannot be disabled without affecting payment functionality\n• These cookies are necessary for secure transaction processing\n• Disabling payment cookies may prevent you from completing transactions\n• Security cookies are required for fraud prevention and account protection\n\n9.2 Optional Cookies\n• You can disable non-essential cookies through your browser settings\n• Disabling certain cookies may affect personalized features\n• Performance and analytics cookies can be disabled without affecting core functionality\n• We respect your cookie preferences while maintaining security requirements''', bodyFS, w),
                  _divider(w),
                  _sectionTitle('10. Updates to This Policy', sectionFS, w),
                  _bodyText('''We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Last Updated" date.''', bodyFS, w),
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

  Widget _sectionTitle(String text, double fontSize, double w) {\
    return Padding(\
      padding: EdgeInsets.only(bottom: w * 0.018, top: w * 0.045),\
      child: Text(
        text,\
        style: GoogleFonts.poppins(\
          color: ColorManager.orangeAcc,\
          fontWeight: FontWeightManager.bold,\
          fontSize: fontSize.clamp(15.0, 28.0),
          letterSpacing: 0.2,\
        ),\
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
              text: 'If you have any questions about our Cookies Policy, please contact us at ',
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
