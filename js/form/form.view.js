export default class FormView {

    elements = {
        form: document.querySelector('#form'),
        inputName: document.querySelector('#name'),
        inputPhone: document.querySelector('#phone'),
        inputEmail: document.querySelector('#email'),
        productList: document.querySelector('#product')

    }
    // Получение данных из формы
    getFormData() {
        return {
            name: this.elements.inputName.value,
            email: this.elements.inputEmail.value,
            phone: this.elements.inputPhone.value,
            product: this.elements.productList.value
        }
    }

    // Генерация формы из тестовых данных
    renderForm(data) {

        const productList = {
            'course-html': 'Курс по верстке',
            'course-js': 'Курс по JavaScript',
            'course-vue': 'Курс по VUE JS',
            'course-php': 'Курс по PHP',
            'course-wordpress': 'Курс по WordPress'
        }

        this.elements.inputName.value = data.name;
        this.elements.inputPhone.value = data.phone;
        this.elements.inputEmail.value = data.email;
        this.elements.productList.value = data.course;
        this.elements.productList.text = productList[data.course];

    }

    clearForm() {
        this.elements.form.reset();
    }
}