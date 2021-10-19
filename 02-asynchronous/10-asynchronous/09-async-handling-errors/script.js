/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("#run").addEventListener("click", async() => {
    // your code here
        try {
            const people = await window.lib.getPosts();
            for (let post of posts) {
                post.comments = await window.lib.getComments()
            }
            console.log(posts);
    }
        
        
        });

})();
