import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="mx-auto bg-gray-400 h-[100vh]">
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;