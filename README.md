1. Install Nodejs
2. Install Mysql in local machine
3. After installing MySql in the local machine, run the below script to avoid db connection error:
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
    flush privileges;
4. After fetching the project, run "npm install" in the command line which will install the necessary dependencies and run the file 'db_script' by running the command ->
    node db_script.js
5. Run 'npm run server' to start the project.
6. In a local browser, go to 'localhost:3000' to access from the web.
7. In the header of the page, there will be three options, 'Home', 'Text List' and 'Add New'.
8. In the home page, there will be a text analyzer, where we can input texts and analyze them.
9. In the 'Text list', there will be a list of save texts.
10. In the 'Add New', we can add new text.