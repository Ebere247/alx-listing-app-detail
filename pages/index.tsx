import Image from "next/image";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import Header from "@/components/layout/Header";

const filters = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self CheckIn",
  "Instant Book",
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[450px]">
        <Image
          src="/assets/images/hero-section.png" // use public folder if using string path
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-b-lg"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="flex flex-wrap gap-3 px-6 py-8 justify-center">
        {filters.map((filter, index) => (
          <Pill key={index} label={filter} />
        ))}
        <button className="border px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 text-sm">
          Filter
        </button>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-500">Sort by:</span>
          <button className="font-semibold text-gray-700 hover:underline">
            Highest Price
          </button>
        </div>
      </section>

      {/* Property Listing */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-10">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </div>
  );
}
