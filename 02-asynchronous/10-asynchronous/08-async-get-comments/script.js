/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("#run").addEventListener("click", async() => {
        // your code here
        try{
        const people = await window.lib.getPersons();
        console.log(people)
    }catch (error) {
        console.error(error);
    }
        
        });
})();
