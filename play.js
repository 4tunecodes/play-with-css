document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('hamburger').addEventListener('click',()=>{
        document.getElementById('hamburger-menu').style.width = '100%';
        document.getElementById('new-hamburger').style.display = 'block';
        document.getElementById('hamburger').style.display = 'none';
        document.body.style.overflowY = "hidden";
        
    })
    document.getElementById('new-hamburger').addEventListener('click',()=>{
        document.getElementById('hamburger-menu').style.width = '0%';
        document.getElementById('hamburger').style.display = 'block';
        document.getElementById('new-hamburger').style.display = 'none';
        document.body.style.overflowY = "visible";
    })
})