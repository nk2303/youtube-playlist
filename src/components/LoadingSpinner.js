import React from 'react';

const LoadingSpinner = ({info}) => {
    return (
        <div className="pl-spinner">
            <div className="spinner-border text-info" role="status" block>
                <span className="sr-only">Loading...</span>
            </div>
            <p className="text-info">Loading your {info}... </p>
            <p className="text-info">Please wait, this doesn't happen very often</p>
        </div>
    )
}

export default LoadingSpinner