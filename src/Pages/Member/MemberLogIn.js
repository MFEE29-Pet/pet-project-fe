import React from 'react'
import './MemberLogIn.css'
function MemberLogIn() {
  return (
    <>
       <div className="loginpage">
            <div className="logInenterA">
                <h2>使用者帳號</h2>
                <div className="logInenterC">
                    <div className="logIninput">
                        <i className="fa-thin thin fa-user"></i>
                        <input type="text"/>
                    </div>
                </div>
            </div>
            <div className="logInenterA">
                <h2>密碼</h2>
                <div className="logInenterB">
                    <div>
                        <i className="fa-thin thin fa-lock"></i>
                        <input type="text"/>
                    </div>

                    <i className="fa-light light fa-eye-slash"></i>
                </div>
            </div>
            <button className="buttonLogIn">登入</button>
            <div>
                <span>忘記密碼</span>
                <i className="fa-regular fa-pipe"></i>
                <span className="s1">立即註冊</span>
            </div>
        </div>

    </>
  )
}

export default MemberLogIn