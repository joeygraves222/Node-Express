// JavaScript source code
var express = require('express')
var app = express()

app.get('/', function (req, res)
{
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, function ()
{
    console.log('App listening on port 3000')
})

$(document).ready(function()
{
    document.getElementById('searchButton').onclick = function () 
    {
        
        var usernameText = document.getElementById('usernameText');

        var urlSearch = 'https://api.github.com/users/' + usernameText.value;
        requestJSON(urlSearch, function (json) 
        {
            if (json.message == "Not Found" || usernameText == '') 
            {
                document.getElementById("alertDiv").style.opacity = 1;
            }
            else 
            {
                
                var name = json.name;
                var outputImg = json.avatar_url;
                var followers = json.followers;
                var repos = json.public_repos;

                
            }
        })
        };

        function requestJSON(url, callback) 
        {
            $ajax({
                url: url,
                complete: function (xhr) 
                {
                    callback.call(null, xhr.responseJSON);
                }
            });
        }
    });