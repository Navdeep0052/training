// let axios = require("axios");
// const router = require("../routes/route");

// //============================================= question no 2 Current weather data =======================================================//

// let weather = async function (req, res) {
//   try {
//     let citys = [
//       "Bengaluru",
//       "Mumbai",
//       "Delhi",
//       "Kolkata",
//       "Chennai",
//       "London",
//       "Moscow",
//     ];
//     let cityarray = [];
//     for (i = 0; i < citys.length; i++) {
//       let object = { city: citys[i] };
//       let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${citys[i]}&appid=e25ff8f327470a6db8b4c8a58473a313`);
//       object.temp = result.data.main.temp;
//       cityarray.push(object);
//     }
//     let short=cityarray.sort(function(a,b){return a.temp - b.temp})

   
//     res.status(200).send({ data: short, status:true });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ msg: err.message });
//   }
// };
// module.exports.weather=weather