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