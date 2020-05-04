

let userData = [
    {name: "Micheal Lyons", date: "12/18/2018", comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."},

    {name: "Gary Wong", date: "12/12/2018", comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"},

    {name: "Theodore Duncan", date: "11/15/2018", comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"},
];

let commentNewContainer = document.querySelector(".comment__new__container");
let submitButton = document.querySelector(".comment__form__button");
let userName = document.querySelector('.comment__form-name');
let userComment = document.querySelector('.comment__form-comment');
let userSubmit = document.querySelector('.comment__form__button');


//Preloaded comments
let uploadComments = () => {
    userData.forEach(obj => {
        if (obj.name && obj.date && obj.comment) {
            let commentContent =
            `<div class="comment-new">
                <div>
                    <img class="comment__image">
                </div>
                <div class="comment-data">
                    <div class="comment-name-date">
                        <h4 class="comment-name">${obj.name}</h4>
                        <h5 class="comment-date">${obj.date}</h5>
                    </div>
                    <p class="comment-text">${obj.comment}</p>
                </div>
            </div>`
            commentNewContainer.innerHTML += commentContent;
        }
    })
}

uploadComments()


//Adds new comment
userSubmit.addEventListener('click', e => {
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
})

