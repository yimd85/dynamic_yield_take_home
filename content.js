alert("test 1.5!");

var clickedBox = document.getElementsByClassName(
  "c-product-tile__image-link js-product-tile__image-link"
);
var numClickedBox = clickedBox.length;

if (localStorage.getItem("CSE_Challenge") === null) {
  localStorage.setItem(
    "CSE_Challenge",
    JSON.stringify({ [`Men's`]: 0, [`Women's`]: 0, Beauty: 0, Lifestyle: 0, Home: 0 })
  );
}

for (var i = 0; i < numClickedBox; i++) {
  clickedBox[i].className += ` ${clickedBox[i].dataset.gaEventAction}`;
  clickedBox[i].addEventListener("click", function(event) {
    localStorage.setItem(
      "clicked_on",
      event.target.parentElement.className
        .replace(
          "c-product-tile__image-link js-product-tile__image-link product tray|",
          ""
        )
        .replace(" click", "")
    );
  });
}

if (
  window.location.href.indexOf("https://www.urbanoutfitters.com/shop/") > -1 &&
  localStorage.getItem("clicked_on") !== null
) {
  var value_to_be_updated = JSON.parse(localStorage.getItem("CSE_Challenge"))[
    `${localStorage.getItem("clicked_on")}`
  ];
  var final_tally = Object.assign(
    JSON.parse(localStorage.getItem("CSE_Challenge")),
    { [`${localStorage.getItem("clicked_on")}`]: value_to_be_updated + 1 }
  );
  localStorage.setItem("CSE_Challenge", JSON.stringify(final_tally));
}
