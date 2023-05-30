export default class TableView {
    elements = {
        tbody: document.querySelector('#tbody'),
        productSelect: document.querySelector('#productSelect'),
        topStatusBar: document.querySelector('#topStatusBar'),
        leftStatus: document.querySelectorAll('[data-role="left-status"]'),
        badgeNew: document.querySelector('#badge-new'),
        pagination: document.querySelector('#pagination')
    }

    constructor() {
        this.notesOnPage = 5; // кол-во эл-в на странице
    }

    // высчитывает кол-во страниц пагинации и отрисовываем
    paginationNumbPage(orders) {
        let countOfPages = Math.ceil(orders.length / this.notesOnPage);

        if (countOfPages === 1) {
            this.elements.tbody.innerHTML = '';

            for (let order of orders) {
                this.renderEntry(order)
            }
            return;
        }

        let pages = [];

        for (let i = 1; i <= countOfPages; i++) {
            let btn = document.createElement('button');
            btn.innerHTML = i;
            this.elements.pagination.appendChild(btn);
            pages.push(btn)
        }

        if (pages.length > 1) {
            this.showPaginationPage(pages[0], orders);
            pages[0].classList.add('active')
        }
    }

    // отрисовываем необходимые спиоск записей
    showPaginationPage(btn, orders) {
        console.log(btn)
        let pageNum = +btn.innerHTML;
        let start = (pageNum - 1) * this.notesOnPage;
        let end = start + this.notesOnPage;

        let notes = orders.slice(start, end);

        this.elements.tbody.innerHTML = '';

        for (let note of notes) {
            this.renderEntry(note)
        }
    }

    // переключалка активного класса на пагинации
    togglePaginationActiveClass(btn) {
        if (btn) {
            btn.closest('#pagination').querySelectorAll('button')
                .forEach(item => {
                    item.classList.remove('active')
                });
            btn.classList.add('active')
        }
    }

    // отображение заявки
    renderEntry(order) {

        const badges = {
            new: 'badge-danger',
            inwork: 'badge-warning',
            complete: 'badge-success'
        }

        const orderHTML = `
        <tr>
            <th scope="row" data-id=${order.id}>${order.id}</th>
            <td>${order.date}</td>
            <td>${order.productName}</td>
            <td>${order.name}</td>
            <td>${order.email}</td>
            <td>${order.phone}</td>
            <td>
                <div class="badge badge-pill ${badges[order.status]}">${order.statusName}</div>
            </td>
            <td>
                <a href="edit.html?id=${order.id}">Редактировать</a>
            </td>
        </tr>
        `;

        this.elements.tbody.insertAdjacentHTML('beforeend', orderHTML)

    }

    // обновление фильтров
    updateFilter(filter) {
        //console.log(filter)

        // по продукту
        this.elements.productSelect.value = filter.product;

        // по статусам
        this.changeStatusBar(filter.status);

        // по левой панели
        this.changeLeftStatusBar(filter.status)
    }

    // обновление статуса
    changeStatusBar(filterValue) {

        this.elements.topStatusBar.querySelectorAll('a').forEach(item => {
            item.classList.remove('active')
        });
        this.elements.topStatusBar.querySelector(`[data-value="${filterValue}"]`).classList.add('active')
    }

    // обновление статуса в сайдбар
    changeLeftStatusBar(filterValue) {

        this.elements.leftStatus.forEach(item => {
            item.classList.remove('active')

        });
        document.querySelector(`[data-value="${filterValue}"]`).classList.add('active')

    }

    // отображение заявок
    showCountNewOrders(newOrdersCount) {
        this.elements.badgeNew.textContent = newOrdersCount;
    }

}