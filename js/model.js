const LOCAL_STORAGE_KEY = 'tasks';

export default class OrderModel {

    constructor() {
        this.orders = [];
    }

    // --------------------------------
    // Добавление заявки в модель
    // --------------------------------
    addOrder(inputObject) {

        const { name, email, phone, product } = inputObject

        let id = 1;

        if (this.orders.length > 0) {
            id = this.orders[this.orders.length - 1].id + 1;
        }

        const newOrder = {
            id: id,
            name,
            email,
            phone,
            product
        }

        this.orders.push(newOrder);

        this.setToStorage();

        return newOrder;
    }


    // --------------------------------
    // Добавление заявки в localStorage
    // --------------------------------
    setToStorage() {
        console.log(this.orders)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.orders))
    }

}