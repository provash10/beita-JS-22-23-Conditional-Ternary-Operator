// var age = 20;

// age >= 18 ? document.write("Yes, You can Vote") : document.write("No! You can not Vote.")


// var i;
// for( i = 1; i<=20; i++){
//     if(i%2 == 1){
//         document.write(i, "<br>");
//     }
// }

function oddName(){
    var i;
for( i = 1; i<=20; i++){
    if(i%2 == 1){
        document.write(i, "<br>");
    }
}

}
oddName();

// Again
var x = customFunction(5,6);
function customFunction(a,b){
    return a*b;
}

document.getElementById("demo").innerHTML = x;