import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import roomsData from "../data/RoomsData";

function PGListingPage() {
  const data = roomsData;
  const [roomSearch, setRoomSearch] = useState("");
  const [roomType, setRoomType] = useState("All");
  const [price, setPrice] = useState(12000);
  const [filterData, setFilterData] = useState(data);

 useEffect(() => {
  const newFilterData = data.filter((item) => {

    const matchCity =
      roomSearch === "" ||  //or 
      item.city.toLowerCase().includes(roomSearch.toLowerCase());

    const matchPrice = item.price <= Number(price);

    const matchType =
      roomType === "All" || item.roomType === roomType;

    return matchCity && matchPrice && matchType;
  });

  setFilterData(newFilterData);
}, [roomSearch, roomType, price, data]); 
console.log(filterData.length);


  return (
    <>
      <div className="container my-4">
       <h1 className="text-center fw-bold mb-4">Find Your Perfect Stay</h1>
        <hr />

        <div className="row">
          
          {/* FILTER SECTION */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm p-3">
              
              <div className="search mb-3">
                <input
                  type="text"
                  className="form-control"
                 placeholder="Find by city..."
                  value={roomSearch}
                  onChange={(e) => setRoomSearch(e.target.value)}
                />
              </div>

              <h5>Room types</h5>
              <div className="category mb-3">
                <select
                  className="form-select"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Single">Single</option>
                  <option value="PG">PG</option>
                  <option value="1RK">1RK</option>
                  <option value="Double">Double</option>
                  <option value="1BHK">1BHK</option>
                  <option value="Studio">Studio</option>
                </select>
              </div>

              <div className="price-range">
                <h5>Price Range</h5>
                <input
                  type="range"
                  className="form-range"
                  value={price}
                  min="1000"
                  max="12000"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span className="fw-semibold text-primary">
                  Price: ₹{price}
                </span>
              </div>
            </div>
          </div>

          {/* ROOM CARD SECTION */}
          <div className="col-md-9">
            <div className="row g-4">
              {(filterData ? filterData : data).map((item) => (
                <div className="col-md-4" key={item.id}>
                  <div className="card h-100 shadow-sm border-0 room-hover">
                    
                    <img
                      className="card-img-top"
                      src={item.image}
                      alt="not found"
                      style={{ height: "200px", objectFit: "cover" }}
                    />

                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="room-price text-success fw-bold">
                        ₹{item.price}
                      </p>

                      <Link
                        to={`/listings/${item.id}`}
                        className="btn btn-primary mt-auto"
                      >
                        Visit Here
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default PGListingPage;
