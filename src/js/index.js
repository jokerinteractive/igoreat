var indexPage = {
  recipe: [
  { id: 1,
    title: "Пицца",
    text: "Самая, пожалуй, знаменитая итальянская еда",
    time: 30, 
    ingridient: 7
    },
  { id: 2,
    title: "Спагетти Карбонара",
    text: "Самая, пожалуй, знаменитая итальянская подливка к пасте",
    time: 20,
    ingridient: 7,
    recomendation: 166
    },
  { id: 3,
    title: "Пицца",
   text: "Самая, пожалуй, знаменитая итальянская еда",
   time: 30, 
   ingridient: 7
    },
  { id: 4,
    title: "Спагетти Карбонара",
    text: "Самая, пожалуй, знаменитая итальянская подливка к пасте",
    time: 20,
    ingridient: 7,
    recomendation: 166
    }
  ],
  review:
    count: 12,
    offset: 4,
    review_list: [
    { id: 1,
    title: "Мария",
    text: "Делаю все по рецептам. Отлично получается, очень вкусно!",
    date: "1 марта 2015 года", 
    },
    { id: 2,
    title: "Мария2",
    text: "Делаю все по рецептам. Отлично получается, очень вкусно!",
    date: "1 марта 2015 года", 
    },

    // { id: 3,
    // title: "Мария3",
    // text: "Делаю все по рецептам. Отлично получается, очень вкусно!",
    // date: "1 марта 2015 года", 
    // },
    // { id: 4,
    // title: "Мария4",
    // text: "Делаю все по рецептам. Отлично получается, очень вкусно!",
    // date: "1 марта 2015 года", 
    // },
    // { id: 5,
    // title: "Мария5",
    // text: "Делаю все по рецептам. Отлично получается, очень вкусно!",
    // date: "1 марта 2015 года", 
    // },
    // { id: 6,
    // title: "Мария6",
    // text: "Делаю все по рецептам. Отлично получается, очень вкусно!",
    // date: "1 марта 2015 года", 
    // }
  ]
};

var myRecipe = document.getElementById('index-recipe').innerHTML;//делаем шаблон и сохраняем его в формате строки
var handlerRecipe = Handlebars.compile(myRecipe);//компилируем строку (см выше) в функцию js
var addRecipe = handlerRecipe(indexPage); // и мы в функцию(см выше) передаем объект
var recipe = document.querySelector('.content__dishes'); // переменная для добавления в верстку
recipe.innerHTML = addRecipe;//выводим штмл в документ

var myReview = document.getElementById('index-review').innerHTML;//делаем шаблон и сохраняем его в формате строки
var handlerReview = Handlebars.compile(myReview);//компилируем строку (см выше) в функцию js
var addReview = handlerReview(indexPage); // и мы в функцию(см выше) передаем объект
var review = document.querySelector('.review-slider__slide-wrapper'); // переменная для добавления в верстку
review.innerHTML = addReview;//выводим штмл в документ








