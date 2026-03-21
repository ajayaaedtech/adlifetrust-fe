import ProductShowcase from "@/components/ProductList/ProductList";

export const metadata = {
  title: "Livelihood | AD Life Trust",
  description:
    "Empowering communities through sustainable livelihood programs, skill development, and handcrafted products.",
};

export default function Livelihood() {
  return (
    <main className="bg-white">
      
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/livelihood/banner.jpg')] bg-cover bg-center opacity-40" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Empowering Livelihoods, Transforming Lives
          </h1>

          <p className="text-lg text-gray-200">
            We enable sustainable income opportunities through skill training,
            artisan support, and community-driven initiatives.
          </p>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div>
            <h2 className="text-4xl font-bold text-amber-500">500+</h2>
            <p className="text-gray-600 mt-2">Women Empowered</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-amber-500">50+</h2>
            <p className="text-gray-600 mt-2">Training Programs</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-amber-500">10K+</h2>
            <p className="text-gray-600 mt-2">Products Created</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-amber-500">100+</h2>
            <p className="text-gray-600 mt-2">Artisans Supported</p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            What We Do
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Our livelihood initiatives focus on providing skill-based training
            and employment opportunities to underserved communities. From
            handcrafted garments to eco-friendly products, every creation
            supports dignity, independence, and sustainable growth.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <ProductShowcase />

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Support a Livelihood Today
        </h2>

        <p className="text-gray-300 mb-6">
          Every purchase directly contributes to empowering artisans and their families.
        </p>

        <button className="px-8 py-3 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-400 transition">
          Get Involved
        </button>
      </section>

    </main>
  );
}