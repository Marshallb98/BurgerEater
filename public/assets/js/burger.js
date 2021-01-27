$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        let eaten = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function () {
                console.log("changed devoured state to", newDevoured);
                location.reload();
            }
        );
    });
    $(".create-burger").on("submit", function (event) {
        event.preventDefault();
        console.log(event);
        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("added burger to my collection");
                location.reload();
            }
        );
    });
});