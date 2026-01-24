// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG

document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            title: "Жива віра",
            icon: "bi bi-fire",
            description:
                "Можна ставити запитання, шукати й зростати. Говоримо про Бога чесно, глибоко і мовою життя.",
        },
        {
            title: "Ті, з ким по-справжньому",
            icon: "bi bi-people",
            description:
                "Не просто зустрічі, а дружба, підтримка, сміх і відчуття, що ти на своєму місці.",
        },
        {
            title: "Простір для росту",
            icon: "bi bi-graph-up-arrow",
            description:
                "Розкривай таланти, пробуй нове й розвивайся духовно, особисто та соціально.",
        },
        {
            title: "Сенс у діях",
            icon: "bi bi-heart-fill",
            description:
                "Ми не лише говоримо про любов — ми проживаємо її через служіння й конкретні дії.",
        },
        {
            title: "Разом у спільній історії",
            icon: "bi bi-stars",
            description:
                "Спільний шлях, події й моменти, які формують тебе і залишають слід у житті.",
        },
        {
            title: "З Богом можливе все",
            icon: "bi bi-compass",
            description:
                "Віра не обмежує, а відкриває свободу бути собою, мріяти й жити наповнено.",
        },
    ];

    const container = document.getElementById("servicesContainer");

    if (!container) {
        console.error("❌ Контейнер #servicesContainer не знайдено!");
        return;
    }

    function createServiceItem(item, i) {
        const div = document.createElement("div");
        div.className = "col-md-6 col-lg-4";
        div.style.cssText = "padding: 12px; margin: 0;";

        div.innerHTML = `
            <div class="service-item row align-items-center">
                <div class="m-0 p-0 col-auto">
                    <div class="icon-wrapper">
                        <i class="m-0 p-0 ${item.icon}"></i>
                    </div>
                </div>

                <div class="m-0 p-0 ps-4 col text-start">
                    <h4 class="m-0 p-0 pb-2">${item.title}</h4>
                    <a href="#contact" class=" read-more ">
                        <span>Доєднатись</span>
                        <i class="m-0 p-0 bi bi-arrow-right"></i>
                    </a>
                </div>

                <p class="m-0 p-0 text-start">${item.description}</p>
            </div>
        `;

        return div;
    }

    // 🔹 Рендер
    services.forEach((item, i) => {
        container.appendChild(createServiceItem(item, i));
    });
});

// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products_2");
    const loadMoreBtn = document.getElementById("loadMoreProjects");
    if (!productsContainer || !loadMoreBtn) return;

    let visibleCount = 3;
    let iso;
    let currentFilter = "*";
    const products = [
        {
            name: "Свята Вечеря",
            img: "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/618839089_17922679251233481_6438598966211476798_n.webp?stp=dst-webp_s1080x1080&_nc_cat=102&ig_cache_key=MzgxMzQ1NzM1MDkwMDYzMjU3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=0TexsB4SE3EQ7kNvwG_MlQE&_nc_oc=AdmqzMet8Solp02g80Qp76BLQpDgfgkg831JpuvUA4tzmlaPpb8u4JWaNAsFD79jTW_M6yAm6sHDvXQ7v8wSzo-R&_nc_ad=z-m&_nc_cid=1089&_nc_zt=23&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_gid=-vSYWPCmX4ZvEnXROmG9mw&oh=00_AfrnO79Kj-ubbHw2ipz83Foqtq0iZVxSakvC9yswblL7mg&oe=6975DACF",
            category: "Завершено",
            tags: ["УГКЦ Св. Варвари", "Відень"],
            date: "18 січня 2026",
            linkDetails: "https://www.instagram.com/p/DTsH0YuCK47/?img_index=1",
            filter: "2026",
        },
        {
            name: "Подорож до Будапешту",
            img: "https://darsik.com/wp-content/uploads/2017/08/untitled-9-5.jpg",
            category: "Завершено",
            tags: ["УГКЦ Св. Варвари", "Відень"],
            date: "12 грудня 2025",
            linkDetails: "https://www.instagram.com/p/DSKxkowAsD_/",
            filter: "2025",
        },
        {
            name: "Паломники Надії",
            img: "https://i.postimg.cc/zBDScxfL/photo-2026-01-21-12-04-12.jpg",
            category: "Завершено",
            tags: ["УГКЦ Св. Варвари", "Відень"],
            date: "30 листопада 2025",
            linkDetails: "https://www.instagram.com/p/DRrbONcjYOH/",
            filter: "2025",
        },
        {
            name: "Молодіжний табір 2025",
            img: "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/517923073_17932592025077405_7003657409983561170_n.webp?stp=dst-webp_s1080x1080&_nc_cat=105&ig_cache_key=MzY3MzAxNDczMDA3MTkxMjUwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=E71AenO5TywQ7kNvwGQ6IQJ&_nc_oc=AdmSepRjWmK6t7-5Kb80HF-oU8WfSPRf5O_CzDfPruc0oc26WYb85p0IZbbBF1KVy1pruVGy99sDd_vlIOzxA856&_nc_ad=z-m&_nc_cid=1089&_nc_zt=23&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_gid=8YcYoiXk9PVcviNL0HSKlQ&oh=00_AfpcaXmseJ6aBi9X7UAVq53cgLk9mT3HitgzED2hC831Zw&oe=6975EC4C",
            category: "Завершено",
            tags: ["УГКЦ Св. Варвари", "Відень"],
            date: "9 липня 2025",
            linkDetails: "https://www.instagram.com/p/DMBlEkDN1uv/",
            filter: "2025",
        },
        {
            name: "Велосипедна погулянка",
            img: "https://i.postimg.cc/Qdb1dr49/photo-2026-01-20-23-52-03-(2).jpg",
            category: "Завершено",
            tags: ["УГКЦ Св. Варвари", "Відень"],
            date: "18 травня 2025",
            linkDetails: "https://www.instagram.com/p/DJzJaHmtley/",
            filter: "2025",
        },
        {
            name: "Подорож до Риму",
            img: "https://i.postimg.cc/76pTWPhP/photo-2026-01-20-23-52-03.jpg",
            category: "Завершено",
            tags: ["УГКЦ Св. Варвари", "Відень"],
            date: "28 квітня 2025",
            linkDetails: "https://www.instagram.com/p/DI_M19zNrSh/?img_index=1",
            filter: "2025",
        },
        {
            name: "Перша Медична Допомога",
            img: "https://thepoint.rabota.ua/wp-content/uploads/2022/03/first_aid_1170x550.png",
            category: "Завершено",
            tags: ["УГКЦ Св. Варвари", "Відень"],
            date: "28 квітня 2025",
            linkDetails: "https://www.instagram.com/p/DGdLXp2skc1/",
            filter: "2025",
        },
        {
            name: "Гаївки 2024",
            img: "https://i.postimg.cc/sfwgpwSg/photo-2026-01-21-11-48-03.jpg",
            category: "Завершено",
            tags: ["УГКЦ Св. Варвари", "Відень"],
            date: "28 квітня 2025",
            linkDetails: "https://www.instagram.com/p/C7CHpX3tUSH/?img_index=1",
            filter: "2024",
        },
    ];

    function createCard(product) {
        const card = document.createElement("div");
        card.className = `m-0 col-lg-4 col-md-6 portfolio-item isotope-item filter-${product.filter}`;
        card.style.padding = "12px";
        card.innerHTML = `
            <a href="${
                product.linkDetails
            }" class="portfolio-card " style="cursor: pointer;" target="_blank">
                <div class="portfolio-image-container ">
                    <img src="${product.img}" alt="${
            product.name
        }" class="img-fluid" loading="lazy">


                    <div class="portfolio-overlay">
                        <div class="portfolio-info">

                            <span class="project-category ${
                                product.category === "Завершено"
                                    ? "bg-primary"
                                    : product.category === "Актуально"
                                    ? "bg-danger"
                                    : ""
                            }">
                                ${product.category}
                            </span>


                            <h4 class="mt-4" style="text-shado2w: 2px 2px 5px black">${
                                product.name
                            }</h4>
                        </div>
                        <div class="portfolio-actions ">

                         <button type="button" class="btn btn-primary portfolio-details bg-primary text-white fw-bold rounded-3" data-bs-toggle="modal" 
                         data-bs-target="${
                             product.linkDetails
                         }"> <i class="bi bi-arrow-right fw-bold"></i>   </button>

                        </div>
                    </div>

                    
                </div>
                <div class="portfolio-meta">
                    <div class="project-tags">${product.tags
                        .map((t) => `<span class="tag">${t}</span>`)
                        .join("")}</div>
                    <div class="project-year">${product.date}</div>
                </div>
            </a>
        `;

        return card;
    }

    function updateLoadMoreButton() {
        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );
        loadMoreBtn.style.display =
            filteredProducts.length > visibleCount &&
            filteredProducts.length > 3
                ? "inline-block"
                : "none";
    }

    function initIsotope() {
        imagesLoaded(productsContainer, function () {
            iso = new Isotope(productsContainer, {
                itemSelector: ".portfolio-item",
                layoutMode: "masonry",
                transitionDuration: "0.0s",
            });

            const filters = document.querySelectorAll(".portfolio-filters li");
            filters.forEach((filter) => {
                filter.addEventListener("click", function () {
                    filters.forEach((f) => f.classList.remove("filter-active"));
                    this.classList.add("filter-active");

                    currentFilter = this.getAttribute("data-filter");
                    visibleCount = 3;

                    // --- Очищаємо контейнер ---
                    const allItems =
                        productsContainer.querySelectorAll(".portfolio-item");
                    allItems.forEach((item) => item.remove());

                    // --- Додаємо перші 3 елементи фільтру ---
                    const filteredProducts = products.filter(
                        (p) =>
                            currentFilter === "*" ||
                            `.filter-${p.filter}` === currentFilter
                    );
                    const initialProducts = filteredProducts.slice(
                        0,
                        visibleCount
                    );
                    initialProducts.forEach((p) =>
                        productsContainer.appendChild(createCard(p))
                    );

                    // --- Оновлюємо Isotope ---
                    iso.reloadItems();
                    iso.arrange({ filter: currentFilter });

                    updateLoadMoreButton();
                });
            });

            updateLoadMoreButton();
        });
    }

    function renderInitial() {
        const initialProducts = products.slice(0, visibleCount);
        initialProducts.forEach((p) =>
            productsContainer.appendChild(createCard(p))
        );
        visibleCount = initialProducts.length;
        initIsotope();
    }

    function loadMore() {
        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );
        const nextVisible = visibleCount + 3;
        const newCards = [];
        for (
            let i = visibleCount;
            i < nextVisible && i < filteredProducts.length;
            i++
        ) {
            const card = createCard(filteredProducts[i]);
            productsContainer.appendChild(card);
            newCards.push(card);
        }
        visibleCount = Math.min(nextVisible, filteredProducts.length);

        if (iso) {
            iso.appended(newCards);
            iso.layout();
        }

        updateLoadMoreButton();
    }

    loadMoreBtn.addEventListener("click", loadMore);
    renderInitial();
});

// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team

document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Соня",
            img: "https://i.postimg.cc/6qY2Ft88/photo-2026-01-19-22-56-15.jpg",
            position: "Натхненниця спільноти",
            social: [
                {
                    icon: "bi bi-instagram",
                    link: "https://www.instagram.com/sof212s/tagged/",
                },
            ],
        },
        {
            name: "Karpiy",
            img: "https://i.postimg.cc/4NxhV70L/photo-2026-01-19-22-56-14-(3).jpg",
            position: "Координатор зустрічей",
            social: [
                {
                    icon: "bi bi-instagram",
                    link: "https://www.instagram.com/karpiy_/",
                },
            ],
        },
        {
            name: "Павло",
            img: "https://i.postimg.cc/Gt2GL4wQ/photo-2026-01-19-23-10-01.jpg",
            position: "Творець простору",
            social: [
                {
                    icon: "bi bi-instagram",
                    link: "https://www.instagram.com/horvat_pavlo/",
                },
            ],
        },
        {
            name: "Тарас",
            img: "https://i.postimg.cc/7ZCGQvwD/photo-2026-01-19-22-56-14-(2).jpg",
            position: "Куратор спільноти",
            social: [
                {
                    icon: "bi bi-instagram",
                    link: "https://www.instagram.com/liutak_/",
                },
            ],
        },
        {
            name: "Олеся",
            img: "https://i.postimg.cc/G2R42HYr/photo-2026-01-19-22-56-14.jpg",
            position: "Генераторка ідей",
            social: [
                {
                    icon: "bi bi-instagram",
                    link: "https://www.instagram.com/mor_olesya_/",
                },
            ],
        },
     
        {
            name: "Тетяна",
            img: "https://i.postimg.cc/1Xj70gpD/photo-2026-01-19-23-24-10.jpg",
            position: "Людина змін",
            social: [
                {
                    icon: "bi bi-instagram",
                    link: "https://www.instagram.com/tetianabeyko03/",
                },
            ],
        },
        {
            name: "Ольга",
            img: "https://i.postimg.cc/W16KC4j1/531205117-18520092664011598-4888488768238131273-n.jpg",
            position: "Підтримка і розвиток",
            social: [
                {
                    icon: "bi bi-instagram",
                    link: "https://postimg.cc/yDxvSskM/7695167d",
                },
            ],
        },
        {
            name: "Валентин",
            img: "https://i.postimg.cc/y6ybCykj/photo-2026-01-22-00-01-11.jpg",
            position: "Серце спільноти ",
            social: [
                {
                    icon: "bi bi-instagram",
                    link: "https://postimg.cc/yDxvSskM/7695167d",
                },
            ],
        },
    ];

    const container = document.getElementById("products_199");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxName = document.getElementById("lightbox-name");
    const lightboxClose = document.getElementById("lightbox-close");

    let currentIndex = 0;

    function createCard(product) {
        const card = document.createElement("div");

        card.className =
            "m-0 team-card col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 team-member0 ";

        // Генеруємо посилання на соцмережі
        const socialLinks = product.social
            .map(
                (s) =>
                    `<a href="${s.link}" target="_blank" rel="noopener noreferrer" class="mt-3"><i class="${s.icon}"></i></a>`
            )
            .join("");

        card.innerHTML = `
            <div style="padding: 12px;" class="team-member card bg-transparent border-0 shadow-sm rounded-4 ">
                <div class="member-img rounded-3 overflow-hidden mb-2 mx-auto">
                    <img src="${product.img}" class="img-fluid rounded-3 img_team" alt="${product.name}">
                </div>
                <div class="member-info text-center mt-2">
                    <h6 class="fw-semibold text-white  mb-2">${product.name}</h6>
                    <span class="small text-secondary d-block">${product.position}</span>
                </div>
            </div>
        `;

        //  <div class="team_social m-0 p-0">  ${socialLinks}    </div>

        // ✅ LIGHTBOX по кліку
        const img = card.querySelector(".img_team");
        img.addEventListener("click", () => {
            const index = products.indexOf(product);
            openLightbox(index);
        });

        return card;
    }

    // 👉 рендер
    products.forEach((p) => {
        container.appendChild(createCard(p));
    });

    // 👉 закриття lightbox
    lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none";

        // відновлюємо скрол
        document.body.style.overflow = "";
    });

    // 👉 закриття по кліку на фон
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox && e.target !== lightboxImg) {
            lightbox.style.display = "none";

            // відновлюємо скрол ТІЛЬКИ при закритті
            document.body.style.overflow = "";
        }
    });

    // 👉 закриття lightbox
    lightboxImg.addEventListener("click", () => {
        document.body.style.overflow = "hidden";
    });

    // ===== СТРІЛКИ =====
    const lightboxPrev = document.getElementById("lightbox-prev");
    const lightboxNext = document.getElementById("lightbox-next");

    lightboxPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        openLightbox(currentIndex);
    });

    lightboxNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % products.length;
        openLightbox(currentIndex);
    });

    // додавання блокування скролу
    // додавання блокування скролу
    function openLightbox(index) {
        currentIndex = index;

        lightboxImg.src = products[currentIndex].img;
        lightboxName.textContent = products[currentIndex].name;

        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    // інше
    // інше
    // інше
    // інше
    // інше
    // інше

    function perView() {
        const w = window.innerWidth;
        if (w < 576) return 1;
        if (w < 992) return 2;
        if (w < 1400) return 3;
        return 4;
    }

    function updateSlider() {
        const visible = perView();
        const cardWidth = container.children[0].offsetWidth + 0; // картка + gap
        container.style.transform = `translateX(${
            -currentIndex * cardWidth
        }px)`;
    }

    document.getElementById("nextCard99").addEventListener("click", () => {
        const visible = perView();
        currentIndex = Math.min(currentIndex + 1, products.length - visible);
        updateSlider();
    });

    document.getElementById("prevCard99").addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });

    window.addEventListener("resize", updateSlider);

    updateSlider();
});

// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО

document.addEventListener("DOMContentLoaded", function () {
    const mobileNavToggle = document.querySelector(".my_burger");
    const body = document.querySelector("body");
    const navMenu = document.querySelector("#navmenu"); // правильний id

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener("click", function (e) {
            e.preventDefault();
            body.classList.toggle("mobile-nav-active");

            // Змінюємо іконку (бургер <-> хрестик)
            this.classList.toggle("bi-list");
            this.classList.toggle("bi-x");
        });
    }

    // Закривання меню після кліку по пункту
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", function () {
            if (body.classList.contains("mobile-nav-active")) {
                body.classList.remove("mobile-nav-active");
                mobileNavToggle.classList.add("bi-list");
                mobileNavToggle.classList.remove("bi-x");
            }
        });
    });
});

//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top

const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollTopBtn.classList.add("active");
        } else {
            scrollTopBtn.classList.remove("active");
        }
    });

    scrollTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
document.getElementById("currentYear").textContent = new Date().getFullYear();

// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ

document.querySelectorAll(".js_name").forEach((el) => {
    el.textContent = "Молодь св. Варвари";
});

// заголовок функціЯ щоб не дублювати

document.querySelectorAll("[data-section-title]").forEach((el) => {
    el.innerHTML = `
      <div class="my_section_title row" data-aos="fade-up">
        <div class="my_subtitle col-12">Молодь св. Варвари</div>
        <div class="my_title col-12">${el.dataset.title}</div>
        <div class="my_under_title col-12">${el.dataset.under}</div>
      </div>
    `;
});
