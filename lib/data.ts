import { Property } from "@/types";

// Mock data for properties
export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment with City View",
    description:
      "Stunning modern apartment in the heart of downtown with breathtaking city views. This luxury unit features high-end finishes, floor-to-ceiling windows, and an open concept living space perfect for entertaining. The building offers premium amenities including a fitness center, rooftop pool, and 24-hour concierge service.",
    price: 450000,
    location: "Downtown",
    address: "123 Main St, New York, NY 10001",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "apartment",
    features: [
      "Balcony",
      "Gym",
      "Swimming Pool",
      "Parking",
      "Elevator",
      "Security",
    ],
    images: [
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Spacious Family Home",
    description:
      "Beautiful family home in a quiet suburban neighborhood. This spacious property offers a large backyard, modern kitchen with granite countertops, and a finished basement perfect for a home office or entertainment area. Close to excellent schools, parks, and shopping centers.",
    price: 750000,
    location: "Suburbia",
    address: "456 Oak Lane, Boston, MA 02115",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: "house",
    features: [
      "Garden",
      "Garage",
      "Fireplace",
      "Basement",
      "Central Heating",
      "Air Conditioning",
    ],
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Luxury Waterfront Villa",
    description:
      "Exclusive waterfront villa with private beach access and panoramic ocean views. This luxury property features a gourmet kitchen, home theater, wine cellar, and infinity pool overlooking the water. Perfect for those seeking privacy and luxury in a prime location.",
    price: 2500000,
    location: "Beachfront",
    address: "789 Ocean Drive, Miami, FL 33139",
    bedrooms: 5,
    bathrooms: 6,
    area: 5200,
    type: "villa",
    features: [
      "Swimming Pool",
      "Private Beach",
      "Home Theater",
      "Wine Cellar",
      "Smart Home",
      "Terrace",
    ],
    images: [
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Urban Loft with Industrial Charm",
    description:
      "Stylish urban loft featuring exposed brick walls, high ceilings, and industrial design elements. This converted warehouse space offers an open floor plan, designer kitchen, and large windows providing abundant natural light. Located in a trendy neighborhood with restaurants, shops, and art galleries within walking distance.",
    price: 650000,
    location: "Arts District",
    address: "101 Warehouse St, Chicago, IL 60607",
    bedrooms: 1,
    bathrooms: 2,
    area: 1800,
    type: "apartment",
    features: [
      "High Ceilings",
      "Exposed Brick",
      "Open Floor Plan",
      "Hardwood Floors",
      "Stainless Steel Appliances",
    ],
    images: [
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Mountain View Cabin",
    description:
      "Charming cabin nestled in the mountains with breathtaking views of the surrounding landscape. This cozy retreat features a stone fireplace, wooden beams, wraparound deck, and floor-to-ceiling windows to enjoy the natural beauty. Perfect as a vacation home or year-round residence for nature lovers.",
    price: 525000,
    location: "Mountain Range",
    address: "222 Pine Trail, Aspen, CO 81611",
    bedrooms: 3,
    bathrooms: 2,
    area: 1650,
    type: "house",
    features: [
      "Mountain View",
      "Fireplace",
      "Deck",
      "Hiking Trails",
      "Wood Stove",
      "Natural Setting",
    ],
    images: [
      "https://images.pexels.com/photos/147411/pexels-photo-147411.jpeg",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Cozy Downtown Condo",
    description:
      "Modern condo in a prime downtown location with easy access to restaurants, shopping, and entertainment. This stylish unit features high-end finishes, an open concept layout, and a private balcony. Building amenities include a fitness center, communal rooftop space, and secure parking.",
    price: 375000,
    location: "Downtown",
    address: "555 City Center, Seattle, WA 98101",
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    type: "condo",
    features: [
      "Balcony",
      "Fitness Center",
      "Rooftop Terrace",
      "City Views",
      "Walk Score 98",
    ],
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Function to get all properties
export const getProperties = () => {
  return properties;
};

// Function to get a property by ID
export const getPropertyById = (id: string) => {
  return properties.find((property) => property.id === id);
};

// Function to filter properties
export const filterProperties = (filters: any) => {
  return properties.filter((property) => {
    let match = true;

    if (filters.minPrice && property.price < filters.minPrice) match = false;
    if (filters.maxPrice && property.price > filters.maxPrice) match = false;
    if (filters.bedrooms && property.bedrooms < filters.bedrooms) match = false;
    if (filters.bathrooms && property.bathrooms < filters.bathrooms)
      match = false;
    if (filters.propertyType && property.type !== filters.propertyType)
      match = false;
    if (
      filters.location &&
      !property.location.toLowerCase().includes(filters.location.toLowerCase())
    )
      match = false;

    return match;
  });
};
