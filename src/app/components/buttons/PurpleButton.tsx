import React from "react";
interface PurpleButton {
    text: string;
    link: string;
}

const PurpleButton: React.FC<PurpleButton> = ({text ,link }) => {
    return(
        <button className="px-5 py-2 bg-purple-700 border-4 border-white rounded-lg font-bold font-sans hover:bg-purple-900 transition-colors duration-200 hover:cursor-pointer"><a href={link}>{text}</a></button>
    );
}

export default PurpleButton