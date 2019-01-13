var contentContainer = document.createElement('div');
contentContainer.className = "content-container";
contentContainer.id = "cc"
document.body.appendChild(contentContainer);


for (var i = 0; i < 9; i++) {
    var el = document.createElement("div");
    el.className = "card";
    el.innerHTML = '<div class="card"> <div class = "card-content"> <div class = "card-image" ></div> <div class = "card-text" >LeverX International </div>  </div> <div class = "card-description" >За годы работы компания LeverX накопила глубокие знания и понимание SAP - технологий и создала уникальную команду с экспертизой в различных бизнес - сферах </div> <div class = "card-button" ><input class = "but2"type = "button"value = "Try" ></div> </div>';
    var cont = document.getElementById("cc");
    cont.appendChild(el);
}

