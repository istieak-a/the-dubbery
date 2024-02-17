import React from "react";

function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-8">
      {/* Heading */}
      <h1 className="mb-6 text-center text-3xl font-bold">
        The Dubbery Privacy Policy
      </h1>
      <p className="mb-4 text-center">Effective Date: [Insert Date]</p>

      {/* Introduction */}
      <h2 className="mb-3 text-2xl font-semibold">Introduction</h2>
      <p className="mb-4">
        At The Dubbery, we respect your privacy and are committed to protecting
        your Personal Information (as defined below). This Privacy Policy
        outlines how we collect, use, and share your information when you use
        our websites, products, or services.
      </p>

      {/* Information We Collect */}
      <h2 className="mb-3 text-2xl font-semibold">Information We Collect</h2>
      <p className="mb-4">We collect the following types of information:</p>
      <ul className="mb-4 ml-6 list-disc">
        <li>
          <strong>Information you provide directly:</strong>
          <ul className="ml-6 list-disc">
            <li>Name</li>
            <li>Email address</li>
            <li>Contact information</li>
            <li>Billing information</li>
            <li>Usernames and passwords</li>
            <li>Feedback, survey responses, etc.</li>
          </ul>
        </li>
        <li>
          <strong>Information collected automatically:</strong>
          <ul className="ml-6 list-disc">
            <li>Device information (type, operating system, IP address)</li>
            <li>
              Usage data (pages visited, actions taken on the website/app)
            </li>
            <li>Location data (with your explicit permission)</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </li>
        <li>
          <strong>Information from third parties:</strong>
          <ul className="ml-6 list-disc">
            <li>
              Information from social media platforms (if you connect your
              account)
            </li>
            <li>Information from our partners and service providers</li>
          </ul>
        </li>
      </ul>

      {/* How We Use Your Information */}
      <h2 className="mb-3 text-2xl font-semibold">
        How We Use Your Information
      </h2>
      <ul className="mb-4 ml-6 list-disc">
        <li>Providing services: ...</li>
        <li>Communication: ...</li>
        <li>Personalization: ...</li>
        <li>Analytics: ...</li>
        <li>Security: ...</li>
        <li>Legal compliance: ...</li>
      </ul>

      {/* ... Add rest of your Policy sections - similar structure  */}

      {/* Contact Us */}
      <h2 className="mb-3 text-2xl font-semibold">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at: contact@thedubbery.com
      </p>
    </div>
  );
}

export default PrivacyPolicy;
