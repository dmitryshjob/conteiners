import Team from '../Team.js';
import Character from '../Character';

const team = new Team();
const player1 = new Character('Ivan', 'knight', 100);
const player2 = new Character('Igor', 'magician', 100);
const player3 = new Character('Ilya', 'dwarf', 100);
const player4 = new Character('Sasha', 'zombie', 100);


test('Метод add добавляет выбранного персонажа в команду ', () => {
    team.add(player1);

    expect(team.members.has(player1)).toBe(true);
});

test('Метод "add" должен выдавать ошибку, если персонаж уже находится в команде.', () => {
    expect(() => team.add(player1)).toThrow(new Error('Данный персонаж уже в команде'));
});

test('Метод addAll должен иметь возможность добавлять произвольное количество персонажей.', () => {
    team.addAll(player2, player3, player4);
    [player2, player3, player4].forEach((e) => {
        expect(team.members.has(e)).toBe(true);
    });
});

test('Метод toArray должен производить конвертацию Set в массив.', () => {
    const setArr = team.toArray();
    expect(Array.isArray(setArr)).toBe(true);
});