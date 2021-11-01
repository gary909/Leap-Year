function leapYear(year){
    if((year % 4) == 0 && (year % 100) !== 0 || (year % 400) == 0){
        return "Leap year.";
    } else {
        return "Not leap year.";
    }
}

console.log(leapYear(2000)); // return Leap Year
console.log(leapYear(2004)); // return Leap Year
console.log(leapYear(2008)); // return Leap Year
console.log(leapYear(2012)); // return Leap Year
console.log(leapYear(2013)); // return Not Leap Year
console.log(leapYear(2014)); // return Not Leap Year
console.log(leapYear(1948)); // return Leap Year

//year % 4 == 0 && year % 100 == 0 && year % 400 == 0