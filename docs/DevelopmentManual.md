# Development Manual
1. Install [git](https://git-scm.com/downloads) if you don't have it
    Make sure it is installed with this command
    ```sh
    $ git --version
    ```
    Should be version "2.19.1" or higher
2. Install [Node.js](https://nodejs.org/en/) if you don't have it
    Make sure it is installed with this command
    ```sh
    $ node --version
    ```
    Should be version "8.12.0" or higher
3. Check if [NPM](https://www.npmjs.com/get-npm) is installed
    ```sh
    $ npm --version
    ```
    Should be version "6.4.1" or higher
3. Clone the repo to your computer
    ```sh
    $ git clone git@github.com:RhesPosse/TicTacToe.git
    ```
4. Install the dependencies
    ```sh
    $ npm install
    ```
    Check if *package-lock.json* got altered after installing the dependencies
    ```sh
    $ git status
    ```
    If *package-lock.json* is listed do undo all changes to it
    ```sh
    $ git checkout -- package-lock.json
    ```
5. Build the files
    ```sh
    $ npm run build
    ```

6. You can now run the program
    ```sh
    $ npm start
    ```

7. You can now start to make changes
    Remember to build the files regularly
    ```sh
    $ npm run build
    ```

    Usuful commands:
        Run tests when files are changed
        ```sh
        $ npm run watch
        ```
        Restart app when files are changed
        ```sh
        $ npm run dev
        ```
