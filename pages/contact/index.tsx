import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { MouseEventHandler, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let data = {
            name,
            email,
            subject,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        })
    }

    return (
        <div className="h-full bg-primary/30">
            <div className="container mx-auto py-32 text-center xl:text-left flex items-center
                justify-center h-full">
                {/* text & form */}
                <div className="flex flex-col w-full max-w-[700px]">
                    {/* text */}
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 text-center mb-5 xl:mb-12">
                        Let&apos;s <span className="text-accent">connect.</span>
                    </motion.h2>
                    {/* form */}
                    <motion.form
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        onSubmit={handleSubmit}
                        className="flex-1 flex flex-col gap-6 w-full mx-auto">
                        {/* input group */}
                        <div className="flex gap-x-6 w-full">
                            <input type="text" placeholder="name" className="input" value={name} onChange={e => setName(e.target.value)} />
                            <input type="email" placeholder="email" className="input" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <input type="text" placeholder="subject" className="input" value={subject} onChange={e => setSubject(e.target.value)} />
                        <textarea placeholder="message" className="textarea" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        <button className="btn rounded-full border border-white/50 max-w-[170px]
                            px-8 transition-all duration-300 flex items-center justify-center
                            overflow-hidden hover:border-accent group" type="submit">
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
                                transition-all duration-500">Let's talk</span>
                            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
                                group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
