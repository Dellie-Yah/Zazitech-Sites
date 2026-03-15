import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessMessage = ({ success = "Your message has been sent successfully! We'll get back to you soon." }) => {
    return (
        <div className="flex items-center justify-center min-h-[30vh] w-full px-4">
            <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                <div className="h-2 bg-primary-600"></div>
                <div className="flex flex-col items-center p-8">
                    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-100">
                        <CheckCircle className="w-8 h-8 text-primary-600" />
                    </div>
                    <h1 className="mb-3 text-2xl font-bold text-gray-800">Thank You!</h1>
                    <p className="mb-6 text-center text-gray-600">{success}</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessMessage;