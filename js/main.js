    function burc() {
        var gun = document.getElementById("form1").SelectBoxDay.value;
        var ay = document.getElementById("form1").SelectBoxMonth.value;
        var yazdir = document.getElementById("burcyazdir");                        
        if ((ay == 1 && gun >= 21) || (ay == 2 && gun <= 19)) {
            yazdir.innerHTML = "Kova";
        }
        else if ((ay == 2 && gun >= 20) || (ay == 3 && gun <= 20)){
            yazdir.innerHTML = "Balık";
        }
        else if ((ay == 3 && gun >= 21) || (ay == 4 && gun <= 20)){
            yazdir.innerHTML = "Koç";
        }
        else if ((ay == 4 && gun >= 21) || (ay == 5 && gun <= 20)){
            yazdir.innerHTML = "Boğa";
        }
        else if ((ay == 5 && gun >= 22) || (ay == 6 && gun <= 21)){
            yazdir.innerHTML = "İkizler";
        }
        else if ((ay == 6 && gun >= 22) || (ay == 7 && gun <= 23)){
            yazdir.innerHTML = "Yengeç";
        }
        else if ((ay == 7 && gun >= 24) || (ay == 8 && gun <= 23)){
            yazdir.innerHTML = "Aslan";
        }
        else if ((ay == 8 && gun >= 24) || (ay == 9 && gun <= 23)){
            yazdir.innerHTML = "Başak";
        }
        else if ((ay == 9 && gun >= 24) || (ay == 10 && gun <= 23)){
            yazdir.innerHTML = "Terazi";
        }
        else if ((ay == 10 && gun >= 24) || (ay == 11 && gun <= 22)){
            yazdir.innerHTML = "Akrep";
        }
        else if ((ay == 11 && gun >= 23) || (ay == 12 && gun <= 21)){
            yazdir.innerHTML = "Yay";
        }
        else {
            yazdir.innerHTML = "Oğlak";
        }

    }
