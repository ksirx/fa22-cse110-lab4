/*Part 2 Q18*/

/*
 * Does:
 * Prints one instance of the time.
 */
function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

/*
 * Repeats the printTime function every second
 */
setInterval(printTime , 1000);