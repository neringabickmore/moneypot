/**
 * code for fetching name info to feedback.html
 * Original code from: https: //github.com/neringabickmore/BI-Team-5/blob/master/assets/js/script.js
 */

let url_string = window.location.href;
let url = new URL(url_string);
let yourName = url.searchParams.get("name");
document.getElementById("yourName").innerHTML = yourName;