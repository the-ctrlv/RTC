import PageHero from "@/components/common/PageHero";
import SEO from "@/components/SEO";
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy"
        description="Rope Tech Group's privacy policy. Learn how we collect, use, and protect your personal information when you use our services."
        keywords="privacy policy, data protection, personal information, Rope Tech Group policy"
      />
      <PageHero title="Privacy Policy" />

      <section className="py-12 lg:py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 mb-6">
            Last updated: December 22, 2025
          </p>

          <div className="prose text-[16px] text-gray-700 [&>h3]:text-[24px] [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:mt-2">
            <p>
              Rope Tech Group ("we", "us", or "our") operates the website (the
              "Website"). This Privacy Policy explains how we collect, use,
              store, and protect personal information when you visit or interact
              with our Website.
            </p>

            <p>
              By using our Website, you consent to the collection and use of
              information in accordance with this Privacy Policy.
            </p>

            <h3>Information We Collect</h3>
            <p className="text-[18px] font-semibold mb-2">
              When you use our Website or contact us, we may collect personal
              information that you voluntarily provide, including but not
              limited to:
            </p>
            <ul className="list-disc list-inside marker:text-[#a5b715] space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>
                Any information you submit through contact or inquiry forms
              </li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p className="text-[18px] font-semibold mb-2">
              Personal information collected by Rope Tech Group may be used to:
            </p>
            <ul className="list-disc list-inside marker:text-[#a5b715] space-y-2">
              <li>Respond to inquiries or requests</li>
              <li>Communicate regarding our services</li>
              <li>Provide quotations or project-related information</li>
              <li>Improve our Website and customer experience</li>
              <li>Comply with legal or regulatory requirements</li>
            </ul>

            <h3>Log Data</h3>
            <p>
              When you visit our Website, certain information may be collected
              automatically by your browser or hosting services. This may
              include IP address, browser type and version, pages visited, date
              and time of visits, and time spent on pages. This information is
              used for Website analytics and performance monitoring only.
            </p>

            <h3>Cookies</h3>
            <p>
              Cookies are small data files stored on your device to improve
              Website functionality and user experience. Rope Tech Group may use
              cookies to analyze Website traffic and understand user
              interaction. You can disable cookies via your browser settings,
              but some Website features may not function properly if cookies are
              disabled.
            </p>

            <h3>Third-Party Service Providers</h3>
            <p>
              We may use trusted third-party service providers to support
              Website functionality, analytics, or communication services. These
              providers may have access to personal information only as required
              to perform their services and are contractually obligated to
              protect and not misuse your information.
            </p>

            <h3>Data Security</h3>
            <p>
              We take reasonable administrative, technical, and physical
              measures to protect personal information against unauthorized
              access, loss, misuse, or disclosure. However, no method of
              transmission over the internet or electronic storage can be
              guaranteed to be completely secure.
            </p>

            <h3>Links to External Websites</h3>
            <p>
              Our Website may contain links to external websites not operated by
              Rope Tech Group. We are not responsible for the content, privacy
              practices, or policies of third-party websites. We encourage you
              to review the privacy policies of any external websites you visit.
            </p>

            <h3>Children's Privacy</h3>
            <p>
              Our Website is not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children
              under 18. If we become aware that such information has been
              collected, we will delete it promptly.
            </p>

            <h3>Legal Disclosure</h3>
            <p>
              We may disclose personal information when required to do so by
              applicable law, regulation, court order, or other legal process in
              Canada.
            </p>

            <h3>Changes to This Privacy Policy</h3>
            <p>
              Rope Tech Group may update this Privacy Policy from time to time.
              Any changes will be posted on this page with a revised "Last
              updated" date. Continued use of the Website after changes are
              posted constitutes acceptance of the updated Privacy Policy.
            </p>

            <h3>Contact Information</h3>
            <p>
              If you have any questions about this Privacy Policy or how your
              personal information is handled, please contact us:
            </p>
            <p>
              Rope Tech Group
              <br />
              Email: info@ropetechgroup@gmail.com
              <br />
              Website: yourwebsite.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
