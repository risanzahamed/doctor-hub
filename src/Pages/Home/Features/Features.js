import React from 'react';

const Features = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Explore Our <br /> Awesome <span className="text-blue-500">Features</span></h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        <div className="flex flex-col items-center p-12 shadow-sm space-y-3 text-center bg-blue-300  rounded-xl dark:bg-gray-800">
                            <h1 className="text-2xl font-semibold text-black capitalize dark:text-white">Excellence Research</h1>

                            <p className="text-black font-medium dark:text-gray-300">
                            We have the right caring, experience and dedicated professional for you.
                            </p>
                        </div>

                        <div className="flex flex-col items-center shadow-sm p-12 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                            Patient Treatments</h1>

                            <p className="text-black font-medium dark:text-gray-300">
                            We care about you and the success of your providing personalised care.
                            </p>
                        </div>

                        <div className="flex flex-col shadow-sm items-center p-12 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Professional therapist</h1>

                            <p className="text-black font-medium dark:text-gray-300">
                            We are highest levels of honesty and professionalism at all times.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;