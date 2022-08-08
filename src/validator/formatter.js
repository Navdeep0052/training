const str ="  navdeep   sharma  "
const result = str.trim();
console.log("Trimmed value :",result);
module.exports.result = result ;

const result2 = result.toLocaleLowerCase();
console.log("All in lower case :", result2);
module.exports.result2 = result2 ;

const result3 = result.toLocaleUpperCase();
console.log("All in upper case :", result3);
module.exports.result3 = result3 ;