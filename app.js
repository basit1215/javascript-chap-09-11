var city_name= prompt("Enter your city Name:");
if (city_name==="karachi"){
    alert("“Welcome to city of lights”");
}
else{
    alert("Only enter karachi");
}

var gender= prompt("Enter your Gender:");
if (gender=== "male"){
    alert("Good Morning Sir");
}

 else if (gender==="female") {
    alert("Good Morning Ma’am");
}
else{
    alert("Enter only gender...")
}

var signal_color= prompt("Enter color of road traffic signal");
if (signal_color==="red"  
 ){
    alert("Must Stop");
}
else if(signal_color==="yellow"){
    alert("Ready to move");
}
else if(signal_color==="green"){
    alert("Move now");
}
else{
    alert("Only red, yellow, green...")
}

var car_fuel=prompt("Enter Your Remaining Car Fuel");
if (car_fuel<= 0.25  ){
    alert("Please refill the fuel in your car!!");
}
else if(car_fuel> 0.25){
    alert("Please Refill Your Car Fuel before 0.25 litres...")
}

var a=20;
if(++a===21){
    alert("Given condition for variable a is true");
}

var b=60;
if (b++===61){
    alert("Given condition for variable b is true");
}

var c=95;
if(c++===95){
    alert("Condition 1 is true");
}
if(c===96){
    alert("Condition 2 is true");
}
if(++c<98){
    alert("Condition 3 is true");
}
if(c===97){
    alert("Condition 4 is true");
}
if(++c<=98){
    alert("Condition 5 is true");
}

var material_cost=25000;
var laber_cost=3000;
var total_cost=material_cost + laber_cost;
if(total_cost){
    alert("The Cost Equals");
}

if(true){
    alert("true");
}

if(false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}



 
