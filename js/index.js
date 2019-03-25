//create resources
const resources = [
    {
        heading: "Solar Panels", 
        url: "./images/solar.JPG",
        body: "Solar panels may not be fully sufficient to run a house but it is more than capable of reduces of reducing a significant amount of cost. It can be easily installed and doesn't require much maintainace. Thus, reducing making clean energy affordable to all."
    },
    {
        heading: "Reduce Carbon Emmision",
        url: "./images/carbon.jpg",
        body: "Reduction in carbon emmision can reduce the pressure on the enviorment and the expenses on the eco-friendly projects can be controlled. This approach can help balance ecological as well as financial dilemma the world is facing."
    },
    {
        heading: "Storing and Transporting",
        url: "./images/truck.jpg",
        body: "Storing and transportation of clean energy is a sustainable approach to check the increasing demand and rising price."
    }
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].url}">
                                    <p>${resources[0].body}</p>
                                    </article>` ;

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    /*console.log("content loader works");*/
    let eventTarget = ev.target.textContent;
    console.log(eventTarget.textContent);

    if (eventTarget === "button 1") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].url}">
                                    <p>${resources[0].body}</p>
                                    </article>` ;
    } else if (eventTarget === "button 2") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[1].heading}</h2>
                                    <img src="${resources[1].url}">
                                    <p>${resources[1].body}</p>
                                    </article>`
    } else {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[2].heading}</h2>
                                    <img src="${resources[2].url}">
                                    <p>${resources[2].body}</p>
                                    </article>`
    }
//MOVE ID TO THE CURRENT BUTTON
    
        /*ev.target.id = "active"; */   
    for(let btn of btns) {
        if (btn.id) {
            
            //REMOVE ATTRIBUTE RESOURCES
            
            btn.removeAttribute("id");
            }
    }
    
    ev.target.id = "active";
    
    
    

}








 //REGISTERING EVENT CONTENT 
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);