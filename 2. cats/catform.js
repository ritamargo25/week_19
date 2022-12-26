/*Напишите класс Cat со свойствами, соответствующими полям вашего опросника 
(например, кличка, корм и пр.), и по нажатию на кнопку "Ок" создайте экземпляр 
этого класса, заполнив его свойства ответами из опросника. В этом классе будут 
только свойства и конструктор, без методов. Выведите результат (заполненный 
    объект класса Cat) в консоль при помощи console.log.*/

class Cat {
    constructor(name, breed, sex, age) {
        this.name = name;
        this.breed = breed;
        this.sex = sex;
        this.age = age;
        hello()
        {
            let cat1 = new Cat('bob', 'siam', 'male', '6');
        }
    }
}
console.log(`My cat ${this.name} is ${this.breed}. He is ${this.sex} and he is ${this.age} `);

//не работает(( буду добивать))