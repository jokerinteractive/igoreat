var inp = document.querySelectorAll("input");
var filterBtn = document.querySelector(".filter__btn");
var linkReset = document.querySelector(".filter__link");



for (var i = 0; i < inp.length; i++) {
    inp[i].addEventListener("click", function() {
        console.log("a");
        if (filterBtn.hasAttribute('disabled')) {
            console.log("if");
            filterBtn.removeAttribute('disabled');
            filterBtn.classList.remove('filter__btn--disabled');
        } //else {
            //console.log("el");
            //filterBtn.setAttribute('disabled', true);
            //filterBtn.classList.add('filter__btn--disabled');
        //}
    });
};