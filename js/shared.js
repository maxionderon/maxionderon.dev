document.addEventListener("DOMContentLoaded", function() {
    
    //initialize Materialize Elements
    //sidenav
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
    //tooltips
    const toolTip = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(toolTip, {});
    //scrollspy
    const scrollSpy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollSpy, {});
    
});