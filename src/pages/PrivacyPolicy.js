import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="container">
        <h1
          className="text-capitalize headers my-5 text-center"
          style={{ color: "dodgerblue" }}
        >
          Privacy Policy
        </h1>
        <p>
          At Inserviz, we take the privacy and security of our users’ personal
          information seriously. This privacy policy outlines how we collect,
          use, and protect the personal information of our users.
        </p>
        <h6 className="headers-small">Information Collection</h6>
        <div>
          <p>
            {" "}
            We collect personal information from our users when they register an
            account on our platform or use our services. This information
            includes but is not limited to:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Location</li>
            <li>Skills and services offered</li>
            <li>Payment information</li>
          </ul>
          <p>
            {" "}
            We also collect information automatically when users visit our
            website or use our services, including but not limited to::
          </p>
          <ul>
            <li>IP address</li>
            <li>Device information</li>
            <li>Usage data</li>
            <li>Cookies and other tracking technologies</li>
          </ul>
        </div>
        <div>
          <p> We use the personal information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Facilitate transactions between users</li>
            <li>
              Communicate with users about their accounts and transactions
            </li>
            <li>Send promotional emails and other marketing materials</li>
            <li>Enforce our policies and terms of use</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>
        <h6 className="headers-small"> Information Sharing</h6>
        <div>
          <p>
            {" "}
            We do not share personal information with third parties except in
            the following circumstances:
          </p>
          <ul>
            <li>Using secure communication protocols</li>
            <li>
              Regularly monitoring our systems for vulnerabilities and threats
            </li>
            <li>
              Limiting access to personal information to authorized personnel
              only
            </li>
            <li>Encrypting sensitive data</li>
          </ul>
          <p>
            {" "}
            We may also share anonymous or aggregate information with third
            parties for research, marketing, or other purposes.
          </p>
        </div>
        <h6 className="headers-small">Information Security</h6>
        <div>
          <p>
            {" "}
            We take appropriate measures to protect the personal information of
            our users, including but not limited to:
          </p>
          <ul>
            <li>Using secure communication protocols</li>
            <li>
              Regularly monitoring our systems for vulnerabilities and threats
            </li>
            <li>
              Limiting access to personal information to authorized personnel
              only
            </li>
            <li>Encrypting sensitive data</li>
          </ul>
          <p>
            {" "}
            Despite our best efforts, no security measures are perfect or
            impenetrable, and we cannot guarantee the security of our systems or
            the personal information we collect.
          </p>
        </div>
        <h6 className="headers-small">Data Retention</h6>
        <div>
          <p>
            {" "}
            We retain personal information as long as necessary to provide our
            services and fulfill our legal obligations. Users may request
            deletion of their personal information at any time by contacting us.
          </p>
        </div>
        <h6 className="headers-small">User Rights</h6>
        <div>
          <p> Users have the right to:</p>
          <ul>
            <li> Access and receive a copy of their personal information</li>
            <li>Correct or update their personal information</li>
            <li>Request deletion of their personal information</li>
            <li> Object to the processing of their personal information</li>
            <li>
              Withdraw consent for the collection and use of their personal
              information
            </li>
          </ul>
        </div>
        <h6 className="headers-small"> Children’s Privacy</h6>
        <div>
          <p>
            {" "}
            Our services are not intended for children under the age of 13. We
            do not knowingly collect personal information from children under
            the age of 13.
          </p>
        </div>
        <h6 className="headers-small">Changes to Privacy Policy</h6>
        <div>
          <p>
            {" "}
            We may update this privacy policy from time to time. Users will be
            notified of any changes via email or by posting a notice on our
            website. Continued use of our services after any changes to the
            privacy policy constitutes acceptance of the updated policy. If you
            have any questions or concerns about our privacy policy or the
            handling of your personal information, please contact us at insert
            contact information.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
