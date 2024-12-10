// TODO: write your code here
class Team {
  constructor() {
    this.members = []; // Массив для хранения персонажей
  }

  add(character) {
    this.members.push(character);
  }


  // [Symbol.iterator]() {
  //   let index = 0;
  //   const members = this.members;

  //   return {
  //     next() {
  //       if (index < members.length) {
  //         return {
  //           value: members[index++],
  //           done: false
  //         };
  //       } else {
  //         return {
  //           value: undefined,
  //           done: true
  //         };
  //       }
  //     }
  //   };
  // }

  [Symbol.iterator]() {
    // Заимствование итератора у массива
    return this.members[Symbol.iterator]();
  }

}

console.log('Создание персонажей');
const char1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 };
const char2 = { name: 'Мечник', type: 'Swordsman', health: 100, level: 2, attack: 50, defence: 20 };
const char3 = { name: 'Маг', type: 'Magician', health: 70, level: 3, attack: 80, defence: 5 };
console.log('Созданo:', char1 , char2, char3);

const team = new Team();
team.add(char1);
team.add(char2);
team.add(char3);

for (const member of team) {
  console.log('Итерация по персонажам команды, персонаж: ', member);
}
