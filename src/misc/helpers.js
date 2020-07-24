
/**Converts to [Date] object from a string. */
function toDate(dateArray) {
    var dt = new Date(dateArray[2] + "/" +dateArray[1] + "/"+ dateArray[0]);
    return dt;
 
 }
 
 /**Compares between the selected date and the available activity periods. */
const compareAndList = (activity_periods, selectedDate) => {
     var resultString = "";
     activity_periods.map((period) => {
         const time = toDate(period.start_time.split(' ')),
         year = time.getUTCFullYear(),
         month = time.getUTCMonth(),
         day = time.getUTCDay(),
         selectedYear = selectedDate.getUTCFullYear(),
         selectedMonth = selectedDate.getUTCMonth(),
         selectedDay = selectedDate.getUTCDay();
         // Compares for equality.
         if(year === selectedYear && month === selectedMonth && day === selectedDay) {
             resultString = resultString + "\n" + 
             period.start_time.replace(/  +/g, ' ').split(' ')[3] + " to" + " " + 
             period.end_time.replace(/  +/g, ' ').split(' ')[3]
         }
     })
     // Update the DOM with the time ranges for the selected date.
     console.log(resultString);
     document.getElementById("content").innerHTML = resultString;
 
 }

 export default compareAndList;