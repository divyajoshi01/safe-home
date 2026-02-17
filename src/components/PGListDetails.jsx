import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // use param url se id nikalne ke liye use hota h
import roomsData from "../data/RoomsData";
import "./PGListDetails.css";

function PGListDetails() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const { title, description, city, price, image, image2, roomType } = data;

  useEffect(() => {
    const room = roomsData.find((item) => item.id === Number(id));
    setData(room);
  }, [id]);

  const handleBooking = () => {
    alert(`Your booking for "${title}" is confirmed!`);
  };

  return (
    <>
      <div className="main-container">
        <h1>PG / Room Details</h1>
        <div className="room-detail">
          <div className="image-gallery">
            <img src={image} alt={title} className="main-image" />

            <div className="second-images">
              {image2 && <img src={image2} alt="room view 2" />}
              
            </div>
          </div>

          <div className="detail-section">
            <h1 className="product-title">{title}</h1>
            <h3 className="Location">Location : {city}</h3>
            <h3 className="room-category">Room Type : {roomType}</h3>
            <h3 className="price">Price: ₹{price}</h3>
            <p className="room-description">Details : {description}</p>

            <button className="booking-btn" onClick={handleBooking}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PGListDetails;
