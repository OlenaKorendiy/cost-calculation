// Створюємо перемінні для привітального повідомлення
var greeting = 'Привет, ';
var name = 'Катерина';
var message = '! Пожалуйста, проверьте заказ:';
// Складаємо значения трьох перемінних для формування привітального повідомлення
var welcome = greeting + name + message;
// Створюєм переменні, в яких буде зберігатись детальна інформация про таблицю
var sign = 'Всемирная сеть';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 0.5 * (13 + 1); 
// Отримаємо елемент з ідентифікатором userSign і оновлюємо його значення 
var elSign = document.getElementById('userSign');
elSign.textContent = sign;
// Отримаємо елемент з ідентифікатором tiles і оновлюємо його значення
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;
// Отримуємо елемент з ідентифікатором greeting
var el = document.getElementById('greeting');
// Заміняємо значення елемента на персоналізоване привітання повідомлення 
el.textContent = welcome;
// Отримуємо елемент  subTotal і оновлюємо його значення
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal + ' $';
function buy(){
// Отримуємо елемент shipping і оновлюємо його значення
var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping + ' $'
// Отримуємо елемент grandTotal і оновлюємо його значення
var grandTotal = subTotal + shipping;
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal + ' $';}