//магазин одежды

var clientfullname = prompt ("say you fullname:");
var clientname = "maks";
var clientfathername = "durov";
var clientsurname ="ilievich";

// string - текстовый, строковый
//клиентская очередь
var clientqueue = "132";
console.log("Hello, " + clientfullname);

// number - числовой_
var clientid = 1435789;
//заказ на месяц
var orderforamonth = 5000;

// boolean - логический, булевский
var clientagree = true; 
//тебе нравится наш магазин
var doyoulikeourstore = false; 

// undefined - неопределенный
// неделя скидок
var discountweek;
console.log("discountweek:",  discountweek);
alert("discountweek:" + discountweek);

// null - пустой, нулевой
//заказать на дом
var orderathome = null;

// object - объектный
var client = {
    clientname:"name",
    city: "Kyrgyzstan Biskek",
    house: "50",
    dateofissue: "03-12-2024",
    order: true,
    get: false,

};
var maks ={
    name: "maks",
    fathername: "durov",
    surname: "ilievich",
    id: "1435789",
    queue: "132",
    doyoulikeourstore: false,
    client: {
        clientname:"name",
        city: "Kyrgyzstan Biskek",
        house: "50",
        dateofissue: "03-12-2024",
        order: true,
        get: false,
    }
}
//bank
var bank ={
    headoffice: false,
    numberofemployees: "15",
    workinghours:{
        from: "9-00",
        to: "20-00",
    }
}

/** Создать объект в котором хранится информация о студенте обучающимся в Geeks. Структуру и какие данные будут хранится придумываете самостоятельно.
 */
 var geeks ={
    name: "maks",
    fathername: "durov",
    surname: "ilievich",
    tellnumber: "0220-04-60-00",
    studentgeeks: true,
    wheredoyoulive: "Kyrgyzstan Biskek",
    whatcourse: "2",
 }