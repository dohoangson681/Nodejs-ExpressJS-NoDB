console.log('login') ; 

const userLogin = () => {
    let username = document.getElementById('username').value ;
    let password = document.getElementById('password').value ;
    let userAcc = {username , password} ;
    if(userAcc.username === 'Do Hoang Son' && password === '123') {
        localStorage.setItem('userLogin' , JSON.stringify(userAcc)) ; 
       
        location.href = './index.html' ;
    }else {
        alert("Mật khẩu hoặc tài khoản chưa chính xác !") ;
    }
    // location.href = './index.html' ; 
}
document.getElementById('btn-login').onclick = (e) => {
    e.preventDefault() ; 
    userLogin() ;
}