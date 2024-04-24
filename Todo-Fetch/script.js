let container = document.getElementById("container");  //catch the main div with id container
let btn = document.getElementById("btn"); //catch the button here
btn.addEventListener("click", function(){ //adding the addeventlistener on button.
    getdata()
})


async function getdata(){  //getdata function which helps to fetch the data from given api.
    let link = "https://jsonplaceholder.typicode.com/todos"
    let res = await fetch(link);
    let data = await res.json();
    showData(data);   //passing the fetched data as an argument in the function showData.
}

function showData(data){   //showData function which helps to show the data has been fetched on the DOM
    data.forEach(function(ele, i){
        let MainDiv = document.createElement("div");    //creating diffrent elements here eg. div, h2, input element with type checkbox.
        let TodoBox = document.createElement("div");

        let title = document.createElement('h2');
        title.innerText = ele.title;

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox"

        TodoBox.append(title, checkBox);
        MainDiv.append(TodoBox);
        container.append(MainDiv); //appends all the element in the main div with id container.
    });
    

}