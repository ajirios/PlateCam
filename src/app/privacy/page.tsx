import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Link as seen in Screenshot 2026-06-19 at 1.55.48 AM.jpg */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline flex items-center text-sm font-medium">
            ← Back to Home
          </Link>
        </div>

        {/* Header Block */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            PlateCam Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: June 19, 2026
          </p>
        </header>

        {/* Content Container Card */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-8 space-y-6 text-base leading-relaxed text-justify">
          
          <p>
            PlateCam (the &quot;Company&quot;) is committed to maintaining robust privacy protections for its users. Our Privacy Policy (&quot;Privacy Policy&quot;) is designed to help you understand how we collect, use and safeguard the information you provide to us and to assist you in making informed decisions when using our Service.
          </p>

          <p>
            For purposes of this Agreement, &quot;Site&quot; refers to the Company&apos;s website, which can be accessed at <a href="https://platecam.com/" className="text-blue-600 hover:underline">https://platecam.com/</a>, and &quot;App&quot; refers to the Company&apos;s mobile application available on the Apple App Store. &quot;Site&quot; as used throughout this Privacy Policy shall refer to both the website and the App unless otherwise specified.
          </p>

          <p>
            &quot;Service&quot; refers to the Company&apos;s services accessed via the Site or the App, in which users can capture, log, process, and manage license plate data and camera configurations researched from publicly available sources and precisely adapted to their specific gear, enabling them to maximize recognition accuracy using their existing equipment.
          </p>

          <p>
            The terms &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; refer to the Company.
          </p>

          <p>
            &quot;You&quot; refers to you, as a user of our Site or our Service.
          </p>

          <p>
            By accessing our Site, our App, or our Service, you accept our Privacy Policy and Terms of Use (found here: <a href="https://platecam.com/terms" className="text-blue-600 hover:underline">https://platecam.com/terms</a>), and you consent to our collection, storage, use and disclosure of your Personal Information as described in this Privacy Policy.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">I. Information We Collect</h2>
          <p>
            We collect &quot;Non-Personal Information&quot; and &quot;Personal Information.&quot; Non-Personal Information includes information that cannot be used to personally identify you, such as anonymous usage data, general demographic information we may collect, referring/exit pages and URLs, platform types, preferences you submit and preferences that are generated based on the data you submit and number of clicks. Personal Information includes your email address, which you submit to us through the registration process at the Site. If you sign up using Google OAuth, we also receive your Google profile name and profile picture. If you submit a contact or feature request form, we may also collect your email address and the content of your submission, which you submit to us through the registration process at the Site.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-4">1. Information collected via Technology</h3>
          <p>
            To activate the Service you do not need to submit any Personal Information other than your email address. To use the Service thereafter, you do not need to submit further Personal Information other than your email address. However, you may optionally provide a username and profile picture through your account settings, and you may submit hardware preferences (such as camera and shutter model names), system and location search queries, and equipment configurations in connection with using the Service. However, in an effort to improve the quality of the Service, we track information provided to us by your browser or by our software application when you view or use the Service, such as the website you came from (known as the &quot;referring URL&quot;), the type of browser you use, the device from which you connected to the Service, the time and date of access, and other information that does not personally identify you. On the Site, we track this information using cookies, or small text files which include an anonymous unique identifier. Cookies are sent to a user&apos;s browser from our servers and are stored on the user&apos;s computer hard drive. On the App, we use local device storage and secure Keychain storage for authentication tokens and user preferences instead of cookies. Sending a cookie to a user&apos;s browser (or storing equivalent data on a mobile device) enables us to collect Non-Personal information about that user and keep a record of the user&apos;s preferences when utilizing our services, both on an individual and aggregate basis. For example, the Company may use cookies and local device storage to collect the following information:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>authentication session status and tokens</li>
            <li>pages visited and time spent on each page</li>
            <li>feature usage patterns and interaction events</li>
            <li>user hardware preset and equipment preferences cached locally</li>
            <li>performance metrics such as page load times</li>
          </ul>
          <p>
            The Company may use both persistent and session cookies; persistent cookies remain on your computer after you close your session and until you delete them, while session cookies expire when you close your browser. For example, we store a persistent cookie to track your authentication session so that you remain logged in between visits.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-4">2. Information you provide us by registering for an account</h3>
          <p>
            In addition to the information provided automatically by your browser when you visit the Site, to become a subscriber to the Service you will need to create a personal profile. You can create a profile by registering with the Service and entering your email address, and creating a user name and a password. By registering, you are authorizing us to collect, store and use your email address in accordance with this Privacy Policy.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-4">3. Advertising and Attribution Information (iOS App)</h3>
          <p>
            When you use the iOS App, we use the TikTok Business SDK and the Meta (Facebook) Business SDK to measure the effectiveness of our advertising campaigns and improve our marketing. With your consent (provided through Apple&apos;s App Tracking Transparency permission prompt), we may collect and share the following information with TikTok and Meta for advertising attribution and analytics purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Apple&apos;s Identifier for Advertisers (IDFA), only if you grant tracking permission</li>
            <li>A SHA-256 hashed version of your email address</li>
            <li>A SHA-256 hashed version of your user account identifier</li>
            <li>App event data, including app installs, app launches, sign-ups, paywall views, in-app activity, and subscription purchases (including price and currency)</li>
          </ul>
          <p>
            If you decline the App Tracking Transparency prompt, we do not collect or share your IDFA. App event data may still be sent to TikTok and Meta without an IDFA to support privacy-preserving attribution via Apple&apos;s SKAdNetwork framework and Meta&apos;s Aggregated Event Measurement (AEM). You can change your tracking preference at any time in your device&apos;s Settings under Privacy &amp; Security → Tracking.
          </p>
          <p>
            TikTok&apos;s use of this information is governed by TikTok&apos;s Privacy Policy. Meta&apos;s use of this information is governed by Meta&apos;s Privacy Policy.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-4">4. Children&apos;s Privacy</h3>
          <p>
            The Site and the Service are not directed to anyone under the age of 13. The Site does not knowingly collect or solicit information from anyone under the age of 13, or allow anyone under the age of 13 to sign up for the Service. In the event that we learn that we have gathered personal information from anyone under the age of 13 without the consent of a parent or guardian, we will delete that information as soon as possible. If you believe we have collected such information, please contact us at <a href="mailto:contact@platecam.com" className="text-blue-600 hover:underline">contact@platecam.com</a>.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">II. How We Use and Share Information</h2>
          <p className="font-semibold text-gray-900">Personal Information:</p>
          <p>
            Except as otherwise stated in this Privacy Policy, we do not sell, trade, rent or otherwise share for marketing purposes your Personal Information with third parties without your consent. We do share Personal Information with vendors who are performing services for the Company, such as the servers for our email communications who are provided access to user&apos;s email address for purposes of sending emails from us. Those vendors use your Personal Information only at our direction and in accordance with our Privacy Policy.
          </p>
          <p>
            In general, the Personal Information you provide to us is used to help us communicate with you. For example, we use Personal Information to contact users in response to questions, solicit feedback from users, provide technical support, and inform users about promotional offers.
          </p>
          <p>
            We may share Personal Information with outside parties if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable legal process or enforceable governmental request; to enforce applicable Terms of Service, including investigation of potential violations; address fraud, security or technical concerns; or to protect against harm to the rights, property, or safety of our users or the public as required or permitted by law.
          </p>
          <p className="font-semibold text-gray-900 mt-4">Non-Personal Information</p>
          <p>
            In general, we use Non-Personal Information to help us improve the Service and customize the user experience. We also aggregate Non-Personal Information in order to track trends and analyze use patterns on the Site. This Privacy Policy does not limit in any way our use or disclosure of Non-Personal Information and we reserve the right to use and disclose such Non-Personal Information to our partners, advertisers and other third parties at our discretion.
          </p>
          <p>
            In the event we undergo a business transaction such as a merger, acquisition by another company, or sale of all or a portion of our assets, your Personal Information may be among the assets transferred. You acknowledge and consent that such transfers may occur and are permitted by this Privacy Policy, and that any acquirer of our assets may continue to process your Personal Information as set forth in this Privacy Policy. If our information practices change at any time in the future, we will post the policy changes to the Site so that you may opt out of the new information practices. We suggest that you check the Site periodically if you are concerned about how your information is used.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">III. Third-Party Service Providers</h2>
          <p>
            We use the following third-party service providers to operate and improve our Service. These providers may have access to your Personal Information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Supabase</strong> — Database hosting, user authentication, and data storage.</li>
            <li><strong>OpenAI</strong> — Image configuration research and precise gear adaptation processing. System queries and equipment information you provide are sent to OpenAI to generate optimal recognition recommendations.</li>
            <li><strong>Mailgun</strong> — Transactional and marketing email delivery.</li>
            <li><strong>Netlify</strong> — Website hosting, deployment, and analytics.</li>
            <li><strong>Render.com</strong> — Server hosting, deployment, and analytics.</li>
            <li><strong>Apple</strong> — App distribution via the App Store. If you download or use the App, Apple may collect certain information in accordance with Apple&apos;s Privacy Policy.</li>
            <li><strong>RevenueCat</strong> — In-app subscription management, entitlement validation, and receipt processing for the iOS App.</li>
            <li><strong>Superwall</strong> — Paywall presentation and in-app subscription experience management for the iOS App.</li>
            <li><strong>TikTok Business SDK</strong> — Mobile app analytics, advertising attribution, and conversion measurement for the iOS App. We share hashed user identifiers, hashed email addresses, the Identifier for Advertisers (with your consent via App Tracking Transparency), and app event data (including subscription purchases) with TikTok to measure the performance of advertising campaigns and to inform ad targeting and lookalike audiences. See Section I.3 above for additional details.</li>
          </ul>
          <p>
            We encourage you to review each provider&apos;s respective privacy policy to understand how they handle your information.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">IV. How We Protect Information</h2>
          <p>
            We implement security measures designed to protect your information from unauthorized access. Your account is protected by your account password and we urge you to take steps to keep your personal information safe by not disclosing your password and by logging out of your account after each use. We further protect your information from potential security breaches by implementing certain technological security measures including encryption, firewalls and secure socket layer technology. However, these measures do not guarantee that your information will not be accessed, disclosed, altered or destroyed by breach of such firewalls and secure server software. By using our Service, you acknowledge that you understand and agree to assume these risks.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">V. Data Retention</h2>
          <p>
            We retain your Personal Information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Account data (email, profile information):</strong> Retained for as long as your account is active. Upon account deletion, your personal data will be deleted or anonymized within 30 days, except where we are required to retain it for legal or compliance purposes.</li>
            <li><strong>Usage data (recognition configurations, history, saved configurations):</strong> Retained for as long as your account is active and deleted upon account deletion.</li>
            <li><strong>Payment data:</strong> Payment transaction records are retained as required by applicable tax and financial regulations, typically for 7 years. Your payment method details are stored and managed exclusively by Apple Pay and/or Google Pay.</li>
            <li><strong>Analytics data:</strong> Aggregated, non-personal analytics data may be retained indefinitely for service improvement purposes.</li>
            <li><strong>Email communications:</strong> Records of email communications are retained for up to 2 years.</li>
          </ul>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">VI. Data Breach Notification</h2>
          <p>
            In the event of a data breach that compromises your Personal Information, we will notify affected users via email within 72 hours of becoming aware of the breach, or as otherwise required by applicable law. The notification will include: (a) a description of the nature of the breach; (b) the types of information that were or may have been compromised; (c) steps we are taking to address the breach; and (d) steps you can take to protect yourself. We will also notify any applicable regulatory authorities as required by law.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">VII. Your Rights Regarding the Use of Your Personal Information</h2>
          <p>
            You have the right at any time to prevent us from contacting you for marketing purposes. When we send a promotional communication to a user, the user can opt out of further promotional communications by following the unsubscribe instructions provided in each promotional e-mail. You can also indicate that you do not wish to receive marketing communications from us in the &quot;Account Settings&quot; section of the Site. Please note that notwithstanding the promotional preferences you indicate by either unsubscribing or opting out in the of the Site, we may continue to send you administrative emails including, for example, periodic updates to our Privacy Policy.
          </p>
          <p>
            You have the right to request deletion of your Personal Information that we have collected. To request deletion of your data, you may: (a) delete your account through the Account Settings section of the Site, which will remove your personal data within 30 days; or (b) contact us at <a href="mailto:contact@platecam.com" className="text-blue-600 hover:underline">contact@platecam.com</a> with a deletion request. Please note that we may need to retain certain information as required by law or for legitimate business purposes, such as fraud prevention, compliance with financial regulations, or to complete transactions you have requested.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">VIII. Your California Privacy Rights (CCPA/CPRA)</h2>
          <p>
            If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Right to Know:</strong> You have the right to request that we disclose what Personal Information we have collected, used, disclosed, and sold about you in the last 12 months.</li>
            <li><strong>Right to Delete:</strong> You have the right to request that we delete Personal Information we have collected from you, subject to certain exceptions.</li>
            <li><strong>Right to Correct:</strong> You have the right to request that we correct inaccurate Personal Information that we maintain about you.</li>
            <li><strong>Right to Opt-Out of Sale or Sharing:</strong> We do not sell your Personal Information. However, we may share certain Personal Information for cross-context behavioral advertising purposes — namely, to measure the performance of our advertising campaigns and to enable lookalike audience targeting. On the iOS App, we share a hashed email address, a hashed user identifier, Apple&apos;s Identifier for Advertisers (IDFA) when permitted, and app event data (such as subscription purchases) with TikTok and Meta (Facebook). On the website, the Meta Pixel (described in Section XII) shares page views, sign-up events, your IP address, browser information, and Meta cookies (which Meta may use to identify you if you have a Facebook or Instagram account) with Meta. You can opt out of iOS sharing by declining the App Tracking Transparency prompt within the iOS App, or by toggling off “Allow Apps to Request to Track” in your device&apos;s Settings under Privacy &amp; Security → Tracking. To opt out of website-based advertising sharing or to request that we cease all sharing of your Personal Information for advertising purposes, please contact us at <a href="mailto:contact@platecam.com" className="text-blue-600 hover:underline">contact@platecam.com</a>.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA/CPRA rights.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at <a href="mailto:contact@platecam.com" className="text-blue-600 hover:underline">contact@platecam.com</a>. We will respond to verifiable consumer requests within 45 days. You may also designate an authorized agent to make a request on your behalf.
          </p>
          <p>
            In the preceding 12 months, we have collected the following categories of Personal Information: identifiers (email address, username), internet or other electronic network activity information (usage data, interactions with the Service), and commercial information (subscription and payment history).
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">IX. Your Rights Under GDPR (European Users)</h2>
          <p>
            If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, you have certain rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Legal Basis for Processing:</strong> We process your Personal Information based on: (a) your consent (e.g., when you create an account); (b) performance of a contract (e.g., providing the Service you have subscribed to); (c) compliance with legal obligations; and (d) our legitimate interests (e.g., improving our Service, preventing fraud), provided those interests are not overridden by your data protection rights.</li>
            <li><strong>Right of Access:</strong> You have the right to request a copy of the Personal Information we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You have the right to request that we correct any inaccurate or incomplete Personal Information.</li>
            <li><strong>Right to Erasure:</strong> You have the right to request that we delete your Personal Information, subject to certain legal exceptions.</li>
            <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your Personal Information under certain circumstances.</li>
            <li><strong>Right to Data Portability:</strong> You have the right to receive your Personal Information in a structured, commonly used, and machine-readable format and to transmit that data to another controller.</li>
            <li><strong>Right to Object:</strong> You have the right to object to the processing of your Personal Information for direct marketing purposes or where we rely on legitimate interests.</li>
            <li><strong>Right to Withdraw Consent:</strong> Where we rely on your consent to process your Personal Information, you have the right to withdraw that consent at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at <a href="mailto:contact@platecam.com" className="text-blue-600 hover:underline">contact@platecam.com</a>. We will respond to your request within 30 days. If you believe that we have not adequately addressed your concerns, you have the right to lodge a complaint with your local data protection supervisory authority.
          </p>
          <p>
            Your Personal Information may be transferred to and processed in the United States, where our servers and service providers are located. By using the Service, you consent to the transfer of your information to the United States, which may not offer the same level of data protection as your home country. We take appropriate safeguards to ensure that your Personal Information remains protected in accordance with this Privacy Policy.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">X. Links to Other Websites</h2>
          <p>
            As part of the Service, we may provide links to or compatibility with other websites or applications. However, we are not responsible for the privacy practices employed by those websites or the information or content they contain. This Privacy Policy applies solely to information collected by us through the Site and the Service. Therefore, this Privacy Policy does not apply to your use of a third party website accessed by selecting a link on our Site or via our Service. To the extent that you access or use the Service through or on another website or application, then the privacy policy of that other website or application will apply to your access or use of that site or application. We encourage our users to read the privacy statements of other websites before proceeding to use them.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">XI. Changes to Our Privacy Policy</h2>
          <p>
            The Company reserves the right to change this policy and our Terms of Use at any time. We will notify you of significant changes to our Privacy Policy by sending a notice to the primary email address specified in your account or by placing a prominent notice on our Site. Significant changes will go into effect upon posting and reasonable notice, unless a longer notice period is required by applicable law. Non-material changes or clarifications will take effect immediately. You should periodically check the Site and this privacy page for updates.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">XII. Cookies and Browser Storage</h2>
          <p>
            We use a small number of first-party cookies and browser storage technologies to operate the Service and improve your experience. We also use the Meta Pixel for advertising measurement, described below. We do not use Google Ads conversion tracking, TikTok Pixel (on the website), LinkedIn Insight Tag, or other third-party retargeting trackers on the Site.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-4">Strictly Necessary Cookies</h3>
          <p>These cookies are required for the Service to function and are exempt from consent requirements:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Authentication cookies</strong> — set by Supabase to keep you signed in across visits.</li>
            <li><strong>Cookie consent cookie (platecam_cookie_consent)</strong> — records your consent choice itself.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-4">Functional Cookies (Consent Required)</h3>
          <p>These cookies are only set after you accept cookies via the consent banner:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Plans page A/B variant (plans_default_variant)</strong> — randomly assigns each user a default billing toggle (monthly or annual) on the pricing page so we can measure which default leads to better outcomes. Stores a single value (&quot;monthly&quot; or &quot;annual&quot;); no personal data.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-4">Browser Storage (localStorage)</h3>
          <p>We use browser localStorage to remember interface preferences and dismissals. These do not transmit data to our servers and are functional in nature:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>platecam_cookie_consent</strong> — mirrors your cookie consent choice for client-side checks.</li>
            <li><strong>platecam_privacy_banner_*</strong> — remembers if you&apos;ve dismissed our privacy update banner.</li>
            <li><strong>platecam_ios_app_promo_v1_seen</strong> — remembers if you&apos;ve dismissed the iOS app promotion popup.</li>
            <li><strong>Subscription cache</strong> — caches your subscription status (loaded from your account) for ~5 minutes to reduce API calls.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-4">Managing Your Choices</h3>
          <p>
            You can change your cookie preferences at any time by clearing your browser&apos;s cookies for this site — the consent banner will reappear on your next visit. You can also manage cookies and clear browser storage through your browser settings. Disabling strictly necessary cookies may prevent the Service from functioning correctly.
          </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">XIII. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy or the practices of this Site, please contact us at:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded p-4 font-mono text-sm space-y-1">
            <p className="font-semibold text-gray-900 font-sans text-base mb-1">PlateCam Inc.</p>
            <p>Attention: Ajiri O.</p>
            <p>Address: 122 Livingston Dr, Tillsonburg, ON, Canada</p>
            <p>Phone: 4312785156</p>
            <p>Email: <a href="mailto:contact@platecam.com" className="text-blue-600 hover:underline">contact@platecam.com</a></p>
          </div>

        </div>
      </div>
    </div>
  );
}