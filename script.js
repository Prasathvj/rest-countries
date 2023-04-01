var container=document.createElement("div");
container.className="container";
var row =document.createElement("div");
row.className="row"
container.append(row);

//Multiple api with async and await
async function getdata(){
    var res=await fetch("https://restcountries.com/v2/all");
    var res1= await res.json();

    for(var i=0;i<res1.length;i++){
        try {
            row.innerHTML +=`
            <div class="col-lg-4 col-sm-12">
            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header"> ${res1[i].name}</div>
            <img src="${res1[i].flag}" class="card-img-top" alt="country flag">
            <div class="card-body">
            <p class="card-text">Region:${res1[i].region}</p>
            <p class="card-text1">Capital:${res1[i].capital}</p>
            <p class="card-text2">Country Code: ${res1[i].cioc}</p>
            <button id="demo" onclick="myFunction()" class="btn btn-outline-dark">Click for Weather</button>
            

      </div>  
           </div>
           </div> 
            
            ` 
            // console.log(`Latitude:${res1[i].latlng[0]} Longitude:${res1[i].latlng[1]}`);
            my(res1[i].latlng[0],res1[i].latlng[1]);
        

        } 
   catch (error) {
    console.log(error);
  }
}
}
async function my(lat,lon){
try {
    if(lon===undefined) throw new Error("Invalid Coordinates");
    console.log(lat,lon);
    let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa4973b1fa1ca717811b9566c55321ec`);
    let res3=await res2.json();
    console.log(`${res3.main.temp}`);

    



} catch (error) {
   console.log(error) 
}

}
document.body.append(container)
getdata();















// var res=fetch("https://restcountries.com/v2/all");
// res.then((data)=>data.json())
// .then((data1)=>foo(data1))
// .catch((error)=>console.log(error));

// function foo(data1){
//     console.log(data1);
//     for(var i=0;i<data1.length;i++){
//         row.innerHTML +=`
//         <div class="col-lg-4 col-sm-12">
//         <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
//         <div class="card-header"> ${data1[i].name}</div>
//         <img src="${data1[i].flag}" class="card-img-top" alt="country flag">
//         <div class="card-body">
//         <p class="card-text">Region:${data1[i].region}</p>
//         <p class="card-text1">Capital:${data1[i].capital}</p>
//         <p class="card-text2">Country Code: ${data1[i].population}</p>
//         <button onclick="myFunction()" class="btn btn-outline-dark">Click for Weather</button>
//   </div>  
//        </div>
//        </div> 
        
//         ` 
//     }
//     document.body.append(container)
// }
