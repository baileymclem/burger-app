$(function() {

$("#addBurger").on("click", (event) => {
  event.preventDefault();

  const burgerName = {
    name: $("#newBurger").val().trim(),
  };

  console.log("bname", burgerName);

  $.ajax({
    url: "/api/burger",
    method: "POST",
    data: burgerName,
  }).then(() => {
    location.reload();
  });
});

$("#devoured").on("click", (event) => {
  event.preventDefault();

  const burgerId = {
    id: $(event.target).data("id"),
  };

  console.log("id", burgerId);

  $.ajax({
    url: "/api/devoured",
    method: "PUT",
    data: burgerId,
  }).then(() => {
    location.reload();
  });
});
});