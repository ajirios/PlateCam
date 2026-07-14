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
            Last Updated: July 11, 2026
          </p>
        </header>

        {/* Content Container Card */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-8 space-y-6 text-base leading-relaxed text-justify">
          
          <p>
            PlateCam Inc. (the &quot;Company&quot;) is committed to maintaining robust privacy protections for its users. Our Privacy Policy (&quot;Privacy Policy&quot;) is designed to help you understand how we collect, use and safeguard the information you provide to us and to assist you in making informed decisions when using our Service.
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


        <p>
          PlateCam collects information in several different ways depending on
          how you interact with the application. Some information is provided
          directly by you, some is generated while you use the app, and some is
          received from trusted service providers that help us operate our
          platform.
        </p>

        <p>
          We only collect information that is necessary to provide, maintain,
          personalize, secure, and improve PlateCam's features.
        </p>

        <h2 className='font-semibold'>Account Information</h2>

        <p>
          You may create a PlateCam account using Sign in with Apple or Sign in
          with Google. Authentication is securely managed through Supabase
          Authentication.
        </p>

        <p>
          Depending on the authentication provider you choose, we may collect:
        </p>

        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Unique account identifier</li>
          <li>User handle or display name</li>
          <li>Authentication provider information</li>
        </ul>

        <p>
          This information allows us to:
        </p>

        <ul>
          <li>Create your PlateCam account</li>
          <li>Authenticate future sign-ins</li>
          <li>Synchronize your data across multiple devices</li>
          <li>Maintain your personalized nutrition history</li>
          <li>Provide customer support</li>
          <li>Protect your account against unauthorized access</li>
        </ul>

        <p>
          PlateCam does not collect or store your passwords for Apple or Google
          accounts. Authentication credentials remain under the control of the
          authentication provider you choose.
        </p>

        <hr />

        <h2 className='font-semibold'>Profile Information</h2>

        <p>
          Your PlateCam profile may include information that you voluntarily
          provide in order to personalize your nutrition experience.
        </p>

        <p>
          This may include:
        </p>

        <ul>
          <li>Date of birth</li>
          <li>Sex or gender</li>
          <li>Height</li>
          <li>Weight</li>
          <li>Activity level</li>
          <li>Country of residence</li>
          <li>Country of origin</li>
          <li>Dietary preferences</li>
          <li>Dietary restrictions</li>
          <li>Food allergies</li>
          <li>Nutrition goals</li>
          <li>Weight goals</li>
          <li>Muscle gain goals</li>
          <li>Meal preferences</li>
        </ul>

        <p>
          We use this information to calculate individualized nutritional
          targets, personalize food recommendations, estimate nutrient needs,
          and provide more relevant dietary insights.
        </p>

        <hr />

        <h2 className='font-semibold'>Health & Sensitive Information</h2>

        <p>
          PlateCam allows users to voluntarily provide certain health-related
          information in order to generate highly personalized nutritional
          guidance. Providing this information is optional unless a particular
          feature requires it to function.
        </p>

        <p>
          Depending on how you use PlateCam, you may choose to provide
          information relating to:
        </p>

        <ul>
          <li>General wellness goals</li>
          <li>Weight management objectives</li>
          <li>Muscle growth goals</li>
          <li>Heart health objectives</li>
          <li>Blood sugar management goals</li>
          <li>Cholesterol management goals</li>
          <li>Sleep quality goals</li>
          <li>Digestive health</li>
          <li>Joint health</li>
          <li>Kidney health</li>
          <li>Liver health</li>
          <li>Brain health and cognitive wellness</li>
          <li>Eye health</li>
          <li>Skin health</li>
          <li>Immune health</li>
          <li>Physical symptoms you voluntarily report</li>
          <li>Lifestyle habits</li>
          <li>Dietary habits</li>
        </ul>

        <p>
          During onboarding, PlateCam may also ask you optional questions about
          self-reported health conditions, symptoms, wellness concerns,
          environmental factors, and dietary habits. Your responses help
          generate personalized nutrient targets, dietary recommendations, and
          wellness insights that are tailored to your stated goals.
        </p>

        <p>
          Some onboarding questions request your ethnicity. We use this
          information solely to improve the personalization of nutritional
          recommendations, including estimating nutrient requirements that may
          vary across populations, such as vitamin D recommendations. We do not
          use ethnicity for advertising profiling or sell this information to
          third parties.
        </p>

        <p>
          PlateCam does not use the information you provide to diagnose,
          prevent, treat, or cure any disease. Any nutritional guidance,
          wellness scores, organ impact estimates, or other insights generated
          by PlateCam are intended solely for informational and educational
          purposes and should not be considered medical advice or a substitute
          for consultation with qualified healthcare professionals.
        </p>

        <p>
          We encourage users to consult a physician or other qualified
          healthcare provider before making significant dietary or health
          decisions, particularly if they have an existing medical condition,
          are pregnant, or are taking medications that may affect nutritional
          requirements.
        </p>
        <hr />

<h2 className='font-semibold'>Food Photos and Videos</h2>

<p>
  PlateCam is designed to analyze foods that you choose to photograph
  or record. You may use the camera within the app to capture food
  images or record short food videos, or upload existing food photos
  from your device's photo library.
</p>

<p>
  Any photos or videos you submit are used to perform nutritional
  analysis, estimate nutrient composition, generate wellness insights,
  and maintain your personal food history within the app.
</p>

<p>
  You remain in control of the media you submit. PlateCam only analyzes
  photos and videos that you intentionally choose to capture or upload.
  We do not continuously access your camera or photo library.
</p>

<p>
  Depending on your device permissions, PlateCam may request access to:
</p>

<ul>
  <li>Your camera to capture food photos and videos.</li>
  <li>Your photo library to upload existing food images.</li>
  <li>Your microphone when recording food videos.</li>
</ul>

<p>
  These permissions may be revoked at any time through your device's
  system settings.
</p>

<hr />

<h2 className='font-semibold'>Artificial Intelligence Processing</h2>

<p>
  Artificial intelligence is a core component of PlateCam.
</p>

<p>
  When you choose to analyze a food photo or video, PlateCam securely
  processes your submission in order to estimate nutritional
  information and generate personalized wellness insights.
</p>

<p>
  The general processing workflow is as follows:
</p>

<ol>
  <li>You intentionally capture or upload a food image.</li>
  <li>The image is securely transmitted to PlateCam's servers.</li>
  <li>
    PlateCam submits the image to trusted artificial intelligence
    services for food recognition and nutritional analysis.
  </li>
  <li>
    AI-generated nutritional estimates are returned to PlateCam.
  </li>
  <li>
    PlateCam combines those estimates with your personalized nutrient
    targets, dietary goals, and profile information to generate your
    dashboard, reports, and wellness insights.
  </li>
</ol>

<p>
  AI-generated results are estimates based on image recognition,
  nutritional databases, and predictive models. They are not guaranteed
  to be perfectly accurate and should not be interpreted as medical
  diagnoses or laboratory measurements.
</p>

<hr />

<h2 className='font-semibold'>Food Recognition and Nutritional Analysis</h2>

<p>
  PlateCam uses artificial intelligence to identify foods appearing in
  submitted images and estimate their nutritional composition.
</p>

<p>
  Depending on the food being analyzed, PlateCam may estimate:
</p>

<ul>
  <li>Calories</li>
  <li>Macronutrients</li>
  <li>Vitamins</li>
  <li>Minerals</li>
  <li>Essential fatty acids</li>
  <li>Amino acids</li>
  <li>Dietary fiber</li>
  <li>Bioactive compounds</li>
  <li>Food allergens</li>
  <li>Additional naturally occurring food constituents</li>
</ul>

<p>
  PlateCam has a nutrition suite, which can only be accessed via subscription. This nutrition suite contains all estimatable food constituents. PlateCam currently estimates approximately 220 nutrients, allergens,
  bioactive compounds, and related nutritional components from foods
  recognized in submitted images.
</p>

<p>
  These estimates are used to calculate your daily nutrient intake,
  compare consumption against your personalized nutrient targets, and
  generate nutrition reports throughout the application.
</p>

<hr />

<h2 className='font-semibold'>Organ Impact Estimation</h2>

<p>
  In addition to estimating nutrient composition, PlateCam generates
  educational wellness insights describing how the nutritional
  composition of foods may influence different body systems over time.
</p>

<p>
  Depending on the available nutritional information, PlateCam may
  generate estimated wellness insights relating to areas such as:
</p>

<ul>
  <li>Heart</li>
  <li>Blood vessels</li>
  <li>Blood</li>
  <li>Brain</li>
  <li>Eyes</li>
  <li>Skin</li>
  <li>Muscles</li>
  <li>Bones</li>
  <li>Joints</li>
  <li>Nerves</li>
  <li>Lungs</li>
  <li>Liver</li>
  <li>Kidneys</li>
  <li>Stomach</li>
  <li>Intestines</li>
  <li>Abdominal and waist wellness</li>
</ul>

<p>
  These wellness indicators are generated using PlateCam's nutritional
  analysis models together with the nutritional composition estimated
  from your submitted food images.
</p>

<p>
  Organ impact estimates are educational tools intended to help users
  better understand how dietary choices may contribute to overall
  wellness. They are not intended to diagnose disease, evaluate organ
  function, or replace professional medical advice.
</p>

<hr />

<h2 className='font-semibold'>Personalized Nutrient Targets</h2>

<p>
  PlateCam uses your onboarding information together with your ongoing
  food analyses to calculate individualized daily nutrient targets.
</p>

<p>
  Your personalized targets may consider information such as:
</p>

<ul>
  <li>Age</li>
  <li>Sex or gender</li>
  <li>Height</li>
  <li>Weight</li>
  <li>Activity level</li>
  <li>Body composition goals</li>
  <li>Dietary restrictions</li>
  <li>Food allergies</li>
  <li>Wellness objectives</li>
  <li>Self-reported health information</li>
</ul>

<p>
  PlateCam currently calculates targets across more than 220 nutrients,
  food compounds, and nutritional measurements. These targets are used
  to personalize dashboards, reports, progress indicators, and food
  recommendations throughout the application.
</p>

<hr />

<h2 className='font-semibold'>Meal History and Nutrition Dashboard</h2>

<p>
  PlateCam stores your analyzed meals within your account so that you
  can review your nutritional history over time.
</p>

<p>
  Your dashboard may include:
</p>

<ul>
  <li>Daily meal history.</li>
  <li>Previously analyzed food photos.</li>
  <li>Previously recorded food videos.</li>
  <li>Nutrient intake summaries.</li>
  <li>Daily nutrient progress.</li>
  <li>Historical trends.</li>
  <li>Personalized wellness indicators.</li>
  <li>Progress toward nutritional goals.</li>
</ul>

<p>
  You may browse your meal history by selecting previous calendar dates
  within the application. PlateCam uses this information to provide
  historical reporting and help you monitor long-term dietary trends.
</p>

<hr />

<h2 className='font-semibold'>Reports and Progress Tracking</h2>

<p>
  PlateCam generates reports that summarize nutritional intake over
  time. Depending on your usage, reports may include nutrient trends,
  estimated wellness indicators, historical progress, and educational
  information describing the nutritional significance of your dietary
  habits.
</p>

<p>
  These reports are personalized using information from your onboarding
  responses, your analyzed meals, your nutritional targets, and your
  historical activity within PlateCam.
</p>

<p>
  Reports are generated solely for your personal use and are accessible
  only through your authenticated PlateCam account unless you choose to
  share information outside the app.
</p>

          <p className="lead text-lg text-slate-600 mb-6">
          This Privacy Policy describes how PlateCam ("we", "our", or "us") collects, 
          uses, and protects your information. Our disclosures strictly align with the privacy 
          standards mandated by Apple's App Store.
        </p>

        {/* Health Data Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Health & Fitness Data
          </h2>
          <p className="mb-4">
            PlateCam collects nutritional and health metrics purely to serve your goals. 
            Per our submissions to App Store Connect, here is exactly how that data behaves:
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-slate-900 mb-2">Declared Uses:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li><strong>App Functionality:</strong> Processing food images and logging nutrition analytics seamlessly.</li>
              <li><strong>Analytics:</strong> Aggregating usage statistics to iterate on feature performance.</li>
              <li><strong>Product Personalization:</strong> Adapting contextually to provide a tailored user interface experience.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-2">
            Identity Separation & Tracking Restrictions
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Data Not Linked to You:</strong> Any health, macro, or nutritional data 
              collected by this app is intentionally detached from direct identifiers before storage.
            </li>
            <li>
              <strong>No Tracking:</strong> We do not match or package your information with third-party 
              SDKs or ad data brokers to monetize your profile or retarget you on other services.
            </li>
          </ul>
        </section>

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
            When you use the iOS App, we use the TikTok Business SDK to measure the effectiveness of our advertising campaigns and improve our marketing. With your consent (provided through Apple&apos;s App Tracking Transparency permission prompt), we may collect and share the following information with TikTok for advertising attribution and analytics purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Apple&apos;s Identifier for Advertisers (IDFA), only if you grant tracking permission</li>
            <li>A SHA-256 hashed version of your email address</li>
            <li>A SHA-256 hashed version of your user account identifier</li>
            <li>App event data, including app installs, app launches, sign-ups, paywall views, in-app activity, and subscription purchases (including price and currency)</li>
          </ul>
          <p>
            If you decline the App Tracking Transparency prompt, we do not collect or share your IDFA. App event data may still be sent to TikTok without an IDFA to support privacy-preserving attribution via Apple&apos;s SKAdNetwork framework. You can change your tracking preference at any time in your device&apos;s Settings.
          </p>
          <p>
            TikTok&apos;s use of this information is governed by TikTok&apos;s Privacy Policy.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-4">4. Children&apos;s Privacy</h3>
          <p>
            The Site and the Service are not directed to anyone under the age of 13. The Site does not knowingly collect or solicit information from anyone under the age of 13, or allow anyone under the age of 13 to sign up for the Service. In the event that we learn that we have gathered personal information from anyone under the age of 13 without the consent of a parent or guardian, we will delete that information as soon as possible. If you believe we have collected such information, please contact us at <a href="mailto:contact@platecam.com" className="text-blue-600 hover:underline">contact@platecam.com</a>.
          </p>

        <p>
          PlateCam is not directed toward children under the age at which they
          can lawfully consent to the processing of their personal information
          in their jurisdiction. We do not knowingly collect personal
          information from children without any legally required consent.
        </p>

        <p>
          If you believe a child has provided personal information through
          PlateCam inappropriately, please contact us so we can investigate and
          take appropriate action.
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
          <hr />

<h2 className='font-semibold'>Sharing Content</h2>

<p>
  PlateCam allows you to voluntarily share food photos and videos using
  your device's built-in sharing features.
</p>

<p>
  When you choose to share content, the selected photo or video is
  transferred directly through your device's operating system to the
  destination you choose, such as a messaging application or social
  media platform.
</p>

<p>
  PlateCam does not control how third-party applications collect, use,
  or store information after you choose to share content with them.
  Their handling of your information is governed by their respective
  privacy policies.
</p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">III. Third-Party Service Providers</h2>
          


<p>
  PlateCam works with carefully selected third-party service providers
  that help us securely operate, maintain, and improve our services.
  These providers process information only as necessary to perform the
  services they provide to PlateCam and are contractually or legally
  obligated to safeguard applicable data.
</p>

<p>
  The third-party services we use may change over time as our platform
  evolves. We will update this Privacy Policy when material changes are
  made to the categories of providers that process your information.
</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Supabase</strong> — Database hosting, user authentication, and data storage.</li>
            <li><strong>OpenAI</strong> — Image configuration research and precise gear adaptation processing. System queries and equipment information you provide are sent to OpenAI to generate optimal recognition recommendations.</li>
            
            <li><strong>Netlify</strong> — Website hosting, deployment, and analytics.</li>
            <li><strong>Render.com</strong> — Server hosting, deployment, and analytics.</li>
            <li><strong>Apple</strong> — App distribution via the App Store. If you download or use the App, Apple may collect certain information in accordance with Apple&apos;s Privacy Policy.</li>
            <li><strong>RevenueCat</strong> — In-app subscription management, entitlement validation, and receipt processing for the iOS App.</li>
            <li><strong>Replit</strong> — Some server hosting and deployment services.</li>
            <li><strong>TikTok Business SDK</strong> — Mobile app analytics, advertising attribution, and conversion measurement for the iOS App. We share hashed user identifiers, hashed email addresses, the Identifier for Advertisers (with your consent via App Tracking Transparency), and app event data (including subscription purchases) with TikTok to measure the performance of advertising campaigns and to inform ad targeting and lookalike audiences. See Section I.3 above for additional details.</li>
          </ul>
          <p>
            We encourage you to review each provider&apos;s respective privacy policy to understand how they handle your information.
          </p>

<hr />

<h2 className='font-semibold'>Supabase Authentication and Database Services</h2>

<p>
  PlateCam uses Supabase to provide secure user authentication and
  cloud-hosted database services.
</p>

<p>
  Supabase helps us:
</p>

<ul>
  <li>Authenticate users through Sign in with Apple.</li>
  <li>Authenticate users through Sign in with Google.</li>
  <li>Maintain user accounts.</li>
  <li>Synchronize information across multiple devices.</li>
  <li>Securely store user-generated application data.</li>
</ul>

<p>
  Depending on how you use PlateCam, information stored through
  Supabase may include your account identifier, display name, email
  address, profile information, onboarding responses, nutritional
  targets, meal history, food analyses, wellness reports, and other
  information required to provide the features of the application.
</p>

<p>
  PlateCam uses authenticated access controls to help ensure users can
  access only information associated with their own accounts.
</p>

<hr />

<h2 className='font-semibold'>OpenAI Services</h2>

<p>
  PlateCam uses OpenAI services to perform AI-powered food recognition,
  nutritional estimation, and wellness insight generation.
</p>

<p>
  When you request a food analysis, your submitted image is securely
  transmitted through PlateCam's servers to OpenAI for processing. The
  request is made from PlateCam's secure backend infrastructure using
  server-side credentials. OpenAI API credentials are not embedded
  within the PlateCam mobile application.
</p>

<p>
  AI-generated responses are returned to PlateCam, where they are
  combined with your personalized nutritional targets and profile
  information to generate dashboards, reports, nutrient estimates, and
  educational wellness insights.
</p>

<p>
  PlateCam does not authorize OpenAI to access your account beyond what
  is necessary to process your submitted analysis request.
</p>

<hr />

<h2 className='font-semibold'>Application Hosting Infrastructure</h2>

<p>
  PlateCam's backend services are hosted using Render.
</p>

<p>
  Render provides the secure infrastructure that processes requests
  between the PlateCam mobile application, artificial intelligence
  services, and supporting application components.
</p>

<p>
  Our backend infrastructure is responsible for securely handling
  requests, coordinating AI analysis, protecting application secrets,
  and returning processed results to your device.
</p>

<hr />

<h2 className='font-semibold'>Subscription Management</h2>

<p>
  PlateCam offers optional premium subscription services that are
  purchased through the Apple App Store or Google Play.
</p>

<p>
  Subscription status and customer entitlements are managed using
  RevenueCat.
</p>

<p>
  RevenueCat helps PlateCam determine whether your account has an
  active subscription so premium features can be unlocked across your
  devices.
</p>

<p>
  PlateCam does not receive or store your payment card number, banking
  information, or other financial payment credentials. Payments are
  securely processed by Apple or Google using the payment methods
  associated with your platform account.
</p>

<p>
  Subscription billing, refunds, payment disputes, and payment method
  management are handled by the applicable app marketplace.
</p>

<hr />

<h2 className='font-semibold'>Apple and Google Services</h2>

<p>
  Depending on your device and the features you use, PlateCam may
  integrate with services provided by Apple or Google, including:
</p>

<ul>
  <li>Sign in with Apple.</li>
  <li>Sign in with Google.</li>
  <li>Apple App Store purchases.</li>
  <li>Google Play purchases.</li>
  <li>Push notification delivery.</li>
</ul>

<p>
  Your use of Apple or Google services is governed by their respective
  privacy policies and terms of service.
</p>

<hr />

<h2 className='font-semibold'>Notifications</h2>

<p>
  If you grant permission, PlateCam may send notifications to your
  device to help you stay informed about your nutritional goals and
  activity within the application.
</p>

<p>
  Notifications may include reminders regarding:
</p>

<ul>
  <li>Nutrient targets that have not yet been met.</li>
  <li>Nutrients that may have exceeded personalized limits.</li>
  <li>General activity reminders.</li>
  <li>Important account or service announcements.</li>
</ul>

<p>
  You may disable notifications at any time through your device's
  operating system settings.
</p>

<hr />

<h2 className='font-semibold'>Diagnostics and Performance Information</h2>

<p>
  To improve the stability, security, and performance of PlateCam, we
  may collect diagnostic information relating to application crashes,
  software errors, loading times, feature performance, and other
  technical metrics.
</p>

<p>
  Diagnostic information helps us investigate problems, improve
  reliability, optimize performance, and enhance the overall user
  experience.
</p>

<p>
  Consistent with our App Store privacy disclosures, diagnostic data is
  not used for cross-app tracking or third-party advertising.
</p>

<hr />

<h2 className='font-semibold'>Usage Analytics</h2>

<p>
  PlateCam collects information about how users interact with the
  application to understand feature usage, improve usability, develop
  new functionality, and enhance the overall user experience.
</p>

<p>
  Usage information may include interactions with features, navigation
  patterns, application performance metrics, and aggregated statistics
  describing how PlateCam is used.
</p>

<p>
  Where practical, we use aggregated or de-identified information for
  analytical purposes.
</p>

<hr />

<h2 className='font-semibold'>Marketing and Communications</h2>

<p>
  PlateCam may use your email address to send important service-related
  communications, including account notifications, security alerts,
  updates to this Privacy Policy, and information about your
  subscription.
</p>

<p>
  If you choose to receive marketing communications, we may also send
  information about new features, educational nutrition content,
  promotions, and product updates. You may unsubscribe from marketing
  emails at any time by following the instructions included in those
  communications.
</p>

<p>
  PlateCam may advertise its services through third-party platforms,
  such as social media and video-sharing services. These advertising
  activities are intended to promote PlateCam and measure the
  effectiveness of our marketing campaigns.
</p>

<p>
  PlateCam does not sell your health information to advertisers, nor do
  we permit advertising partners to use health-related information you
  provide within PlateCam to build advertising profiles about you.
</p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">IV. How We Protect Information</h2>
          <p>
            We implement security measures designed to protect your information from unauthorized access. Your account is protected by your account password and we urge you to take steps to keep your personal information safe by not disclosing your password and by logging out of your account after each use. We further protect your information from potential security breaches by implementing certain technological security measures including encryption, firewalls and secure socket layer technology. However, these measures do not guarantee that your information will not be accessed, disclosed, altered or destroyed by breach of such firewalls and secure server software. By using our Service, you acknowledge that you understand and agree to assume these risks.
          </p>


<p>
  We use the information we collect to:
</p>

<ul>
  <li>Provide and maintain PlateCam's services.</li>
  <li>Authenticate and secure user accounts.</li>
  <li>Generate personalized nutritional targets.</li>
  <li>Analyze food photos and videos.</li>
  <li>Produce AI-generated nutrient estimates and wellness insights.</li>
  <li>Maintain meal history and nutritional reports.</li>
  <li>Deliver notifications you request or enable.</li>
  <li>Process subscriptions and premium feature access.</li>
  <li>Respond to customer support requests.</li>
  <li>Improve application performance and reliability.</li>
  <li>Develop new features and services.</li>
  <li>Comply with applicable laws and legal obligations.</li>
  <li>Protect the security and integrity of PlateCam.</li>
</ul>
<hr />

        <h2 className='font-semibold'>Data Retention</h2>

        <p>
          PlateCam retains your information for as long as your account remains
          active so that you can continue to access your personalized nutrition
          history, historical meal analyses, dashboard insights, yearly
          progress, nutrient trends, and other features that rely upon your
          historical records.
        </p>

        <p>
          Depending on how you use PlateCam, retained information may include:
        </p>

        <ul>
          <li>Your account profile.</li>
          <li>Your onboarding responses.</li>
          <li>Your personalized nutrient targets.</li>
          <li>Your analyzed food photos and videos.</li>
          <li>Your meal history.</li>
          <li>Your nutritional analyses.</li>
          <li>Your wellness reports.</li>
          <li>Your dashboard history.</li>
          <li>Your yearly and historical nutrition trends.</li>
        </ul>

        <p>
          Retaining this information allows PlateCam to provide historical
          reporting, calendar-based meal browsing, longitudinal nutrient
          tracking, and personalized recommendations that improve over time.
        </p>

        

        <h2 className='font-semibold'>Deleting Your Account</h2>

        <p>
          You may permanently delete your PlateCam account at any time from
          within the mobile application.
        </p>

        <p>
          To request deletion, navigate to:
        </p>

        <p>
          <strong>Settings &gt; Account &gt; Close Account</strong>
        </p>

        <p>
          If your PlateCam account is associated with an active subscription,
          PlateCam will first determine your subscription status and display
          your current paid-through date before proceeding with account
          deletion.
        </p>

        <p>
          If you choose to continue, PlateCam will clearly inform you that:
        </p>

        <ul>
          <li>Your account will be permanently deleted.</li>
          <li>Your meal history will be removed.</li>
          <li>Your personalized nutrient targets will be removed.</li>
          <li>Your uploaded food photos and videos will be removed.</li>
          <li>Your nutrition reports and historical progress will be removed.</li>
          <li>Your remaining subscription time will be forfeited.</li>
          <li>No refund will be issued solely because your account is deleted.</li>
        </ul>

        <p>
          Before deletion occurs, PlateCam requires an additional confirmation
          to help prevent accidental account removal.
        </p>

        <p>
          Once deletion has been confirmed, PlateCam initiates a secure account
          deletion process that removes your active account information,
          including your authentication record, profile information,
          application data, meal history, nutritional analyses, personalized
          nutrient targets, and media stored by PlateCam that are associated
          with your account.
        </p>

        <p>
          After your account has been deleted, you will be signed out of the
          application and returned to the onboarding experience. Deleted
          accounts cannot be restored.
        </p>

        <p>
          Limited copies of certain information may remain temporarily within
          encrypted backups or disaster recovery systems until those backups
          expire or are overwritten in accordance with our service providers'
          retention practices. Such backup copies are not used for normal
          application operations.
        </p>

        

        <h2 className='font-semibold'>Managing Your Subscription</h2>

        <p>
          Deleting your PlateCam account is separate from cancelling your
          subscription.
        </p>

        <p>
          If you wish to stop future subscription renewals while keeping your
          PlateCam account and historical data, you may manage your subscription
          through the subscription management tools provided by Apple or Google,
          depending on the platform through which your subscription was
          purchased.
        </p>

        <p>
          PlateCam also provides a shortcut to your subscription management
          settings within the application.
        </p>

        

        <h2 className='font-semibold'>Security</h2>

        <p>
          Protecting your information is one of our highest priorities.
        </p>

        <p>
          PlateCam uses administrative, technical, and organizational measures
          designed to help protect personal information against unauthorized
          access, disclosure, alteration, or destruction.
        </p>

        <p>
          These measures include, where appropriate:
        </p>

        <ul>
          <li>Authenticated user accounts.</li>
          <li>Secure communication using encrypted connections.</li>
          <li>Protected backend infrastructure.</li>
          <li>Server-side management of confidential API credentials.</li>
          <li>Role-based access controls.</li>
          <li>Monitoring and maintenance of production services.</li>
        </ul>

        <p>
          Although we work diligently to safeguard your information, no method
          of electronic storage or transmission over the Internet can be
          guaranteed to be completely secure. We therefore cannot guarantee
          absolute security.
        </p>

        

        <h2 className='font-semibold'>International Data Processing</h2>

        <p>
          PlateCam is operated by PlateCam Inc. in Canada. Depending on where
          you reside and the third-party service providers used to deliver our
          services, your information may be processed or stored in jurisdictions
          outside your province, territory, state, or country of residence.
        </p>

        <p>
          By using PlateCam, you understand that your information may be
          transferred to and processed in countries whose privacy laws may
          differ from those of your home jurisdiction.
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

        <h2 className='font-semibold'>Your Privacy Rights</h2>

<p>
  Subject to applicable law, you may have the right to:
</p>

<ul>
  <li>Access personal information we maintain about you.</li>
  <li>Request correction of inaccurate information.</li>
  <li>Request deletion of your account and associated information.</li>
  <li>Withdraw consent where processing is based upon consent.</li>
  <li>Request additional information regarding our privacy practices.</li>
</ul>

<p>
  The availability of these rights may depend on the laws applicable to
  your jurisdiction.
</p>

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

        <p>
          We may update this Privacy Policy from time to time to reflect changes
          to our services, technologies, legal requirements, or privacy
          practices.
        </p>

        <p>
          When we make material changes, we will revise the "Last Updated" date
          at the top of this page. Where required by applicable law, we may also
          provide additional notice through the PlateCam application or by other
          appropriate means.
        </p>

          <hr className="border-gray-200 my-6" />

          <h2 className="text-xl font-bold text-gray-900 pt-2">XII. Contact Us</h2>

        <p>
          If you have questions about this Privacy Policy, would like to
          exercise your privacy rights, or wish to request additional privacy
          protections, please contact us:
        </p>

        <p>
          <strong>PlateCam Inc.</strong>
          <br />
          Email:{" "}
          <a href="mailto:contact@platecam.com">
            contact@platecam.com
          </a>
        </p>

        <p>
          We will make reasonable efforts to respond to privacy-related
          requests in accordance with applicable law.
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