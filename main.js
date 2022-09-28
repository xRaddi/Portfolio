const icon = document.querySelector('.bars');
const links = document.querySelector('.menu-responsive');

icon.addEventListener("click", () => {
    links.classList.toggle("active");
});

// CHANGE LANGUAGE

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");
const downloadID = document.getElementById('download');

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./json/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value]
    }

    downloadID.href = `./assets/CV_2022_${language}.pdf`
}

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.dataset.language);
});


// CHANGE COLOR THEME

const IconID = document.getElementById('icon');

IconID.onclick = function () {
    document.body.classList.toggle("white-theme");

    if (document.body.classList.contains("white-theme")) {
        IconID.src = "./assets/moon.png"
    }
    else {
        IconID.src = "./assets/sun.png"
    }
}