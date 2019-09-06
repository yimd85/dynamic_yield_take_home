var clickedBox = document.getElementsByClassName(
  "c-product-tile__image-link js-product-tile__image-link"
);
var numClickedBox = clickedBox.length;
var addToBagClicked = document.getElementsByClassName("c-pwa-add-to-bag");
var numAddToBag = addToBagClicked.length;

//local storage add
if (localStorage.getItem("CSE_Challenge") === null) {
  localStorage.setItem(
    "CSE_Challenge",
    JSON.stringify({
      [`Men's`]: 0,
      [`Women's`]: 0,
      Beauty: 0,
      Lifestyle: 0,
      Home: 0
    })
  );
}

//product view event handler and increase in local storage count
for (var i = 0; i < numClickedBox; i++) {
  clickedBox[i].className += ` ${clickedBox[i].dataset.gaEventAction}`;
  clickedBox[i].addEventListener("click", function(event) {
    localStorage.setItem(
      "CSE_clicked_on",
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
  localStorage.getItem("CSE_clicked_on") !== null
) {
  var value_to_be_updated = JSON.parse(localStorage.getItem("CSE_Challenge"))[
    `${localStorage.getItem("CSE_clicked_on")}`
  ];

  var final_tally = Object.assign(
    JSON.parse(localStorage.getItem("CSE_Challenge")),
    { [`${localStorage.getItem("CSE_clicked_on")}`]: value_to_be_updated + 1 }
  );

  localStorage.setItem("CSE_Challenge", JSON.stringify(final_tally));
}

//add to bag event handler and increase in local storage count
for (var i = 0; i < numAddToBag; i++) {
  var add_to_be_update = JSON.parse(localStorage.getItem("CSE_Challenge"))[
    `${localStorage.getItem("CSE_clicked_on")}`
  ];

  var final_tally_added = Object.assign(
    JSON.parse(localStorage.getItem("CSE_Challenge")),
    { [`${localStorage.getItem("CSE_clicked_on")}`]: add_to_be_update + 3 }
  );
  addToBagClicked[i].addEventListener("click", function(event) {
    localStorage.setItem("CSE_Challenge", JSON.stringify(final_tally_added));
  });
}


//Reordering rows
document.getElementsByClassName("dom-landing-page-modules")[0].style.display =
  "flex";
document.getElementsByClassName("dom-landing-page-modules")[0].style[
  "flex-direction"
] = "column";

document.getElementsByClassName("o-row")[33].style.order = -JSON.parse(
  localStorage.getItem("CSE_Challenge")
)[`Women's`];
document.getElementsByClassName("o-row")[48].style.order = -JSON.parse(
  localStorage.getItem("CSE_Challenge")
)[`Men's`];

document.getElementsByClassName("o-row")[63].style.order = -JSON.parse(
  localStorage.getItem("CSE_Challenge")
)[`Home`];

document.getElementsByClassName("o-row")[78].style.order = -JSON.parse(
  localStorage.getItem("CSE_Challenge")
)[`Lifestyle`];

document.getElementsByClassName("o-row")[93].style.order = -JSON.parse(
  localStorage.getItem("CSE_Challenge")
)[`Beauty`];

document.getElementsByClassName(
  "o-row s-new-arrivals-us-ca-hero  "
)[0].style.order = -10000;



