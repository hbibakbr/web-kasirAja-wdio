@regression @menu
Feature: Main Menu Funtionality

    Scenario: User success login to account
        Given user visit page https://kasiraja.ajikamaludin.id
        And user login with valid credentials

    Scenario: Positive - Success access page <case>
        When system display dashboard menu
        When user click on <menu>
        Then user redirect to url: <url> page

            Examples:
                | case      | menu            | url          |
                | penjualan | sales menu      | /sales       |
                | pembelian | purchase menu   | /purchases   |
                | kategori  | category menu   | /categories  | 
                | produk    | product menu    | /products    |
                | pengguna  | user menu       | /users       |
                | pelanggan | customer menu   | /customers   |
                | dashboard | dashboard menu  | /dashboard   |