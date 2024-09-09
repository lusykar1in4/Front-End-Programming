function hitung(operasi){
    var bil1 = parseFloat(document.getElementById('bil1').value);
    var bil2 = parseFloat(document.getElementById('bil2').value);
    var result = 0;

    if(operasi === '+'){
        result = bil1 + bil2;
    }
    else if(operasi === '-'){
        result = bil1 - bil2;
    }
    else if(operasi === 'x'){
        result = bil1 * bil2;
    }
    else if(operasi === '/'){
        result = bil1 / bil2;
    }

    document.getElementById('hasil').value = result;
}