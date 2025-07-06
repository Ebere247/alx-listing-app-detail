import Card from "@/components/common/Card";
import React from "react";

const index = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-red-700 text-3xl font-bold mb-4">Welcome</h1>
      <Card
        title="Private Room"
        location="Moeda, Brazil"
        categories={["Top Villa", "Self-Checkin", "Free Reschedule"]}
        price="$134/n"
        imageUrl="/assets/images/private-room.png"
        features={{ bed: 1, bath: 1, persons: 2 }}
        rating={4.76}
      />
    </div>
  );
};

export default index;
