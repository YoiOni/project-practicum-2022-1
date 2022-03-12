import catalogData from "@/config/catalog-data";

export default class Catalog {
    constructor(el) {
        this.el = document.getElementById(el);

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        let container="";
        catalogData.forEach( item => {
            container+=`<div class="card">
                        <div class="card__image">
                            <div class="card__icons">
                                <div class="card__likeIcon">
                                    <img src="/src/assets/img/like-icon.svg" alt="cartIcon">
                                </div>
                                <div class="card__cartIcon">
                                    <img src="/src/assets/img/cartIcon.svg" alt="cartIcon">
                                </div>
                            </div>
                            <div class="card__background" >
                                <img src="/src/assets/img/${item.image}" alt="cartIcon">
                            </div>
                        </div>
                        <div class="card__description">
                            ${item.description}
                        </div>
                        <div class="card__price">
                            <span>${item.price}</span>
                            <img src="/src/assets/img/ruble-icon.svg" alt="roubleIcon">
                        </div>
                    </div>`
        } );

        this.el.innerHTML = container;
    }


}