
## Important files and folders:

graphql/

models/ -- set up document organization and type declarations for your data

util/validators.js -- validate the strings (only!) from the login and register inputs (no access to database here)
util/check-auth.js -- return the user if one exists, given the bearer token from the http header

server.js -- create your server and link to your database


## Others:

.gitignore -- commit only the files you write yourself (not your config file, of course)

config.js -- store all your sensitive variables here