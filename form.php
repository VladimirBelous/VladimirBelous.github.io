<?php
if($_POST)
    {
    $to = "почта@mail.ru"; //куда отправлять письмо
    $from = 'почта@mail.ru'; // от кого
    $subject = "Проверка почты"; //тема
    $message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['telephone'].';  Сообщение: '.$_POST['mesage'].';';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <почта@mail.ru>\r\n";
    $result = mail($to, $subject, $message, $headers);
 
    if ($result){
        echo "Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи";
    }
    }
?>