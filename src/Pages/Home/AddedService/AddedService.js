import React from 'react';

const AddedService = ({ data }) => {
    

    return (
        <div >
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">


                <div className="flex flex-col justify-center p-5 border rounded shadow-sm">
                    <div>

                        <h6 className="mb-2 font-semibold leading-5">Your Name: {data.name}</h6>
                        <h6 className="mb-2 text-sm font-semibold leading-5">Your Email: {data.email}</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Your Message: {data.message}
                        </p>
                        <p className="mb-3 text-sm text-gray-900">
                            Your Therapy: {data.therapy}
                        </p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AddedService;