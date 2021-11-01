function leapYear(year){
    if (year % 4 == 0){
        return "Leap Year";
    } else {
        return "Not Leap Year";
    }
}

console.log(leapYear(2000));