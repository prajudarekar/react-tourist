import React from "react";
import Tourist from "./Tourist";
function App() {
  const touristPlaces = [
    {
      placeName: "Goa",
      desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
      img: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww",
      whenToVisit: "Winter",
      ratings: 4.5,
      price: 15000,
    },
    {
      placeName: "Manali",
      desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
      img: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww",
      whenToVisit: "Summer",
      ratings: 4.7,
      price: 10000,
    },
    {
      placeName: "Kerala",
      desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
      img: "https://images.unsplash.com/photo-1679022579927-85c984068de0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2VybGF8ZW58MHx8MHx8fDA%3D",
      whenToVisit: "Winter",
      ratings: 4.8,
      price: 20000,
    },
    {
      placeName: "Jaipur",
      desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
      img: "https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=DvT0nj1f53epEEMwsEM3jTzZH96jG8iM-TvYTDp7wEc=",
      whenToVisit: "Winter",
      ratings: 4.6,
      price: 12000,
    },
  ];

  return (
    <>
      <div className="tourist-container">
        {touristPlaces.map((tourist) => (
          <Tourist
            img={tourist.img}
            desc={tourist.desc}
            whenToVisit={tourist.whenToVisit}
            price={tourist.price}
            placeName={tourist.placeName}
            ratings={tourist.ratings}
          />
        ))}
      </div>
    </>
  );
}

export default App;
