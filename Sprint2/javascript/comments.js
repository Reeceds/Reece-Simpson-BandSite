

let userData = [
    {name: "Micheal Lyons", date: "12/18/2018", comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."},

    {name: "Gary Wong", date: "12/12/2018", comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"},

    {name: "Theodore Duncan", date: "11/15/2018", comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"},
];

let commentNewContainer = document.querySelector(".comment__new__container");
let submitButton = document.querySelector(".comment__form__button");
let userName = document.querySelector('.comment__form-name');
let userComment = document.querySelector('.comment__form-comment');
let userSubmit = document.querySelector('.comment__form');



//Preloaded comments
let uploadComments = () => {
    userData.forEach(obj => {
        if (obj.name && obj.date && obj.comment) {
            
            // Create container/class for each comment/details
            let commentNew = document.createElement("div");
            commentNew.classList.add("comment-new");
            commentNewContainer.appendChild(commentNew);

            // Creates image container and appends to parent
            let commentImageContainer = document.createElement("div");
            // Creates image and msrc
            let commentImage = document.createElement("img");
            commentImage.classList.add("comment__image");
//  Image   // commentImage.src = "";
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
            commentUserName.innerText = `${obj.name}`;
            commentNameDateContainer.appendChild(commentUserName)
            // Create date
            let commentDate = document.createElement("h5");
            commentDate.classList.add("comment-date")
            commentDate.innerText = `${obj.date}`;
            commentNameDateContainer.appendChild(commentDate)
            // Create comment text
            let commentText = document.createElement("p");
            commentText.classList.add("comment-text");
            commentText.innerText = `${obj.comment}`;
            commentDataContainer.appendChild(commentText);
}
    })
}

uploadComments()




//Adds new comment
userSubmit.addEventListener('submit', e => {
    e.preventDefault();
    let passedName = userName.value;
    let passedComment = userComment.value;
    //date
    let today = new Date();
    let PassedDate = (today.getMonth()+1) + '/' + today.getDate()+ '/' + today.getFullYear();
    //new object
    let newUser =  {
        name: passedName,
        date: PassedDate,
        comment: passedComment,
    };
    //add new user to existing object
    userData.unshift(newUser);
    console.log(newUser)
    console.log(userData)

    commentNewContainer.innerHTML = "";

    uploadComments()

    userName.value = '';
    userComment.value = '';
})

