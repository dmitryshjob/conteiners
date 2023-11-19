export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [1, 'Error code 1: Передано некорректное значение'],
            [2, 'Error code 2: Ошибка на стороне сервера'],
            [3, 'Error code 3: Данный пользователь не найден'],
            [4, 'Error code 4: Неверный пароль'],
        ]);
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        }
        return 'Unknown error: Неизвестная ошибка';
    }
}

