import PageHero from "@/components/common/PageHero";
import SEO from "@/components/SEO";
const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms and Conditions"
        description="Terms and conditions for using Rope Tech Group's services. Review our service agreements, terms of use, and legal policies."
        keywords="terms and conditions, service agreement, terms of use, Rope Tech Group terms, legal policies"
      />
      <PageHero title="Terms and Conditions" />

      <section className="py-12 lg:py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg font-semibold mb-6">
            Last updated: December 22, 2025
          </p>

          <div className="prose text-base text-gray-700 [&>h3]:text-[24px] [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:my-6 [&>h3]:font-bold [&>p]:mb-4 [&>ul]:mt-2 [&>p]:font-light [&>p]:text-black">
            <p>
              These Terms and Conditions ("Terms") govern your access to and use
              of the website (the "Website") operated by Rope Tech Group
              ("Company", "we", "us", or "our").
            </p>

            <p>
              By accessing or using this Website, you agree to be bound by these
              Terms. If you do not agree, please do not use this Website.
            </p>

            <h3>Website Use</h3>
            <p>
              This Website is provided for general informational purposes
              regarding rope access, inspection, maintenance, and related
              services offered by Rope Tech Group. You agree to use the Website
              in compliance with all applicable federal, provincial, and
              municipal laws in Canada.
            </p>

            <h3>No Professional or Safety Advice</h3>
            <p>
              Content on this Website does not constitute engineering, legal, or
              safety advice. All projects require site-specific assessments,
              safe work planning, and formal agreements before any work is
              performed.
            </p>

            <h3>Rope Access & Safety Disclaimer</h3>
            <p>
              All rope access services provided by Rope Tech Group are subject
              to site-specific risk assessments, approved work methods, and
              applicable safety standards, including but not limited to IRATA,
              SPRAT, CSA, and provincial occupational health and safety
              regulations.
            </p>

            <p className="!text-[18px] !mt-5 !font-semibold mb-2">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside marker:text-[#a5b715] space-y-2">
              <li>Providing safe and legal access to the work site.</li>
              <li>
                Ensuring the suitability of structural elements and anchor
                points (unless otherwise agreed in writing).
              </li>
              <li>
                Disclosing known hazards, restrictions or environmental
                conditions.
              </li>
            </ul>

            <p>
              Rope Tech Group reserves the right to suspend or refuse work if
              conditions are deemed unsafe.
            </p>

            <h3>Estimates, Quotes & Scope of Work</h3>
            <p>
              Any pricing, timelines, or service descriptions displayed on this
              Website are for general information only and do not constitute a
              binding offer.
            </p>

            <p className="text-[18px] font-semibold mb-2">
              Final pricing and scope of work are subject to:
            </p>
            <ul className="list-disc list-inside marker:text-[#a5b715] space-y-2">
              <li>Site inspections</li>
              <li>Access conditions</li>
              <li>Weather and environmental factors</li>
              <li>Unforeseen or hidden conditions</li>
            </ul>

            <p>
              Only a written quotation or contract issued by Rope Tech Group
              shall be considered binding.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              All Website content, including text, images, logos, graphics, and
              design elements, is the exclusive property of Rope Tech Group or
              its licensors and is protected under Canadian intellectual
              property laws.
            </p>

            <h3>Third-Party Links</h3>
            <p>
              This Website may contain links to third-party websites for
              convenience. Rope Tech Group does not control or endorse those
              websites and is not responsible for their content or practices.
              Access to third-party websites is at your own risk.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by Canadian law, Rope Tech Group
              shall not be liable for any damages arising from your use of, or
              reliance on, this Website or its content, including indirect or
              consequential losses.
            </p>

            <h3>Website Availability</h3>
            <p>
              Rope Tech Group does not guarantee uninterrupted access to the
              Website and may modify or discontinue Website content at any time
              without notice.
            </p>

            <h3>Termination</h3>
            <p>
              We reserve the right to restrict or terminate access to the
              Website at our sole discretion, without notice, if these Terms are
              violated or for any lawful reason.
            </p>

            <h3>Governing Law</h3>
            <p>
              These Terms shall be governed by and interpreted in accordance
              with the laws of Canada and the Province of British Columbia
              without regard to conflict of law rules.
            </p>

            <h3>Changes to These Terms</h3>
            <p>
              Rope Tech Group may update these Terms at any time. Changes will
              be posted on this page with an updated revision date. Continued
              use of the Website constitutes acceptance of the revised Terms.
            </p>

            <h3>Contact Information</h3>
            <p>
              For questions regarding these Terms and Conditions, please
              contact:
            </p>
            <p>
              <span className="!text-lg !font-medium">Rope Tech Group</span>
              <br />
              Email: info@ropetechgroup@gmail.com
              <br />
              Website: www.ropetechgroup.ca
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
