<?php
    if (isset($_POST['email'])) {

        //Email information
        $admin_email = "kontakt@areslan.no";
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

        //Send Mail
        mail($admin_email, "New Form Submission", $message . ' - ' . 'Telefonnummer:'$phone, "From:" . $email);

        header('Location: http://areslan.no/success.html');
    }