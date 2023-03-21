console.log("hii ✋, I am prashant!");

// let wrapper = document.getElementById("cards_wrapper");

//  data

let hotels = [
  {
    name: "Grand Hotel",
    location: "New York",
    rooms: [
      {
        room_type: "Single",
        price_per_night: 100,
        available_dates: ["2023-04-01", "2023-04-02", "2023-04-03"],
      },
      {
        room_type: "Double",
        price_per_night: 150,
        available_dates: ["2023-04-01", "2023-04-03", "2023-04-04"],
      },
      {
        room_type: "Suite",
        price_per_night: 300,
        available_dates: ["2023-04-01", "2023-04-02", "2023-04-04"],
      },
    ],
  },
  {
    name: "Beach Resort",
    location: "Miami",
    rooms: [
      {
        room_type: "Single",
        price_per_night: 80,
        available_dates: ["2023-04-01", "2023-04-03", "2023-04-04"],
      },
      {
        room_type: "Double",
        price_per_night: 120,
        available_dates: ["2023-04-01", "2023-04-02", "2023-04-04"],
      },
      {
        room_type: "Suite",
        price_per_night: 250,
        available_dates: ["2023-04-02", "2023-04-03", "2023-04-04"],
      },
    ],
  },
];

//fetch data
//getElelmentbyId()

// <div class="card rounded border-0 " style="width: 25%">
//                     <img src="./assets/icon_1.webp" class="card-img-top rounded-30 h-75" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">Lonavla, India</h5>
//                         <h6>58 Kilometers away</h6>
//                         <h5> $ 150 night </h5>
//                     </div>
//                 </div>
// location.reload();
const wrapper = document.getElementById("cards_wrapper");
console.log(wrapper);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((ele) => {
//   return (wrapper.appendChild = `<div class="card rounded border-0 " style="width: 25%">
//         <img src="./assets/icon_1.webp" class="card-img-top rounded-30 h-75" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Lonavla, India</h5>
//             <h6>58 Kilometers away</h6>
//             <h5> ${ele} night </h5>
//         </div>
//     </div> `);
// });
 

function createMenuItem(name) {
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
wrapper.appendChild(createMenuItem('card_1'));
wrapper.appendChild(createMenuItem('card_2'));
wrapper.appendChild(createMenuItem('card_3'));
wrapper.appendChild(createMenuItem('card_4'));
wrapper.appendChild(createMenuItem('card_5'));
wrapper.appendChild(createMenuItem('card_6'));
