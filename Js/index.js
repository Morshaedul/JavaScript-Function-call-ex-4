const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  document.getElementById("demo").innerHTML = person.fullName.call(person1, "Oslo", "Norway"); 







// var date =new Date();
// var currentDate=date.getFullYear();
// var Date=date.getDay();
// document.write(currentDate);
// document.write(date);