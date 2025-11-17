export default function PrivacyPageEN() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Privacy <span className="gradient-text">Policy</span>
        </h1>

        <div className="space-y-8 text-muted">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. General Information</h2>
            <p className="mb-4">
              This Privacy Policy defines the rules for processing and protecting personal data
              provided by Users in connection with using the kobecloud.pl website.
            </p>
            <div className="bg-secondary/30 border border-border rounded-lg p-4">
              <p className="mb-2">
                <strong className="text-foreground">Data Controller:</strong> KobeCloud Jakub Pospieszny
              </p>
              <p className="mb-2">
                <strong className="text-foreground">Address:</strong> Mickiewicza 19, 84-242 Luzino, Poland
              </p>
              <p className="mb-2">
                <strong className="text-foreground">Tax ID (NIP):</strong> 5882530612
              </p>
              <p className="mb-2">
                <strong className="text-foreground">REGON:</strong> 541797979
              </p>
              <p className="mb-2">
                <strong className="text-foreground">Legal form:</strong> Sole proprietorship
              </p>
              <p>
                <strong className="text-foreground">Contact:</strong> kuba.pospieszny@gmail.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Cookies</h2>
            <p className="mb-4">
              The website uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Remembering user preferences (cookie consent)</li>
              <li>Adapting website content to user needs</li>
              <li>Analyzing website traffic (optionally, with Google Analytics)</li>
            </ul>
            <p className="mt-4">
              Users can change cookie settings in their browser at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Contact Form Data</h2>
            <p className="mb-4">
              Data submitted through the contact form (name, email, message) is processed
              solely for the purpose of responding to inquiries.
            </p>
            <p className="mb-4">
              <strong>Legal basis:</strong> Art. 6(1)(a) GDPR (consent) and Art. 6(1)(f) GDPR (legitimate interest).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Rights (GDPR)</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Rectify your data</li>
              <li>Erase your data ("right to be forgotten")</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise your rights, contact: <strong>kuba.pospieszny@gmail.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p>
              We use technical and organizational measures to ensure protection of personal data
              against unauthorized access, loss, or destruction (HTTPS encryption, secure servers).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Changes to Privacy Policy</h2>
            <p>
              This privacy policy may be updated. The current version is always available at:
              <strong> https://kobecloud.pl/en/privacy</strong>
            </p>
          </section>

          <section>
            <p className="text-sm text-muted/70">
              Last updated: November 17, 2025
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/en#contact"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all hover:shadow-xl hover:shadow-primary/50"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
