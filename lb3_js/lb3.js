function filterArray(arr) {
    return arr.filter(function (number) {
      return number % 2 === 0;
    });
  }
  
  console.log(filterArray([1, 2, 3, 4, 5, 6]));
  
  ///////////////////////
  function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isLeap(2020));
  console.log(isLeap(1900)); 
  console.log(isLeap(2000)); 
  console.log(isLeap(2023));
  
  ///////////////////////////////
  function groupByAge(people) {
    return people.reduce((result, person) => {
      if (!result[person.age]) {
        result[person.age] = [];
      }
      result[person.age].push(person.name);
      return result;
    }, {});
  }
  
  const people = [
    { name: "Oleg", age: 25 },
    { name: "Alla", age: 30 },
    { name: "Peter", age: 25 },
    { name: "Ivan", age: 30 }
  ];
  
  console.log(groupByAge(people));
  