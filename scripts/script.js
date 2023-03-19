
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
    "adventure": "Dobrodružne",
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

function setCategoryTitle()
{
    const url = new URL(window.location.toString());
    console.log(url);
    const categoryName = url.searchParams.get("category");
    var categoryTitleElement = document.getElementById("category-title");
    categoryTitleElement.innerHTML = categoryTitleMapping[categoryName] ?? "Neznáma kategória";
}