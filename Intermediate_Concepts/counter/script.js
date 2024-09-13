var counter = document.querySelector("#count");
var followers = document.querySelector(".followers");

counter.innerText = 1000;

let count = 1;
setInterval(() => {
    if(count < 1000) {
    count++;
    counter.innerText = count;
    }
}, 1);

setTimeout(() => {
    followers.innerText = "Followers in Twitter";
}, 10000);

