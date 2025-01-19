import Image from "next/image";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main
        className="w-full min-h-screen bg-cover bg-center bg-fixed px-4 flex justify-center"
        style={{ backgroundImage: "url('/backgroundMain.png')" }}
      >
        <div className="max-w-screen-lg w-full space-y-10 py-10">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-8 rounded-lg shadow-lg">
            {/* Image */}
            <div className="flex-1">
              <Image
                src="/Heroimage.png"
                alt="Rental Cars"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-8 text-center md:text-left flex flex-col justify-center items-center md:items-start">
              <h1 className="text-4xl font-bold text-gray-900">
                Drive More, <span className="text-green-600">Spend Less</span>
              </h1>
              <h2 className="text-xl text-gray-700 font-medium">
                Rent with{" "}
                <span className="text-orange-600 font-bold">Confidence!</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cayenne Rental delivers reliable vehicles at unbeatable prices.
                Since 2019, we’ve built a strong reputation for trust and
                customer satisfaction.
              </p>
            </div>
          </section>

          {/* Map Section */}
          <section className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex-1">
              <Image
                src="/Map.png"
                alt="Croatia Map"
                width={500}
                height={300}
                className="rounded-lg shadow-md bg-blend-lighten border-0"
              />
            </div>
            <div className="flex-1 space-y-8 text-center md:text-left flex flex-col justify-center items-center md:items-start">
              <p className="text-gray-600 leading-relaxed">
                We proudly operate across all of Croatia, including major cities
                such as
                <b className="text-black">
                  {" "}
                  Zagreb, Osijek, Split, Rijeka, Zadar, Šibenik, Imotski,
                  Makarska, and Dubrovnik.
                </b>{" "}
                Our reliable and affordable car rentals ensure your travel needs
                are met.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-8 rounded-lg shadow-lg items-center">
            <div className="rounded-lg shadow-md overflow-hidden w-full h-auto">
              <Image
                src="/image31.png"
                alt="Scenic Road"
                width={500}
                height={300}
                className="object-cover w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center space-y-4 m-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Affordable. <span className="text-green-600">Reliable.</span>
              </h2>
              <p className="text-gray-600">
                Ready whenever you are. Start your journey with us today.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-700 text-white px-6 py-2 rounded-lg">
                Explore Now
              </Button>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden w-full h-auto">
              <Image
                src="/image32.png"
                alt="Scenic Road"
                width={500}
                height={300}
                className="object-cover w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg"
              />
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-gray-600 text-white text-center py-4 mt-0">
        <p className="text-sm">All rights reserved. Cayenne 2025.</p>
      </footer>
    </>
  );
}
