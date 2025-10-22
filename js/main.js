// Main JS for navigation toggle, active link highlighting

(function(){
    // NAV TOGGLE: when hamburger clicked, toggle responsive mode
    function setupNavToggle(id){
        const btn = document.getElementById(id);
        if(!btn) return;
        btn.addEventListener('click', function(){
            const nav = btn.closest('.topnav');
            nav.classList.toggle('responsive');
        });
    }
    // support multiple nav toggles on different pages
    ['navToggle','navToggle2','navToggle3','navToggle4','navToggle5','navToggle6'].forEach(setupNavToggle);

    // Active link highlighting based on current URL
    (function highlightActive(){
        const links = document.querySelectorAll('.topnav a.navlink');
        const path = window.location.pathname.split("/").pop() || 'index.html';
        links.forEach(a=>{
            try {
                const href = a.getAttribute('href');
                if(href && href.split('/').pop() === path) {
                    a.classList.add('active');
                } else {
                    a.classList.remove('active');
                }
            } catch(e){}
        });
    })();
})();