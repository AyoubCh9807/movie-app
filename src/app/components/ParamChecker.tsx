import React from "react"

interface ParamChecker {
    param: string;
}

const ParamChecker: React.FC<ParamChecker> = ({ param }) => {
    return(
        <>
        <div>
            <p className="text-2xl text-left bg-gray-400 text-white py-5 rounded-lg px-5 my-5 mx-3"> {param} <input type="checkbox" className="h-5 w-5 mx-5 mt-2 translate-0.5" /> </p>
        </div>
        </>
    );
}

export default ParamChecker