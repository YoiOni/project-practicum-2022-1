export default class Filter {
    constructor(el) {
        this.el = el
    }

    renderFilters(filterItems) {
        let itemsDom = ''

        filterItems.forEach(filterItem => {
            itemsDom+=`<div class="accordion filters__item" data-accordion>
                        <div class="accordion__header" data-accordion-header>
                            <span class="accordion__title body-1">${filterItem.title}</span>

                            <svg class="accordion__icon" width="10" height="5">
                                <use href="#arrow"></use>
                            </svg>
                        </div>

                        <div class="accordion__inner filters__checkboxes"
                             data-accordion-inner>`

            filterItem.items.forEach(filter=>{
                itemsDom+=this.renderFilter(filter);
            })

            itemsDom+=` </div> </div>`

        })

        this.el.innerHTML = itemsDom
    }

    renderFilter(filter) {
        return ` <label class="checkbox">
                                <input class="checkbox__native" type="checkbox">

                                <span class="checkbox__box"></span>

                                <span class="checkbox__text">${filter.title}</span>
                            </label>`
    }
}