let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinnerEle = document.getElementById("spinner");

function createhtmldisplayfun(result) {
    //divelement - result-item
    let resultelemnt = document.createElement("div");
    resultelemnt.classList.add("result-item");
    searchResults.appendChild(resultelemnt);

    //Achorelement result-title
    let anchorElement = document.createElement("a");
    anchorElement.classList.add("result-title");
    anchorElement.textContent = result.title;
    resultelemnt.appendChild(anchorElement);

    //Title break
    let linebreak = document.createElement("br");
    resultelemnt.appendChild(linebreak);

    //anchorurl result-url
    let anchorurl = document.createElement("a");
    anchorurl.classList.add("result-url");
    anchorurl.textContent = result.link;
    resultelemnt.appendChild(anchorurl);

    //Line break
    let linebreaks = document.createElement("br");
    resultelemnt.appendChild(linebreaks);

    //paragraph line-description
    let paragraph = document.createElement("p");
    paragraph.classList.add("line-description");
    paragraph.textContent = result.description;
    resultelemnt.appendChild(paragraph);

    console.log(searchResults);
}

function displayresults(search_results) {
    spinnerEle.classList.toggle("d-none");
    for (let result of search_results) {
        createhtmldisplayfun(result);
    }
}

function searchwikipedia(event) {
    if (event.key === "Enter") {
        let userinput = searchInput.value;
        spinnerEle.classList.toggle("d-none");
        //console.log(userinput);
        searchResults.textContent = "";
        let url = "https://apis.ccbp.in/wiki-search?search=" + userinput;
        //console.log(url);
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayresults(search_results);
            });
    }
}

searchInput.addEventListener("keydown", searchwikipedia);
