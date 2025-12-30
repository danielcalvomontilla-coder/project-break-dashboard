const inputName = document.getElementById("inputName");
const inputLink = document.getElementById("inputLink");
const btnsubmit = document.getElementById("btnsubmit");
const btnclear = document.getElementById("btnclear");
const linksList = document.getElementById("linksList");

const STORAGE_KEY = "linksData";



function getLinks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveLinks(links) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}



function isValid(name, link) {
    if (!name.trim() || !link.trim()) {
        alert("Both fields are required");
        return false;
    }

    if (!link.startsWith("http://") && !link.startsWith("https://")) {
        alert("The link must start with http:// or https://");
        return false;
    }

    return true;
}



function renderLinks() {
    const links = getLinks();
    linksList.innerHTML = "";

    links.forEach((item, index) => {
        const li = document.createElement("li");

        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.name;
        a.target = "_blank";

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete";
        btnDelete.addEventListener("click", function () {
            deleteLink(index);
        });

        li.appendChild(a);
        li.appendChild(btnDelete);
        linksList.appendChild(li);
    });
}


function deleteLink(index) {
    const links = getLinks();
    links.splice(index, 1);
    saveLinks(links);
    renderLinks();
}



btnsubmit.addEventListener("click", function () {
    const name = inputName.value;
    const link = inputLink.value;

    if (!isValid(name, link)) return;

    const links = getLinks();
    links.push({ name, link });
    saveLinks(links);

    inputName.value = "";
    inputLink.value = "";

    renderLinks();
});

btnclear.addEventListener("click", function () {
    localStorage.removeItem(STORAGE_KEY);
    linksList.innerHTML = "";
});



window.addEventListener("DOMContentLoaded", renderLinks);