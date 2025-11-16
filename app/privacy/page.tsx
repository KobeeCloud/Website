export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Polityka <span className="gradient-text">Prywatności</span>
        </h1>

        <div className="space-y-8 text-muted">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informacje ogólne</h2>
            <p className="mb-4">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
              przekazanych przez Użytkowników w związku z korzystaniem ze strony kobecloud.pl.
            </p>
            <p>
              <strong>Administrator danych:</strong> Jakub Pospieszny, KobeCloud<br />
              <strong>Kontakt:</strong> kuba.pospieszny@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Pliki Cookies</h2>
            <p className="mb-4">
              Strona wykorzystuje pliki cookies (ciasteczka) w celu:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Zapamiętania preferencji użytkownika (zgoda na cookies)</li>
              <li>Dostosowania zawartości strony do potrzeb użytkownika</li>
              <li>Analizy ruchu na stronie (opcjonalnie, z Google Analytics)</li>
            </ul>
            <p className="mt-4">
              Użytkownik może w każdej chwili zmienić ustawienia cookies w swojej przeglądarce.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Dane z formularza kontaktowego</h2>
            <p className="mb-4">
              Dane przekazane przez formularz kontaktowy (imię, email, wiadomość) są przetwarzane
              wyłącznie w celu odpowiedzi na zapytanie.
            </p>
            <p className="mb-4">
              <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. a RODO (zgoda) oraz lit. f RODO (prawnie uzasadniony interes).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Prawa użytkownika (RODO)</h2>
            <p className="mb-4">Przysługuje Ci prawo do:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych ("prawo do bycia zapomnianym")</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
            </ul>
            <p className="mt-4">
              W celu realizacji swoich praw, skontaktuj się: <strong>kuba.pospieszny@gmail.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Bezpieczeństwo danych</h2>
            <p>
              Stosujemy środki techniczne i organizacyjne zapewniające ochronę danych osobowych
              przed nieuprawnionym dostępem, utratą lub zniszczeniem (szyfrowanie HTTPS, bezpieczne serwery).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Zmiany w polityce prywatności</h2>
            <p>
              Polityka prywatności może ulec zmianie. Aktualna wersja jest zawsze dostępna pod adresem:
              <strong> https://kobecloud.pl/privacy</strong>
            </p>
          </section>

          <section>
            <p className="text-sm text-muted/70">
              Ostatnia aktualizacja: 17 listopada 2025
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/#kontakt"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all hover:shadow-xl hover:shadow-primary/50"
          >
            Wróć na stronę główną
          </a>
        </div>
      </div>
    </div>
  );
}
