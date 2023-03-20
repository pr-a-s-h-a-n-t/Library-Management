console.log("hii ✋, I am prashant!");

let wrapper = document.getElementById("cards_wrapper");

//  data

 
    let hotels =  [
      {
        "name": "Grand Hotel",
        "location": "New York",
        "rooms": [
          {
            "room_type": "Single",
            "price_per_night": 100,
            "available_dates": ["2023-04-01", "2023-04-02", "2023-04-03"]
          },
          {
            "room_type": "Double",
            "price_per_night": 150,
            "available_dates": ["2023-04-01", "2023-04-03", "2023-04-04"]
          },
          {
            "room_type": "Suite",
            "price_per_night": 300,
            "available_dates": ["2023-04-01", "2023-04-02", "2023-04-04"]
          }
        ]
      },
      {
        "name": "Beach Resort",
        "location": "Miami",
        "rooms": [
          {
            "room_type": "Single",
            "price_per_night": 80,
            "available_dates": ["2023-04-01", "2023-04-03", "2023-04-04"]
          },
          {
            "room_type": "Double",
            "price_per_night": 120,
            "available_dates": ["2023-04-01", "2023-04-02", "2023-04-04"]
          },
          {
            "room_type": "Suite",
            "price_per_night": 250,
            "available_dates": ["2023-04-02", "2023-04-03", "2023-04-04"]
          }
        ]
      }
    ]
  