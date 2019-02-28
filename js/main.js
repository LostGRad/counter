//Лічильник

    setInterval(function(){
        var dateOfMarch = new Date(2019,2,8);
        var date = new Date();
        var days=(dateOfMarch-date)/(1000*60*60*24)>>0;
        var houres=((dateOfMarch-date)%(1000*60*60*24))/(1000*60*60)>>0;
        var minutes=(((dateOfMarch-date)%(1000*60*60*24))%(1000*60*60))/(1000*60)>>0;
        var seconds =((((dateOfMarch-date)%(1000*60*60*24))%(1000*60*60))%(1000*60))/(1000)>>0;
        ////дні
        if(days<10){
            document.getElementById("days_z").innerHTML ="0";
            document.getElementById("days").innerHTML =days;
        }
        else {
            document.getElementById("days_z").innerHTML =days/10>>0;
            document.getElementById("days").innerHTML =days%10;
        }
        ///малюємо години
        if(houres<10){
            document.getElementById("hours_z").innerHTML ="0";
            document.getElementById("hours").innerHTML =houres;
        }
        else {
            document.getElementById("hours_z").innerHTML =houres/10>>0;
            document.getElementById("hours").innerHTML =houres%10;
        }
        ////хвилини
        if(minutes<10){
            document.getElementById("minutes_z").innerHTML ="0";
            document.getElementById("minutes").innerHTML =minutes;
        }
        else {
            document.getElementById("minutes_z").innerHTML =minutes/10>>0;
            document.getElementById("minutes").innerHTML =minutes%10;
        }
        ////секунди
        if(seconds<10){
            document.getElementById("seconds_z").innerHTML ="0";
            document.getElementById("seconds").innerHTML =seconds;
        }
        else {
            document.getElementById("seconds_z").innerHTML =seconds/10>>0;
            document.getElementById("seconds").innerHTML =seconds%10;
        }

    }, 1000);
