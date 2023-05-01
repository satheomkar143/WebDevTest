
const hideSidebar = ()=>{
    const divToToggle = document.querySelector('.sidebar');
    divToToggle.classList.remove("showSideBar")
}

const showSidebar = ()=>{
    const divToToggle = document.querySelector('.sidebar');
    divToToggle.classList.add("showSideBar")
}

let cuisineList ;
const showFilter = ()=>{
    const filterDiv = document.querySelector('.filters');
    filterDiv.classList.add("filterShow");
    cuisineList = document.querySelectorAll('.cuisineList');
    cuisineList.forEach(list =>{
        list.addEventListener("click", () =>{
            cuisineList.forEach(div => div.classList.remove('cuisineListColor'));
            list.classList.toggle("cuisineListColor");
        })
    })
}

const hideFilter = ()=>{
    const filterDiv = document.querySelector('.filters');
    filterDiv.classList.remove("filterShow");
}

const toggleOpen = ()=>{
    const toggleOpenDiv = document.querySelector('.open');
    toggleOpenDiv.classList.toggle("isOpenClass");
}