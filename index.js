const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const gramPosts = document.getElementById("gram-posts")
let postContent = ""
let heart = false


function loadPosts(){
    for(let i = 0; i < posts.length; i++){
    postContent += `<div class="profile">
                    <img class="avatar" src="${posts[i].avatar}">
                    <div class="user-info">
                        <h2>${posts[i].name}</h2>
                        <h3>${posts[i].location}</h3>
                    </div>
                </div>
                <div class="posts">
                    <img src="${posts[i].post}">
                </div>
                <div class="engagement">
                    <div class="interactions">
                        <img class="full-heart" src="images/full-heart.png">
                        <img class="empty-heart" src="images/empty-heart.png">
                        <img src="images/comment.png">
                        <img src="images/share.png">
                    </div>
                    <div>
                        <p id="like-total${i}" class="likes bold-text">${posts[i].likes}</p>
                        <p><span class="comment bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </div>`
                 if (i<(posts.length - 1)) { 
            postContent +=`<div class="spacing"></div>`
        }      
}

gramPosts.innerHTML = postContent
    
}

loadPosts()

let emptyHeart = document.querySelectorAll(".empty-heart") 
let fullHeart = document.querySelectorAll(".full-heart") 

for (let i=0; i<posts.length; i++) {  
    emptyHeart[i].addEventListener("click", () => postLike(i))
    fullHeart[i].addEventListener("click", () => postLike(i))
}

function postLike(i) {
    emptyHeart[i].classList.toggle("none")
    fullHeart[i].classList.toggle("show")
    if (heart === false) {
        posts[i].likes++ 
        heart = true
    } else if (heart === true){
        posts[i].likes--
        heart = false
    }
    const likesTotal = document.getElementById(`like-total${i}`);
    likesTotal.innerHTML = posts[i].likes;
}

