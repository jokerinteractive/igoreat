var stepPage = {
    count: 1,
    offset: 0,
    step_list: [{
      id: 1,
      title: "Сварите пасту до состояния al dente",
      time: 12,
    }, {
      id: 2,
      title: "Взбейте четыре яичных желтка",
      time: 8,
    }, {
      id: 3,
      title: "Влейте смесь в готовую пасту",
      time: 4,
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

renderTemplate('step', stepPage, '.gallery-step__slider');