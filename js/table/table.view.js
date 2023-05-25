export default class TableView {
    elements = {
        tbody: document.querySelector('#tbody'),
        productSelect: document.querySelector('#productSelect'),
        topStatusBar: document.querySelector('#topStatusBar'),
        leftStatus: document.querySelectorAll('[data-role="left-status"]'),
        badgeNew: document.querySelector('#badge-new')
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