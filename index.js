const fromHours = document.querySelector("#fromHours");
for(let i = 1; i <= 12; i++){
    const newElement = document.createElement('option');
    newElement.innerHTML = `${i}`;
    newElement.value = `${i}`;
    fromHours.appendChild(newElement);
}

const fromMin = document.querySelector("#fromMins");
for(let i = 0; i <= 60; i++){
    const newElement = document.createElement('option');
    newElement.innerHTML = `${i}`;
    newElement.value = `${i}`;
    fromMin.appendChild(newElement);
}

const addHours = document.querySelector("#addHours");
for(let i = 0; i <= 12; i++){
    const newElement = document.createElement('option');
    newElement.innerHTML = `${i}`;
    newElement.value = `${i}`;
    addHours.appendChild(newElement);
}

const addMins = document.querySelector("#addMins");
for(let i = 0; i <= 60; i++){
    const newElement = document.createElement('option');
    newElement.innerHTML = `${i}`;
    newElement.value = `${i}`;
    addMins.appendChild(newElement);
}

const compute = document.querySelector("#compute");
const from = document.querySelector("#from");
const textTime = document.querySelector("#texttime");
const modalUnable = document.querySelector("#modalUnable");
const modalBtn = document.querySelector("#btnUnable");

compute.addEventListener('click', function(){
    if(fromHours.selectedIndex != 0 &&
        fromMin.selectedIndex != 0 &&
        addHours.selectedIndex != 0 &&
        addMins.selectedIndex != 0 &&
        from.selectedIndex != 0){
        // Create a new Date object
        var initialTime = new Date();

        // Set the initial time
        if(from.value == "am"){
            if(fromHours.value == 12){
                initialTime.setHours(0);
            }
            else{
                initialTime.setHours(fromHours.value);
            }
        }
        if(from.value == "pm"){
            if(fromHours.value == 12){
                initialTime.setHours(fromHours.value);
            }
            else{
                initialTime.setHours(12 + parseInt(fromHours.value));
            }
        }

        initialTime.setMinutes(fromMin.value);

        // add hours
        initialTime.setHours(initialTime.getHours() + parseInt(addHours.value));
        // Add minutes
        initialTime.setMinutes(initialTime.getMinutes() + parseInt(addMins.value));

        // Format the time as a string
        var updatedTimeString = initialTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',  hour12: true});

        // Display the updated time
        // console.log(updatedTimeString);

        // display the updated time on textarea
        textTime.value = updatedTimeString;
    }
    else{
        modalUnable.style.display = "flex";
    }
});

modalBtn.addEventListener('click', function(){
    modalUnable.style.display = "none";
});

const reset = document.querySelector("#reset")
reset.addEventListener('click', function(){
    fromHours.selectedIndex = 0;
    fromMin.selectedIndex = 0;
    addHours.selectedIndex = 0;
    addMins.selectedIndex = 0;
    from.selectedIndex = 0;
    textTime.value = "";
})