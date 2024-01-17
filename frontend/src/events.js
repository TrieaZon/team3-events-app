const events = [
  {
    _id: "1",
    name: "Happy Hour Social",
    date: "2/6/2024",
    startTime: "4:00 p.m.",
    endTime: "7:00 p.m.",
    venue: "Metier Brewing Company Taproom",
    address: "2616 East Cherry Street",
    city: "Seattle",
    state: "WA",
    zipCode: 98122,
    headline: "Happy hours specials",
    description: "Happy hours specials",
    category: ["Food & Drinks"],
    tags: ["food", "Seattle events", "happy hour"], 
    image: "/image/bar-eating-ah.jpg",
    numLikes: 23,
    costYes: false,
    minCost: 0,
    countTickets: 100,
  },
  {
    _id: "2",
    name: "Open Mic Night",
    date: "2/9/2024",
    startTime: "7:00 p.m.",
    endTime: "11:00 p.m.",
    venue: "Esquire Club",
    address: "5016 Rainier Ave S.",
    city: "Seattle",
    state: "WA",
    zipcode: 98118,
    headline: "Open mic and art collective",
    description: "Open mic and art collective",
    category: ["Nightlife", "Music", "Performing & Visual Arts"], 
    tags: ["Seattle events", "music", "open mic", "art", "community"],
    image: "/image/club-ap.jpg",
    numLikes: 48,
    costYes: true,
    minCost: 15.00,
    ticketNum: 75,
  },
  {
    _id: "3",
    name: "Winter Music Fest",
    date: "2/10/2024",
    startTime: "4:00 p.m.",
    endTime: "12:00 a.m.",
    venue: "Showbox",
    address: "1426 1st Ave.",
    city: "Seattle",
    state: "WA",
    zipcode: 98101,
    headline: "Music festival",
    description: "Lineup includes...",
    category: ["Music"], 
    tags: ["Seattle events", "music", "festival", "hip hop", "pop", "indie"],
    image: "/image/concert-et.jpg",
    numLikes: 55,
    costYes: false,
    minCost: 45.00,
    countTickets: 500,
  },
]

export default events