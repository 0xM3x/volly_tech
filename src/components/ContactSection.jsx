export default function ContactSection() {
  return (
    <section className="py-20 bg-background text-text">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Bizimle İletişime Geçin</h2>
            <p className="text-muted mb-6">Sorularınız için bize ulaşın.</p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Mail Adresi</h3>
              <p className="text-primary text-lg mt-2">info@volly.tech</p>
            </div>
            <a
              href="mailto:info@volly.tech"
              className="inline-block bg-black text-white px-6 py-2 rounded hover:scale-105 transition"
            >
              İletişim
            </a>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=41.031478143983286,29.047465523760746&z=15&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Volly Tech Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
