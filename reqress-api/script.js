let container = document.getElementById("container");
let btn = document.getElementById("btn");
let Prev = document.getElementById("prev");
let Next = document.getElementById("next");
let pgnumber = document.getElementById("pgnumber");

var pageNo = 1;

Prev.addEventListener("click", function(){
    pageNo = pageNo - 1;
    if(pageNo > 0){
        getData(https://reqres.in/api/users?page=${pageNo})
        pgnumber.innerHTML = <h2>${pageNo}</h2>
    }else{
        pageNo = 1;
        getData(https://reqres.in/api/users?page=${pageNo})
    }
});

Next.addEventListener("click", function(){
    pageNo = pageNo + 1;
    if(pageNo <= 2){
        getData(https://reqres.in/api/users?page=${pageNo})
        pgnumber.innerHTML = <h2>${pageNo}</h2>
    }else{
        pageNo = 2;
        getData(https://reqres.in/api/users?page=${pageNo})
        pgnumber.innerHTML = <h2>${pageNo}</h2>
    }

})

btn.addEventListener("click", function(){
    getData(https://reqres.in/api/users?page=${pageNo});
});


async function getData(link){
    container.innerHTML = "";
    
    try {
        let res = await fetch(link);
        let data = await res.json();
        let val = data.data;
        showData(val);
        console.log(data);
    } catch (error) {
        throw new Error("Page not found...!")
    }

}


function showData(val){
    val.forEach(function(ele, i){
        let userCard = document.createElement("div");
        let avatar = document.createElement("img");
        avatar.src = ele.avatar;

        let first_name = document.createElement("h2");
       
        let last_name = document.createElement("h2");
        first_name.innerText = Name:  ${ele.first_name} ${ele.last_name};
        

        let email = document.createElement("h3");
        email.innerText = Email: ${ele.email};

        userCard.append(avatar, first_name, last_name, email);
        container.append(userCard);
    })
}