import "./article-item.js";

class ArticleList extends HTMLElement {
    set articles(articles) {
        this._articles = articles;
        this.render();
    }

    render() {
        this._articles.forEach(article => {
            const elementItem = document.createElement("article-item");

            elementItem.article = article;
            this.appendChild(elementItem);
            
        });
    }
}

customElements.define("article-list", ArticleList);