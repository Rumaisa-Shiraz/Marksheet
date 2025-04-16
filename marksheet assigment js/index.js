let name=prompt("ENTER YOUR NAME");
console.log("YOUR NAME=", name );
let roll=prompt("ENTER YOUR ROLL NUMBER");
console.log("YOUR ROLL NUMBER=", roll );
let eng=parseInt(prompt("ENTER YOUR ENGLISH MARKS"));
console.log("YOUR ENGLISH MARKS=", eng );
let phy=parseInt(prompt("ENTER YOUR PHYSICS MARKS"));
console.log("YOUR PHYSICS MARKS=", phy );
let chem=parseInt(prompt("ENTER YOUR CHEMISTRY MARKS"));
console.log("YOUR CHEMISTRY MARKS=",chem  );
let bio=parseInt(prompt("ENTER YOUR BIOLOGY MARKS"));
console.log("YOUR BIOLOGY MARKS=", bio);
let urd=parseInt(prompt("ENTER YOUR URDU MARKS"));
console.log("YOUR URDU MARKS=", urd );
let total=500;
let n1=100;
let  marks=eng+phy+chem+bio+urd;
let per=(marks/total)*n1;
console.log("YOUR PERCENTAGE=", per);

let grade;
if(per >=80){
    grade="A+";
}
else if(per >=70){
    grade="A";
}
else if(per >=60){
    grade="B";
}
else if(per >=50){
    grade="C";
}
else if(per >=30){
    grade="D";
}
else{
    grade="F";
}
console.log("Your Grade=", grade);
let result;
if(per>=30){
    result="PASS"
}
else{
    result="FAIL"
}
console.log("Result=", result);
alert(`Name : ${name}\nRoll Number : ${roll} \nTotal Marks : ${marks} \nPercentage : ${per}\nGrade : ${grade} \nResult : ${result}`);
console.log(name,roll,marks,per,grade,result);