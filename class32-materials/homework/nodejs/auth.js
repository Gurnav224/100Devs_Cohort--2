
const authModule = (function(){
    let loggedUser = null;

    function login(username,password){
            loggedUser = username
    }
    function logout(){
        loggedUser = null
    }
    function getUserInfo(){
        return loggedUser
    }

    return {
        login,
        logout,
        getUserInfo
    }
})()


authModule.login('john_Doe','secret');

console.log(authModule.getUserInfo())