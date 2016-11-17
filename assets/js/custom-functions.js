    $('#btn_1').click(function(){
        $('#sizing_1').toggle();
    })
    $('#btn_2').click(function(){
        $('#sizing_2').toggle();
    })
    $('#btn_3').click(function(){
        $('#sizing_3').toggle();
    })
    $('#btn_4').click(function(){
        $('#sizing_4').toggle();
    })
    $('#btn_5').click(function(){
        $('#sizing_5').toggle();
    })
    $('#btn_6').click(function(){
        $('#sizing_6').toggle();
    })
    $('#btn_7').click(function(){
        $('#sizing_7').toggle();
    })
    $('#btn_8').click(function(){
        $('#sizing_8').toggle();
    })
    
// Resize the box with buttons
    $('#sizing_1 #hide').click(function(){
        $('#box_1').removeClass();
        $('#box_1').addClass('hide');
        $('#sizing_1 #hide').css( 'color', '#409CCD' );
        $('#sizing_1 #small').css( 'color', '' );
        $('#sizing_1 #medium').css( 'color', '' );
        $('#sizing_1 #large').css( 'color', '' );
    })                     
    $('#sizing_1 #small').click(function(){
        $('#box_1').removeClass();
        $('#box_1').addClass('col-lg-3 col-md-3 col-xs-12');
        $('#sizing_1 #hide').css( 'color', '' );
        $('#sizing_1 #small').css( 'color', '#409CCD' );
        $('#sizing_1 #medium').css( 'color', '' );
        $('#sizing_1 #large').css( 'color', '' );
    })
    $('#sizing_1 #medium').click(function(){
        $('#box_1').removeClass();
        $('#box_1').addClass('col-lg-6 col-md-5 col-xs-12');
        $('#sizing_1 #hide').css( 'color', '' );
        $('#sizing_1 #small').css( 'color', '' );
        $('#sizing_1 #medium').css( 'color', '#409CCD' );
        $('#sizing_1 #large').css( 'color', '' );
    })
    $('#sizing_1 #large').click(function(){
        $('#box_1').removeClass();
        $('#box_1').addClass('col-lg-12 col-md-12 col-xs-12');
        $('#sizing_1 #hide').css( 'color', '' );
        $('#sizing_1 #small').css( 'color', '' );
        $('#sizing_1 #medium').css( 'color', '' );
        $('#sizing_1 #large').css( 'color', '#409CCD' );
    })
    
    $('#sizing_2 #hide').click(function(){
        $('#box_2').removeClass();
        $('#box_2').addClass('hide');
        $('#box_2').css( "height", "0px", "width", "0px" );
                $('#sizing_2 #hide').css( 'color', '#409CCD' );
        $('#sizing_2 #small').css( 'color', '' );
        $('#sizing_2 #medium').css( 'color', '' );
        $('#sizing_2 #large').css( 'color', '' );
    })                     
    $('#sizing_2 #small').click(function(){
        $('#box_2').removeClass();
        $('#box_2').addClass('col-lg-3 col-md-3 col-xs-12');
                $('#sizing_2 #hide').css( 'color', '' );
        $('#sizing_2 #small').css( 'color', '#409CCD' );
        $('#sizing_2 #medium').css( 'color', '' );
        $('#sizing_2 #large').css( 'color', '' );
    })
    $('#sizing_2 #medium').click(function(){
        $('#box_2').removeClass();
        $('#box_2').addClass('col-lg-6 col-md-5 col-xs-12');
                $('#sizing_2 #hide').css( 'color', '' );
        $('#sizing_2 #small').css( 'color', '' );
        $('#sizing_2 #medium').css( "color", '#409CCD' );
        $('#sizing_2 #large').css( 'color', '' );
    })
    $('#sizing_2 #large').click(function(){
        $('#box_2').removeClass();
        $('#box_2').addClass('col-lg-12 col-md-12 col-xs-12');
                $('#sizing_2 #hide').css( 'color', '' );
        $('#sizing_2 #small').css( 'color', '' );
        $('#sizing_2 #medium').css( 'color', '' );
        $('#sizing_2 #large').css( 'color', '#409CCD' );
    })
    
    $('#sizing_3 #hide').click(function(){
        $('#box_3').removeClass();
        $('#box_3').addClass('hide');
                $('#sizing_3 #hide').css( 'color', '#409CCD' );
        $('#sizing_3 #small').css( 'color', '' );
        $('#sizing_3 #medium').css( 'color', '' );
        $('#sizing_3 #large').css( 'color', '' );
    })                     
    $('#sizing_3 #small').click(function(){
        $('#box_3').removeClass();
        $('#box_3').addClass('col-lg-3 col-md-3 col-xs-12');
                $('#sizing_3 #hide').css( "color", '' );
        $('#sizing_3 #small').css( "color", '#409CCD' );
        $('#sizing_3 #medium').css( "color", '' );
        $('#sizing_3 #large').css( "color", '' );
    })
    $('#sizing_3 #medium').click(function(){
        $('#box_3').removeClass();
        $('#box_3').addClass('col-lg-6 col-md-5 col-xs-12');
                $('#sizing_3 #hide').css( "color", '' );
        $('#sizing_3 #small').css( "color", '' );
        $('#sizing_3 #medium').css( "color", '#409CCD' );
        $('#sizing_3 #large').css( "color", '' );
    })
    $('#sizing_3 #large').click(function(){
        $('#box_3').removeClass();
        $('#box_3').addClass('col-lg-12 col-md-12 col-xs-12');
                $('#sizing_3 #hide').css( "color", '' );
        $('#sizing_3 #small').css( "color", '' );
        $('#sizing_3 #medium').css( "color", '' );
        $('#sizing_3 #large').css( "color", '#409CCD' );
    })
    
    $('#sizing_4 #hide').click(function(){
        $('#box_4').removeClass();
        $('#box_4').addClass('hide');
                $('#sizing_4 #hide').css( "color", '#409CCD' );
        $('#sizing_4 #small').css( "color", '' );
        $('#sizing_4 #medium').css( "color", '' );
        $('#sizing_4 #large').css( "color", '' );
    })                     
    $('#sizing_4 #small').click(function(){
        $('#box_4').removeClass();
        $('#box_4').addClass('col-lg-3 col-md-3 col-xs-12');
                $('#sizing_4 #hide').css( "color", '' );
        $('#sizing_4 #small').css( "color", '#409CCD' );
        $('#sizing_4 #medium').css( "color", '' );
        $('#sizing_4 #large').css( "color", '' );
    })
    $('#sizing_4 #medium').click(function(){
        $('#box_4').removeClass();
        $('#box_4').addClass('col-lg-6 col-md-5 col-xs-12');
                $('#sizing_4 #hide').css( "color", '' );
        $('#sizing_4 #small').css( "color", '' );
        $('#sizing_4 #medium').css( "color", '#409CCD' );
        $('#sizing_4 #large').css( "color", '' );
    })
    $('#sizing_4 #large').click(function(){
        $('#box_4').removeClass();
        $('#box_4').addClass('col-lg-12 col-md-12 col-xs-12');
                $('#sizing_4 #hide').css( "color", '' );
        $('#sizing_4 #small').css( "color", '' );
        $('#sizing_4 #medium').css( "color", '' );
        $('#sizing_4 #large').css( "color", '#409CCD' );
    })
    
    $('#sizing_5 #hide').click(function(){
        $('#box_5').removeClass();
        $('#box_5').addClass('hide');
                $('#sizing_5 #hide').css( "color", '#409CCD' );
        $('#sizing_5 #small').css( "color", '' );
        $('#sizing_5 #medium').css( "color", '' );
        $('#sizing_5 #large').css( "color", '' );
    })                     
    $('#sizing_5 #small').click(function(){
        $('#box_5').removeClass();
        $('#box_5').addClass('col-lg-3 col-md-3 col-xs-12');
                $('#sizing_5 #hide').css( "color", '' );
        $('#sizing_5 #small').css( "color", '#409CCD' );
        $('#sizing_5 #medium').css( "color", '' );
        $('#sizing_5 #large').css( "color", '' );
    })
    $('#sizing_5 #medium').click(function(){
        $('#box_5').removeClass();
        $('#box_5').addClass('col-lg-6 col-md-5 col-xs-12');
        $('#box_5 .col-xs-6').css( "height", "400px" );
                $('#sizing_5 #hide').css( "color", '' );
        $('#sizing_5 #small').css( "color", '' );
        $('#sizing_5 #medium').css( "color", '#409CCD' );
        $('#sizing_5 #large').css( "color", '' );
    })
    $('#sizing_5 #large').click(function(){
        $('#box_5').removeClass();
        $('#box_5').addClass('col-lg-12 col-md-12 col-xs-12');
        $('#box_5 .col-xs-6').css( "height", "800px" );
                $('#sizing_5 #hide').css( "color", '' );
        $('#sizing_5 #small').css( "color", '' );
        $('#sizing_5 #medium').css( "color", '' );
        $('#sizing_5 #large').css( "color", '#409CCD' );
    })
    
    $('#sizing_6 #hide').click(function(){
        $('#box_6').removeClass();
        $('#box_6').addClass('hide');
        $('#box_6').css( "height", "0px", "width", "0px" );
                $('#sizing_6 #hide').css( "color", '#409CCD' );
        $('#sizing_6 #small').css( "color", '' );
        $('#sizing_6 #medium').css( "color", '' );
        $('#sizing_6 #large').css( "color", '' );
    })                     
    $('#sizing_6 #small').click(function(){
        $('#box_6').removeClass();
        $('#box_6').addClass('col-lg-3 col-md-3 col-xs-12');
                $('#sizing_6 #hide').css( "color", '' );
        $('#sizing_6 #small').css( "color", '#409CCD' );
        $('#sizing_6 #medium').css( "color", '' );
        $('#sizing_6 #large').css( "color", '' );
    })
    $('#sizing_6 #medium').click(function(){
        $('#box_6').removeClass();
        $('#box_6').addClass('col-lg-6 col-md-5 col-xs-12');
                $('#sizing_6 #hide').css( "color", '' );
        $('#sizing_6 #small').css( "color", '' );
        $('#sizing_6 #medium').css( "color", '#409CCD' );
        $('#sizing_6 #large').css( "color", '' );
    })
    $('#sizing_6 #large').click(function(){
        $('#box_6').removeClass();
        $('#box_6').addClass('col-lg-12 col-md-12 col-xs-12');
                $('#sizing_6 #hide').css( "color", '' );
        $('#sizing_6 #small').css( "color", '' );
        $('#sizing_6 #medium').css( "color", '' );
        $('#sizing_6 #large').css( "color", '#409CCD' );
    })
    
    $('#sizing_7 #hide').click(function(){
        $('#box_7').removeClass();
        $('#box_7').addClass('hide');
                $('#sizing_7 #hide').css( "color", '#409CCD' );
        $('#sizing_7 #small').css( "color", '' );
        $('#sizing_7 #medium').css( "color", '' );
        $('#sizing_7 #large').css( "color", '' );
    })                     
    $('#sizing_7 #small').click(function(){
        $('#box_7').removeClass();
        $('#box_7').addClass('col-lg-3 col-md-3 col-xs-12');
                $('#sizing_7 #hide').css( "color", '' );
        $('#sizing_7 #small').css( "color", '#409CCD' );
        $('#sizing_7 #medium').css( "color", '' );
        $('#sizing_7 #large').css( "color", '' );
    })
    $('#sizing_7 #medium').click(function(){
        $('#box_7').removeClass();
        $('#box_7').addClass('col-lg-6 col-md-5 col-xs-12');
                $('#sizing_7 #hide').css( "color", '' );
        $('#sizing_7 #small').css( "color", '' );
        $('#sizing_7 #medium').css( "color", '#409CCD' );
        $('#sizing_7 #large').css( "color", '' );
    })
    $('#sizing_7 #large').click(function(){
        $('#box_7').removeClass();
        $('#box_7').addClass('col-lg-12 col-md-12 col-xs-12');
                $('#sizing_7 #hide').css( "color", '' );
        $('#sizing_7 #small').css( "color", '' );
        $('#sizing_7 #medium').css( "color", '' );
        $('#sizing_7 #large').css( "color", '#409CCD' );
    })
    
    $('#sizing_8 #hide').click(function(){
        $('#box_8').removeClass();
        $('#box_8').addClass('hide');
                $('#sizing_8 #hide').css( "color", '#409CCD' );
        $('#sizing_8 #small').css( "color", '' );
        $('#sizing_8 #medium').css( "color", '' );
        $('#sizing_8 #large').css( "color", '' );
    })                     
    $('#sizing_8 #small').click(function(){
        $('#box_8').removeClass();
        $('#box_8').addClass('col-lg-3 col-md-3 col-xs-12');
                $('#sizing_8 #hide').css( "color", '' );
        $('#sizing_8 #small').css( "color", '#409CCD' );
        $('#sizing_8 #medium').css( "color", '' );
        $('#sizing_8 #large').css( "color", '' );
    })
    $('#sizing_8 #medium').click(function(){
        $('#box_8').removeClass();
        $('#box_8').addClass('col-lg-6 col-md-5 col-xs-12');
                $('#sizing_8 #hide').css( "color", '' );
        $('#sizing_8 #small').css( "color", '' );
        $('#sizing_8 #medium').css( "color", '#409CCD' );
        $('#sizing_8 #large').css( "color", '' );
    })
    $('#sizing_8 #large').click(function(){
        $('#box_8').removeClass();
        $('#box_8').addClass('col-lg-12 col-md-12 col-xs-12');
                $('#sizing_8 #hide').css( "color", '' );
        $('#sizing_8 #small').css( "color", '' );
        $('#sizing_8 #medium').css( "color", '' );
        $('#sizing_8 #large').css( "color", '#409CCD' );
    })
    
    //sortable menu
    
    $(function() {
    $('#sortable').sortable();
    $('#sortable').disableSelection();
    });

    //sort visualizations
function handleDragStart(e) {
  this.style.size = '60%';
}

var cols = document.querySelectorAll('#row .col-sm-12');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
});
