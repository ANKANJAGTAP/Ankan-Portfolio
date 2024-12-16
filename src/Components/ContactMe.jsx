import React from 'react';

function ContactMe() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted');
    };

    return (
        <div className="min-h-screen flex flex-col items-center text-white">
            <h1 className="mt-8 text-4xl font-bold">Contact Me</h1>
            <p className="mt-2 text-lg text-gray-400">Feel free to reach out!</p>
            
            <div className="mt-6 w-[90%] md:w-[60%] lg:w-[40%] bg-gray-700 p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contact" className="block text-sm font-semibold mb-2">Contact</label>
                        <input
                            type="text"
                            id="contact"
                            placeholder="Your Email or Phone"
                            className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
                        <textarea
                            id="description"
                            placeholder="Your Message"
                            className="w-full p-2 h-24 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg text-white font-bold hover:scale-105 transition-transform"
                    >
                        Submit
                    </button>
                </form>
            </div>

        
            <div className="mt-8 flex gap-6">
                <a
                    href="https://www.linkedin.com/in/ankan-jagtap-0633ab28a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fuchsia-500 hover:text-fuchsia-400 transition hover:scale-125 transition-transform"
                >
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                    href="https://www.instagram.com/ankanjagtap/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-400 transition hover:scale-125 transition-transform"
                >
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a
                    href="https://github.com/ANKANJAGTAP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition hover:scale-125 transition-transform"
                >
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                    href="https://x.com/AnkanJagtap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition hover:scale-125 transition-transform"
                >
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
            </div>

            {/* Footer */}
            <footer className="mt-12 w-full bg-gray-800 py-4 text-center text-sm text-gray-400">
                &copy; 2024 Website handled by Ankan Jagtap. All rights reserved.
            </footer>
        </div>
    );
}

export default ContactMe;
