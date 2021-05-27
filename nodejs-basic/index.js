const message = (name) => {
    console.log(`Hello ${name}`);
}

message('javascript');



const moment = require('moment');
const date = moment().format("MMM Do YY");
console.log(date);