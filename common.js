function greet(){
console.log("hello");
}
greet();
function areaOfCircle(radius){
    let area = 3.14*radius*radius;
    console.log("area of circle is :",area);
}

areaOfCircle(5);

function circumference(radius){
    let circum = 2*3.14*radius;
    console.log("circumference of circle is :",circum);
}

circumference(5);

module.exports = {greet,areaOfCircle,circumference};
export default {areaOfCircle};
