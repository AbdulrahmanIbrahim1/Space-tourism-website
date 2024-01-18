let req = new XMLHttpRequest()
req.open("GET", "data.json") // (type of request & url)
req.send() // to send request 
// req.onreadystatechange = function () {
//   console.log(req.responseText)
// }
let des = new Object()
let myob = new Object();
req.onload = function () {  //this fun same the onreadystatechange but 
  let myRes = req.responseText;
  console.log(JSON.parse(myRes))
  myob = JSON.parse(myRes)
  console.log(myob["destinations"])
  des = myob["destinations"]
}
