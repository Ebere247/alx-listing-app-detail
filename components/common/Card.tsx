// import { CardProps } from "@/interfaces";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// const Card = ({
//   title,
//   categories,
//   location,
//   features,
//   price,
//   rating,
//   imageUrl,
// }): CardProps => {
//   return (
//     <div className="max-w-xs rounded-lg overflow-hidden bg-white">
//       <Image src={imageUrl} alt={title} className="" />
//       <div className="p-3 ">
//         {categories.length > 0 && (
//           <div className="flex space-x-2">
//             {categories.map((item, index) => (
//               <span className="bg-gray-100 px-2 py-1 rounded" key={index}>
//                 {item}
//               </span>
//             ))}
//           </div>
//         )}
//         <div className="flex justify-between items-center">
//           <div>
//             <h3 className="text-lg font-bold">{title}</h3>
//             <p className="">{location}</p>
//           </div>
//           <p className="">
//             <FaStar />
//             {rating}
//           </p>
//         </div>
//         <div className="flex justify-between items-center">
//           <div className="flex item-center mt-2 text-sm bg-gray-100 rounded">
//             <div className="">
//               <Image
//                 src="/assets/images/icons/bed.png"
//                 alt="bed"
//                 className=""
//               />
//               <span>{features.bed}</span>
//             </div>
//             <div className="">
//               <Image
//                 src="/assets/images/icons/bathup.png"
//                 alt="bathup"
//                 className=""
//               />
//               <span>{features.bath}</span>
//             </div>
//             <div className="">
//               <Image
//                 src="/assets/images/icons/persons.png"
//                 alt="persons"
//                 className=""
//               />
//               <span>{features.persons}</span>
//             </div>
//           </div>
//           <div className="">
//             <p className="">{price}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import { CardProps } from "@/interfaces";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Card = ({
  title,
  categories,
  location,
  features,
  price,
  rating,
  imageUrl,
}: CardProps) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden bg-white shadow-md">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="object-cover w-full"
      />
      <div className="p-3">
        {categories.length > 0 && (
          <div className="flex space-x-2 mb-2">
            {categories.map((item, index) => (
              <span
                className="bg-gray-100 px-2 py-1 rounded-full text-xs"
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <FaStar className="mr-1 text-yellow-500" />
            {rating}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 text-sm bg-gray-100 py-1 px-2 rounded-full ">
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/assets/icons/bed.png"
                alt="bed"
                width={12}
                height={12}
              />
              <span>{features.bed}</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/assets/icons/bath.png"
                alt="bathup"
                width={12}
                height={12}
              />
              <span>{features.bath}</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/assets/icons/persons.png"
                alt="persons"
                width={12}
                height={12}
              />
              <span>{features.persons}</span>
            </div>
          </div>
          <p className="text-right font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
