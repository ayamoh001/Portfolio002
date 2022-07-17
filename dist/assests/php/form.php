<?php

if($_SERVER["REQUEST_METHOD"]=="GET"){
        $name=$_GET["name"];
        $email=$_GET["email"];
        $message=$_GET["message"];
        $res="";
        $content="";
        if(empty($name) || empty($email) || empty($message)){
            $res="Error";
            $content="The fields mustn't be empty.";
        }else{
            $res="Success";
            $content="Thanks for contacting, You will get the response as asoon as possible.";
        }
        echo json_encode(["res"=>$res,"content"=>$content]);
}