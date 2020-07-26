class ArticleItem extends HTMLElement {
    set article(article) {
        this._article = article;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="${this._article.class}">
            <h2>${this._article.h1}</h1>
            <p>${this._article.paraghraf}</p>
        </div>
        `;
    }

}

customElements.define("article-item", ArticleItem);