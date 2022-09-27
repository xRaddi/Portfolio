// RESPONSIVE MENU

const icon = document.querySelector('.bars');
const links = document.querySelector('.menu-responsive');

icon.addEventListener("click", () => {
    links.classList.toggle("active");
});

// CHANGE LANGUAGE

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./json/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value]
    }
}

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.dataset.language);
});


// CHANGE COLOR THEME

