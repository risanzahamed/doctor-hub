import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 text-4xl py-px mb-4 font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Blog page
                    </p>
                </div>
            </div>
            <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">Difference between SQL and NoSQL?</h6>
                        <p className="text-sm text-gray-900">
                            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">What is JWT, and how does it work?</h6>
                        <p className="text-sm text-gray-900">
                            JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                            It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                            JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">
                            What is the difference between javascript and NodeJS?
                        </h6>
                        <p className="text-sm text-gray-900">

                            JavaScript <br />
                            1. It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language. <br />
                            2. It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming. <br />

                            Node.js <br />
                            1. It's a bridge, open-source Js runtime environment for executing Js on the server. <br />
                            2. It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">How does NodeJS handle multiple requests at the same time?</h6>
                        <p className="text-sm text-gray-900">
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;