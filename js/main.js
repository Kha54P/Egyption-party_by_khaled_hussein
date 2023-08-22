// show nav 
$(".openNav").click(function(){
    $("#home-content").animate({marginLeft :'200px'},500)
    $("#ulManu").animate({ width:'200px'},500)
})
// close btn 
$(".closeBtn").click(()=>{
    $("#ulManu").animate({ width:'0px'},500 , ()=>{
        $("#home-content").animate({marginLeft :'0px'},500)
    })
})
// to scroll smoth
$(".nav a[href^='#']").click(function (e) {
    let href = $(e.target).attr('href') 
    let scrollOffset = $(href).offset().top;
    $("html  , body").animate({scrollTop:scrollOffset} , 1000);
    
});
// slide down 

$('#slideDown .toggle').click(function(e){        
        $('.liner').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    
});
// count down 
let countDownDate = new Date('10 october 2023 9:56:00').getTime();
let counter = setInterval(()=>{
    let dateNow = new Date().getTime()
    let dateDiferance = countDownDate-dateNow;
    // days
    let days = Math.floor(dateDiferance / ( 1000* 60 * 60 * 24))
    $('#days').text(days + ' D')
    // houers
     let hour =  Math.floor(dateDiferance % ( 1000* 60 * 60 * 24) / (1000 * 60 * 60))
     $('#hours').text(hour + ' h');
    // minuts 
    let minuts = Math.floor(dateDiferance % (1000 * 60 * 60) / (1000 * 60))
    $("#minut").text(minuts + ' m')
    // seconds 
    let seconds = Math.floor(dateDiferance % (1000 * 60 ) / (1000 ))
    $("#seconds").text(seconds + ' s')
},1000)


// textarae 
var maxLenght = 100;
$('textarea').keyup(function(){
    var length = $(this).val().length;
    var amount = maxLenght-length ;
    if(amount <= 0){
        $('#chars').text('your available character finished');
    }else{
        $('#chars').text(amount);
    }
});

