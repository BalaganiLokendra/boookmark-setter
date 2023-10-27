// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");

let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let unorderlistEl = document.getElementById("bookmarksList");
let bookmarkresEl = document.getElementById("bookmarkres");

let formData = {
    name: siteNameInputEl.value,
    url: siteUrlInputEl.value
};

siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
    formData.url = event.target.value;
});





function createAndAppendIntoUnorderList() {
    let siteName = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value;
    if (siteName !== "" && siteUrl !== "") {
        bookmarkresEl.classList.add("bookmarked-container");
        let listInUl = document.createElement("li");
        listInUl.style.listStyleType = "None";
        listInUl.textContent = siteName;
        let brEl = document.createElement("br");
        listInUl.appendChild(brEl);

        let anchEl = document.createElement("a");
        anchEl.textContent = siteUrl;
        anchEl.setAttribute("href", siteUrl);
        anchEl.setAttribute("target", "_blank");
        listInUl.appendChild(anchEl);
        unorderlistEl.appendChild(listInUl);

    }
}

function validateFormData(formData) {
    let {
        name,
        url
    } = formData;
    console.log(url);
    if (name === "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    if (url === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    }
}

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    createAndAppendIntoUnorderList();
});