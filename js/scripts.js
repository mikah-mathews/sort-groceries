$(document).ready(function(){
  $("#groceryList").submit(function(event){
    event.preventDefault();
    const item1Input = $("input#item1").val();
    const item2Input = $("input#item2").val();
    const item3Input = $("input#item3").val();
    const item4Input = $("input#item4").val();

    const groceryInput = [item1Input, item2Input, item3Input, item4Input];
    groceryInput.sort();
    const capsGroceryInput = groceryInput.map(input => input.toUpperCase());;
    
    capsGroceryInput.forEach(function(input) {
      $(".final-list").append("<li>" + input + "</li>");
    });

    $(".make-list").hide();
    $(".final-list").show();  
  });
  $("#again").click(function() {
    $(".make-list").show();
    $(".final-list").hide();  
    
  });
});
