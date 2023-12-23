console.log('number' + 3 + 3); //number33 це конкатенація, тому все просто з'єднало

console.log(null + 3);//3 тому що null вважається нулем

console.log(5 && "qwerty"); //qwerty, тому що && повертає перше значення якщо воно false, а в нас 5 це істинне значення і && повертає друге значеня

console.log(+'40' + +'2' + "hillel"); //42hillel, тому що +40 перетворилось на 40, ++2 на 2 і об'єдналось через конкатенацію з hillel

console.log('10' - 5 === 6);//false тому що 10-5 за формулою строго рівний 6, а він не рівний

console.log(true + false);//1 бо 1+0=1)

console.log('4px' - 3);//NaN, бо 4px не є amount

console.log('4' - 3); //1, бо 4-3 = 1 (воно перетворило '4' в число)

console.log('6' + 3 ** 0);// 61, бо піднесення числа 3 до степеня 0 буде 1, а далі конкатенація 6+1=61

console.log(12 / '6'); // 12, бо 12 поділити на 6 (6 перетворює в число)

console.log('10' + (5 === 6));// 10false, бо за формулою 5 строго дорівнює 6 а воно не дорівнює, тому false і 10 ціле число + канкатенація з 10

console.log(null == '');// false , бо завжди приводяться до false і null i пуста строка

console.log(3 ** (9 / 3));//27, бо 9 поділити на 3 буде 3 і 3 піднесене до степеня 3 буде 27

console.log(!!'false' == !!'true');// true, бо !! це булеве значення з подвійним запереченням, false получиться true, а true не зміниться тому true=true 

console.log(0 || '0' && 1);//1, спочатку використовуємо && бо він має вищий пріорітет, тому спочатку робимо '0' && 1, 0 тут розглядається як true і 1 теж true. залишається 0 ||, де 0=false, але езультат виразу '0' && 1 був 1, яке є true, тому Оператор || поверне перший true значення, тобто 1.

console.log((+null == false) < 1);//false, +null перетворюється на null яке стає 0, 0 == false а значить false теж стає 0 і отримуємо 0==0 а в результаті true, а true  не менше ніж 1

console.log(false && true || true);//true, тому що && повертає false якщо НЕ два оператори true, false && true=false, далі || повертає true якщо хоча б один з опертаторів true а в нас є такий, тому результат теж true

console.log(false && (false || true));//false, бо в false||true=true, а false && true = false, так як true тільки якщо обидва операнта true

console.log((+null == false) < 1 ** 5);//false піднесення числа 1 до степеня 5, що дає 1, попередній вираз розглянуто вище 