
function reply_click(obj)
{
  var check = obj.target;
  function set_vis(check){
    var selector = '.answer-' + check;
    $(selector).slideDown(400);
  };
  set_vis(check);
};
