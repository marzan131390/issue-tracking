let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", displayIssue)
//Display issue information 
function displayIssue(event) {
    //new issue assign

    // let issueID = document.createElement("p");
    // issueID.classList.add("issue-id");
    // issueID.innerHTML = `IssueId: <span> hello </span>`
    // console.log(issueID);

    //Taking info from description Input..
    let descriptionInput = document.getElementById("description-input")
    let descriptionInfo = descriptionInput.value;
    //Taking severity value.
    let severityValues = document.getElementById("severity-option").value;
    //Taking Responsibility Value
    let assignInput = document.getElementById("assign-input");
    let assignInputValue = assignInput.value;
    //Creating  Element for issue Description as h3 tag and display it to html..
    let descriptionIssueElement = document.createElement("h3");
    descriptionIssueElement.classList.add("issue-description");
    descriptionIssueElement.innerText = descriptionInfo;
    //creating  Element for option value as p tag  .
    let optionPara = document.createElement("p");
    optionPara.classList.add("option");
    optionPara.innerText = severityValues;
    //creating element for assign value as p tag
    let assignPara = document.createElement("p");
    assignPara.classList.add("assign");
    assignPara.innerText = assignInputValue;
    //Crating buttonDiv..
    let buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `<button class="close custom-btn">Close</button>
    <button class="delete custom-btn">Delete</button>`
    //Display description Info into the response section.
    let div = document.createElement("div");
    div.classList.add("new-response");
    // console.log(div);
    //display Elements  to HTML
    div.appendChild(descriptionIssueElement);
    div.appendChild(optionPara);
    div.appendChild(assignPara);
    div.appendChild(buttonDiv);
    //Display Description Info to The issue Section.
    let allResponses = document.querySelector("#adding-responses");
    allResponses.appendChild(div);

    descriptionInput.value = "";
    assignInput.value = "";

    //Selecting all Delete Buttons...
    let deleteBtn = document.getElementsByClassName("delete");
    for(let i = 0; i< deleteBtn.length; i++) {
        let singleBtn = deleteBtn[i];
        singleBtn.addEventListener("click", function(e) {
            let allElements = e.target.parentNode.parentNode;
            allElements.remove();
        })
    };
    //Selecting all Close Buttons..
    let closeBtn = document.querySelectorAll(".close");
    for(let i = 0; i< closeBtn.length; i++) {
        singleBtn = closeBtn[i];
        singleBtn.addEventListener("click", function(e) {
            let issueDescription = document.querySelector(".issue-description");
            issueDescription.style.textDecoration = "line-through";
        })
    }
    event.preventDefault();
};





