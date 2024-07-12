
const cats = document.querySelectorAll(".aboutTabs__category");
// to put an active in all images

const laman = document.querySelectorAll(".aboutTabs__details")
// to put an active in all details

cats.forEach((tab) => {
    tab.addEventListener('click', () =>{
        removeActiveTab();
        tab.classList.add('active')
        const activeContent = document.querySelector(`#${tab.id}-content`)
        removeActiveContent();
        activeContent.classList.add('active')
    });
});

function removeActiveTab(){
    cats.forEach((tab) =>{
        tab.classList.remove('active')
    })
}
function removeActiveContent(){
    laman.forEach((content) =>{
        content.classList.remove('active')
    })
}

