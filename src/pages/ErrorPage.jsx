import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    // console.log('routerError', error)
    return (
        <div className="container mx-auto  justify-center items-center min-h-screen flex flex-col">
           <h2 className="text-4xl font-bold text-black mb-6">Oops!</h2>
           {
            error.status === 404 && <div className="flex flex-col justify-center">
                <h3 className="text-center text-2xl font-bold text-red-500 mb-5">Sorry an unexpected error has occurred</h3>
                <p className="text-center text-xl font-bold mb-4 text-black text-opacity-60">Page is not Found</p>
                <p className="text-center text-lg font-bold mb-5 text-teal-700">Go back where you from</p>
                <Link to='/' className="text-center"><button className="btn px-6 bg-teal-700 text-white text-lg rounded-full">Go Back</button></Link>
            </div>
           } 
        </div>
    );
};

export default ErrorPage;