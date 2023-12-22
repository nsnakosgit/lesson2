// Урок 4
// ✏️ Написать функцию которая считает баллы по системе лояльности Газпрома. Описание логики  во второй домашке в третьем задании
// ✏️ Есть массив с номерами банковских карт например, вот такой: ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"]. Нужно посчитать сколько в этом массиве карт платежной системы VISA (у них номер карты начинается с цифры 4). В сообщение пользователю вывести в таком виде: Карт VISA 4 из 7. Сделать все в виде функции.
// ✏️ Написать функцию которая маскирует номер банковской карты. Например: maskCard("4815154823541789", "X") -> "481515XXXXXX1789". Должны быть видны первые 6 и последние 4 символа, остальные скрыть символом. Причем сделать так чтобы скрывающий символ можно было передавать как параметр. Например: maskCard("4815154823541789", "*") -> "481515******1789"

// Написать программу аналог системы лояльности в Газпроме. Правила там такие: если у тебя серебряная карта, то при заправке на каждый литр ты получаешь 0,5 балла. Если у тебя золотая карта то получаешь 0,75 балла
// . А если платиновая, то за каждый литр 1 балл. Пример: у тебя карта SILVER и ты заправился на 10 литров, баллов будет 5. Если у тебя карта
//  GOLD то на те же 10 литров, получишь 7,5 баллов. А если PLATINUM, то все 10 баллов твои. Нужно у пользователя запрашивать тип карты и количество литров бензина.

function loyaltyProgram(cardType, liters) {
    let reward = 0;
    let card = cardType.toUpperCase();

    if (card === 'SILVER') {
        reward = liters * 0.5;
    } else if (card === 'GOLD') {
        reward = liters * 0.75;
    } else if (card === 'PLATINUM') {
        reward = liters;
    } else {
        console.log('Invalid card type');
        return;
    }

    console.log(`You earned ${reward} reward points for ${liters} liters of fuel.`);
}

loyaltyProgram('gold', 10); 

//карты виза

function countVISACards(cards) {
    let visaCards = 0;
   
    for (let i = 0; i < cards.length; i++) {
       if (cards[i].startsWith('4')) {
         visaCards++;
       }
    }
   
    return visaCards;
   }
   
   let cards = ["46782346", "45781218", "79874568",  "32157845", "12157845", "36151845", "41250895", "41201961", "8201961", "71201961"];
   let visaCardsCount = countVISACards(cards);
   let totalCardsCount = cards.length;
   
   console.log("Карт VISA " + visaCardsCount + " из " + totalCardsCount + ".");



//карты с точкой

function maskCard(cardNumber, maskChar) {
   
    if (cardNumber.length < 10) {
       throw new Error('Card number should have at least 10 digits.');
    }
     
 
    var maskedCardNumber = cardNumber.substring(0, 6);
    for (var i = 0; i < cardNumber.length - 10; i++) {
       maskedCardNumber += maskChar;
    }
    maskedCardNumber += cardNumber.substring(cardNumber.length - 4);
     
    return maskedCardNumber;
   }
   
   console.log(maskCard("4815154823541789", "X"));
   console.log(maskCard("4815154823541789", "*"));