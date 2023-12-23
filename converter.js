let measurement_unit;
let quantity;
let result
switch (measurement_unit) {
    case 'кілометри':
        result = quantity * 10000;
        console.log(quantity + ' кг' + ' це ' + result + ' м');
        break;
    case "години":
        result = quantity * 60;
        console.log(quantity + ' год' + ' це ' + result + ' хв');
        break;
    case "кілограми":
        result = quantity * 1000;
        console.log(quantity + ' кг' + ' це ' + result + ' грм');
        break;
    default:
        console.log('Неправильна одиниця виміру');
        break;
}
