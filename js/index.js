$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;

        //Make request to Github API at users endpoint
        $.ajax({
          url:'https://api.github.com/users/'+username,
          data:{
              client_id:'b7adc7a945e46b8b8e26',
              client_secret:'e88cef00a224fd0ef6b9bfe9dbcc2effd6975024'
          }
        //Make request to Github API at repos endpoint to retrieve repo data for a user
        }).done(function(user){
            $.ajax({
                url:'https://api.github.com/users/'+username+'/repos',
                data:{
                    client_id:'b7adc7a945e46b8b8e26',
                    client_secret:'e88cef00a224fd0ef6b9bfe9dbcc2effd6975024',
                    sort: 'created: asc'
                    }
            
            });
          
        });
    });
});