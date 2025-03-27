interface HeaderProps {
    title: string;
    desc?: string;
}

const Header: React.FC<HeaderProps> = ({title, desc}) => {
    return(
        <header className="bg-gradient-to-br from-indigo-900 to-purple-800">
            <p className="text-5xl text-center font-mono font-extrabold p-2 bg-gradient-to-tr from-gray-600 to-white bg-clip-text text-transparent "> {title} </p>
            <p className="text-2xl text-gray-400 text-center pb-4 font-mono font-bold"> {desc} </p>
        </header>
    );
}

export default Header;