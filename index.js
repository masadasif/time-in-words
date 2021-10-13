function convertTimeToWords(input) {

    if (input.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)){

        var conversions = { 
            0 : "oh",
            1 : "one",
            2 : "two", 
            3 : "three", 
            4 : "four", 
            5 : "five", 
            6 : "six", 
            7 : "seven", 
            8 : "eight", 
            9 : "nine", 
            10 : "ten", 
            11 : "eleven", 
            12 : "twelve", 
            13 : "thirteen", 
            14 : "fourteen", 
            15 : "fifteen", 
            16 : "sixteen", 
            17 : "seventeen", 
            18 : "eighteen", 
            19 : "nineteen", 
            20 : "twenty", 
            30 : "thirty",
            40 : "forty",
            50 : "fifty"
        };
        
        var timeArray = input.split(":");
        var enteredHour =  timeArray[0];
        var enteredMin = timeArray[1];
    
        function calculateAmPm(hour) {
            var result = ""
            if (hour > 11){
                result = "pm";
            } else {
                result = "am";
            }
            return result;
        }
    
        function calculateHours(hour){
            var result = "";
            if (hour > 12 || hour == 0){
                hour = 12 - hour
                result = conversions[Math.abs(hour)]
            } else{
                result = conversions[hour];
            }
            return result;
        }
    
        function calculateMins(min){
            var result = ""
            if (min == 0){
                result = "";
            } else if (min >= 1 && min <= 9){
                result = ` ${conversions[min[0]]} ${conversions[min[1]]}`;
            } else if (min >= 10 && min <= 19){
                result = ` ${conversions[min]}`;
            } else if (min == 20 || min == 30 || min == 40 || min == 50){ 
                result = ` ${conversions[parseInt(min)]}`;
            } else {
                result = ` ${conversions[parseInt(min) - parseInt(min[1])]} ${conversions[min[1]]}`;
            }
            return result;
        }
    
        console.log("It's " + calculateHours(parseInt(enteredHour)) + calculateMins(enteredMin) + " " + calculateAmPm(parseInt(enteredHour))); 

    } else {
        console.log("Invalid Input");
    }
} 

// Output 
convertTimeToWords("00:00");
convertTimeToWords("01:30");
convertTimeToWords("12:05");
convertTimeToWords("14:01");
convertTimeToWords("20:29");
convertTimeToWords("21:00");