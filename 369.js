const num = 100;
let i = 1;
let element;
let num369 = 0;
let temp;
for (i; i <= num; i++) {
    element = document.createElement('div');
    document.body.append(element);
    temp = i;
    num369 = 0;
    while (temp != 0) {
        if (temp % 10 === 3 || temp % 10 === 6 || temp % 10 === 9) num369++; //((temp%10)%3===0)
        temp = Math.floor(temp / 10);
    }
    if (num369 === 0) element.textContent = i;
    else element.textContent = '짝!'.repeat(num369);
}