document.addEventListener("DOMContentLoaded", function() {

    const twitterLink = document.querySelector('aside .p-4 ol a[href="https://twitter.com/mdo"]');
    if (twitterLink) {
        twitterLink.parentElement.removeChild(twitterLink); 
    }

   
    const continueReadingLinks = document.querySelectorAll('a.font-weight-bold');
    continueReadingLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            const blogPost = event.target.closest('.blog-post');
            if (blogPost) {
                blogPost.remove(); 
            }
        });
    });

   
    const authorLinks = document.querySelectorAll('.blog-post-meta a');
    authorLinks.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            alert('Autore: ' + link.textContent); 
        });
    });
});
