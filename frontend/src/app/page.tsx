import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4">      
      <main className="flex flex-col md:flex-row items-center justify-between py-12 ">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-xl mb-6">Discover the perfect property with Nawy</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/property" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 text-center">
              Check Available Properties
            </Link>
            <Link href="/sell" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 text-center">
              List a Property
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg"
            alt="Beautiful home"
            width={600}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
      </main>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
          <p>Browse thousands of listings</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Expert Agents</h3>
          <p>Get help from professionals</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Easy Process</h3>
          <p>Streamlined buying and selling</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">List Your Property</h3>
          <p>Easily sell your home with us</p>
        </div>
      </section>

      <footer className="text-center py-4 border-t">
        <p>&copy; 2024 Nawy. All rights reserved.</p>
      </footer>
    </div>
  );
}
