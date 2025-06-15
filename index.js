const form = document.querySelector("#guests");
const input = document.querySelector("#newguest");
const guestList = document.querySelector("#guest-list");

function guestListLimitReached() {
    return guestList.children.length >= 10;
}

form.addEventListener("submit", function (event){
    event.preventDefault();


     const rsvpButton = document.createElement("button");
    rsvpButton.textContent = "Not Attending ";
    rsvpButton.style.marginLeft = "200px";

    let attending = false; 

    rsvpButton.addEventListener("click", function () {
        attending = !attending;
        rsvpButton.textContent = attending ? "Attending ✅" : "Not Attending";
        listItem.style.color = attending ? "black" : "grey";

        
    });

   
    
    if (guestListLimitReached()) {
        alert("Sorry, limit of 10 guests reached.");
        return;
    }

    const name = input.value;
    const timeAdded = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
});

const listItem = document.createElement("li");
listItem.textContent = `${name} (Added at ${timeAdded})`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.marginLeft = "30px";

    removeButton.addEventListener("click", function () {
        guestList.removeChild(listItem);
    });

    listItem.appendChild(rsvpButton);

    listItem.appendChild(removeButton);

    guestList.appendChild(listItem);

    input.value = "";
});


