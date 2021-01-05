# BACKEND

...


## Important files and folders:

**graphql**\
&nbsp; **resolvers/**\
&nbsp; &nbsp; **comments.js/** -- \
&nbsp; &nbsp; **index.js/** -- \
&nbsp; &nbsp; **post.js/** -- \
&nbsp; &nbsp; **users.js/** -- \
&nbsp; **typeDefs** -- defines your schema's types (the types of data a client can read and write to your data graph)

**models/**\
&nbsp; **Post.js** -- set up document organization and type declarations for your posts\
&nbsp; **User.js** -- set up document organization and type declarations for your users

**util/**\
&nbsp; **validators.js** -- validate the strings (only!) from the login and register inputs (no access to database here)\
&nbsp; **check-auth.js** -- return the user if one exists, given the bearer token from the http header

**server.js** -- create your server and link to your database


## Others:

**.gitignore** -- commit only the files you write yourself (not your config file, of course)

**config.js** -- store all your sensitive variables here