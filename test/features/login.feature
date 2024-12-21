@regression @login
Feature: Login Funtionality

    Scenario: Negative - Failed login with <case>
        Given user visit page https://kasiraja.ajikamaludin.id
        When user input email: <email>
        And user provide password: <password>
        And user click login
        Then system login display error message: <message>

            Examples:
                | case                  | email               | password         | message                                |
                | invalid password      | halo@test.com       | invalid_password | Kredensial yang Anda berikan salah     |
                | invalid email         | tokohalo@example    | secret_password  | "email" must be a valid email          |
                | invalid email         | tokohaloexample.com | secret_password  | "email" must be a valid email          |
                | email empty email     | empty_email         | secret_password  | "email" is not allowed to be empty     |
                | empty empty password  | tokohalo@examle.com | empty_password   | "password" is not allowed to be empty  |

    Scenario: Positive - Success login to account
        Given user visit page https://kasiraja.ajikamaludin.id
        When user input email: <email>
        And user provide password: <password>
        And user click login

            Examples:
                | email               | password         |
                | halo@test.com       | secret_password  |
    
