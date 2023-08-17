var today = dayjs();
$('#date').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));

  $( function() {
    $( "#datepicker" ).datepicker({
      showButtonPanel: true
    });
  } );