import React from 'react'
import './Member.css';
function MemberForgrtPassword() {
  return (
    <div className="pagePassword">
                <div className="enter-A">
                    <h2>目前的密碼</h2>
                    <div className="enter-C">
                        <div className="input">
                            
                            <input type="text"/>
                        </div>
                    </div>
                </div>
                <div className="enter-A">
                    <h2>新密碼</h2>
                    <div className="enter-B">
                        <div className="input">
                           
                            <input type="text"/>
                        </div>
                        
                           
                    </div>
                </div>
                <div className="enter-A">
                    <h2>新密碼確認</h2>
                    <div className="enter-B">
                        <div className="input">
                            
                            <input type="text"/>
                        </div>
                        
                           
                    </div>
                </div>
                <button className="button">確認</button>
                
            </div>
  )
}

export default MemberForgrtPassword