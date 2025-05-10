import React from 'react';

const ContactPage: React.FC = () => (
    <section className="flex items-center justify-center bg-transparent">
        <div className="text-header text-center max-w-2xl p-4">
            <h2 className="text-3xl font-semibold mb-3">To get in touch with me</h2>
            <div className="flex items-center justify-center gap-5">
                <a
                    href="mailto:hazal_yasar@outlook.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="icons/outlook.svg" alt="mail" className="w-12 h-12" />
                </a>

                <a
                    href="https://www.linkedin.com/in/hazal-ya%C5%9Far-43035523a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="icons/linkedin.svg" alt="LinkedIn" className="w-12 h-12" />
                </a>

                <a
                    href="https://github.com/xhyasar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="icons/github.svg" alt="GitHub" className="w-12 h-12" />
                </a>
            </div>
        </div>
    </section>
);

export default ContactPage;
