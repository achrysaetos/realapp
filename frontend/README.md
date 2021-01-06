# FRONTEND

* ... *(src/components/)*
* Handle verification of users and the implementation their token *(src/context/)*
* Create queries and mutations to update the database *(src/graphql/)*
* ... *(src/pages/)*
* ... *(src/util/)*
* Allow react to access your graphql server *(src/ApolloProvider.js)*
* Write standard css for your app *(src/App.css)*
* Serve each component of your app *(src/App.js)*
* Allow your app access to tailwind's styles *(src/index.css)*
* Create the entry point to your app *(src/index.js)*


## Important files and folders:

**src**\
&nbsp; **components/**\
&nbsp; &nbsp; **DeleteButton.js** -- \
&nbsp; &nbsp; **LikeButton.js** -- \
&nbsp; &nbsp; **MenuBar.js** -- \
&nbsp; &nbsp; **PostCard.js** -- \
&nbsp; **context/**\
&nbsp; &nbsp; **auth.js** -- verify that the user exists, and set/remove the user token on login/logout\
&nbsp; **graphql/**\
&nbsp; &nbsp; **...** -- create queries and mutations to update the database\
&nbsp; **pages/**\
&nbsp; &nbsp; **Home.js** -- \
&nbsp; &nbsp; **Login.js** -- \
&nbsp; &nbsp; **Register.js** -- \
&nbsp; &nbsp; **SinglePost.js** -- \
&nbsp; **util/**\
&nbsp; &nbsp; **AuthRoute.js** -- route to different pages if the user is logged in\
&nbsp; &nbsp; **hooks.js** -- 

&nbsp; **ApolloProvider.js** -- allow react to access your graphql server along with any cached data

&nbsp; **App.css** -- write standard css for your app

&nbsp; **App.js** -- serve each component of your app

&nbsp; **index.css** -- use tailwind's `base`, `components`, and `utilities` styles

&nbsp; **index.js** -- create the entry point to your app


## Others:

**.gitignore** -- commit only the files you write yourself

**craco.config.js** -- necessary for tailwind, b/c create react app doesn't let you override the PostCSS config natively

**tailwind.config.js** -- configure tailwind, generated from running `npx tailwindcss init`