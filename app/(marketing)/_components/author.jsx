import Link from "next/link";

const Author = () => {
    return ( 
        <div className="text-sm w-1/2 pl-10 hidden md:flex items-center">
            
            <Link
                href="https://rushikeshshelar.tech"
                target="_blank"
                className="ml-1 w-full font-bold text-gray-800 block"
                
            >
                Rushikesh Shelar
            </Link>
        </div>
     );
}
 
export default Author;