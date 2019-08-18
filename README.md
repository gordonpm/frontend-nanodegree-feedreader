# Project Overview

This is a Feed Reader application which reads 4 popular RSS feeds. This project also includes tests written in Jasmine which tests some of the important features of the application.


## How to run   

After downloading the project, open the index.html in the browser. This should run the Feed Reader application and also run all the Jasmine tests.


##  Tests implemented in Jasmine

* RSS Feeds 
    * Feeds variable should be defined.
    * Each feed should have feed name defined.
    * Each feed should have feed URL defined.

* The Menu
    * Feed Menu should be hidden by default.
    * Menu changes visibility when menu icon is clicked.

* Initial Entries
    * After the application is loaded, there is at least one entry within feed container.

* New Feed Selection
    * When a new feed is loaded, the content of the feed changes.