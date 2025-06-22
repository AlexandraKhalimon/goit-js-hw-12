import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, addGallery } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector(".form");
const searchInput = document.querySelector("input");
const loadMoreBtn = document.querySelector(".load-button");


let query = "";
let page = 1;

searchForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    query = searchInput.value.trim();

    showLoader();
    clearGallery();
    hideLoadMoreButton();

    try {
        page = 1;
        const data = await getImagesByQuery(query, page);

        if (data.hits.length === 0) {
            return iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                color: "red",
                position: "topRight"
            })
        };

        createGallery(data.hits);
        showLoadMoreButton();
        
    } catch(error) {
        console.log(error.message);
        iziToast.show({
            message: `Error:${error.message}`,
            color: "red",
            position: "topRight"
        })
    } finally {
        hideLoader();
    }
};

loadMoreBtn.addEventListener("click", loadMoreCards);

async function loadMoreCards() {
    showLoader();
    page += 1;
    const data = await getImagesByQuery(query, page);

    try {
        const loadedCards = page * 15;
        if (loadedCards >= data.totalHits) {
            hideLoadMoreButton();
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                color: "blue",
                position: "topRight"
            })
        }

        addGallery(data.hits);

        const card = document.querySelector(".card");
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight*2,
            left: 0,
            behavior: "smooth"
        });

    } catch(error) {
        console.log(error.message);
    } finally {
        hideLoader();
    }
}

