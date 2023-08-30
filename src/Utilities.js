// var total = 0;
export const MRKColumn = () => {
  return [
    { header: "Name", key: "name" },
    { header: "Age", key: "age" },
    { header: "Location", key: "location" },
  ];
};
export const MRKRows = () => {
  return [
    { time_to_draw: "John Doe" },
    { dr_time: "Jane Smith" },
    { dr_date: "Jane Smith" },
    { balance_cradit: "Jane Smith" },
    { last_tr_no: "Jane Smith" },
    { last_tr_pt: "Jane Smith" },
  ];
};
export const HistoryRows = [
  { userName: "User Name" },
  { DrDate: "Dr Date" },
  { DrTime: "Dr Time" },
  { game: "Game Type" },
  { startPoint: "Start Point" },
  { winPosition: "Win Position" },
  { bet: "Bet" },
];

// export const getTotalPrice = async (array) => {
//   total =0
//   if (array) {
//     return array.filter(async(item) => {
//       if(item.price){
//         total = total + +item.price
//       }
//     });
//   }
//   return total;
// };

// export const totalPrice = () =>{
//   return total
// }