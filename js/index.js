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

function handleMobileMenu(){
    $('.display-icon').click(function(){
        console.log('display menu');
        $('ul').toggleClass('display-menu');
    });
}

//show the menu when user scrolls down far enough
function showMenuScroll(){
    $(document).scroll(function(){
        var y = $(this).scrollTop();
        if(y > 400){ //make start to appear sooner than header ends
            $('nav').fadeIn();
        }else{
            $('nav').fadeOut();
        }
    });
}

function handleApp(){
    renderFullScreenshot();
    setSection();
    handleMobileMenu();
    showMenuScroll();
}

$(handleApp);