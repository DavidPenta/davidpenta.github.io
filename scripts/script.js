function toggleNav() {
    let isClose = document.getElementById("sidebar").style.width === "0px";
    document.getElementById("sidebar").style.width = isClose ? "250px" : "0";
}

const categoryTitleMapping =
    {
        "bestseller": "Bestsellery",
        "news": "Novinky",
        "youngadult": "Young Adult",
        "romance": "Romantika",
        "crime": "Krimi a detektívky",
        "thriller": "Trilery",
        "adventure": "Dobrodružné",
        "family": "Rodina",
        "fantasy": "Fantasy",
        "scifi": "Sci-fi",
        "novels": "Romány a novely",
        "biography": "Biografie",
        "poetry": "Poézia",
        "lifestyle": "Životný štýl",
        "children": "Deti a mládež",
        "education": "Náučná a odborná literatúra"
    }

function setCategoryTitle(categoryName) {
    let categoryTitleElement = document.getElementById("category-title");
    categoryTitleElement.innerHTML = categoryTitleMapping[categoryName] ?? "Neznáma kategória";
}

function setCategoryPage(pageNumber, categoryName) {
    const maxPage = 5;
    let pageAnchorElement;
    for (let i = 0; i < 5; i++) {
        let pageNumberPosition = i - 2;
        if ((Number(pageNumber) + Number(pageNumberPosition) > 0) && (Number(pageNumber) + Number(pageNumberPosition) <= maxPage)) {
            let pageNumberElement = document.getElementById("page-label-" + i);
            pageNumberElement.innerHTML = (Number(pageNumber) + Number(pageNumberPosition));

            pageAnchorElement = document.getElementById("page-anchor-" + i);
            pageAnchorElement.hidden = false;
            pageAnchorElement.href = "category.html?category=" + categoryName + "&page=" + (Number(pageNumber) + Number(pageNumberPosition));
        } else {
            pageAnchorElement = document.getElementById("page-anchor-" + i);
            pageAnchorElement.hidden = true;
        }
    }
}

function setCategoryTitleAndPage() {
    const url = new URL(window.location.toString());
    const categoryName = url.searchParams.get("category");
    const pageNumber = url.searchParams.get("page");
    setCategoryTitle(categoryName);
    setCategoryPage(pageNumber, categoryName);
}