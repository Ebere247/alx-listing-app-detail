import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const Header: React.FC = () => {
  const accommodationTypes = [
    { name: "Rooms", icon: "/assets/icons/rooms.svg" },
    { name: "Mansion", icon: "/assets/icons/mansion.svg" },
    { name: "Countryside", icon: "/assets/icons/countryside.svg" },
    { name: "Villa", icon: "/assets/icons/villa.svg" },
    { name: "Tropical", icon: "/assets/icons/tropical.svg" },
    { name: "New", icon: "/assets/icons/new.svg" },
    { name: "Amazing pool", icon: "/assets/icons/amazing-pool.svg" },
    { name: "Beach house", icon: "/assets/icons/beach-house.svg" },
    { name: "Island", icon: "/assets/icons/island.svg" },
    { name: "Camping", icon: "/assets/icons/camping.svg" },
    { name: "Apartment", icon: "/assets/icons/apartment.svg" },
    { name: "House", icon: "/assets/icons/house.svg" },
    { name: "Lakefront", icon: "/assets/icons/lakefont.svg" },
    { name: "Farm house", icon: "/assets/icons/farm-house.svg" },
    { name: "Treehouse", icon: "/assets/icons/treehouse.svg" },
    { name: "Cabins", icon: "/assets/icons/cabins.svg" },
    { name: "Castles", icon: "/assets/icons/castles.svg" },
  ];

  return (
    <header className="w-full border-b bg-white shadow-sm">
      {/* Announcement bar */}
      <div className="bg-[#34967C] text-white text-sm py-2 text-center">
        Planning a trip? Stay updated on the latest travel guides!
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">alx</div>

        {/* Search Section */}
        <div className="hidden md:flex items-center gap-2 border rounded-full shadow-sm px-4 py-2">
          <input className="outline-none text-sm" placeholder="Location" />
          <input className="outline-none text-sm" placeholder="Check-in" />
          <input className="outline-none text-sm" placeholder="Check-out" />
          <input className="outline-none text-sm" placeholder="Guests" />
          <button className="bg-yellow-400 p-2 rounded-full text-white">
            <Search size={18} />
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-2">
          <button className="text-sm px-4 py-2 text-gray-700 hover:underline">
            Sign in
          </button>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
            Sign up
          </button>
        </div>
      </div>

      {/* Accommodation Types Shortlist */}
      <div className="overflow-x-auto flex gap-8 px-4 py-3 border-t text-center text-sm">
        {accommodationTypes.map((type, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1 min-w-[80px] hover:text-black cursor-pointer"
          >
            <Image
              src={type.icon}
              alt={type.name}
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="text-xs">{type.name}</span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
