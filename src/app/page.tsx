import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto space-y-10 pt-6 px-4">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-orange-500">
          Affordable. Reliable.
        </h1>
        <h1 className="text-5xl text-black">
          Ready when<span className="text-orange-600">ever</span> you are.
        </h1>
        <Button className="bg-orange-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
          Book now
        </Button>
      </section>

      {/* Main Content Section */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-orange-600">
            Explore Croatia with Confidence
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We proudly operate across all of Croatia, offering reliable and
            affordable car rentals to meet your travel needs anywhere in the
            country. From bustling cities to serene coastal towns, our services
            are designed to keep you moving with ease.
          </p>
        </div>
        {/* Image Placeholder */}
        <div className="flex-1">
          <div className="w-full h-64 bg-gray-300 rounded-lg shadow-md">
            {/* Replace with actual image */}
            <p className="text-center text-gray-500 pt-28">
              [Placeholder for image of Croatia]
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-green-600">
          Why Choose Cayenne Rental?
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At Cayenne Rental, we pride ourselves on providing dependable vehicles
          at unbeatable prices. Since 2019, we’ve built a strong reputation for
          reliability and customer satisfaction. Whether you need a short-term
          rental for a quick trip or a long-term partnership for ongoing needs,
          we’ve got you covered.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          With a wide range of well-maintained vehicles and flexible rental
          plans, we’re the trusted choice for both individuals and businesses.
          Join our growing list of happy clients and experience the difference
          today!
        </p>
      </section>
    </main>
  );
}
