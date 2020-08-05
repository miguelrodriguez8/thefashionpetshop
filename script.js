console.log("Executed");

// object literal for the salon
const salon={
    name:"The Fashion Pet",
    phone:"222-222-2222",
    address:{
        city:"San Diego",
        ave:"Calle Sol",
        number:"125-k"
    },
    pets:[]
}

console.log(salon);

let {name,phone,address:{city,ave,number}}= salon;
console.log(ave);

//document.getElementById('info').innerHTML="<p>"+name+"<b>"+city+"</b> </p>";

document.getElementById("info").innerHTML=` 
    <p class="footer-info"> ${name}
        <b> ${city}, ${ave} ${number} </b>
        <br> ${phone}
        </p>       
        `;  //template string

//object constructor for the pets
class Pet{
    constructor(name,age,type,breed,gender,service,ownersName,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;


    }
}

const scooby=new Pet("Scooby",50,"Dog","Dane","Male","Full Service","Shaggy","555-556-6677");
console.log(scooby);
const scrapy=new Pet("Scrapy",35,"Dog","Dane","Male","Nails cut","Shaggy","555-556-6677");
console.log(scrapy);
const Lazie=new Pet("Lazie",20,"Dog","Pitbull","female","Full Service","Dude","555-556-7788");
console.log(Lazie)
const Markie=new Pet("Markie",23,"Cat","siamese","Male","Haircut","Billy","223-556-6677");
console.log(Markie)



//add pets to the array

salon.pets.push(scooby);
salon.pets.push(scrapy);
salon.pets.push(Lazie);
salon.pets.push(Markie);

console.log(salon.pets.length); // display the number of elements in the array 

// print the name of the 4 pets

//alert(salon.name);
//alert(salon.name)

var pets = ["scooby","scrapy","Lazie","Markie"];
alert(pets);
console.log(pets);


// use the for loop