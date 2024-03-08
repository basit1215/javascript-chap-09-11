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

var sub_one_t_m= +prompt("Enter first subject total marks");
var sub_one_o_m= +prompt("Enter first subject obtained marks");
var sub_two_t_m= +prompt("Enter second subject total marks");
var sub_two_o_m= +prompt("Enter second subject obtained marks");
var sub_three_t_m= +prompt("Enter three subject total marks");
var sub_three_o_m= +prompt("Enter three subject obtained marks");
var totalMarks=sub_two_t_m+sub_one_t_m+sub_three_t_m;
document.write("Total Marks: " + totalMarks + "<br>");
var obtainedMarks=sub_one_o_m+sub_two_o_m+sub_three_o_m;
document.write("Marks Obtained: " + obtainedMarks + "<br>");
percentage=(obtainedMarks/totalMarks)*100;
document.write("Percentage: " + percentage + "%" + "<br>");
if(percentage>=80){
    document.write("Grade: A-one" + "<br>");
    document.write("Remarks: Excellent" + "<br>");
}
if(percentage>70){
    document.write("Grade: A" + "<br>");
    document.write("Remarks: Good" + "<br>");
}
if(percentage>60){
    document.write("Grade: B" + "<br>");
    document.write("Remarks: You need to improve" + "<br>");
}
if(percentage<60){
    document.write("Grade: Fail" + "<br>");
    document.write("Remarks: Sorry" + "<br>");
}

var number=9;
var surprise_num= +prompt("Guess the secret number, Enter a number from 1 to 10")
if(surprise_num===9){
    alert("“Bingo! Correct answer”");
}
else if(surprise_num=8){
    alert("“Close enough to the correct answer”");
}
else{
    alert("Sorry to say, You can't guess the number");
}

var checkDivisible= +prompt("enter any number that divides by three, if possible to divide then i provide  answer");
if(checkDivisible % 3===0){
    alert("The number is divisible by 3")
}
else{
  alert( "The number is not divisible by 3") ;
}

var check_odd_even= +prompt("Enter a number i will tell you the number is Ood or even");
if (check_odd_even % 2 == 0){
    alert(check_odd_even + " is Even")
}
else{
    alert(check_odd_even + " is Odd")
}
 



 
