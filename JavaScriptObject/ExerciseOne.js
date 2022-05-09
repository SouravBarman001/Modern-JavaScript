// use const when you declearing an object

const car = {
    name : "BMW",
    model : 500,
    weight : "850kg",
    color : "white",
    start : function() // object method
    {   this.drive();
        console.log("car has started");
    },
    drive : function()  // object method
    {
        console.log("car is driving");
    },
    fullname : function(){
        return "name is "+this.name+" and model is "+this.model;

    }
};

// accessing the properties
// value and function --- called object method
console.log(car['name']);
// car.start();
// var fullname = car.fullname();
// console.log(fullname);
car.start();

// If you access a method without the () parentheses, it will return the function definition
// var nam = car.name;
// console.log(nam);
