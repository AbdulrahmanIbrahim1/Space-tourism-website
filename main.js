// let req = new XMLHttpRequest()
// req.open("GET", "data.json") // (type of request & url)
// req.send() // to send request 
// // req.onreadystatechange = function () {
// //   console.log(req.responseText)
// // }
// let des = new Object()
// let myob = new Object();
// req.onload = function () {  //this fun same the onreadystatechange but 
//   let myRes =req.responseText;
//   console.log(JSON.parse(myRes))
//   myob = JSON.parse(myRes)
//   console.log(myob["destinations"])
//   des = myob["destinations"]
// }

let ul = document.querySelector('[id="change"]');
let li = document.querySelectorAll('[class="myli"]');
let txt=" "

function nameDes (){
  let fTxt= new Object()
  for(let i=0 ;i<li.length;i++){
    li[i].onclick=()=>{
      for (let j = 0; j < li.length; j++){
        if(i==j)
          continue
        removeActive(li)
      }
      li[i].classList.add("active");
      txt = li[i].innerHTML
      console.log(txt)
      for (let k = 0; k < 4; k++) {
        if (txt == des[k]["name"]) {
          console.log(`this ${txt} => ${k}`)
          fTxt = des[k]
          console.log(fTxt);
          document.getElementById("name").innerHTML = des[k]["name"]
          document.getElementById("description").innerHTML = des[k]["description"]
          document.getElementById("distance").innerHTML = des[k]["distance"]
          document.getElementById("travel").innerHTML = des[k]["travel"]
          document.getElementById("myimg").src = des[k]["images"]["png"]
        }
      }
    }
  }
return fTxt;
}

let objtxt= nameDes()
console.log(`the obj txt is => ${objtxt}`)


function removeActive(li){
  for(let i=0 ;i<li.length;i++){
    li[i].classList.remove("active");
  }
}

