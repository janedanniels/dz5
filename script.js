const user = {}

for(let i = 1; i < 10; i++){
    let name = prompt('Введите своё имя')
    let age = +prompt('Введите свой возраст')

user[i] = {
    name,
    age
}
    console.log(`Пользователь ${[i]}`);
    console.log(`Имя ${[user].name}`);
    console.log(`Возраст ${[user].age}`);
}

console.log(user);

