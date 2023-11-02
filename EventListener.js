let btn = document.getElementById("btn");
// can not take many actions on an event without using addEventListener
// btn.onclick = function () {
//   btn.style.cssText = "color:red";
// };

// btn.onclick = function () {
//   btn.style.width = "100px";
// };

//using addEventListener

btn.addEventListener("click", function () {
  btn.style.cssText = "color:red";
});
btn.addEventListener("click", function () {
  btn.style.width = "100px";
});

btn.addEventListener("click", one);

function one() {
  console.log("hello from one");
}
function tow() {
  console.log("hello from tow");
}

// now the cloned element inside the function with its event 
let btn2 = document.getElementById("btn2");
let div2 = document.getElementsByClassName("div2")[0];

// btn2.addEventListener("click", function () {
//   let x = div2.cloneNode(true);
//   document.body.appendChild(x);
//   x.onclick = one;
// });

// its work with onclick cause the cloned element inside the function also
// btn2.onclick = function () {
//   let x = div2.cloneNode(true);
//   document.body.appendChild(x);
//   x.onclick = one;
// };

// now the cloned element outside the function :
btn2.addEventListener("click", function () {
    let x = div2.cloneNode(true);
    x.className = "div2-cloned";
    document.body.appendChild(x);
  });

  // the important use of addEventListener to make an action on uncreated element yet
  document.addEventListener("click", function (e) {
    if(e.target.className === "div2-cloned"){
        one();
    }
  })
