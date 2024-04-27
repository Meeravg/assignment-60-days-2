let container = document.getElementById("container");


 async function GetData(){
        let res = await fetch("https://fakestoreapi.com/products");
        let products = await res.json();
        console.log(products);
        fetchData(products)
}
function fetchData(products) {  
        // grid container
        let gridContainer = document.createElement("div");
        gridContainer.className = "grid";

        container.innerHTML=null

        products.forEach((product) => {
        
            let image = document.createElement("img");
            image.src = product.image;

            let title = document.createElement("h2");
            title.textContent = product.title;

            let price = document.createElement("p");
            price.textContent = "Price - " + product.price;

            let subBox = document.createElement("div");
            subBox.className="box"
            subBox.append(image, title, price);

            gridContainer.appendChild(subBox);

        });

        container.appendChild(gridContainer);
      
}

 async function Category(){
    let cate = document.querySelector("#cate")
    let res = await fetch(`https://fakestoreapi.com/products/category/${cate.value}`)
    let data = await res.json()
    fetchData(data)
    console.log(data);
}

GetData()

