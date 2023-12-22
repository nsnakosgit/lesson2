
var color = prompt ("say you color");
if(color === "red"){
    console.log( "red: stop");
}else if(color ==="yellow"){
    console.log( "yellow: wait");
}else if(color ==="green"){
    console.log( "green: go");
}

if(color ==="1"){
    console.log( "1  I");
}else if(color ==="2"){
    console.log( "2  II");
}else if(color ==="3"){
    console.log( "3   III");
}else if(color ==="4"){
    console.log( "4  IV");
}else if(color ==="5"){
    console.log( "5  V");
}else if(color ==="6"){
    console.log( "6  VI");
}else if(color ==="7"){
    console.log( "7  VII");
}else if(color ==="8"){
    console.log( "8   VIII");
}else if(color ==="9"){
    console.log( "9   IX");
}               

var gazpromneft = prompt("card and litr");
var litr = "litr";

var gazprom = {
    silver: 0.5,
    gold: 0.75,
    platinum: 1,
    vipsilver: 5,
    vipgold: 7.5,
    vipplatinum: 10,
}

switch (gazpromneft) {
    case "silver":
        gazpromneft *= gazprom.silver;
        console.log(gazprom.silver); 
        break;
    case "gold":
        gazpromneft *= gazprom.gold;
        console.log(gazprom.gold); 
        break;
    case "platinum":
        gazpromneft *= gazprom.platinum;
        console.log(gazprom.platinum); 
        break;
    case "vipsilver":
        gazpromneft *= gazprom.vipsilver;
        console.log(gazprom.vipsilver); 
        break;
    case "vipgold":
        gazpromneft *= gazprom.vipgold;
        console.log(gazprom.vipgold); 
        break;
    case "vipplatinum":
        gazpromneft *= gazprom.vipplatinum;
        console.log(gazprom.vipplatinum); 
        break;
    default:
        console.warn("unsupported card");
}

console.log(gazpromneft + litr);      
