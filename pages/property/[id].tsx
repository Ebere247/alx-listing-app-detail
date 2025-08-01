import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 xl:w-3/4">
          <PropertyDetail property={property} />
        </div>
        <div className="lg:w-1/3 xl:w-1/4 lg:ml-4">
          <BookingSection price={property.price} />
        </div>
      </div>
      <div className="mt-4 md:mt-6 lg:mt-8">
        <ReviewSection reviews={property.reviews} />
      </div>
    </div>
  );
}
