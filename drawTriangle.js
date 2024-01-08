function drawTriangle(height, symbol) {
    if (height > 0) {
        drawTriangle(height - 1, symbol);
        console.log(symbol.repeat(height));
    }
}

function drawTriangle(height, symbol, callbackFunction) {
    let row = '';
    for (let i = 1; i <= height; i++) {
        row += symbol;
        callbackFunction(row);
    }
}

drawTriangle(5, '*', console.log);
