export default class TestModel {

    data = [
        this.#createPerson('Иван', '23423434', 'mail@mail.ru', 'course-html'),
        this.#createPerson('Сидор', '3263242', 'ya@ya.ru', 'course-js'),
        this.#createPerson('Петр', '73452432', 'google@gmail.com', 'course-vue'),
        this.#createPerson('Мария', '64234234', 'maria@ya.ru', 'course-php'),
        this.#createPerson('Джон', '23452344', 'john@gmail.com', 'course-wordpress'),
        this.#createPerson('Андрей', '987987324', 'andrey@ya.ru', 'course-js'),
        this.#createPerson('Владимир', '2342554', 'vladimir@gmail.com', 'course-vue')
    ]

    #createPerson(name, phone, email, course) {
        return {
            name, phone, email, course
        }
    }

    #getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    generate() {
        let randomItem = this.data[this.#getRandomInt(this.data.length)];
        return randomItem;
    }
}