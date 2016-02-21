function helloworld(user) {
    
    console.log("arguments : " + arguments.length);
    
    if(user) {
        console.log("Hello " + user);
        return ("Hello " + user);
    }
    return "Hello World";
}