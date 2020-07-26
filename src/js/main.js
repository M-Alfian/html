import "./article-list.js";
import articles from "./articles.js";

const _main = document.querySelector("main");

const elementList = document.createElement("article-list");
elementList.articles = articles;

_main.appendChild(elementList);