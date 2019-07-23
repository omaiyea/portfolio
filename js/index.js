function renderFullScreenshot(){
    $('.projects-grid').on('click', 'img', function(){
        setActiveThumbnail(this);
        $(this).parent().prev().children().attr('src', $(this).attr('src'));
        $(this).parent().prev().children().attr('alt', $(this).attr('alt'));
     });
}

function setActiveThumbnail(selectedImage){
    $(selectedImage).addClass('active-thumbnail');
    $(selectedImage).siblings().removeClass('active-thumbnail');
}

function handleApp(){
    renderFullScreenshot();
}

$(handleApp);