

let search = async (url) => {
  try {
    var res = await fetch(url);

    var data = await res.json();
    // console.log(data)

    return data.meals;
  } catch (err) {
    console.log(err);
  }
};

function append(data, container) {
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");

    let p = document.createElement("p");
    p.innerText = el.strMeal;

    let img = document.createElement("img");
    img.src = el.strMealThumb;
    img.style.width = "100%";

    div.append(img, p);
    container.append(div);
  });
}
function appendHome(data, container) {
  container.innerHTML = null;
 
  
  data.forEach((el) => {
    let div = document.createElement("div");

    let p = document.createElement("p");
    p.innerText = el.strCategory;

    let img = document.createElement("img");
    img.src = el.strCategoryThumb;
    img.style.width = "100%";

    div.append(img, p);
    container.append(div);
  });
}

function append2(data, container) {
  console.log(data);
  container.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement("div");
    div.style.width = "30%";
    div.style.height = "auto";
    div.style.margin = "auto";
    div.style.marginTop = "20px";
    div.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";

    let p = document.createElement("p");
    p.innerText = `Dish Name: ${el.strMeal}`;
    p.style.fontWeight = "Bold";

    let img = document.createElement("img");
    img.src = el.strMealThumb;
    img.style.width = "100%";

    let p1 = document.createElement("p");
    p1.innerText = `Area: ${el.strArea}`;
    p1.style.fontWeight = "Bold";

    let p2 = document.createElement("p");
    p2.innerText = `Category: ${el.strCategory}`;
    p2.style.fontWeight = "Bold";

    div.append(img, p, p1, p2);

    container.append(div);
  });
}
export { search, append, append2,appendHome };
