<?php

if($_SERVER["REQUEST_METHOD"]=="POST"){
        $name=$_POST["name"];
        $email=$_POST["email"];
        $message=$_POST["message"];
        $res="";
        $content="";
        if(empty($name) || empty($email) || empty($message)){
            $res="Error";
            $content="The fields mustn't be empty.";
        }else{
            $res="Success";
            $content="Thanks for contacting, You will get the response as asoon as possible.";
        }
        $file = fopen('../json/messages.json',"a") or die("Cannot open the json file to store the message");
        fwrite($file,",");
        fwrite($file,json_encode(['name'=>$name,'email'=>$email,'message'=>$message]));
        echo json_encode(["res"=>$res,"content"=>$content]);
}