var canvas;
var context;
window.onload = function () {
    img1.src = "/Assets/1.png";
    img11.src = "/Assets/11.png";
    img3.src = "/Assets/3.png";
    img31.src = "/Assets/31.png";
    img2.src = "/Assets/2.png";
    bg.src = "/Assets/22.png";
    sel = document.getElementById("PlyerSelect");
    PlyerWins = document.getElementById("PlyerWins");
    PlyersCash = document.getElementById("PlyersCash");
    canvas = document.getElementById("drawingCanvas");
    var statis = document.getElementById("Statistic");
    context = canvas.getContext("2d");
    //setTimeout("drawFrame()", 20);
    try{if (sel[0].innerText=="")window.location.href = "/Home/Index";}
    catch (err) { window.location.href = "/Home/Index"; }
    if (sel[0].innerText == "admin") statis.hidden = false;
    try {
        var mass = new Array(0, 0, 0);
        sel.options[0].value = mass;
    }
    catch(err){}
    drawFrame();
}
var PlyersCash;
var PlyerWins;
var sel;
var img1 = new Image();
var img3 = new Image();
var img2 = new Image();
var img11 = new Image();
var img31 = new Image();
var timerimg = 1;
var imgtype1 = false;
var roll1 = 0;
var roll2 = 0;
var roll3 = 0;
var x1 = 100;
var x2 = 100;
var x3 = 100;
var y = 0;
var c = 255; var fintmp = false;
var w = 1200;
var h = 400;
var y1 = 65;
var y2 = 165;
var y3 = 265;
var play = false;
var numfin = 0;
var perv = 0;
var vtor = 0;
var tret = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var cash1 = 0;
var cash2 = 0;
var cash3 = 0;
var bank = 0;
var end = 150;
var fin = false;
var fix = 0;
var a1 = 1;
var a2 = 1;
var a3 = 1;
var bg = new Image();
function drawFrame() {
    context.clearRect(0, 0, w, h);
    context.beginPath();
    try {
        context.drawImage(bg, 0, 0);
    } catch (err) { }
    context.beginPath();
    context.shadowColor = "transparent";
    context.strokeStyle = "rgb(0,0,0)";
    context.lineWidth = 3;
    context.moveTo(canvas.width - 100, 50);
    context.lineTo(canvas.width - 100, canvas.height - 50);
    context.moveTo(0, 50);
    context.lineTo(canvas.width - 50, 50);
    context.moveTo(0, 150);
    context.lineTo(canvas.width - 50, 150);
    context.moveTo(0, 250);
    context.lineTo(canvas.width - 50, 250);
    context.moveTo(0, 350);
    context.lineTo(canvas.width - 50, 350);
    context.moveTo(100, 0);
    context.lineTo(100, canvas.height);
    context.shadowColor = "transparent";
    context.shadowColor = "black";
    context.shadowOffsetX = 1;
    context.shadowOffsetY = 3;
    context.shadowBlur = 4;
    context.fillStyle = "rgb(128,64,64)";
    try {
        if (a1 > 0) {
            if (!imgtype1 && perv == 0) context.drawImage(img1, x1, y1);
            else context.drawImage(img11, x1, y1);
        }
        else {
            if (!imgtype1 && perv == 0) context.drawImage(img3, x1, y1);
            else context.drawImage(img31, x1, y1);
        }
    } catch (err) {
        context.beginPath();
        context.fillRect(x1, y1, 100, 70);
        context.fill();
    }
    try {
        if (a2 > 0) {
            if (!imgtype1 && vtor == 0) context.drawImage(img1, x2, y2);
            else context.drawImage(img11, x2, y2);
        }
        else {
            if (!imgtype1 && vtor == 0) context.drawImage(img3, x2, y2);
            else context.drawImage(img31, x2, y2);
        }
    } catch (err) {
        context.beginPath();
        context.fillRect(x2, y2, 100, 70);
        context.fill();
    }
    try {
        if (a3 > 0) {
            if (!imgtype1 && tret == 0) context.drawImage(img1, x3, y3);
            else context.drawImage(img11, x3, y3);
        }
        else {
            if (!imgtype1 && tret == 0) context.drawImage(img3, x3, y3);
            else context.drawImage(img31, x3, y3);
        }
    } catch (err) {
        context.beginPath();
        context.fillRect(x3, y3, 100, 70);
        context.fill();
    }

    context.fillStyle = "rgb(0,0,0)";

    context.stroke();
    try {
        context.shadowBlur = 10;
        context.shadowColor = "black";
        context.drawImage(img2, canvas.width - 150, 30);
        context.shadowColor = "transparent";
    }
    catch (err) {
        context.shadowColor = "transparent";
    }
    context.shadowColor = "transparent";
    context.beginPath();
    if (play) {
        if (timerimg > 0) timerimg--;
        else {
            timerimg = 1;
            imgtype1 = !imgtype1;
        }
        if (perv == 0) {
            if (a1 < 0) {
                if (Math.random() * 10 > 9) a1 *= -1
            }
            else {
                if (Math.random() * 10 > 9.9) a1 *= -1
            }
            roll1 = Math.random() * 10;
            x1 += roll1 * a1;
        }
        if (vtor == 0) {
            if (a2 < 0) {
                if (Math.random() * 10 > 9) a2 *= -1
            }
            else {
                if (Math.random() * 10 > 9.9) a2 *= -1
            }
            roll2 = Math.random() * 10;
            x2 += roll2 * a2;
        }
        if (tret == 0) {
            if (a3 < 0) {
                if (Math.random() * 10 > 9) a3 *= -1
            }
            else {
                if (Math.random() * 10 > 9.9) a3 *= -1
            }
            roll3 = Math.random() * 10;
            x3 += roll3 * a3;
        }
    }
    context.font = "italic 40pt Arial";
    if (x1 > canvas.width - end && perv == 0) {
        if (numfin == 0) {
            perv = 1;
            numfin = 1;
        } else if (numfin == 1) {
            perv = 2;
            numfin = 2;
        } else if (numfin == 2) {
            perv = 3;
            numfin = 3;
            play = false;
            fin = true;
        }
    }
    if (x2 > canvas.width - end && vtor == 0) {
        if (numfin == 0) {
            vtor = 1;
            numfin = 1;
        } else if (numfin == 1) {
            vtor = 2;
            numfin = 2;
        } else if (numfin == 2) {
            vtor = 3;
            numfin = 3;
            play = false;
            fin = true;
        }
    }
    if (x3 > canvas.width - end && tret == 0) {
        if (numfin == 0) {
            tret = 1;
            numfin = 1;
        } else if (numfin == 1) {
            tret = 2;
            numfin = 2;
        } else if (numfin == 2) {
            tret = 3;
            numfin = 3;
            play = false;
            fin = true;
        }
    }
    if (perv == 1) context.fillText("Первый!", 300, 120);
    if (perv == 2) context.fillText("Второй!", 300, 120);
    if (perv == 3) context.fillText("Третий!", 300, 120);
    if (vtor == 1) context.fillText("Первый!", 300, 220);
    if (vtor == 2) context.fillText("Второй!", 300, 220);
    if (vtor == 3) context.fillText("Третий!", 300, 220);
    if (tret == 1) context.fillText("Первый!", 300, 320);
    if (tret == 2) context.fillText("Второй!", 300, 320);
    if (tret == 3) context.fillText("Третий!", 300, 320);
    context.font = "Bold 22pt Arial";
    context.fillText("Тарканьи бега", 500, 30);
    context.font = "italic 20pt Arial";
    //context.fillText("Банк: " + bank + "$", 110, 30);
    if (num1 == 1) {
        context.fillText("Игрок 1", 0, 100);
        context.fillText("$" + cash1, 0, 130);
    }
    else if (num1 == 2) {
        context.fillText("Игрок 1", 0, 200);
        context.fillText("$" + cash1, 0, 230);
    }
    else if (num1 == 3) {
        context.fillText("Игрок 1", 0, 300);
        context.fillText("$" + cash1, 0, 330);
    }
    if (num2 == 1) {
        context.fillText("Игрок 2", 0, 100);
        context.fillText("$" + cash2, 0, 130);
    }
    else if (num2 == 2) {
        context.fillText("Игрок 2", 0, 200);
        context.fillText("$" + cash2, 0, 230);
    }
    else if (num2 == 3) {
        context.fillText("Игрок 2", 0, 300);
        context.fillText("$" + cash2, 0, 330);
    }
    if (num3 == 1) {
        context.fillText("Игрок 3", 0, 100);
        context.fillText("$" + cash3, 0, 130);
    }
    else if (num3 == 2) {
        context.fillText("Игрок 3", 0, 200);
        context.fillText("$" + cash3, 0, 230);
    }
    else if (num3 == 3) {
        context.fillText("Игрок 3", 0, 300);
        context.fillText("$" + cash3, 0, 330);
    }
    if (!play && fin) {
        //pl1
        if (num1 == 1) {
            if (perv == 1) cash1 *= 2;
            if (perv == 2) cash1 *= 0.5;
            if (perv == 3) cash1 = 0;
        }
        if (num1 == 2) {
            if (vtor == 1) cash1 *= 2;
            if (vtor == 2) cash1 *= 0.5;
            if (vtor == 3) cash1 = 0;
        }
        if (num1 == 3) {
            if (tret == 1) cash1 *= 2;
            if (tret == 2) cash1 *= 0.5;
            if (tret == 3) cash1 = 0;
        }
        if (num2 == 1) {
            if (perv == 1) cash2 *= 2;
            if (perv == 2) cash2 *= 0.5;
            if (perv == 3) cash2 = 0;
        }
        if (num2 == 2) {
            if (vtor == 1) cash2 *= 2;
            if (vtor == 2) cash2 *= 0.5;
            if (vtor == 3) cash2 = 0;
        }
        if (num2 == 3) {
            if (tret == 1) cash2 *= 2;
            if (tret == 2) cash2 *= 0.5;
            if (tret == 3) cash2 = 0;
        }
        if (num3 == 1) {
            if (perv == 1) cash3 *= 2;
            if (perv == 2) cash3 *= 0.5;
            if (perv == 3) cash3 = 0;
        }
        if (num3 == 2) {
            if (vtor == 1) cash3 *= 2;
            if (vtor == 2) cash3 *= 0.5;
            if (vtor == 3) cash3 = 0;
        }
        if (num3 == 3) {
            if (tret == 1) cash3 *= 2;
            if (tret == 2) cash3 *= 0.5;
            if (tret == 3) cash3 = 0;
        }
        bank = bank - cash1 - cash2 - cash3;
        Win(); fintmp = true;
        fin = false;
    }
    setTimeout("drawFrame()", 40);
}
function roll() {
    if (numfin != 0) {
        x1 = 100;
        x2 = 100;
        x3 = 100;
        perv = 0;
        vtor = 0;
        tret = 0;
        numfin = 0;
        fin = false;
    }
    if (cash1 > cash2 + cash3) fix = num1;
    if (cash2 > cash1 + cash3) fix = num2;
    if (cash3 > cash1 + cash2) fix = num3;
    PlyerWins.length = 0;
    play = true;
}
function bt1() {
    if (play) return;
    rb1 = document.getElementById("nomer11");
    rb2 = document.getElementById("nomer12");
    rb3 = document.getElementById("nomer13");
    if (rb1.checked) {
        if (num2 == 1 || num3 == 1) return;
        else num1 = 1;
    }
    if (rb2.checked) {
        if (num2 == 2 || num3 == 2) return;
        else num1 = 2;
    }
    if (rb3.checked) {
        if (num2 == 3 || num3 == 3) return;
        else num1 = 3;
    }
    tx = document.getElementById("cash1");
    cash1 = tx.value - 0;
}
function bt2() {
    if (play) return;
    rb1 = document.getElementById("nomer21");
    rb2 = document.getElementById("nomer22");
    rb3 = document.getElementById("nomer23");
    if (rb1.checked) {
        if (num1 == 1 || num3 == 1) return;
        else num2 = 1;
    }
    if (rb2.checked) {
        if (num1 == 2 || num3 == 2) return;
        else num2 = 2;
    }
    if (rb3.checked) {
        if (num1 == 3 || num3 == 3) return;
        else num2 = 3;
    }
    tx = document.getElementById("cash2");
    cash2 = tx.value - 0;
}
function bt3() {
    if (play) return;
    rb1 = document.getElementById("nomer31");
    rb2 = document.getElementById("nomer32");
    rb3 = document.getElementById("nomer33");
    if (rb1.checked) {
        if (num1 == 1 || num2 == 1) return;
        else num3 = 1;
    }
    if (rb2.checked) {
        if (num1 == 2 || num2 == 2) return;
        else num3 = 2;
    }
    if (rb3.checked) {
        if (num1 == 3 || num2 == 3) return;
        else num3 = 3;
    }
    tx = document.getElementById("cash3");
    cash3 = tx.value - 0;
}
function AddPlayer() {
    var NamePl = document.getElementById("NamePl");
    var tempStr = NamePl.value;
    for (i = 0; i < sel.length; i++) {
        if (tempStr == sel.options[i].innerText) return;
    }
    var mass = new Array(0, 0, 0);
    sel.options[sel.length] = new Option(NamePl.value, mass);
    try{if (sel.count != 0) sel.selectedIndex=sel.length-1;}catch (err){}
}
function AddCash() {
    if (play) return;
    if (fintmp) {
        fintmp = false;
        bank = 0;
        PlyersCash.length = 0;
    }
    var rb1 = document.getElementById("1nomer");
    var rb2 = document.getElementById("2nomer");
    var rb3 = document.getElementById("3nomer");
    if (!rb1.checked && !rb2.checked && !rb3.checked) return;
    if (sel.selectedIndex == -1) return;
    var Cash = document.getElementById("Cash");
    try{if (Cash.value == "" || Cash.value <=0) return;}
    catch(err) {return;}
    var item = sel.options[sel.selectedIndex];
    var mass = item.value.split(',');
    bank = bank - parseInt(mass[0]) - parseInt(mass[1]) - parseInt(mass[2]);
    if (rb1.checked) {
        mass[0] = (Cash.value - 0);
        PlyersCash.options[PlyersCash.length] = new Option(item.innerText + " - №1 - " + Cash.value + "$", 0);
    }
    if (rb2.checked) {
        mass[1] = (Cash.value - 0);
        PlyersCash.options[PlyersCash.length] = new Option(item.innerText + " - №2 - " + Cash.value + "$", 0);
    }
    if (rb3.checked) {
        mass[2] = (Cash.value - 0);
        PlyersCash.options[PlyersCash.length] = new Option(item.innerText + " - №3 - " + Cash.value + "$", 0);
    }
    bank = bank + (mass[0] - 0) + (mass[1] - 0) + (mass[2] - 0);
    sel.options[sel.selectedIndex].value = mass;
}
function Win() {
    for (i = 0; i < sel.length; i++) {
        var mass = sel.options[i].value.split(',');
        mass[0] = parseInt(mass[0]);
        mass[1] = parseInt(mass[1]);
        mass[2] = parseInt(mass[2]);
        var tmpstavka = mass[0] + mass[1] + mass[2];

        if (perv == 1) {
            mass[0] *= 2;
            sel.options[i].value = mass;
        } else if (perv == 2) {
            mass[0] /= 2;
            sel.options[i].value = mass;
        } else if (perv == 3) {
            mass[0] = 0;
            sel.options[i].value = mass;
        }
        if (vtor == 1) {
            mass[1] *= 2;
            sel.options[i].value = mass;
        } else if (vtor == 2) {
            mass[1] /= 2;
            sel.options[i].value = mass;
        } else if (vtor == 3) {
            mass[1] = 0;
            sel.options[i].value = mass;
        }
        if (tret == 1) {
            mass[2] *= 2;
            sel.options[i].value = mass;
        } else if (tret == 2) {
            mass[2] /= 2;
            sel.options[i].value = mass;
        } else if (tret == 3) {
            mass[2] = 0;
            sel.options[i].value = mass;
        }
        var tmpcash = Math.round((parseInt(mass[0]) + parseInt(mass[1]) + parseInt(mass[2])));
        var razn = Math.round((tmpcash - tmpstavka));
        if (razn > 0) {
            PlyerWins.options[PlyerWins.length] = new Option(sel.options[i].innerText + " выиграл(а) " + razn + "$");
            bank -= tmpcash;
            SaveDB(sel.options[i].innerText, razn);
        }
        else if (razn!=0){
            PlyerWins.options[PlyerWins.length] = new Option(sel.options[i].innerText + " проиграл(а) " + -razn + "$");
            bank -= tmpcash;
            SaveDB(sel.options[i].innerText, razn);
        }
    }
    //for (i = 0; i < sel.length; i++) {
    //    var mass = sel.options[i].value.split(',');
    //    var tmpcash = (mass[0] - 0) + (mass[1] - 0) + (mass[2] - 0);
    //    if (tmpcash > 0) {
    //        PlyerWins.options[PlyerWins.length] = new Option(sel.options[i].innerText + " выиграл(а) " + tmpcash + "$");
    //        bank -= tmpcash;
    //        SaveDB(sel.options[i].innerText, tmpcash);
    //    }
    //    else {
    //        PlyerWins.options[PlyerWins.length] = new Option(sel.options[i].innerText + " проиграл(а) " + tmpcash + "$");
    //        bank -= tmpcash;
    //        SaveDB(sel.options[i].innerText, tmpcash);
    //    }
    //}
    for (i = 0; i < sel.length; i++) {
        var mass = new Array(0, 0, 0);
        sel.options[i].value = mass;
    }
}
function SaveDB(usr, mon) {
    Ext.Ajax.request({
        url: '/Home/SaveStats',
        method: 'POST',
        params: {
            data: Ext.encode({
                user: usr,
                money: Math.round(mon)
            })
        },
        success: function (response) {
            //var text = response.responseText;
            //alert(text);
            // process server response here
        }
    });
}