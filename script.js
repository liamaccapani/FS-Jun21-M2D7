//JS Exercises

// EX11) Write a function to add a new link into the navbar
const addLink = function() {
    let newLink = document.createElement('a')
    newLink.href = '#'
    newLink.innerText = 'New Link'
    newLink.classList.add('p-2', 'text-muted')
    document.querySelector('.nav').appendChild(newLink)
}

// EX12) Write a function to change the color of the main title
const changeTitleColor = function() {
    let title = document.getElementsByTagName('h1')
    title[0].style.color = 'pink'
}

// EX13) Write a function to change the background of the jumbotron
const changeBgColor = function() {
    let jumbotron = document.querySelector('.jumbotron')
    jumbotron.classList.remove('bg-dark')
}

// EX14) Write a function to remove all the links under "Elsewhere"
const removeLinks = function() {
    let container = document.querySelector('.p-4:nth-child(3) ol')
    container.remove()
}

// EX15) Write a function to change the column size for heading in jumbotron
const changeColumnSize = function(){
    let headerContainer = document.querySelector('div.jumbotron > div')
    headerContainer.classList.remove('col-md-6')
    headerContainer.classList.add('col-md-12')
}

// EX16) Write a function to remove the "Search" magnifying glass icon
const removeSearchIcon = function() {
    let searchIcon = document.querySelector('a.text-muted > svg')
    searchIcon.remove()
}

// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
const trimP = function() {
    let targetP = document.querySelectorAll('.blog-post .blog-post-meta + p')
    for (let i=0; i<targetP.length; i++){
        targetP[i].innerText.slice(50)
    }
    return targetP
}

// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
let newerButton = document.querySelector('.blog-main nav.blog-pagination a.btn:nth-child(2)')

const addPost = function() {
    let containerNode = document.querySelector('div.blog-main')
    
    let newPostNode = document.createElement('div')
    //console.log(newPostNode) <div></div>

    newPostNode.classList.add('blog-post')
    containerNode.appendChild(newPostNode)
    // console.log(newPostNode) <div class="blog-post"></div>
    // console.log(containerNode)

    let newPostTitle= document.createElement('h2')
    newPostTitle.classList.add('blog-post-title')
    newPostTitle.innerText = 'New Post title'

    newPostNode.appendChild(newPostTitle)
    //console.log(newPostNode) <div class="blog-post"><h2 class="blog-post-title">New Post title</h2></div>

    // newerButton.classList.toggle = 'selected' this is doing nothing

}

// newerButton.addEventListener('click', addPost()) not working because of 'disabled'?


// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
let olderButton = document.querySelector('.blog-main nav.blog-pagination > a.btn')

const removePost = function() {
    let containerNode = document.querySelectorAll('div.blog-main div.blog-post')
    //console.log(containerNode) array

    containerNode[containerNode-1].remove()

}
//not working

// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
