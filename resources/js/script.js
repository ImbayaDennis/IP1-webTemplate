$(document).ready(function()
{
   $('section').hide();
   $('header').hide();
   $('#header').fadeIn(1000);

   $('#header a').on('click', function()
   {
        $('#header').fadeOut(100, function()
        {
            $('#about').fadeIn(1500)
            $('header').fadeIn(1500);
        });
   });

   $('nav li').on('click', function()
   {
       var $toBeDisp = $(this).attr('rel');
        $('section').hide();
        $('#'+$toBeDisp).fadeIn(1500);
        if($toBeDisp === 'header')
        {
            $('header').hide();
        }
   });
});

$('.logo-mob').on('click', function()
{
        $('header').toggleClass('dark');
        $('nav ul').toggleClass('showing');    
});

$('nav li').on('click', function()
{
    $('nav ul').removeClass('showing');
    $('header').removeClass('dark');
});

$(window).on('scroll', function(){
    if($(window).scrollTop())
    {
        $('header').addClass('dark');
        $('nav').addClass('dark');
        $('.logo-mob').addClass('dark');
        $('.logo').addClass('dark');
    }
    else
    {
        $('header').removeClass('dark');
        $('nav').removeClass('dark');
        $('.logo-mob').removeClass('dark');
        $('.logo').removeClass('dark');
    }
});