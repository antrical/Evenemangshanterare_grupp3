document.addEventListener("DOMContentLoaded", function(){


let eventlist = new EventList();
let sortSelect = document.getElementById("sort");

sortSelect.addEventListener("change", function(){
    eventlist.sortList();
})

let filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", function(){
    
    
    eventlist.filterList();

}); 

});