$(document).ready(function() {
    $("#btn-callback-phone-free-consult").on("click", function(){
        $("#callback-modal").modal('show');
        $("#inputSite").val('Клиент заказал обратный звонок');
    });
    $("#btn-callback-phone-icon").on("click", function(){
      $("#callback-modal").modal('show');
      $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#family").on("click", function(){
      document.getElementById('familyBtn').click();
      location.href = "#headingOne";
      window.scrollBy(0, -70);
    });

    $("#shilizh").on("click", function(){
      document.getElementById('shilizhBtn').click();
      location.href = "#headingTwo";
      window.scrollBy(0, -70);
    });

    $("#nasledstv_spor").on("click", function(){
      document.getElementById('nasledBtn').click();
      location.href = "#headingThree";
      window.scrollBy(0, -70);
    });
    
    $("#trud_spor").on("click", function(){
      document.getElementById('trudBtn').click();
      location.href = "#heading6";
      window.scrollBy(0, -70);
    });
    
    $("#auto_your").on("click", function(){
      document.getElementById('autoBtn').click();
      location.href = "#heading5";
      window.scrollBy(0, -70);
    });
    
    $("#zashit_prav").on("click", function(){
      document.getElementById('zashitBtn').click();
      location.href = "#heading4";
      window.scrollBy(0, -70);
    });
    
    $("#zemel_spor").on("click", function(){
      document.getElementById('nasledBtn').click();
      location.href = "#headingThree";
      window.scrollBy(0, -70);
    });
    
    $("#arbitrash").on("click", function(){
      document.getElementById('arbitrashBtn').click();
      location.href = "#heading7";
      window.scrollBy(0, -70);
    });

    $("#btn-callback-carousel-ok").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#callBackMain").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#success-modal-ok").on("click", function(){
      $("#success-modal").modal('hide');
    });

    window.setInterval(function() {
      function getDateNow() {
        var n =  new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        m = m.toString().length < 2 ? '0'+m : m;
        var d = n.getDate();
        d = d.toString().length < 2 ? '0'+d : d;
        var h = n.getHours();
        h = h.toString().length < 2 ? '0'+h : h;
        var min = n.getMinutes();
        min = min.toString().length < 2 ? '0'+min : min;
        $('#inputTime').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime2').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime3').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
      };
      getDateNow();
    }, 5000);
  });

  $(document.body).on('hide.bs.modal,hidden.bs.modal', function () {
    $('body').css('padding-right','0');
  });