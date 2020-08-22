//jQuery for grabbing data from Github API for a given user
$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;

        //Make request to Github API
        $.ajax({
          url:'https://api.github.com/users/'+username,
          data:{
              client_id:'b7adc7a945e46b8b8e26',
              client_secret:'e88cef00a224fd0ef6b9bfe9dbcc2effd6975024'
          }
        }).done(function(user){
            console.log(user);
            $.ajax({
                url:'https://api.github.com/users/'+username+'/repos?q=commits>0',
                data:{
                    client_id:'b7adc7a945e46b8b8e26',
                    client_secret:'e88cef00a224fd0ef6b9bfe9dbcc2effd6975024',
                    sort: 'created: asc'
                    }
            }).done(function(repos){
                //loop through each repository for a user and append them in the repos div
                $.each(repos, function(index, repo){
                    $('#repos').append(`
                        <div class="card">
                        <div class="row">
                        <div class="col-md-4">
                          <a href="${repo.html_url}" target="_blank" class="repo">${repo.name}</p>
                        </div>
                        <div class="col-md-3">
                          <a href="${repo.html_url}/commits/master" target="_blank">See Commits</a>
                        </div>
                        <div class="col-md-3">
                            <a href="${repo.updated_at}" target="_blank" class="btn btn-dark">${repo.updated_at}</a>
                        </div>
                        </div>
                        </div>
                    `);
                });
            });
          //Render user profile info to html
          $('#user_profile').html(`
            <div class="card border-primary mb-3" style="max-width: 100rem;">
            <div class="card-header"><h3>${user.name}</h3></div>
            <div class="card-body">
                <div class="row">
                <div class="col-md-3">
                <img class="img-thumbnail avatar" src="${user.avatar_url}">
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Profile: <a target="_blank" href="${user.html_url}">${user.html_url}</a>
                    <li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                    <li class="list-group-item">Location: ${user.location}</li>
                </ul>
                </div>
                </div>
            </div>
            </div>
            <h4 class="page-header">Repositories</h4>
            <table>
                <th class="rn">Repo Name</th>
                <th class="com">Commits</th>
                <th class="lu">Last updated</th>
            </table>
            <div id="repos"></div>
        `);
        });
    });
});

//jQuery for grabbing data from Github API for a given organization
$(document).ready(function(){
    $('#searchOrgs').on('keyup', function(e){
        let orgname = e.target.value;

        //Make request to Github API
        $.ajax({
          url:'https://api.github.com/orgs/'+orgname,
          data:{
              client_id:'b7adc7a945e46b8b8e26',
              client_secret:'e88cef00a224fd0ef6b9bfe9dbcc2effd6975024'
          }
        }).done(function(orgs){
            $.ajax({
                url:'https://api.github.com/orgs/'+orgname+'/public_members',
                data:{
                    client_id:'b7adc7a945e46b8b8e26',
                    client_secret:'e88cef00a224fd0ef6b9bfe9dbcc2effd6975024',
                    sort: 'created: asc'
                    }
            }).done(function(members,users){
                //loop through each organization for members and append them in the orgs div
                $.each(members, function(index, members){
                    $('#orgs').append(`
                        <div class="card">
                          <div class="container">
                          <div class="row">
                            <div class="col-md-6">
                                <a class="member" href="${members.html_url}" target="_blank">${members.login}</a>
                            </div>
                            <div class="col-md-3">
                                <img class="img-thumbnail avatar" src="${members.avatar_url}">
                            </div>
                            <div class="col-md-3">
                            </div>
                            </div>
                            </div>
                        </div>
                    `);
                });
            });
          $('#orgs_profile').html(`
            <div class="card border-primary mb-3" style="max-width: 100rem;">
            <div class="card-header"><h3>${orgs.login}</h3></div>
            <div class="card-body">
                <div class="row">
                <div class="col-md-3">
                    <img class="img-thumbnail avatar" src="${orgs.avatar_url}">
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${orgs.public_repos}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Website: <a href="${orgs.blog}" target="_blank">${orgs.blog}</a></li>
                    <li class="list-group-item">Profile: <a target="_blank" href="${orgs.html_url}">${orgs.html_url}</a></li>
                    <li class="list-group-item">Location: ${orgs.location}</li>
                    <li class="list-group-item">Member Since: ${orgs.created_at}</li>
                </ul>
                </div>
                </div>
            </div>
            </div>
            <h4 class="page-header">Public Members</h4>
            <table>
                <th class="un">Username</th>
                <th class="ua">User Avatar</th>
            </table>
            <div id="orgs"></div>
        `);
        });
    });
});