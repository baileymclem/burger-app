$(function () {
    $(".change-devoured").on("submit", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");

      var newDevouredState = {
        devoured: newDevoured
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devovr to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#bur").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger!");
      location.reload();
    });
  });
});
