const mockHotels = [
  {
    id: 1,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/59/8c/b3/grand-soluxe-angkor-palace.jpg?w=900&h=-1&s=1",
    location: "Siem Reap, Cambodia",
    title: "Angkor Palace Hotel",
    description:
      "Luxurious resort near Angkor Wat with lush gardens and full amenities. Spacious rooms, swimming pool, and fine dining options.",
    amenities: ["WIFI", "Restaurant", "Pool"],
    rating: "4.8",
    reviews: "1254",
    rooms: "210",
    lat: 13.4125,
    lng: 103.8668,
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/59/8c/b3/grand-soluxe-angkor-palace.jpg?w=900&h=-1&s=1",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501117716987-c8e2a2f6168d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    image:
      "https://pix8.agoda.net/hotelImages/285/285609/285609_16021215290039816408.jpg?ca=6&ce=1&s=1024x",
    location: "Kep, Cambodia",
    title: "Kep Hill View Resort",
    description:
      "Peaceful resort with mountain views and local seafood cuisine. Ideal for relaxation and exploring nearby beaches.",
    amenities: ["Restaurant", "WIFI", "Condition"],
    rating: "4.5",
    reviews: "876",
    rooms: "92",
    lat: 10.4701,
    lng: 104.2943,
    images: [
      "https://pix8.agoda.net/hotelImages/285/285609/285609_16021215290039816408.jpg?ca=6&ce=1&s=1024x",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    image:
      "https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/6/0/99/960/986/a5e0_ho_00_p_3000x2250_O.jpg?tr=w-1200%2Cfo-auto",
    location: "Phnom Penh, Cambodia",
    title: "Royal City Hotel",
    description:
      "Centrally located near the Royal Palace with spacious rooms and modern decor. Perfect for business or leisure travelers.",
    amenities: ["WIFI", "TV", "Condition"],
    rating: "4.7",
    reviews: "980",
    rooms: "130",
    lat: 11.5564,
    lng: 104.9282,
    images: [
      "https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/6/0/99/960/986/a5e0_ho_00_p_3000x2250_O.jpg?tr=w-1200%2Cfo-auto",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 4,
    image:
      "https://pix10.agoda.net/hotelImages/39581782/-1/00df2736ebc6af961f086213d9f21515.jpg?ce=0&s=702x392",
    location: "Sihanoukville, Cambodia",
    title: "Otres Beach Resort",
    description:
      "Beachfront hotel offering peace, sunsets, and tropical charm. Enjoy direct access to the beach and water sports.",
    amenities: ["WIFI", "Restaurant", "Condition"],
    rating: "4.4",
    reviews: "560",
    rooms: "200",
    lat: 10.6211,
    lng: 103.5181,
    images: [
      "https://pix10.agoda.net/hotelImages/39581782/-1/00df2736ebc6af961f086213d9f21515.jpg?ce=0&s=702x392",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 5,
    image:
      "https://pix8.agoda.net/hotelImages/825/8257480/8257480_19062317340076757056.jpg?ca=9&ce=1&s=1024x",
    location: "Koh Rong, Cambodia",
    title: "Koh Rong Paradise Hotel",
    description:
      "Seaside hotel with clear water views and island activities. Perfect for snorkeling and relaxing by the sea.",
    amenities: ["WIFI", "Shuttle", "TV"],
    rating: "4.6",
    reviews: "1543",
    rooms: "420",
    lat: 10.6241,
    lng: 103.3875,
    images: [
      "https://pix8.agoda.net/hotelImages/825/8257480/8257480_19062317340076757056.jpg?ca=9&ce=1&s=1024x",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    ],
  },
  // Add similar "images" array to the remaining hotels if needed
];

export default mockHotels;
