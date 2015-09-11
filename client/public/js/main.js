$(document).on('ready', function() {
  console.log('sanity check!');

  $('#goHome').click(function() {
    window.location="/cats";
  });

  $(document).on('submit', '.form-delete', function(event){
    event.preventDefault();
    var action = $(this).attr('action');
    $.post(action, $(this).serialize(), function(data) {
      
    });
    $(this).parent().remove();
  });

  $('#create-form').submit(function(event){
    event.preventDefault();
    $.post('/cats', $(this).serialize(), function(data) {
      console.log(data.name);
      $(".hide-me").clone().appendTo($(".outline")).removeClass("hide-me");
      $(".name").html(data.name);
      $(".super-power").html(data.superPower);
      $(".arch-nemesis").html(data.archNemesis);
      console.log(data._id);
      $('.add-href').attr('href', 'cat/' + data._id);
      $('.add-action').attr('action','/cat/' + data._id + '?_method=DELETE');
      // action='/cat/' + data._id + '?_method=DELETE'
      // href='cat/' + data._id
    });
      $(this)[0].reset();
  });
});
