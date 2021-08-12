//NOTES
/*
//functions
open('Get' OR 'POST' , 'name file')
send()

//properties.
responseText >>return the file content
status >> check the file if found or notfound
readyState >> when xhr is onload this property check the request

*/
/*===============JSON====================== */
// var myButton = document.getElementsByTagName('button');
// myButton[0].addEventListener('click', readfile);

// function readfile() {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function() {
//         if (this.readyState == 4 && this.status == 200) {

//             document.getElementsByTagName('h1')[0].innerHTML = this.responseText;
//         }
//     }
//     xhr.open('GET', 'my info.txt'); //make a conection between me and server
//     xhr.send(); //send request to server
// }
/* ===================x===============JSON===============x======================*/


/*===================API Articles=========================== */
// var myButton = document.getElementsByTagName('button');
// myButton[0].addEventListener('click', readfile);

// function readfile() {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var myArticles = JSON.parse(this.responseText).articles;
//             for (var i = 0; i < myArticles.length; i++) {
//                 document.getElementsByTagName('h1')[0].innerHTML += myArticles[i].title + '<br>';
//             }
//         }
//     }
//     xhr.open('GET', 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=a78ddcf257c24f3997ceb6478c073773'); //make a conection between me and server
//     xhr.send(); //send request to server
//}

/*=====================x===================API Articles==================x================= */


var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (this.status == 200 && this.readyState == 4) {
        var myArticles = JSON.parse(this.responseText).articles;
        for (var i = 0; i < myArticles.length; i++) {
            document.getElementById('row').innerHTML +=
                `<div class="col-md-4">
            <div class="card-content">
                <div class="card-img">
                <img src="${myArticles[i].urlToImage}" alt="">
                <span><h4>${myArticles[i].author}</h4></span>
                    <h6 class="mb-0">
                        <a target="_blank" class="text-dark" href="${myArticles[i].url}">${myArticles[i].title}</a>
                    </h6>
                    <div class="mb-1 text-muted small">${myArticles[i].publishedAt}</div>
                </div>
                <div class="card-desc">
                    <h3>${"Heading"}</h3>
                    <p>t${myArticles[i].conten}</p>
                    
                </div>
            </div>
        </div>`;

        }


    }
}
xhr.open('GET',
    'https://newsapi.org/v2/everything?q=sports&apiKey=a78ddcf257c24f3997ceb6478c073773');
xhr.send();