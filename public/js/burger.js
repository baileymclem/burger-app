$(function () {
  //   $(".create-burger-form").on("submit", function(event) {
  //     var id = $(this).data("id");
  //     var newSleep = $(this).data("newsleep");

  //     var newSleepState = {
  //       sleepy: newSleep
  //     };

  //     // Send the PUT request.
  //     $.ajax("/api/cats/" + id, {
  //       type: "PUT",
  //       data: newSleepState
  //     }).then(
  //       function() {
  //         console.log("changed sleep to", newSleep);
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#new-burger-input").val().trim(),
      devoured: 0,
    };

    $.ajax("/api/newbuger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger!");
      location.reload();
    });
  });

  $(".devour-burger").on("click", function (event) {
    var id = $(this).data("id");

    var burgerDevoured = {
      devoured: 1,
    };

    $.ajax("/api/burger/devour" + id, {
      type: "PUT",
      data: burgerDevoured,
    }).then(function () {
      console.log("eat da burger!", burgerDevoured);
      location.reload();
    });
  });
});
