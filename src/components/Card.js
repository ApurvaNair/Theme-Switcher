import React from "react";

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        React JS
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$499</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
