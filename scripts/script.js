var pageIndicator = document.querySelectorAll('li');
var page = document.querySelectorAll('.page');
var submitBtn = document.querySelector('#nextBtn')
var heading = document.getElementById('pageTitle')
var inputs = document.getElementsByTagName('input')
submitBtn.addEventListener('click', nextPage)


function nextPage() {

    var pageNum = document.querySelector('#pageCount');
    var currentPageNum = parseInt(pageNum.innerHTML);
    var nextPageNum = currentPageNum + 1;
    console.log(nextPageNum);

    if (nextPageNum < page.length) {
        // Hide Current
        page[currentPageNum].style.display = "none";


        // Display next
        pageIndicator[nextPageNum].style.opacity = 1;
        page[nextPageNum].style.display = "block";
        switch (nextPageNum) {
            case 1:
                heading.innerHTML = "Your Full Name"
                break;
            case 2:
                heading.innerHTML = "Your Email Address"
                break;
            case 3:
                heading.innerHTML = "Your Password & Phone"
                break;
            case page.length - 1:
                heading.innerHTML = "";
                document.getElementById("container").style.background = "var(--secondaryColor)";
                document.getElementById("nextBtn").style.backgroundImage = "url('./assets/tick.svg')";
                setTimeout(function () {
                    window.open("https://www.instagram.com/")

                }, 1500)


                break;
        }
        pageNum.innerHTML = nextPageNum;
    }




}