import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const swiperCont = document.querySelector('.swiper-wrapper');
async function fetchReviews() {
    try {
    const { data } = await axios.get(
        'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!data || data.length === 0) {
        renderNotFound();
    } else {
        renderReviews(data);
    }
    } catch (error) {
    iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
    });
    }
}
function renderReviews(reviews) {
    swiperCont.innerHTML = reviews
    .map(
        ({ review, author, avatar_url }) => `
        <div class="swiper-slide">
            <div class="card-review">
            <p class="text-review">${review}</p>
            <div class="author-review">
                <img src="${avatar_url}" alt="${author}" class="author-avatar" />
                <p class="author-name">${author}</p>
            </div>
            </div>
        </div>
        `
    )
    .join('');
    swiper();
}
function renderNotFound() {
    swiperCont.innerHTML = `
    <div class="swiper-slide">
        <div class="card-review">
        <p class="text-review">Not found</p>
        </div>
    </div>
    `;
}
function swiper() {
    new Swiper('.reviews-swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.reviews-right-btn',
        prevEl: '.reviews-left-btn',
    },
    breakpoints: {
        768: {
        slidesPerView: 1,
        },
        1280: {
        slidesPerView: 2,
        spaceBetween: 32,
        },
    },
    });
}
fetchReviews();