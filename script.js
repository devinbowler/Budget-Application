 var overlay = document.getElementById("inputOverlay");
var monthTest = document.getElementById("monthTest");
var calendarBody = document.getElementById("grid-container");
var monthTitle = document.getElementById("month");
var firstTitle = document.getElementById("firstTitle");
var arrow = document.getElementById("thick-arrow-down");
var calc = document.getElementById("calculate");


var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var number3 = document.getElementById('num3');
var number4 = document.getElementById('num4');
var number5 = document.getElementById('num5');
var number6 = document.getElementById('num6');
var number7 = document.getElementById('num7');
var number8 = document.getElementById('num8');
var number9 = document.getElementById('num9');
var number10 = document.getElementById('num10');
var number11 = document.getElementById('num11');
var number12 = document.getElementById('num12');
var number13 = document.getElementById('num13');
var number14 = document.getElementById('num14');
var number15 = document.getElementById('num15');
var number16 = document.getElementById('num16');
var number17 = document.getElementById('num17');
var number18 = document.getElementById('num18');
var number19 = document.getElementById('num19');
var number20 = document.getElementById('num20');
var number21 = document.getElementById('num21');
var number22 = document.getElementById('num22');
var number23 = document.getElementById('num23');
var number24 = document.getElementById('num24');
var number25 = document.getElementById('num25');
var number26 = document.getElementById('num26');
var number27 = document.getElementById('num27');
var number28 = document.getElementById('num28');
var number29 = document.getElementById('num29');
var number30 = document.getElementById('num30');
var number31 = document.getElementById('num31');
var number32 = document.getElementById('num32');
var number33 = document.getElementById('num33');
var number34 = document.getElementById('num34');
var number35 = document.getElementById('num35');
var number36 = document.getElementById('num36');
var number37 = document.getElementById('num37');
var number38 = document.getElementById('num38');
var number39 = document.getElementById('num39');
var number40 = document.getElementById('num40');
var number41 = document.getElementById('num41');
var number42 = document.getElementById('num42');


var day1 = document.getElementById('day1');
var day2 = document.getElementById('day2');
var day3 = document.getElementById('day3');
var day4 = document.getElementById('day4');
var day5 = document.getElementById('day5');
var day6 = document.getElementById('day6');
var day7 = document.getElementById('day7');
var day8 = document.getElementById('day8');
var day9 = document.getElementById('day9');
var day10 = document.getElementById('day10');
var day11 = document.getElementById('day11');
var day12 = document.getElementById('day12');
var day13 = document.getElementById('day13');
var day14 = document.getElementById('day14');
var day15 = document.getElementById('day15');
var day16 = document.getElementById('day16');
var day17 = document.getElementById('day17');
var day18 = document.getElementById('day18');
var day19 = document.getElementById('day19');
var day20 = document.getElementById('day20');
var day21 = document.getElementById('day21');
var day22 = document.getElementById('day22');
var day23 = document.getElementById('day23');
var day24 = document.getElementById('day24');
var day25 = document.getElementById('day25');
var day26 = document.getElementById('day26');
var day27 = document.getElementById('day27');
var day28 = document.getElementById('day28');
var day29 = document.getElementById('day29');
var day30 = document.getElementById('day30');
var day31 = document.getElementById('day31');
var day32 = document.getElementById('day32');
var day33 = document.getElementById('day33');
var day34 = document.getElementById('day34');
var day35 = document.getElementById('day35');
var day36 = document.getElementById('day36');
var day37 = document.getElementById('day37');
var day38 = document.getElementById('day38');
var day39 = document.getElementById('day39');
var day40 = document.getElementById('day40');
var day41 = document.getElementById('day41');
var day42 = document.getElementById('day42');

var January = [1, 2, 3, 4, 5, 6, 7, 
               8, 9, 10, 11, 12, 13, 14, 
               15, 16, 17, 18, 19, 20, 21,
               22, 23, 24, 25, 26, 27, 28, 
               29, 30, 31 ,0, 0, 0, 0, 
               0, 0, 0, 0, 0, 0, 0];

var Febuary = [0, 0, 0, 1, 2, 3, 4, 5,
               6, 7, 8, 9, 10, 11, 12,
               13, 14, 15, 16, 17, 18, 19,
               20, 21, 22, 23, 24, 25 ,26,
               27, 28, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0];

var March = [0, 0, 0, 1, 2, 3, 4, 5,
             6, 7, 8, 9, 10, 11, 12,
             13, 14, 15,16, 17, 18, 19,
             20, 21, 22, 23, 24, 25 ,26,
             27, 28, 29, 30, 31, 0 ,0,
             0, 0, 0, 0, 0, 0];

var April = [0, 0, 0, 0, 0, 0, 1, 2,
             3, 4, 5, 6, 7, 8, 9,
             10, 11, 12, 13, 14, 15, 16,
             17, 18, 19, 20, 21, 22, 23,
             24, 25 ,26, 27, 28, 29, 30,
             0, 0, 0, 0, 0, 0];

var May = [0, 1, 2, 3, 4, 5, 6, 7,
           8, 9, 10, 11, 12, 13, 14,
           15,16, 17, 18, 19, 20, 21,
           22, 23, 24, 25 ,26, 27, 28,
           29, 30, 31, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0];

var June = [0, 0, 0, 0, 1, 2, 3, 4,
            5, 6, 7, 8, 9, 10, 11,
            12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23,24, 25,
            26, 27, 28, 29, 30, 0, 0,
            0, 0, 0, 0,0, 0];

var July = [0, 0, 0, 0, 0, 0, 1, 
            2, 3, 4, 5, 6, 7, 8,
            9, 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20, 21, 22,
            23, 24, 25 ,26, 27, 28, 29, 
            30, 31, 0, 0, 0, 0, 0];

var August = [0, 0, 1, 2, 3, 4, 5, 6,
              7, 8, 9, 10, 11, 12, 13,
              14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25 ,26, 27,
              28, 29, 30, 31, 0, 0, 0,
              0, 0, 0, 0, 0, 0];

var September = [0, 0, 0, 0, 0, 1, 2, 3,
                 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24,
                25 ,26, 27, 28, 29, 30, 0,
                0, 0, 0, 0, 0, 0];

var October = [0, 0, 0, 0, 0, 0, 0, 1,
               2, 3, 4, 5, 6, 7, 8,
               9, 10, 11, 12, 13, 14, 15,
               16, 17, 18, 19, 20, 21, 22,
               23, 24, 25 ,26, 27, 28, 29,
               30, 31, 0, 0, 0, 0];

var November = [0, 0, 0, 1, 2, 3, 4, 5,
                6, 7, 8, 9, 10, 11, 12,
                13, 14, 15,16, 17, 18, 19,
                20, 21, 22, 23, 24, 25 ,26,
                27, 28, 29, 30, 0, 0 ,0,
                0, 0, 0, 0, 0, 0];

var December = [0, 0, 0, 0, 0, 1, 2, 3,
                4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24,
                25 ,26, 27, 28, 29, 30, 31,
                0, 0, 0, 0, 0, 0];

var days = [number1, number2, number3, number4, number5, number6, number7,
            number8, number9, number10, number11, number12, number13, number14,
            number15, number16, number17, number18, number19, number20, number21,
            number22, number23, number24, number25, number26, number27, number28,
            number29, number30, number31, number32, number33, number34, number35,
            number36, number37, number38, number39, number40, number41, number42];

var calendar = [day1, day2, day3, day4, day5, day6, day7,
                day8, day9, day10, day11, day12, day13, day14,
                day15, day16, day17, day18, day19, day20, day21,
                day22, day23, day24, day25, day26, day27, day28,
                day29, day30, day31, day32, day33, day34, day35,
                day36, day37, day38, day39, day40, day41, day42];

var sundayDIV = [day1, day8, day15, day22, day29, day36];
var mondayDIV = [day2, day9, day16, day23, day30, day37];
var tuesdayDIV = [day3, day10, day17, day24, day31, day38];
var wednesdayDIV = [day4, day11, day18, day25, day32, day39];
var thursdayDIV = [day5, day12, day19, day26, day33, day40];
var fridayDIV = [day6, day13, day20, day27, day34, day41];
var saturdayDIV = [day7, day14, day21, day28, day35, day42];

var sundayTEXT = [number1, number8, number15, number22, number29, number36];
var mondayTEXT = [number2, number9, number16, number23, number30, number37];
var tuesdayTEXT = [number3, number10, number17, number24, number31, number38];
var wednesdayTEXT = [number4, number11, number18, number25, number32, number39];
var thursdayTEXT = [number5, number12, number19, number26, number33, number40];
var fridayTEXT = [number6, number13, number20, number27, number34, number41];
var saturdayTEXT = [number7, number14, number21, number28, number35, number42];


var payDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

var SundayDays = [5, 4, 4, 4, 5, 4, 5, 4, 4, 5, 4, 4];      
var MondayDays = [5, 4, 4, 4, 5, 4, 4, 5, 4, 5, 4, 4];
var TuesdayDays = [4, 4, 5, 4, 5, 4, 4, 5, 4, 4, 5, 4];
var WednesdayDays = [4, 4, 5, 4, 4, 5, 4, 5, 4, 4, 5, 4];
var ThursdayDays = [4, 4, 5, 4, 4, 5, 4, 4, 5, 4, 4, 5];
var FridayDays = [4, 4, 4, 5, 4, 4, 5, 4, 5, 4, 4, 5];
var SaturdayDays = [5, 4, 4, 5, 4, 4, 5, 4, 4, 5, 4, 5];


var JanWeeks = [0, 0, 0, 0, 0, 0, 1];
var FebWeeks = [0, 0, 1, 1, 1, 1, 1];
var MarWeeks = [0, 0, 1, 1, 1, 1, 1];
var AprWeeks = [0, 0, 0, 0, 0, 1, 1];
var MayWeeks = [1, 1, 1, 1, 1, 1, 1];
var JuneWeeks = [0, 0, 0, 1, 1, 1, 1];
var JulyWeeks = [0, 0, 0, 0, 0, 1, 1];
var AugWeeks = [0, 1, 1, 1, 1, 1, 1];
var SeptWeeks = [0, 0, 0, 0, 1, 1, 1];
var OctWeeks = [0, 0, 0, 0, 0, 0, 1];
var NovWeeks = [0, 0, 1, 1, 1, 1, 1];
var DecWeeks = [0, 0, 0, 0, 1, 1, 1];





function openOverlay() {
    overlay.style.transition = "all 1s";
    overlay.style.transform = "translateY(1025px)";
}

function closeOverlay() {
    overlay.style.transition = "all 1s";
    overlay.style.transform = "translateY(0px)";
}



var globalMonth = currentMonth;
var next = 0;
var firstIncrement = 0;
var currentMonth = parseInt((0), 10);

function compute() {
    var weeklyIncome = parseInt(document.getElementById("weekly-income").value, 10);
    var checkings =  parseInt(document.getElementById("checking").value, 10);
    var savings =  parseInt(document.getElementById("savings").value, 10);
    var weeklyExpenses = parseInt(document.getElementById("weekly-expenses").value, 10);
    var generalSavings =  parseInt(document.getElementById("general").value, 10);
    var emergencySavings = parseInt(document.getElementById("emergency").value, 10);

    var updatedCheckings = checkings + ((weeklyIncome - weeklyExpenses) - (generalSavings + emergencySavings));
    var weeklyUpdate = weeklyIncome - (weeklyExpenses + generalSavings + emergencySavings);
    var updatedSavings = savings + generalSavings;
    var updatedEmergency = emergencySavings;


    overlay.style.transition = "all 1s";
    overlay.style.transform = "translateY(0px)";
    var date = document.getElementById("todaysDate").value;
    var leftArrow = document.getElementById("arrowLeft");
    var rightArrow = document.getElementById("arrowRight");

    leftArrow.style.visibility = 'visible';
    rightArrow.style.visibility = 'visible';
    calendarBody.style.visibility = 'visible';
    calendarBody.style.top = '-700px';
    monthTitle.style.visibility = 'visible';
    firstTitle.style.display = 'none';
    arrow.style.display = 'none';
    calc.style.display = 'none';

    var month1, month2, day1, day2;

    month1 = date[5];
    month2 = date[6];
    day1 = date[8];
    day2 = date[9];

    if (date[8] == 0){
        var currentDay = day2;
    } else {
        currentDay = day1 + day2;
    }

    if (date[5] == 0){
        currentMonth = parseInt((month2), 10);
    } else {
        currentMonth = parseInt((month1 + month2), 10);
    }

    globalMonth = parseInt((currentMonth), 10);


    computeMonth(currentMonth, updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, currentDay, next);
}

function CalendarPrint(SelectedDay, newCheckings, newSavings, savings, newEmergency, emergency, weekUpdate, Day, daysIndex, weekdaysNum, boolean, monthDiff, month, WeekStart) {
    switch (SelectedDay) {
        case "sunday":
            var i = 6;
            var firstI = 1;
            Day = daysIndex + 1;
            
            if (Day > 0 && Day < 8){
                i = 1;
                firstI = 0;
            }
            if (Day > 7 && Day < 15){
                i = 2;
                firstI = 1;
            }
            if (Day > 14 && Day < 22){
                i = 3; 
                firstI = 2;
            }
            if (Day > 21 && Day < 29){
                i = 4;
                firstI = 3;
            }
            if (Day > 28 && Day < 36){
                i = 5;
                firstI = 4;
            }
            if (boolean == 1 && globalMonth != currentMonth){
                i = weekdaysNum;
            }

            if (boolean == 0){
                if (SundayDays[currentMonth - 1] >= firstI){
                    if (SundayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((SundayDays[currentMonth - 1] - firstI) + 1);
                    }
                    if (SundayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((SundayDays[currentMonth - 1] - firstI));
                    }
                    if (SundayDays[currentMonth - 1] == 5) {
                        firstIncrement = (SundayDays[currentMonth - 1] - firstI);
                        }
                } else if (SundayDays[currentMonth - 1] <= firstI){
                    if (TuesdayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((firstI - SundayDays[currentMonth - 1]) + 1);
                    }
                    if (SundayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((firstI - SundayDays[currentMonth - 1]));
                    }
                    if (SundayDays[currentMonth - 1] == 5) {
                    firstIncrement = (firstI - SundayDays[currentMonth - 1]);
                    }
                }
                
            }

            console.log(TuesdayDays[currentMonth - 1], currentMonth, firstIncrement, firstI, i, WeekStart);



            if (boolean == 1 && currentMonth != globalMonth) {
                for (var l = 0; l < firstIncrement; l++){
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                }
            }

 

           
    
            if(document.getElementById('weekly').checked){
                for (i; i < 6; i++){
                        sundayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                        newCheckings += weekUpdate;
                        newSavings += savings;
                        newEmergency += emergency;
                }
               }
               if(document.getElementById('bi-weekly').checked){
                for (i; i < 6; i++){
                    sundayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                    i++;
               }
           }
      
        break;

        case "monday":
            var i = 6;
            var firstI = 1;
            Day = daysIndex + 1;
            
            if (Day > 0 && Day < 2){
                i = 0;
                firstI = 0;
            }
            if (Day > 1 && Day < 9){
                i = 1;
                firstI = 1;
            }
            if (Day > 8 && Day < 16){
                i = 2;
                firstI = 2;
            }
            if (Day > 15 && Day < 23){
                i = 3;
                firstI = 3;
            }
            if (Day > 22 && Day < 30){
                i = 4;
                firstI = 4;
            }
            if (Day > 29 && Day < 37){
                i = 5;
                firstI = 5;
            }
            if (boolean == 1 && globalMonth != currentMonth){
                i = weekdaysNum;
            }

            if (boolean == 0){
                if (MondayDays[currentMonth - 1] >= firstI){
                    if (MondayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((MondayDays[currentMonth - 1] - firstI) + 1);
                    }
                    if (MondayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((MondayDays[currentMonth - 1] - firstI));
                    }
                    if (MondayDays[currentMonth - 1] == 5) {
                        firstIncrement = (MondayDays[currentMonth - 1] - firstI);
                        }
                } else if (MondayDays[currentMonth - 1] <= firstI){
                    if (TuesdayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((firstI - MondayDays[currentMonth - 1]) + 1);
                    }
                    if (MondayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((firstI - MondayDays[currentMonth - 1]));
                    }
                    if (MondayDays[currentMonth - 1] == 5) {
                    firstIncrement = (firstI - MondayDays[currentMonth - 1]);
                    }
                }
                
            }

            console.log(TuesdayDays[currentMonth - 1], currentMonth, firstIncrement, firstI, i, WeekStart);



            if (boolean == 1 && currentMonth != globalMonth) {
                for (var l = 0; l < firstIncrement; l++){
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                }
            }

    
            if(document.getElementById('weekly').checked){
                for (i; i < 6; i++){
                        mondayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                        newCheckings += weekUpdate;
                        newSavings += savings;
                        newEmergency += emergency;
                }
               }
               if(document.getElementById('bi-weekly').checked){
                for (i; i < 6; i++){
                    mondayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                    i++;
               }
           }
        break;

        case "tuesday":
            var i = 6;
            var firstI = 1;
            Day = daysIndex + 1;
            
            if (Day > 0 && Day < 3){
                i = 0;
                firstI = 0;
            }
            if (Day > 2 && Day < 10){
                i = 1;
                firstI = 1;
            }
            if (Day > 9 && Day < 17){
                i = 2;
                firstI = 2;
            }
            if (Day > 16 && Day < 24){
                i = 3;
                firstI = 3;
            }
            if (Day > 23 && Day < 31){
                i = 4;
                firstI = 4;
            }
            if (Day > 30 && Day < 38){
                i = 5;
                firstI = 5;
            }
            if (boolean == 1 && globalMonth != currentMonth){
                i = weekdaysNum;
            }

            if (boolean == 0){
                if (TuesdayDays[currentMonth - 1] >= firstI){
                    if (TuesdayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((TuesdayDays[currentMonth - 1] - firstI) + 1);
                    }
                    if (TuesdayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((TuesdayDays[currentMonth - 1] - firstI));
                    }
                    if (TuesdayDays[currentMonth - 1] == 5) {
                        firstIncrement = (TuesdayDays[currentMonth - 1] - firstI);
                        }
                } else if (TuesdayDays[currentMonth - 1] <= firstI){
                    if (TuesdayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((firstI - TuesdayDays[currentMonth - 1]) + 1);
                    }
                    if (TuesdayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((firstI - TuesdayDays[currentMonth - 1]));
                    }
                    if (TuesdayDays[currentMonth - 1] == 5) {
                    firstIncrement = (firstI - TuesdayDays[currentMonth - 1]);
                    }
                }
                
            }

            console.log(TuesdayDays[currentMonth - 1], currentMonth, firstIncrement, firstI, i, WeekStart);



            if (boolean == 1 && currentMonth != globalMonth) {
                for (var l = 0; l < firstIncrement; l++){
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                }
            }
    
            if(document.getElementById('weekly').checked){
                for (i; i < 6; i++){
                        tuesdayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                        newCheckings += weekUpdate;
                        newSavings += savings;
                        newEmergency += emergency;
                }
               }
               if(document.getElementById('bi-weekly').checked){
                for (i; i < 6; i++){
                    tuesdayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                    i++;
               }
           }
        break;

        case "wednesday":
            var i = 6;
            var firstI = 1;
            Day = daysIndex + 1;
            
            if (Day > 0 && Day < 4){
                i = 0;
                firstI = 0;
            }
            if (Day > 3 && Day < 11){
                i = 1;
                firstI = 1;
            }
            if (Day > 10 && Day < 18){
                i = 2;
                firstI = 2;
            }
            if (Day > 17 && Day < 25){
                i = 3;
                firstI = 3;
            }
            if (Day > 24 && Day < 32){
                i = 4;
                firstI = 4;
            }
            if (Day > 31 && Day < 39){
                i = 5;
                firstI = 5;
            }
            if (boolean == 1 && globalMonth != currentMonth){
                i = weekdaysNum;
            }

            if (boolean == 0){
                if (WednesdayDays[currentMonth - 1] >= firstI){
                    if (WednesdayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((WednesdayDays[currentMonth - 1] - firstI) + 1);
                    }
                    if (WednesdayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((WednesdayDays[currentMonth - 1] - firstI));
                    }
                    if (WednesdayDays[currentMonth - 1] == 5) {
                        firstIncrement = (WednesdayDays[currentMonth - 1] - firstI);
                        }
                } else if (WednesdayDays[currentMonth - 1] <= firstI){
                    if (WednesdayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((firstI - WednesdayDays[currentMonth - 1]) + 1);
                    }
                    if (WednesdayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((firstI - WednesdayDays[currentMonth - 1]));
                    }
                    if (WednesdayDays[currentMonth - 1] == 5) {
                    firstIncrement = (firstI - WednesdayDays[currentMonth - 1]);
                    }
                }
                
            }

            console.log(TuesdayDays[currentMonth - 1], currentMonth, firstIncrement, firstI, i, WeekStart);



            if (boolean == 1 && currentMonth != globalMonth) {
                for (var l = 0; l < firstIncrement; l++){
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                }
            }
          
    
            if(document.getElementById('weekly').checked){
                for (i; i < 6; i++){
                        wednesdayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                        newCheckings += weekUpdate;
                        newSavings += savings;
                        newEmergency += emergency;
                }
               }
               if(document.getElementById('bi-weekly').checked){
                for (i; i < 6; i++){
                    wednesdayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                    i++;
               }
           }
        break;

        case "thursday":
            var i = 6;
            var firstI = 1;
            Day = daysIndex + 1;
            
            if (Day > 0 && Day < 5){
                i = 0;
                firstI = 0;
            }
            if (Day > 4 && Day < 12){
                i = 1;
                firstI = 1;
            }
            if (Day > 11 && Day < 19){
                i = 2;
                firstI = 2;
            }
            if (Day > 18 && Day < 26){
                i = 3;
                firstI = 3;
            }
            if (Day > 25 && Day < 33){
                i = 4;
                firstI = 4;
            }
            if (Day > 32 && Day < 40){
                i = 5;
                firstI = 5;
            }
            if (boolean == 1 && globalMonth != currentMonth){
                i = weekdaysNum;
            }

            if (boolean == 0){
                if (ThursdayDays[currentMonth - 1] >= firstI){
                    if (ThursdayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((ThursdayDays[currentMonth - 1] - firstI) + 1);
                    }
                    if (ThursdayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((ThursdayDays[currentMonth - 1] - firstI));
                    }
                    if (ThursdayDays[currentMonth - 1] == 5) {
                        firstIncrement = (ThursdayDays[currentMonth - 1] - firstI);
                        }
                } else if (ThursdayDays[currentMonth - 1] <= firstI){
                    if (ThursdayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((firstI - ThursdayDays[currentMonth - 1]) + 1);
                    }
                    if (ThursdayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((firstI - ThursdayDays[currentMonth - 1]));
                    }
                    if (ThursdayDays[currentMonth - 1] == 5) {
                    firstIncrement = (firstI - ThursdayDays[currentMonth - 1]);
                    }
                }
                
            }

            console.log(TuesdayDays[currentMonth - 1], currentMonth, firstIncrement, firstI, i, WeekStart);




            if (boolean == 1 && currentMonth != globalMonth) {
                for (var l = 0; l < firstIncrement; l++){
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                }
            }
    
            if(document.getElementById('weekly').checked){
                for (i; i < 6; i++){
                        thursdayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                        newCheckings += weekUpdate;
                        newSavings += savings;
                        newEmergency += emergency;
                }
               }
               if(document.getElementById('bi-weekly').checked){
                for (i; i < 6; i++){
                    thursdayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                    i++;
               }
           }
        break;

        case "friday":
            var i = 6;
            var firstI = 1;
            Day = daysIndex + 1;
            
            if (Day > 0 && Day < 6){
                i = 0;
                firstI = 0;
            }
            if (Day > 5 && Day < 13){
                i = 1;
                firstI = 1;
            }
            if (Day > 12 && Day < 20){
                i = 2;
                firstI = 2;
            }
            if (Day > 19 && Day < 27){
                i = 3;
                firstI = 3;
            }
            if (Day > 26 && Day < 34){
                i = 4;
                firstI = 4;
            }
            if (Day > 33 && Day < 41){
                i = 5;
                firstI = 5;
            }
            if (boolean == 1 && globalMonth != currentMonth){
                i = weekdaysNum;
            }

            if (boolean == 0){
                if (FridayDays[currentMonth - 1] >= firstI){
                    if (FridayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((FridayDays[currentMonth - 1] - firstI) + 1);
                    }
                    if (FridayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((FridayDays[currentMonth - 1] - firstI));
                    }
                    if (FridayDays[currentMonth - 1] == 5) {
                        firstIncrement = (FridayDays[currentMonth - 1] - firstI);
                        }
                } else if (FridayDays[currentMonth - 1] <= firstI){
                    if (FridayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((firstI - FridayDays[currentMonth - 1]) + 1);
                    }
                    if (FridayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((firstI - FridayDays[currentMonth - 1]));
                    }
                    if (FridayDays[currentMonth - 1] == 5) {
                    firstIncrement = (firstI - FridayDays[currentMonth - 1]);
                    }
                }
                
            }

            console.log(TuesdayDays[currentMonth - 1], currentMonth, firstIncrement, firstI, i, WeekStart);


            if (boolean == 1 && currentMonth != globalMonth) {
                for (var l = 0; l < firstIncrement; l++){
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                }
            }
    
            if(document.getElementById('weekly').checked){
                for (i; i < 6; i++){
                        fridayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                        newCheckings += weekUpdate;
                        newSavings += savings;
                        newEmergency += emergency;
                }
               }
               if(document.getElementById('bi-weekly').checked){
                for (i; i < 6; i++){
                    fridayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                    i++;
               }
           }
        break;

        case "saturday":
            var i = 6;
            var firstI = 1;
            Day = daysIndex + 1;
            
            if (Day > 0 && Day < 7){
                i = 0;
                firstI = 0;
            }
            if (Day > 6 && Day < 14){
                i = 1;
                firstI = 1;
            }
            if (Day > 13 && Day < 21){
                i = 2;
                firstI = 2;
            }
            if (Day > 20 && Day < 28){
                i = 3;
                firstI = 3;
            }
            if (Day > 27 && Day < 35){
                i = 4;
                firstI = 4;
            }
            if (Day > 34 && Day < 42){
                i = 5;
                firstI = 5;
            }
            if (boolean == 1 && globalMonth != currentMonth){
                i = weekdaysNum;
            }

            if (boolean == 0){
                if (SaturdayDays[currentMonth - 1] >= firstI){
                    if (SaturdayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((SaturdayDays[currentMonth - 1] - firstI) + 1);
                    }
                    if (SaturdayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((SaturdayDays[currentMonth - 1] - firstI));
                    }
                    if (SaturdayDays[currentMonth - 1] == 5) {
                        firstIncrement = (SaturdayDays[currentMonth - 1] - firstI);
                        }
                } else if (SaturdayDays[currentMonth - 1] <= firstI){
                    if (SaturdayDays[currentMonth - 1] == 4 && WeekStart == 0) {
                        firstIncrement = ((firstI - SaturdayDays[currentMonth - 1]) + 1);
                    }
                    if (SaturdayDays[currentMonth - 1] == 4 && WeekStart == 1) {
                        firstIncrement = ((firstI - SaturdayDays[currentMonth - 1]));
                    }
                    if (SaturdayDays[currentMonth - 1] == 5) {
                    firstIncrement = (firstI - SaturdayDays[currentMonth - 1]);
                    }
                }
                
            }

            console.log(TuesdayDays[currentMonth - 1], currentMonth, firstIncrement, firstI, i, WeekStart);



            if (boolean == 1 && currentMonth != globalMonth) {
                for (var l = 0; l < firstIncrement; l++){
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                }
            }

    
            if(document.getElementById('weekly').checked){
                for (i; i < 6; i++){
                        saturdayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                        newCheckings += weekUpdate;
                        newSavings += savings;
                        newEmergency += emergency;
                }
               }
               if(document.getElementById('bi-weekly').checked){
                for (i; i < 6; i++){
                    saturdayTEXT[i].value += "\n\nCheckings: $" + newCheckings + "\nSavings: $" + newSavings + "\nEmergency: $" + newEmergency;
                    newCheckings += weekUpdate;
                    newSavings += savings;
                    newEmergency += emergency;
                    i++;
               }
           }
        break;

        
    }
}

function computeMonth(Month, updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, boolean, monthDiff){
    if (Month == 1){
        monthTest.value = "January 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = January[i];
            if (January[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < January.length; p++){
            if (Day == January[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = JanWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 3){
                    var newI = 1;
                }
                else if (weekdayNum > 2) {
                    newI = 0;
                }
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 0; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 0; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 0; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 0; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 0; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 0; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 0; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
               
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 2){
        monthTest.value = "Febuary 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = Febuary[i];
            if (Febuary[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < Febuary.length; p++){
            if (Day == Febuary[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = FebWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 3){
                    var newI = 1;
                }
                else if (weekdayNum > 2) {
                    newI = 0;
                }
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 1; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 1; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 1; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 1; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 1; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 1; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 1; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
               
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 3){
        monthTest.value = "March 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = March[i];
            if (March[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < March.length; p++){
            if (Day == March[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = MarWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 3){
                    var newI = 1;
                }
                else if (weekdayNum > 2) {
                    newI = 0;
                }
                else if (weekdayNum > 1) {
                    newI = 0;
                }

                 if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 2; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 2; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 2; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 2; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 2; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 2; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 2; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
                
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 4){
        monthTest.value = "April 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = April[i];
            if (April[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < April.length; p++){
            if (Day == April[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = AprWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 6){
                    var newI = 1;
                }
                else if (weekdayNum > 5) {
                    newI = 0;
                }
                console.log(newI);
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 3; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 3; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 3; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 3; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 3; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 3; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 3; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
                
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 5){
        monthTest.value = "May 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = May[i];
            if (May[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < May.length; p++){
            if (Day == May[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = MayWeeks[l];
                var weekdayNum = l + 1;
                var newI = 0;
                
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 4; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 4; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 4; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 4; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 4; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 4; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 4; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
                
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 6){
        monthTest.value = "June 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = June[i];
            if (June[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
        

        for (var p = 0; p < June.length; p++){
            if (Day == June[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = JuneWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 4){
                    var newI = 1;
                }
                else if (weekdayNum > 3) {
                    newI = 0;
                }
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 5; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 5; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 5; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 5; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 5; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 5; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 5; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
                
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 7){
        monthTest.value = "July 2023";
        var month = parseInt((Month), 10);
        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = July[i];
            if (July[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < July.length; p++){
            if (Day == July[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = JulyWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 6){
                    var newI = 1;
                }
                else if (weekdayNum > 5) {
                    newI = 0;
                }
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 6; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 6; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 6; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 6; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 6; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 6; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 6; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
                
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 8){
        monthTest.value = "August 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = August[i];
            if (August[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < August.length; p++){
            if (Day == August[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = AugWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 2){
                    var newI = 1;
                }
                else if (weekdayNum > 1) {
                    newI = 0;
                }
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 7; h++){
                        increment += parseInt((SundayDays[h]));
                        console.log(increment);
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 7; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 7; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 7; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 7; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 7; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 7; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
                
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 9){
        monthTest.value = "September 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = September[i];
            if (September[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < September.length; p++){
            if (Day == September[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = SeptWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 5){
                    var newI = 1;
                }
                else if (weekdayNum > 4) {
                    newI = 0;
                }
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 8; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 8; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 8; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 8; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 8; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 8; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 8; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
                
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 10){
        monthTest.value = "October 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = October[i];
            if (October[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < October.length; p++){
            if (Day == October[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = OctWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 7){
                    var newI = 1;
                }
                else if (weekdayNum > 6) {
                    newI = 0;
                }
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 9; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 9; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 9; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 9; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 9; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 9; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 9; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
                
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 11){
        monthTest.value = "November 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = November[i];
            if (November[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < November.length; p++){
            if (Day == November[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = NovWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 3){
                    var newI = 1;
                }
                else if (weekdayNum > 2) {
                    newI = 0;
                }
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 10; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 10; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 10; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 10; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 10; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 10; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 10; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
               
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }

    if (Month == 12){
        monthTest.value = "December 2023";
        var month = parseInt((Month), 10);

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = December[i];
            if (December[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }

        for (var p = 0; p < December.length; p++){
            if (Day == December[p]){
                var dayIndex = p;
            }
        }

        for (var l = 0; l < payDay.length; l++){
            if (document.getElementById(payDay[l]).checked){
                var WeekStart = DecWeeks[l];
                var weekdayNum = l + 1;
                if (weekdayNum < 5){
                    var newI = 1;
                }
                else if (weekdayNum > 4) {
                    newI = 0;
                }
                if (monthDiff > 1){
                    var increment = parseInt((0), 10);
                    if (l == 0){
                        for (var h = currentMonth; h < 11; h++){
                        increment += parseInt((SundayDays[h]));
                    } 
                    }
                    if (l == 1){
                        for (var h = currentMonth; h < 11; h++){
                            increment += parseInt((MondayDays[h]));
                        }
                    }
                    if (l == 2){
                        for (var h = currentMonth; h < 11; h++){
                            increment += parseInt((TuesdayDays[h]));
                        }
                    }
                    if (l == 3){
                        for (var h = currentMonth; h < 11; h++){
                            increment += parseInt((WednesdayDays[h]));
                        }
                    }
                    if (l == 4){
                        for (var h = currentMonth; h < 11; h++){
                            increment += parseInt((ThursdayDays[h]));
                        }
                    }
                    if (l == 5){
                        for (var h = currentMonth; h < 11; h++){
                            increment += parseInt((FridayDays[h]));
                        }
                    }
                    if (l == 6){
                        for (var h = currentMonth; h < 11; h++){
                            increment += parseInt((SaturdayDays[h]));
                        }
                    }
                 

                    console.log(increment);

                    for (var o = 0; o < increment; o++){
                        updatedCheckings += weeklyUpdate;
                        updatedSavings += generalSavings;
                        updatedEmergency += emergencySavings;
                    }
                }
                
                CalendarPrint(payDay[l], updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, Day, dayIndex, newI, boolean, monthDiff, month, WeekStart);
            }
        }
    }
}


function nextMonth(){
    var date = document.getElementById("todaysDate").value;
    var weeklyIncome = parseInt(document.getElementById("weekly-income").value, 10);
    var checkings =  parseInt(document.getElementById("checking").value, 10);
    var savings =  parseInt(document.getElementById("savings").value, 10);
    var weeklyExpenses = parseInt(document.getElementById("weekly-expenses").value, 10);
    var generalSavings =  parseInt(document.getElementById("general").value, 10);
    var emergencySavings = parseInt(document.getElementById("emergency").value, 10);
    

    var day1 = date[8];
    var day2 = date[9];
    var month1 = date[5];
    var month2 = date[6];

    if (date[5] == 0){
        var currentMonth = month2;
    } else {
        currentMonth = month1 + month2;
    }

    if (date[8] == 0){
        var currentDay = day2;
    } else {
        currentDay = day1 + day2;
    }
    
    globalMonth += 1;

    if (globalMonth == 13) {
        globalMonth = 12;
    }

    next = 1;

    var monthDiff = parseInt(globalMonth - currentMonth, 10);


    var updatedCheckings = (checkings + ((weeklyIncome - weeklyExpenses) - (generalSavings + emergencySavings)));
    var weeklyUpdate = (weeklyIncome - (weeklyExpenses + generalSavings + emergencySavings));
    var updatedSavings = (savings + generalSavings);
    var updatedEmergency = (emergencySavings);



    computeMonth(globalMonth, updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, currentDay, next, monthDiff);
    
}

function lastMonth(){
    var date = document.getElementById("todaysDate").value;
    var weeklyIncome = parseInt(document.getElementById("weekly-income").value, 10);
    var checkings =  parseInt(document.getElementById("checking").value, 10);
    var savings =  parseInt(document.getElementById("savings").value, 10);
    var weeklyExpenses = parseInt(document.getElementById("weekly-expenses").value, 10);
    var generalSavings =  parseInt(document.getElementById("general").value, 10);
    var emergencySavings = parseInt(document.getElementById("emergency").value, 10);
    

    var day1 = date[8];
    var day2 = date[9];
    var month1 = date[5];
    var month2 = date[6];

    if (date[5] == 0){
        var currentMonth = month2;
    } else {
        currentMonth = month1 + month2;
    }

    if (date[8] == 0){
        var currentDay = day2;
    } else {
        currentDay = day1 + day2;
    }
    
    globalMonth -= 1;

    if (globalMonth == currentMonth - 1) {
        globalMonth = parseInt((currentMonth),10);
    }


    next = 1;

    var monthDiff = parseInt(globalMonth - currentMonth, 10);


    var updatedCheckings = (checkings + ((weeklyIncome - weeklyExpenses) - (generalSavings + emergencySavings)));
    var weeklyUpdate = (weeklyIncome - (weeklyExpenses + generalSavings + emergencySavings));
    var updatedSavings = (savings + generalSavings);
    var updatedEmergency = (emergencySavings);



    computeMonth(globalMonth, updatedCheckings, updatedSavings, generalSavings, emergencySavings, updatedEmergency, weeklyUpdate, currentDay, next, monthDiff);
}
