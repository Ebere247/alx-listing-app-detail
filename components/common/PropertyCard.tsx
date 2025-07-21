import Image from "next/image";
import { Property } from "@/interfaces";

type PropertyCardProps = {
  property: Property;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white">
      <Image
        src={property.image}
        alt={property.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{property.name}</h2>
        <p className="text-gray-600 mt-1">${property.price.toLocaleString()}</p>
        <p className="text-yellow-500 text-sm mt-1">
          Rating: {property.rating}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
