const num1 = Number.parseInt(prompt('Введите температуру в градусах Цельсия: '));
alert(`Цельсий: ${num1}, Фарингейт ${((9/5) * num1 + 32).toFixed(1)}`);

//Цельсий: 21, Фаренгейт: 69.8
//градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32