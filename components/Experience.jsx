import React from "react";
import LearningCard from "./LearningCard";

function Experience() {
  const cardsData = [
    {
      imageUrl: "/images/atlete.jpg",
      rating: "5.0",
      reviewCount: 6,
      location: "Rwanda",
      title: "Life lessons with Katie Zaferes",
      price: "136",
      openSpots: 0
    },
    {
      imageUrl: "/images/photography.jpg",
      rating: "5.0",
      reviewCount: 30,
      location: "USA",
      title: "Learn wedding photography",
      price: "125",
      openSpots: 27
    },
    {
      imageUrl: "/images/photography.jpg",
      rating: "5.0",
      reviewCount: 30,
      location: "Norway",
      title: "Group Mountain Biking",
      price: "50",
      openSpots: 3
    },

    // Add more card data objects here as needed...
  ];
  return (
    <div>
      <div className="text-black font-primary">
        <h1 className="text-4xl font-semibold">Online Experiences</h1>
        <p className="pt-4 w-[320px] font-">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>

      <div className="cards-list">
        {cardsData.map((cardData, index) => (
          <LearningCard key={index} cardData={cardData} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
