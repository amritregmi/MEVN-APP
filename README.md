# Shopping Cart App - MEVN STACK

```
    User are able to add shopping list
```

## Technology

```
MEVN STACK 

Mongo Express Vue Nodejs
REST API

```

## Installation 

    ```
    # Clone The Repo
       $ git clone https://github.com/amritregmi/MEVN-APP.git

    # Get into Client Part
       $ cd client-vue
       $ npm install

    # Run vue Server 
       $ npm run serve
    
    # Run node server (NODE SERVER with mongo db)
        $ cd server-nodejs
        $ npm install
        $ npm run start:dev
    
    ```

## Data base configuration configuration 
    ```
    # create an env file in root ( .env, package.json, app.js, server.js, )
        $ touch .env
    
    # paste following code 
    
        PORT = 3000
        DB = mongodb+srv://test:test@cluster0.et9tw.mongodb.net/testdb?retryWrites=true&w=majority

    # change in the link (test:test...mongodb.net/testdb?.....)

        username: test (your db username)
        password: test (your db password)
        db: testdb (your db name )

    ```

## View

```
clinet runs - http://localhost:8080 
server runs - http://localhost:3000 

```
## Todo 
```
 Authentication (Using FireBase)

```

## Author

    Amrit Regmi

## Version 
    1.0.0

## Licence
    This project is licensed under the MIT License
