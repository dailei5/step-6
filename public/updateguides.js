function updateGuides(id){
    console.log("hi")
    $.ajax({
        url: '/add-guide/' + id,
        type: 'PUT',
        data: $('#update-guide').serialize(),
            success: function(result){
                window.location.replace("./");
        }
    })
}
