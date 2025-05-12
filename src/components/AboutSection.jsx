export default function AboutSection() {
  return (
    <section className="bg-background text-text py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">About Volly Tech</h2>
        <p className="text-lg text-muted mb-8">
          At Volly Tech, we specialize in building scalable and intelligent IoT ecosystems
          that empower industries to modernize and thrive in the connected world. From smart trash systems
          to electric vehicle charging stations, our end-to-end solutions are tailored to meet the dynamic
          needs of modern infrastructure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-primary mb-2">Innovation Driven</h3>
            <p className="text-muted">
              We constantly push boundaries with cutting-edge IoT solutions to solve real-world problems.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-primary mb-2">Client-Centric</h3>
            <p className="text-muted">
              Every product and service is designed with client success and ease-of-use in mind.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-primary mb-2">Scalable Systems</h3>
            <p className="text-muted">
              Our technology evolves with your growth—easy to deploy, integrate, and expand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
