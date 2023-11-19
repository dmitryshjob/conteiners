import ErrorRepository from '../ErrorRepository.js';

const errorRepository = new ErrorRepository();

test('Передано некорректное значение', () => {
    const received = errorRepository.translate(1);
    expect(received).toBe('Error code 1: Передано некорректное значение');
});

test('Ошибка на стороне сервера', () => {
    const received = errorRepository.translate(2);
    expect(received).toBe('Error code 2: Ошибка на стороне сервера');
});

test('Данный пользователь не найден', () => {
    const received = errorRepository.translate(3);
    expect(received).toBe('Error code 3: Данный пользователь не найден');
});

test('Неверный пароль', () => {
    const received = errorRepository.translate(4);
    expect(received).toBe('Error code 4: Неверный пароль');
});



test('Неизвестная ошибка', () => {
    const received = errorRepository.translate(5);
    expect(received).toBe('Unknown error: Неизвестная ошибка');
});