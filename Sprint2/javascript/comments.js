

let commentNewContainer = document.querySelector(".comment__new__container");
let submitButton = document.querySelector(".comment__form__button");
let userName = document.querySelector('.comment__form-name');
let userComment = document.querySelector('.comment__form-comment');
let userSubmit = document.querySelector('.comment__form');



//Load premaid API comments to the page
let displayComment = (eachUser) => {
    if (eachUser.name && eachUser.timestamp && eachUser.comment) {
        
        // Create container/class for each comment/details
        let commentNew = document.createElement("div");
        commentNew.classList.add("comment-new");
        commentNewContainer.appendChild(commentNew);

        // Creates image container and appends to parent
        let commentImageContainer = document.createElement("div");
        // Creates image and msrc
        let commentImage = document.createElement("img");
        commentImage.classList.add("comment__image");
//Image // commentImage.src = "";
        commentImageContainer.appendChild(commentImage);
        commentNew.appendChild(commentImageContainer);

        // Create details section
        // Create data container
        let commentDataContainer = document.createElement("div");
        commentDataContainer.classList.add("comment-data");
        commentNew.appendChild(commentDataContainer);
        // Create name/date container
        let commentNameDateContainer = document.createElement("div");
        commentNameDateContainer.classList.add("comment-name-date")
        commentDataContainer.appendChild(commentNameDateContainer);
        // Create user Name
        let commentUserName = document.createElement("h4");
        commentUserName.classList.add("comment-name")
        commentUserName.innerText = `${eachUser.name}`;
        commentNameDateContainer.appendChild(commentUserName)
        // Create date
        let newDate = new Date(eachUser.timestamp)
        let dateConversion = (newDate.getMonth()+1) + '/' + newDate.getDate()+ '/' + newDate.getFullYear();
        let commentDate = document.createElement("h5");
        commentDate.classList.add("comment-date")
        commentDate.innerText = `${dateConversion}`;
        commentNameDateContainer.appendChild(commentDate)
        // Create comment text
        let commentText = document.createElement("p");
        commentText.classList.add("comment-text");
        commentText.innerText = `${eachUser.comment}`;
        commentDataContainer.appendChild(commentText);
    }
}



// **************
// Requests API comments
let apiKey = "99510a2b-a1cf-4d45-8227-74f5e67d2ecd";

let = requestComments = () => {
  axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
  .then(response => {
    response.data.reverse().forEach(userData => {
        displayComment(userData);
        console.log(response.data)
    });
  })
  .catch(function (error) {
    return error;
  });
};

requestComments()
// **************



//Adds new comment
userSubmit.addEventListener('submit', e => {
    e.preventDefault();
    let passedName = userName.value;
    let passedComment = userComment.value;
    
    if (passedName == "" || passedComment == ""){
        console.log("error")
    }   else {
        // **************
    // Post comments request
    axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`, {
        name: passedName,
        comment: passedComment,
    }, 
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
        displayComment(response);
        commentNewContainer.innerHTML = "";
        requestComments();
    })
    .catch(function (error) {
        return error;
    });
    // **************

    userName.value = '';
    userComment.value = '';
    }

    
})



