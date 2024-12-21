@regression @register
Feature: Register Funtionality

    @negative
    Scenario: Negative - Failed register an Account with <case>
        Given user visit page https://kasiraja.ajikamaludin.id
        And user click on ingin mencoba, daftar
        When user provide nama toko: <namaToko>
        And user provide email: <email>
        And user provide password: <password>
        And user click daftar
        Then system register display error message: <message>

            Examples:
                | case              | namaToko   | email               | password        | message                               |
                | invalid email     | Toko Halo  | tokohalo.com        | secret_password | "email" must be a valid email         |
                | invalid email     | Toko Halo  | tokohalo@example    | secret_password | "email" must be a valid email         |
                | email already use | Toko Halo  | halo@test.com       | secret_password | Email sudah digunakan                 |
                | empty nama toko   | empty_name | tokohalo@examle.com | secret_password | "name" is not allowed to be empty     |
                | empty email       | Toko Halo  | empty_email         | secret_password | "email" is not allowed to be empty    |
                | empty password    | Toko Halo  | tokohalo@examle.com | empty_password  | "password" is not allowed to be empty |
 
    @positive
    Scenario: Positive - Success register an Account
        Given user visit page https://kasiraja.ajikamaludin.id
        And user click on ingin mencoba, daftar
        When user provide nama toko: <namaToko>
        And user provide email: <email>
        And user provide password: <password>
        And user click daftar
        Then system directed user to <url> page

            Examples:
                | namaToko  | email            | password        | url        |
                | Toko Halo | random_email     | secret_password | /login     |

