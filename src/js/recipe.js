var recipePage = {
  id: 2,
  title: "Спагетти Карбонара",
  description: "Alla carbonara — самая, пожалуй, знаменитая итальянская подливка к пасте (не только к спагетти, но и к другим видам тоже), приготовленная по способу карбонариев. В нее входит всего три ингредиента: грудинка, яйца и тертый пармезан. Сливки, чеснок и лук — дополнительные, но не обязательные вкусовые акценты, против использования которых сами итальянцы, впрочем, возражений не имеют.",
  time: 20,
  ingredient: 7,
  steps: [{
    title: "Сварите пасту до состояния al dente",
    description: "Вскипятите воду в большой кастрюле и сварите пасту до состояния   аль денте. Обычно для этого нужно варить ее на минуту меньше, чем указано на пачке."
  },{
    title: "Взбейте четыре яичных желтка",
    description: "В глубокой миске взбейте четыре яичных желтка со сливками и тертым пармезаном. Посолите и подробно поперчите смесь, еще раз взбейте."
  }, {
    title: "Влейте смесь в готовую пасту",
    description: "В готовые спагетти влейте смесь сливок, желтков и пармезана, перемешайте. И сразу подавайте, посыпав свеженатертым сыром и черным молотым перцем."
  }],
  ingredients: [{
    title: "Спагетти",
    how: "250 г"
  }, {
    title: "Сливки 20%",
    how: "200 мл"
  }, {
    title: "Пармезан",
    how: "250 г"
  }, {
    title: "Яйцо куриное",
    how: "4 штуки"
  }, {
    title: "Соль",
  }, {
    title: "Перец",
  }, {
    title: "Оливковое масло",
  }]
};

function renderTemplate(template_name, data, el) {
  var xhr = new XMLHttpRequest();
  var url = '/js/templates/' + template_name + '.hbs';

  xhr.open('GET', url, true);
  xhr.send();
  xhr.addEventListener('load', function() {
    var template = xhr.responseText;
    var handler = Handlebars.compile(template);
    var out = handler(data);
    var html = document.querySelector(el);
    html.innerHTML = out;
    console.log(out);
  });
}

renderTemplate('recipe-intro', recipePage, '.recipe__intro');
renderTemplate('recipe-steps', recipePage, '.steps');
renderTemplate('recipe-ingredient', recipePage, '.ingredient');