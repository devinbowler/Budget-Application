var overlay = document.getElementById("inputOverlay");
var monthTest = document.getElementById("monthTest");


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

var January = [0, 0, 0, 0, 0, 0, 1, 
               2, 3, 4, 5, 6, 7, 8, 
               9, 10, 11, 12, 13, 14, 15,
               16, 17, 18, 19, 20, 21, 22, 
               23, 24, 25 ,26, 27, 28, 29, 
               30, 31, 0, 0, 0, 0, 0];

var Febuary = [0, 0, 1, 2, 3, 4, 5,
               6, 7, 8, 9, 10, 11, 12,
               13, 14, 15, 16, 17, 18, 19,
               20, 21, 22, 23, 24, 25 ,26,
               27, 28, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0];

var March = [0, 0, 1, 2, 3, 4, 5,
             6, 7, 8, 9, 10, 11, 12,
             13, 14, 15,16, 17, 18, 19,
             20, 21, 22, 23, 24, 25 ,26,
             27, 28, 29, 30, 31, 0 ,0,
             0, 0, 0, 0, 0, 0, 0];

var April = [0, 0, 0, 0, 0, 1, 2,
             3, 4, 5, 6, 7, 8, 9,
             10, 11, 12, 13, 14, 15, 16,
             17, 18, 19, 20, 21, 22, 23,
             24, 25 ,26, 27, 28, 29, 30,
             0, 0, 0, 0, 0, 0 ,0];

var May = [1, 2, 3, 4, 5, 6, 7,
           8, 9, 10, 11, 12, 13, 14,
           15,16, 17, 18, 19, 20, 21,
           22, 23, 24, 25 ,26, 27, 28,
           29, 30, 31, 0, 0, 0, 0];

var June = [0, 0, 0, 1, 2, 3, 4,
            5, 6, 7, 8, 9, 10, 11,
            12, 13, 14, 15,16, 17,
            18, 19, 20, 21, 22, 23,
            24, 25 ,26, 27, 28, 29,
            30, 0, 0, 0, 0, 0];

var July = [0, 0, 0, 0, 0, 1, 2,
            3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15, 16,
            17, 18, 19, 20, 21, 22, 23,
            24, 25 ,26, 27, 28, 29, 30, 
            31, 0, 0, 0, 0, 0, 0];

var August = [0, 1, 2, 3, 4, 5, 6,
              7, 8, 9, 10, 11, 12, 13,
              14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25 ,26, 27,
              28, 29, 30, 31, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0];

var September = [0, 0, 0, 0, 1, 2, 3,
                 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24,
                25 ,26, 27, 28, 29, 30, 0,
                0, 0, 0, 0, 0, 0, 0];

var October = [0, 0, 0, 0, 0, 0, 1,
               2, 3, 4, 5, 6, 7, 8,
               9, 10, 11, 12, 13, 14, 15,
               16, 17, 18, 19, 20, 21, 22,
               23, 24, 25 ,26, 27, 28, 29,
               30, 31, 0, 0, 0, 0, 0];

var November = [0, 0, 1, 2, 3, 4, 5,
                6, 7, 8, 9, 10, 11, 12,
                13, 14, 15,16, 17, 18, 19,
                20, 21, 22, 23, 24, 25 ,26,
                27, 28, 29, 30, 0, 0 ,0,
                0, 0, 0, 0, 0, 0, 0];

var December = [0, 0, 0, 0, 1, 2, 3,
                4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24,
                25 ,26, 27, 28, 29, 30, 31,
                0, 0, 0, 0, 0, 0, 0];

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

var sunday = [day1, day8, day15, day22, day29, day36];
var monday = [day2, day9, day16, day23, day30, day37];
var tuesday = [day3, day10, day17, day24, day31, day38];
var wednesday = [day4, day11, day18, day25, day32, day39];
var thursday = [day5, day12, day19, day26, day33, day40];
var friday = [day6, day13, day20, day27, day34, day41];
var saturday = [day7, day14, day21, day28, day35, day42];



function openOverlay() {
    overlay.style.transition = "all 1s";
    overlay.style.transform = "translateY(1025px)";
}

function closeOverlay() {
    overlay.style.transition = "all 1s";
    overlay.style.transform = "translateY(0px)";
}
var month1, month2;
function compute() {
    var weeklyIncome = parseInt(document.getElementById("weekly-income").value, 10);
    var checkings =  parseInt(document.getElementById("checking").value, 10);
    var savings =  parseInt(document.getElementById("savings").value, 10);
    var weeklyExpenses = parseInt(document.getElementById("weekly-expenses").value, 10);
    var generalSavings =  parseInt(document.getElementById("general").value, 10);
    var emergencySavings = parseInt(document.getElementById("emergency").value, 10);

    overlay.style.transition = "all 1s";
    overlay.style.transform = "translateY(0px)";
    var date = document.getElementById("todaysDate").value;
    month1 = date[5];
    month2 = date[6];
    if (month2 == 1){
        monthTest.value = "January 2022";

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = January[i];
            if (January[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }


        console.log(checkings, savings, weeklyIncome, weeklyExpenses, generalSavings, emergencySavings);
    }

    if (month2 == 2){
        monthTest.value = "Febuary 2022";

        for (var k = 0; k < calendar.length; k++){
            calendar[k].style.visibility = 'visible';
        }

        for (var i = 0; i < days.length; i++){
            days[i].value = Febuary[i];
            if (Febuary[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }

    if (month2 == 3){
        monthTest.value = "March 2022";

        for (var i = 0; i < days.length; i++){
            days[i].value = March[i];
            if (March[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }

    if (month2 == 4){
        monthTest.value = "April 2022";

        for (var i = 0; i < days.length; i++){
            days[i].value = April[i];
            if (April[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }

    if (month2 == 5){
        monthTest = "May 2022";

        for (var i = 0; i < days.length; i++){
            days[i].value = May[i];
            if (May[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }

    if (month2 == 6){
        monthTest.value = "June 2022";

        for (var i = 0; i < days.length; i++){
            days[i].value = June[i];
            if (June[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }

    if (month2 == 7){
        monthTest.value = "July 2022";

        for (var i = 0; i < days.length; i++){
            days[i].value = July[i];
            if (July[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }

    if (month2 == 8){
        monthTest.value = "August 2022";

        for (var i = 0; i < days.length; i++){
            days[i].value = August[i];
            if (August[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }

    if (month2 == 9){
        monthTest.value = "September 2022";

        for (var i = 0; i < days.length; i++){
            days[i].value = September[i];
            if (September[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }

    if (month1 == 1 && month2 == 0){
        monthTest.value = "October 2022";

        for (var i = 0; i < days.length; i++){
            days[i].value = October[i];
            if (October[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }

    if (month1 == 1 && month2 == 1){
        monthTest.value = "November 2022";

        for (var i = 0; i < days.length; i++){
            days[i].value = November[i];
            if (November[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }

    if (month1 == 1 && month2 == 2){
        monthTest.value = "December 2022";

        for (var i = 0; i < days.length; i++){
            days[i].value = December[i];
            if (December[i] == 0){
                calendar[i].style.visibility = 'hidden';
            }
        }
    }
}