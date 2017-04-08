# BurgerSequelize

A burger logger built using  MySQL, Node, Express, Handlebars and Sequelize.

## Synopsis

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. 
Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. The app will store every burger in a database, whether devoured or not. Uses Node and MySQL to query and route data into app, and Handlebars to generates the HTML.

## Project Structure

### NPM Packages  

  * express
  * method-override
  * body-parser

### MySQL Table (burgers)

  * **d:** an auto incrementing int that serves as the primary key.
  * **burger_name:** a string.
  * **devoured:** a boolean.
  * **date:** a TIMESTAMP.
  


## Motivation

Update tho old burger application to run with sequelize. 

https://burgersequelize15.herokuapp.com/burgers
