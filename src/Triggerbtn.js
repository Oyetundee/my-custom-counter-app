import { useState } from "react";

export default function Triggerbtn(){
    const [hasError, setHasError]=  useState(false);

    if(hasError){
        throw new Error("Error has occured")
    }
    return (
        <div>
            <button className="error_button" onClick={()=>{setHasError(true)}}>Test Error Boundary</button>
        </div>
    )

}