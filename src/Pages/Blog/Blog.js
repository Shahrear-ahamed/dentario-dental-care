import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <section className="div-size container py-5">
      <Accordion className="my-2" defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between authentication and authorization
          </Accordion.Header>
          <Accordion.Body>
            <h5>Authentication:</h5>
            <p>
              Authentication is the process of verifying someone. It works with
              passwords, biometrics, one-time pins. It is visible to the user.
            </p>
            <h5>Authorization:</h5>
            <p>
              Authorization is a security system that allows a user to access a
              specific resource. it works through settings that are implemented
              and maintained by the organization. It's not visible to the user.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Firebase is a third-party authentication provider. Firebase is an
              easy-to-use and time-saving alternative to white full backend code
              for storing dynamic data or other things. With Firebase, it's
              simple to connect and use build-in third-party authentication
              providers, including Google, Facebook, GitHub, and many more.{" "}
            </p>
            <p className="mb-1">
              Aulternative third party Provider of firebase.
            </p>
            <ol>
              <li>Parse</li>
              <li>Auth0</li>
              <li>Okta</li>
              <li>JSON Web Token</li>
              <li>Amazon Cognito</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What other services does firebase provide other than authentication
          </Accordion.Header>
          <Accordion.Body>
            Firebase Database offers a number of services that have a lot of
            potentials, so we can easily replaced depending on the custom
            backend development. Firebase also provides authentication,
            Analytics, Hosting, Cloud Messaging, Firestore database, and
            Real-time databases. Firebase Database offers a number of services
            that have a lot of potentials, so it can be easily replaced
            depending on the custom backend development. Firebase also provides:
            <ol>
              <li>Authentication</li>
              <li>Analytics</li>
              <li>Hosting</li>
              <li>Cloud Messaging</li>
              <li>Firestore database</li>
              <li>Real-time database</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Blog;
