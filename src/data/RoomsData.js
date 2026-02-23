const roomsData = [
  {
    id: 1,
    title: "Single Room near Metro",
    city: "Bhilai",
    price: 1000,
    roomType: "Single",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=60",
    description: "Fully furnished single room with attached bathroom."
  },
  {
    id: 2,
    title: "PG for Boys",
    city: "Bhilai",
    price: 2500,
    roomType: "PG",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&w=800&q=60",  
    description: "Affordable PG with food included."
  },
  {
    id: 3,
    title: "1RK Flat",
    city: "Durg",
    price: 3000,
    roomType: "1RK",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=60",  
    description: "Spacious 1RK near railway station."
  },
  {
    id: 4,
    title: "Double Sharing Room",
    city: "Durg",
    price: 5000,
    roomType: "Double",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    description: "Double sharing room in good locality."
  },
  {
    id: 5,
    title: "Luxury PG",
    city: "Durg",
    price: 1000,
    roomType: "PG",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    description: "AC room with WiFi and food."
  },
  {
    id: 6,
    title: "Budget Single Room",
    city: "Durg",
    price: 3500,
    roomType: "Single",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=60",
    description: "Affordable room for students."
  },
  {
    id: 7,
    title: "2 Sharing PG",
    city: "Durg",
    price: 7000,
    roomType: "Double",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
    description: "Comfortable 2 sharing PG with meals."
  },
  {
    id: 8,
    title: "1BHK for Rent",
    city: "Durg",
    price: 12000,
    roomType: "1BHK",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    description: "Semi furnished 1BHK in prime area."
  },
  {
    id: 9,
    title: "Girls PG",
    city: "Bhilai",
    price: 5500,
    roomType: "PG",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1630694093867-4b947d812bf0?auto=format&fit=crop&w=800&q=60",
    description: "Safe and secure PG for girls."
  },
  {
    id: 10,
    title: "Studio Apartment",
    city: "Powerhouse",
    price: 12000,
    roomType: "Studio",
    image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&w=800&q=60",
    description: "Modern studio apartment with balcony."
  },
  {
    id: 11,
    title: "Single Room in Flat",
    city: "Durg",
    price: 8000,
    roomType: "Single",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&w=800&q=60",
    description: "Single room available in shared flat."
  },
  {
    id: 12,
    title: "Budget PG",
    city: "Bhilai",
    price: 4000,
    roomType: "PG",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
    description: "Affordable PG with basic facilities."
  },
  {
    id: 13,
    title: "Luxury 1BHK",
    city: "Durg",
    price: 11000,
    roomType: "1BHK",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
    description: "Fully furnished luxury 1BHK."
  },
  {
    id: 14,
    title: "Double Room for Students",
    city: "Durg",
    price: 4000,
    roomType: "Double",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1540518614846-7eba4c3efb46?auto=format&fit=crop&w=800&q=60",
    description: "Perfect for college students."
  },
  {
    id: 15,
    title: "Affordable Studio",
    city: "Durg",
    price: 8500,
    roomType: "Studio",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    description: "Compact studio apartment."
  },
  {
    id: 16,
    title: "Premium PG",
    city: "Durg",
    price: 10000,
    roomType: "PG",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=60",
    description: "Premium PG with AC and food."
  },
  {
    id: 17,
    title: "1RK near IT Park",
    city: "Durg",
    price: 9000,
    roomType: "1RK",
    image: "https://images.jquery.com/photo-1594488651393-c351f83b77c5?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1594488651393-c351f83b77c5?auto=format&fit=crop&w=800&q=60",
    description: "1RK suitable for working professionals."
  },
  {
    id: 18,
    title: "Shared Room",
    city: "Bhilai",
    price: 3500,
    roomType: "Double",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    description: "Budget shared accommodation."
  },
  {
    id: 19,
    title: "Luxury Studio",
    city: "Durg",
    price: 12000,
    roomType: "Studio",
     image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1536376074432-cd24090212cc?auto=format&fit=crop&w=800&q=60",
    description: "High-end studio with modern amenities."
  },
  {
    id: 20,
    title: "Student PG",
    city: "Durg",
    price: 4500,
    roomType: "PG",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
    image2: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
    description: "Affordable PG near university."
  }
];

export default roomsData;