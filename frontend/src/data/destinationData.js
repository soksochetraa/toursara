const mockDestinations = [
  {
    id: 1,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Siem Reap, Cambodia",
    title: "Angkor Wat",
    description:
      "Discover the largest religious monument in the world, a stunning temple complex.",
    amenities: "Temples · History · Culture",
    rating: "4.8",
    reviews: "1254",
    stays: "210",
    lat: 13.4125,
    lng: 103.8668,
  },
  {
    id: 2,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Kep, Cambodia",
    title: "Kep National Park",
    description:
      "Explore the tranquil landscapes and wildlife of this mountain park.",
    amenities: "Nature · Adventure · Wildlife",
    rating: "4.5",
    reviews: "876",
    stays: "92",
    lat: 10.4701,
    lng: 104.2943,
  },
  {
    id: 3,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Phnom Penh, Cambodia",
    title: "Royal Palace",
    description:
      "Visit the majestic Royal Palace and its stunning Silver Pagoda.",
    amenities: "History · Culture",
    rating: "4.7",
    reviews: "980",
    stays: "130",
    lat: 11.5564,
    lng: 104.9282,
  },
  {
    id: 4,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Preah Sihanouk, Cambodia",
    title: "Otres Beach",
    description:
      "Relax on one of Cambodia's most beautiful and serene beaches.",
    amenities: "Beaches · Nature · Adventure",
    rating: "4.4",
    reviews: "560",
    stays: "200",
    lat: 10.6211,
    lng: 103.5181,
  },
  {
    id: 5,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Koh Rong, Cambodia",
    title: "Koh Rong Island",
    description:
      "Escape to a tropical paradise with crystal clear waters and stunning beaches.",
    amenities: "Beaches · Nature · Adventure",
    rating: "4.6",
    reviews: "1543",
    stays: "420",
    lat: 10.6241,
    lng: 103.3875,
  },
  {
    id: 6,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Battambang, Cambodia",
    title: "Bamboo Train",
    description:
      "Experience the unique and scenic ride on Cambodia's Bamboo Train.",
    amenities: "Adventure · History · Culture",
    rating: "4.3",
    reviews: "687",
    stays: "56",
    lat: 13.095,
    lng: 103.211,
  },
  {
    id: 7,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Kratie, Cambodia",
    title: "Irrawaddy Dolphins",
    description: "Spot the endangered Irrawaddy dolphins in the Mekong River.",
    amenities: "Wildlife · Nature · Adventure",
    rating: "4.9",
    reviews: "932",
    stays: "120",
    lat: 12.5089,
    lng: 106.0205,
  },
  {
    id: 8,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Kampot, Cambodia",
    title: "Bokor Mountain",
    description:
      "Visit the cool climate of Bokor Mountain with panoramic views and colonial ruins.",
    amenities: "Mountain · Nature · Adventure",
    rating: "4.5",
    reviews: "1110",
    stays: "150",
    lat: 10.6037,
    lng: 104.1004,
  },
  {
    id: 9,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Siem Reap, Cambodia",
    title: "Bayon Temple",
    description:
      "Marvel at the smiling faces of Bayon Temple, part of the Angkor Thom complex.",
    amenities: "Temples · History · Culture",
    rating: "4.7",
    reviews: "1150",
    stays: "98",
    lat: 13.412,
    lng: 103.8675,
  },
  {
    id: 10,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Mondulkiri, Cambodia",
    title: "Sen Monorom Waterfall",
    description:
      "Hike through the hills of Mondulkiri to find stunning, hidden waterfalls.",
    amenities: "Waterfalls · Nature · Adventure",
    rating: "4.8",
    reviews: "672",
    stays: "55",
    lat: 12.6097,
    lng: 107.1213,
  },
  {
    id: 11,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Kampong Thom, Cambodia",
    title: "Phnom Santuk",
    description:
      "Hike to Phnom Santuk for panoramic views and ancient pagodas.",
    amenities: "Nature · History · Adventure",
    rating: "4.3",
    reviews: "342",
    stays: "40",
    lat: 12.7079,
    lng: 104.9437,
  },
  {
    id: 12,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Preah Vihear, Cambodia",
    title: "Preah Vihear Temple",
    description:
      "Explore the stunning Preah Vihear Temple, perched on a mountain in northern Cambodia.",
    amenities: "Temples · History · Culture",
    rating: "4.6",
    reviews: "853",
    stays: "65",
    lat: 14.3747,
    lng: 104.7392,
  },
  {
    id: 13,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Ratanakiri, Cambodia",
    title: "Virachey National Park",
    description:
      "Explore the dense jungle and wildlife of Virachey National Park.",
    amenities: "Nature · Wildlife · Adventure",
    rating: "4.8",
    reviews: "456",
    stays: "70",
    lat: 13.7483,
    lng: 106.9655,
  },
  {
    id: 14,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Phnom Penh, Cambodia",
    title: "Tuol Sleng Genocide Museum",
    description:
      "Visit the haunting site of Cambodia's tragic history during the Khmer Rouge era.",
    amenities: "History · Culture",
    rating: "4.7",
    reviews: "1021",
    stays: "80",
    lat: 11.5544,
    lng: 104.926,
  },
  {
    id: 15,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Kampong Cham, Cambodia",
    title: "Bamboo Bridge",
    description:
      "Cross the unique bamboo bridge built across the Mekong River.",
    amenities: "History · Culture · Adventure",
    rating: "4.4",
    reviews: "610",
    stays: "45",
    lat: 12.2414,
    lng: 105.4572,
  },
  {
    id: 16,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Preah Sihanouk, Cambodia",
    title: "Ream National Park",
    description:
      "Visit one of Cambodia's most biodiverse areas, offering both beaches and rainforest.",
    amenities: "Nature · Wildlife · Adventure",
    rating: "4.7",
    reviews: "1305",
    stays: "180",
    lat: 10.6132,
    lng: 103.6104,
  },
  {
    id: 17,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Koh Rong, Cambodia",
    title: "Long Set Beach",
    description:
      "A beautiful secluded beach perfect for swimming and sunbathing.",
    amenities: "Beaches · Nature · Adventure",
    rating: "4.5",
    reviews: "744",
    stays: "150",
    lat: 10.6294,
    lng: 103.425,
  },
  {
    id: 18,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Siem Reap, Cambodia",
    title: "Ta Prohm",
    description:
      "Visit the famous tree-covered temple of Ta Prohm, also known as the Tomb Raider temple.",
    amenities: "Temples · History · Culture",
    rating: "4.9",
    reviews: "1350",
    stays: "110",
    lat: 13.4131,
    lng: 103.931,
  },
  {
    id: 19,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Phnom Penh, Cambodia",
    title: "National Museum of Cambodia",
    description:
      "Explore Cambodia's rich cultural history and artifacts in this stunning museum.",
    amenities: "History · Culture",
    rating: "4.6",
    reviews: "987",
    stays: "95",
    lat: 11.5564,
    lng: 104.9282,
  },
  {
    id: 20,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Kandal, Cambodia",
    title: "Tonle Bati",
    description:
      "A serene lake and temple complex, perfect for a peaceful getaway.",
    amenities: "Nature · History · Culture",
    rating: "4.3",
    reviews: "352",
    stays: "25",
    lat: 11.372,
    lng: 105.087,
  },
  {
    id: 21,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Battambang, Cambodia",
    title: "Phnom Banan",
    description:
      "Hike to the top of Phnom Banan to see ancient temples and breathtaking views.",
    amenities: "History · Adventure · Culture",
    rating: "4.6",
    reviews: "805",
    stays: "58",
    lat: 12.6364,
    lng: 103.2294,
  },
  {
    id: 22,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Kampong Thom, Cambodia",
    title: "Sambor Prei Kuk",
    description:
      "Explore the ancient temples of Sambor Prei Kuk, a UNESCO World Heritage site.",
    amenities: "History · Culture · Adventure",
    rating: "4.7",
    reviews: "601",
    stays: "75",
    lat: 12.6923,
    lng: 104.9861,
  },
  {
    id: 23,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Ratanakiri, Cambodia",
    title: "Yak Loum Lake",
    description:
      "A volcanic lake with crystal-clear waters, perfect for swimming and picnics.",
    amenities: "Nature · Adventure · Water Activities",
    rating: "4.5",
    reviews: "489",
    stays: "60",
    lat: 13.5297,
    lng: 106.9383,
  },
  {
    id: 24,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Preah Vihear, Cambodia",
    title: "Preah Vihear Temple",
    description:
      "A stunning and historic temple complex located in the mountains.",
    amenities: "History · Culture · Adventure",
    rating: "4.8",
    reviews: "850",
    stays: "112",
    lat: 14.3852,
    lng: 104.7387,
  },
  {
    id: 25,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Preah Sihanouk, Cambodia",
    title: "Koh Rong Samloem",
    description:
      "A peaceful island getaway, known for its pristine beaches and clear waters.",
    amenities: "Beaches · Nature · Adventure",
    rating: "4.7",
    reviews: "1205",
    stays: "230",
    lat: 10.5882,
    lng: 103.4079,
  },
  {
    id: 26,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Kep, Cambodia",
    title: "Kep Beach",
    description:
      "Relax on the quiet shores of Kep Beach, with fresh seafood and a laid-back vibe.",
    amenities: "Beaches · Nature · Food",
    rating: "4.2",
    reviews: "350",
    stays: "60",
    lat: 10.4937,
    lng: 104.2988,
  },
  {
    id: 27,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Phnom Penh, Cambodia",
    title: "Wat Phnom",
    description:
      "A beautiful hilltop pagoda offering sweeping views of Phnom Penh.",
    amenities: "History · Culture · Nature",
    rating: "4.4",
    reviews: "700",
    stays: "85",
    lat: 11.5616,
    lng: 104.9285,
  },
  {
    id: 28,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Preah Sihanouk, Cambodia",
    title: "Serendipity Beach",
    description:
      "One of Preah Sihanouk's most famous beaches, perfect for lounging or beach activities.",
    amenities: "Beaches · Nature · Adventure",
    rating: "4.3",
    reviews: "920",
    stays: "180",
    lat: 10.6253,
    lng: 103.5214,
  },
  {
    id: 29,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Koh Rong, Cambodia",
    title: "Sok San Beach",
    description:
      "A quiet beach ideal for those seeking tranquility and beautiful sunsets.",
    amenities: "Beaches · Nature · Adventure",
    rating: "4.6",
    reviews: "740",
    stays: "155",
    lat: 10.5994,
    lng: 103.3807,
  },
  {
    id: 30,
    image:
      "https://cdn.britannica.com/74/5674-050-57803272/temples-complex-Angkor-Thom-Cambodia.jpg",
    location: "Battambang, Cambodia",
    title: "Banan Temple",
    description:
      "Climb the ancient steps of Banan Temple for a panoramic view of the countryside.",
    amenities: "History · Adventure · Culture",
    rating: "4.6",
    reviews: "321",
    stays: "47",
    lat: 12.5968,
    lng: 103.2422,
  },
];

export default mockDestinations;
