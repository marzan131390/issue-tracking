let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", displayIssue)
//Display issue information 
function displayIssue(event) {
    //Getting Description Information


    issueInfo();
    event.preventDefault();
}

//new issue assign
function issueInfo() {
    let issueID = document.createElement("p");
    issueID.classList.add("issue-id");
    issueID.innerHTML = `IssueId: <span> hello </span>`
    console.log(issueID);



    let descriptionInfo = document.getElementById("description-input").value;
    console.log(descriptionInfo)
    //Display issue into the response section.
    let div = document.createElement("div");
    div.classList.add("new-response");
    console.log(div);
    div.appendChild(issueID);
    //Display Description Info to The issue Section.
    let allResponses = document.querySelector("#adding-responses");
    allResponses.appendChild(div);

   
   
}