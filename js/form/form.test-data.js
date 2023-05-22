export default class TestModel {

    data = [
        this.#createPerson('Иван', '23423434', 'mail@mail.ru'),
        this.#createPerson('Сидор', '3263242', 'ya@ya.ru'),
        this.#createPerson('Петр', '73452432', 'google@gmail.com'),
        this.#createPerson('Мария', '64234234', 'maria@ya.ru'),
        this.#createPerson('Джон', '23452344', 'john@gmail.com'),
        this.#createPerson('Андрей', '987987324', 'andrey@ya.ru'),
        this.#createPerson('Владимир', '2342554', 'vladimir@gmail.com')
    ]

    courses = [
        { value: 'course-html', text: 'Курс по верстке' },
        { value: 'course-js', text: 'Курс по JavaScript' },
        { value: 'course-vue', text: 'Курс по VUE JS' },
        { value: 'course-php', text: 'Курс по PHP' },
        { value: 'course-wordpress', text: 'Курс по WordPress' }
    ]


    #createPerson(name, phone, email) {
        return {
            name, phone, email
        }
    }

    #getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    generate() {
        let randomItem = this.data[this.#getRandomInt(this.data.length)];
        let randomCourse = this.courses[this.#getRandomInt(this.courses.length)];

        document.querySelector('#name').value = randomItem.name;
        document.querySelector('#phone').value = randomItem.phone;
        document.querySelector('#email').value = randomItem.email;
        document.querySelector('#product').value = randomCourse.value;
        document.querySelector('#product').text = randomCourse.text;
    }
}