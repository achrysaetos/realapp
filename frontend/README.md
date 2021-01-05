# FRONTEND

* ... *(src/components/)*
* ... *(src/context/)*
* Create queries and mutations to update the database *(src/graphql/)*
* ... *(src/pages/)*
* ... *(src/util/)*
* ... *(src/ApolloProvider.js)*
* ... *(src/App.css)*
* ... *(src/App.js)*
* ... *(src/index.css)*
* ... *(src/index.js)*


## Important files and folders:

**src**\
&nbsp; **components/**\
&nbsp; &nbsp; **DeleteButton.js** -- \
&nbsp; &nbsp; **LikeButton.js** -- \
&nbsp; &nbsp; **MenuBar.js** -- \
&nbsp; &nbsp; **PostCard.js** -- \
&nbsp; **context/**\
&nbsp; &nbsp; **auth.js** -- \
&nbsp; **graphql/**\
&nbsp; &nbsp; **...** -- create queries and mutations to update the database\
&nbsp; **pages/**\
&nbsp; &nbsp; **Home.js** -- \
&nbsp; &nbsp; **Login.js** -- \
&nbsp; &nbsp; **Register.js** -- \
&nbsp; &nbsp; **SinglePost.js** -- \
&nbsp; **util/**\
&nbsp; &nbsp; **AuthRoute.js** -- \
&nbsp; &nbsp; **hooks.js** -- 

&nbsp; **ApolloProvider.js** -- 

&nbsp; **App.css** -- 

&nbsp; **App.js** -- 

&nbsp; **index.css** -- 

&nbsp; **index.js** -- 


## Others:

**.gitignore** -- commit only the files you write yourself

**craco.config.js** -- necessary for tailwind, because create react app doesn't let you override the PostCSS configuration natively

**tailwind.config.js** -- configure tailwind, generated from running `npx tailwindcss init`