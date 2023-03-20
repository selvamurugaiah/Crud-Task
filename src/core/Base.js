import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title,styles,children}){
    const history = useHistory();
    return(
        <div>
            <div className="nav">
                <span>
                    <button
                    onClick={()=>history.push("/add/user")}
                    >Add user</button>
                </span>
                <span>
                    <button
                    onClick={()=>history.push("/")}
                    >Dashboard</button>
                </span>
            
            </div>
           <div className={styles}>{title}</div>
           <div className="children">{children}
           <footer>contact us
            <div>email:xyz@gmail.com</div>
            <div>phone:7734***342</div>
           </footer>
           
           </div>
           </div>
        
    )
}