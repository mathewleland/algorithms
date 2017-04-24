// PROBLEM:
// Given a time in -hour AM/PM format, convert it to military (-hour) time.
//
// Note: Midnight is  on a -hour clock, and  on a -hour clock. Noon is  on a -hour clock, and  on a -hour clock.
//
// Input Format
//
// A single string containing a time in -hour clock format (i.e.:  or ), where  and .
//
// Output Format
//
// Convert and print the given time in -hour format, where .
//
// Sample Input
//
// 07:05:45PM
// Sample Output
//
// 19:05:45

function main() {
    var time = readLine();
    time = time.split(':');
    if (time[2].slice(2) == "PM" && time[0] != "12") {
        time[0] = Number(time[0]) + 12;
    }
    else if (time[2].slice(2) == "AM" && time[0] == 12) {
        time[0] = "00";
    }
    time[2] = time[2].slice(0,2);
    
    console.log(time.join(':'));

}
