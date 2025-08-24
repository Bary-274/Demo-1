let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=> {
    let country = document.querySelector("input").value;
    let colArr = await getColleges(country);
    showCollegesList(colArr); 
})

function showCollegesList(colArr){
    let list = document.querySelector("#list");
    for(col of colArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        console.log(res.data);
        return res.data;
    } catch (e){
        return [];
    }
}