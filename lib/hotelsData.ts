// src/lib/hotelsData.ts
import { 
  Wifi, ParkingCircle, Dumbbell, Waves, Utensils, AirVent, CheckCircle, Users
} from 'lucide-react'

// تعریف تایپ برای اتاق‌ها
export type RoomTypeData = {
  id: string;
  name: string;
  maxGuests: number;
  price: number;
  breakfast: boolean;
  freeCancel: boolean;
  bedrooms: number;
};

// تعریف تایپ برای هتل
export type HotelData = {
  id: number;
  name: string;
  location: string;
  area: string;
  address: string;
  image: string;
  images: string[];
  rating: number;
  price: number; // کمترین قیمت اتاق‌ها
  maxGuests: number;
  rooms: number; // تعداد کل اتاق‌های موجود
  propertyType: string;
  boardType: string;
  freeCancellation: boolean;
  paymentOptions: string[];
  amenities: string[];
  desc: string;
  roomTypes: RoomTypeData[];
  checkIn: string;
  checkOut: string;
  rules: string;
  coordinates: { lat: number; lng: number };
};

export const HOTELS: HotelData[] = [
  {
    id: 1,
    name: "Grand Ocean Resort",
    location: "London, UK",
    area: "Victoria",
    address: "1 Victoria Embankment, London WC2R 2AB",
    image: "/pool-night.jpg",
    images: ["/pool-night.jpg", "/city-entrance.jpg", "/event-pool.jpg", "/white-hotel.jpg"],
    rating: 4.9,
    price: 180,
    maxGuests: 4,
    rooms: 10,
    propertyType: "Hotel",
    boardType: "Breakfast Included",
    freeCancellation: true,
    paymentOptions: ["Pay Online"],
    amenities: ["Pool", "Beach Access", "Spa"],
    desc: "Luxury seaside resort with stunning sunset views.",
    roomTypes: [
      { id: "1-r1", name: "Standard Double", maxGuests: 2, price: 180, breakfast: true, freeCancel: true, bedrooms: 1 },
      { id: "1-r2", name: "Luxury Suite", maxGuests: 4, price: 260, breakfast: true, freeCancel: true, bedrooms: 2 },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    rules: "Pets allowed, No smoking, Children welcome",
    coordinates: { lat: 51.5072, lng: -0.1262 }
  },
  {
    id: 2,
    name: "The City Heritage",
    location: "London, UK",
    area: "Baker",
    address: "221B Baker Street, London NW1 6XE",
    image: "/city-entrance.jpg",
    images: ["/city-entrance.jpg", "/pool-night.jpg", "/modern-lounge.webp"],
    rating: 4.8,
    price: 145,
    maxGuests: 2,
    rooms: 8,
    propertyType: "Hotel",
    boardType: "Half Board",
    freeCancellation: false,
    paymentOptions: ["Pay at Hotel", "Pay Online"],
    amenities: ["Valet", "Rooftop Bar", "Business Center"],
    desc: "Historic elegance in the heart of downtown.",
    roomTypes: [
      { id: "2-r1", name: "Standard Double", maxGuests: 2, price: 145, breakfast: false, freeCancel: false, bedrooms: 1 },
      { id: "2-r2", name: "Superior Room", maxGuests: 2, price: 190, breakfast: true, freeCancel: true, bedrooms: 1 },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    rules: "No pets, No smoking",
    coordinates: { lat: 51.5081, lng: -0.1419 }
  },
  {
    id: 3,
    name: "Modern Arts Hotel",
    location: "London, UK",
    area: "Downing",
    address: "10 Downing Street, London SW1A 2AA",
    image: "/modern-lounge.webp",
    images: ["/modern-lounge.webp", "/crystal-pool.webp", "/white-hotel.jpg"],
    rating: 4.9,
    price: 210,
    maxGuests: 6,
    rooms: 15,
    propertyType: "Hotel",
    boardType: "All Inclusive",
    freeCancellation: false,
    paymentOptions: ["Pay Online"],
    amenities: ["Art Gallery", "Infinity Pool", "Gym"],
    desc: "Contemporary design with an artistic touch.",
    roomTypes: [
      { id: "3-r1", name: "Art Studio", maxGuests: 2, price: 210, breakfast: true, freeCancel: false, bedrooms: 1 },
      { id: "3-r2", name: "Gallery Suite", maxGuests: 4, price: 290, breakfast: true, freeCancel: true, bedrooms: 2 },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    rules: "Pets allowed, Smoking only in designated areas",
    coordinates: { lat: 51.5028, lng: -0.1261 }
  },
  {
    id: 4,
    name: "Tropical Escape Resort",
    location: "London, UK",
    area: "Tower",
    address: "Tower Bridge Rd, London SE1 2UP",
    image: "/event-pool.jpg",
    images: ["/event-pool.jpg", "/pool-night.jpg", "/indoor-spa.jpg"],
    rating: 4.7,
    price: 260,
    maxGuests: 8,
    rooms: 5,
    propertyType: "Villa",
    boardType: "Breakfast Included",
    freeCancellation: true,
    paymentOptions: ["Pay at Hotel"],
    amenities: ["Private Beach", "Water Sports", "Dining"],
    desc: "A tropical paradise for ultimate relaxation.",
    roomTypes: [
      { id: "4-r1", name: "Garden Villa", maxGuests: 4, price: 260, breakfast: true, freeCancel: true, bedrooms: 2 },
      { id: "4-r2", name: "Beachfront Suite", maxGuests: 6, price: 350, breakfast: true, freeCancel: true, bedrooms: 2 },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    rules: "No pets, No smoking",
    coordinates: { lat: 51.5038, lng: -0.0747 }
  },
  {
    id: 5,
    name: "Crystal Palace Hotel",
    location: "London, UK",
    area: "Crystal",
    address: "Crystal Palace Park Rd, London SE19 2GA",
    image: "/crystal-pool.webp",
    images: ["/crystal-pool.webp", "/event-pool.jpg", "/pool-night.jpg"],
    rating: 5.0,
    price: 320,
    maxGuests: 4,
    rooms: 12,
    propertyType: "Hotel",
    boardType: "All Inclusive",
    freeCancellation: true,
    paymentOptions: ["Pay Online"],
    amenities: ["Indoor Pool", "Award-winning Dining", "Spa"],
    desc: "Opulent glass architecture with lakeside views.",
    roomTypes: [
      { id: "5-r1", name: "Deluxe Room", maxGuests: 2, price: 320, breakfast: true, freeCancel: true, bedrooms: 1 },
      { id: "5-r2", name: "Presidential Suite", maxGuests: 4, price: 450, breakfast: true, freeCancel: true, bedrooms: 2 },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    rules: "Pets allowed, No smoking",
    coordinates: { lat: 51.4156, lng: -0.0769 }
  },
  {
    id: 6,
    name: "Serenity Mountain Lodge",
    location: "London, UK",
    area: "Hampstead",
    address: "Hampstead Heath, London NW3 1BP",
    image: "/indoor-spa.jpg",
    images: ["/indoor-spa.jpg", "/city-entrance.jpg", "/event-pool.jpg"],
    rating: 4.6,
    price: 175,
    maxGuests: 4,
    rooms: 6,
    propertyType: "Villa",
    boardType: "Half Board",
    freeCancellation: false,
    paymentOptions: ["Pay at Hotel", "Pay Online"],
    amenities: ["Onsen", "Zen Garden", "Traditional Tea"],
    desc: "Find peace and tranquility in nature.",
    roomTypes: [
      { id: "6-r1", name: "Mountain View", maxGuests: 2, price: 175, breakfast: false, freeCancel: false, bedrooms: 1 },
      { id: "6-r2", name: "Zen Suite", maxGuests: 4, price: 230, breakfast: true, freeCancel: true, bedrooms: 2 },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    rules: "Pets allowed, No smoking",
    coordinates: { lat: 51.5555, lng: -0.1790 }
  },
  {
    id: 7,
    name: "Royal Luxury Suites",
    location: "London, UK",
    area: "Buckingham",
    address: "Buckingham Palace Rd, London SW1W 0PS",
    image: "/luxury-room.jpg",
    images: ["/luxury-room.jpg", "/crystal-pool.webp", "/white-hotel.jpg"],
    rating: 4.9,
    price: 280,
    maxGuests: 6,
    rooms: 8,
    propertyType: "Apartment",
    boardType: "Breakfast Included",
    freeCancellation: true,
    paymentOptions: ["Pay at Hotel"],
    amenities: ["Butler Service", "Private Cinema", "Library"],
    desc: "The pinnacle of royal comfort and privacy.",
    roomTypes: [
      { id: "7-r1", name: "Royal Studio", maxGuests: 2, price: 280, breakfast: true, freeCancel: true, bedrooms: 1 },
      { id: "7-r2", name: "Palace Suite", maxGuests: 4, price: 390, breakfast: true, freeCancel: true, bedrooms: 2 },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    rules: "No pets, No smoking",
    coordinates: { lat: 51.5007, lng: -0.1423 }
  },
  {
    id: 8,
    name: "White Sand Inn",
    location: "London, UK",
    area: "Westminster",
    address: "Westminster Bridge, London SE1 7PB",
    image: "/white-hotel.jpg",
    images: ["/white-hotel.jpg", "/pool-night.jpg", "/modern-lounge.webp"],
    rating: 4.5,
    price: 155,
    maxGuests: 2,
    rooms: 4,
    propertyType: "Hostel",
    boardType: "None",
    freeCancellation: false,
    paymentOptions: ["Pay at Hotel"],
    amenities: ["Ocean Front", "Kayaking", "Fishing"],
    desc: "Charming seaside stay with boat access.",
    roomTypes: [
      { id: "8-r1", name: "Seaside Double", maxGuests: 2, price: 155, breakfast: false, freeCancel: false, bedrooms: 1 },
      { id: "8-r2", name: "Private Cabin", maxGuests: 2, price: 180, breakfast: true, freeCancel: true, bedrooms: 1 },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    rules: "Pets allowed, No smoking",
    coordinates: { lat: 51.5009, lng: -0.1246 }
  }
];

export const PROPERTY_TYPES = ["Hotel", "Apartment", "Villa", "Hostel"];
export const AMENITIES_LIST = ["Free WiFi", "Swimming Pool", "Parking", "Gym", "Air Conditioning", "Spa", "Private Beach"];
export const BOARD_TYPES = ["Breakfast Included", "Half Board", "All Inclusive"];

export const AMENITY_ICONS: Record<string, React.ElementType> = {
  'Pool': Waves, 'Beach Access': Waves, 'Spa': CheckCircle, 'Valet': ParkingCircle,
  'Rooftop Bar': Utensils, 'Business Center': Users, 'Art Gallery': CheckCircle,
  'Infinity Pool': Waves, 'Gym': Dumbbell, 'Private Beach': Waves, 'Water Sports': CheckCircle,
  'Dining': Utensils, 'Indoor Pool': Waves, 'Award-winning Dining': Utensils, 'Onsen': Waves,
  'Zen Garden': CheckCircle, 'Traditional Tea': Utensils, 'Butler Service': Users,
  'Private Cinema': CheckCircle, 'Library': CheckCircle, 'Ocean Front': Waves,
  'Kayaking': CheckCircle, 'Fishing': CheckCircle, 'Free WiFi': Wifi, 'Air Conditioning': AirVent,
  'Parking': ParkingCircle, 'Swimming Pool': Waves
};