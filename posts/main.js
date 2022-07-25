const userId = location.search ? location.search.replace('?userId=',' ') : null;
console.log(userId);
document.title = userId || 'All posts';

if (!userId) {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.top = '5px';



    document.body.appendChild(input);
    document.body.style.paddingTop = "20px";
}
showPosts(posts);
function showPosts(posts) {
    if(userId){
        for(let i = 0; i < posts.length; i++) {
            const post = posts[i];


            if(post.userId === +userId){
                const postTitle = document.createElement('h3');
                postTitle.innerText = post.title;


                const postBody = document.createElement('p');
                postBody.innerText = post.body;


                const postContainer = document.createElement('div');

                postContainer.appendChild(postTitle);
                postContainer.appendChild(postBody);

                document.querySelector('#posts-list').appendChild(postContainer);
            }
        }
    }
}