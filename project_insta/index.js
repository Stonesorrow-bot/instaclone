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
const containerId = document.getElementById("container")

let inputData = [
    ["images/avatar-vangogh.jpg", "Vincent van Gogh", "Zundert, Netherlands", "images/post-vangogh.jpg", 21, "vincey1853", "just took a few mushrooms lol"],
    
    ["images/avatar-courbet.jpg", "Gustave Courbet", "Ornans, France", "images/post-courbet.jpg", 4, "gus1819", "i'm feelin a bit stressed tbh"],
    
    ["images/avatar-ducreux.jpg", "Joseph Ducreux", "Paris, France", "images/post-ducreux.jpg", 152, "jd1735", "gm friends! which coin are YOU stacking up today?? post below and WAGMI!"]
    ]


// Loop Factory 
let htmlContainer = ""

for (let i = 0; i < inputData.length; i++){
    htmlContainer += `
                            <header>
                                <img class="logo" src="images/logo.png" alt="logo of Oldagram app">
                                <img class="user" src="images/user-avatar.png" alt="Portrait of the user">
                            </header>
                            <hr>
                            <main>
                                <section>
                                    <div class="poster">
                                        <div>
                                            <img  class="user user-pic" src="${inputData[i][0]}" alt="profile picture of the user">
                                        </div>
                                        <h1>${inputData[i][1]}</h1>
                                        <h2>${inputData[i][2]}</h2>
                                    </div>
                                    
                                    <div class="post">
                                        <img class="post-img" src="${inputData[i][3]}" alt="The post picture of the user">
                                    </div>
                                    
                                    <div class="icon-sections">
                                        <img class="icons heart-btn" src="images/icon-heart.png">
                                        <img class="icons" src="images/icon-comment.png">
                                        <img class="icons" src="images/icon-dm.png">
                                    </div>
                                    
                                    <div class="likes">
                                        <h3 class="like-num"><span class="num-of-likes">${inputData[i][4]}</span> likes</h3>
                                    </div>
                                    
                                    <div>
                                        <p class="desc"><span class="id-user">${inputData[i][5]}</span><span> ${inputData[i][6]}</span></p>
                                    </div>
                                </section>
                            </main>
                            <hr>
                        
                
    `
}

containerId.innerHTML = htmlContainer 

// funtion for heart

const allHearts = document.querySelectorAll(".heart-btn")
allHearts.forEach(function(heart){
    heart.addEventListener("click", function(){
      const theHeart = heart.closest("section")
      const likeDisplay =  theHeart.querySelector(".num-of-likes")
      
      let newLikes = parseInt(likeDisplay.textContent)
      likeDisplay.textContent = newLikes + 1
    })
})


// let profilePic = document.getElementById("profile-pic")
// let userName = document.getElementById("user-name")
// let userLoca = document.getElementById("user-loca")
// let userPost = document.getElementById("user-post")
// let likeNum = document.getElementById("likes-num")
// let userId = document.getElementById("user-id")
// let postDes = document.getElementById("post-des")
// console.log(userPost)


    
// for (let i = 0; i < inputData.length; i++) {
//     let profileP += inputData[i][0]
//     profilePic.innerHTML = `<img  class="user user-pic" src=${profileP} alt="profile picture of the user">`;
//     let userN += inputData[i][1]
//     userName.textContent = userN
    
// }
