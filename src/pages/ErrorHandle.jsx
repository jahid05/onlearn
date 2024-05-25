import { Link } from "react-router-dom";

const ErrorHandle = () => {
    return (
        <div className="text-center">
           <h1 className="text-[450px] font-bold">404</h1> 
           <p className="text-2xl pb-12">Page Not Found</p>
           <Link to={'/'} className="btn text-white bg-theme-1 px-6 py-3">Back to Home</Link>
        </div>
    );
};

export default ErrorHandle;