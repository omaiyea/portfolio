//display clicked screenshot at full size
function renderFullScreenshot(){
    $('#projects-grid').on('click', 'img', function(){
        setClass(this, 'active-thumbnail');
        $(this).parent().prev().children().attr('src', $(this).attr('src'));
        $(this).parent().prev().children().attr('alt', $(this).attr('alt'));
     });
}

//indicate to user which section they are on
function setSection(){
    $('nav').on('click', 'li', function(){
        setClass(this, 'active-page')
    });
}

//update styling for elements that can only have one active sibling
//for example, enlarged thumbnails, current page
function setClass(selected, className){
    $(selected).addClass(className);
    $(selected).siblings().removeClass(className);
}

function handleApp(){
    renderFullScreenshot();
    setSection();
}

$(handleApp);