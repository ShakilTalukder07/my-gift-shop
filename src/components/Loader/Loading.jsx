import React from 'react';
import { BallTriangle } from "react-loader-spinner";


const Loading = () => {
    return (
        <div>
            <div className="w-2/12 mx-auto my-20">
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                />
            </div>
        </div>
    );
};

export default Loading;