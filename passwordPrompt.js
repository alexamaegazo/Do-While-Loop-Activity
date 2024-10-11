function askPassword() {
    const passWord = "alexamaegazo";
    let user;

    do {
        user = prompt("Enter your password");
        if (user !== passWord) {
            alert("Incorrect, please try again.");
        }
    } while (user !== passWord);

    alert("Authorization Successful.");

}

askPassword();