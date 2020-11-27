
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import makkah from "./images/makkah.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "DELUXE ROOM",
      slug: "single-economy",
      type: "single",
      price: 100,
      size: 365,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Comfort is an art perfected in our Deluxe Rooms, from the bliss of a divine bed through to the joy of a luxury marble bathroom.",
      extras: [
        "Queen or twin beds",
        "City or Nile view",
        "Two-seat sofa bed",
        "Complimentary Wi-Fi",
        "Adequate safety/security",
        "Work space",
        "Mini bar"
      ],
      images: [
        {
          fields: {
            file: {
              url: makkah
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "EXECUTIVE ROOM",
      slug: "single-basic",
      type: "single",
      price: 150,
      size: 484,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Undeniable beauty, sublime comfort and enough space for a relaxing stay. Plus, the added luxury of the Executive Club Lounge.",
      extras: [
        "King bed",
        "City or Nile views",
        "VIP gifts",
        "Complimentary Wi-Fi",
        "Adequate safety/security",
        "Two-seat sofa bed",
        "Flat screen TV",
        "Luxurious bathroom products"
      ],
      images: [
        {
          fields: {
            file: {
              url: makkah
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "EXECUTIVE SUITE",
      slug: "single-standard",
      type: "single",
      price: 250,
      size: 753,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "A car with driver ready to transport you to the luxurious surroundings of Corinthia - undoubtedly the best way to start your stay. Upon arrival, the splendour continues with a meticulously designed suite complete with dining table, desk and, of course, the most comfortable king bed. When the serenity of the Executive Club Lounge beckons, retreat to the 6th floor for refreshments and impeccable service. This meticulously designed suite complete with dining table, desk and, of course, the most comfortable king bed.",
      extras: [
        "King bed",
        "Living area",
        "VIP gifts",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Complimentary Wi-Fi",
        "Luxurious bathroom products"
      ],
      images: [
        {
          fields: {
            file: {
              url: makkah
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "MINISTERIAL SUITE",
      slug: "single-deluxe",
      type: "single",
      price: 300,
      size: 999,
      capacity: 4,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "When only the best will do, the finest suite in the entire hotel is waiting. A residence like no other, where space is in no short supply. Twin sinks, a massage shower and a Jacuzzi bath populate the vast marble-clad bathroom and the living space is home to a table for decadent dining table and lounge area for sublime relaxation. Time is occupied by the imposing panorama at the window or a venture to the Executive Club Lounge for complimentary snacks. But your 24-butler is on hand, should you wish to do very little instead. The commanding excellence of a minister and the sublime comfort of a five-star suite, this is a place to call home for however long you need.",
      extras: [
        "King bed and twin beds",
        "Soft, oversized bath towels",
        "Living area",
        "Two bedrooms",
        "Adequate safety/security",
        "Internet",
        "Jacuzzi bath",
        "24-hour butler service",
        "Dining room"
      ],
      images: [
        {
          fields: {
            file: {
              url: makkah
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "PRESIDENTIAL SUITE",
      slug: "presidential-room",
      type: "presidential",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "When only the best will do, the finest suite in the entire hotel is waiting. A residence like no other, where space is in no short supply. Twin sinks, a massage shower and a Jacuzzi bath populate the vast marble-clad bathroom and the living space is home to a table for decadent dining table and lounge area for sublime relaxation. Time is occupied by the imposing panorama at the window or a venture to the Executive Club Lounge for complimentary snacks. But your 24-butler is on hand, should you wish to do very little instead.",
      extras: [
        "Nile View",
        "Two bedrooms",
        "Fully-equipped kitchen",
        "Living room",
        "Jacuzzi bath",
        "King bed and twin beds",
        "Internet",
        "Dining room",
        "24-hour butler service"
      ],
      images: [
        {
          fields: {
            file: {
              url: makkah
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  }
];
