import React, { useRef, useState } from 'react';
import { FiUser } from "react-icons/fi";
import { CiAt } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import * as emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [fillname, setfillname] = useState('');
  const [fillemail, setfillemail] = useState('');
  const [fillmessages, setfillmessages] = useState('');

  const sendmail=  (e) => {
    e.preventDefault();

    const Data = {
      to_name: name,
      to_email: email,
      message: message
    }

    const Service_id = 'service_wbpydhq';
    const Template_id = 'template_kh4cf6s';
    const user_id = 'xvB2lMLOGHAtSiSfG';
    // my first user-id = 'ebOfMD_1fJF7PliKr',

    if(name == ''){
      setfillname('please enter your name !')
    }else{
      setfillname('')
    }
    if(email == ''){
      setfillemail('please enter your email !')
    }else{
      setfillemail('')
    }
    if(message == ''){
      setfillmessages('please enter your messages !')
    }else{
      setfillmessages('')
    }

    if(!name == '' && !email == '' && !message == ''){
      emailjs.send(Service_id, Template_id, Data, user_id).then( () => {
        toast.success('Send your message successfully', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

      setname('');
      setemail('');
      setmessage('');
      
    })
    .catch( (error) => {
      console.log(error)
    });
    }
    
  }

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <div className="flex justify-center items-center min-h-screen mt-[-3vh] md:mt-10">
      <form 
        ref={form}
        id='myform'
        className="w-full text-black max-w-lg bg-gray-400 m-5 shadow-md rounded-lg p-8">
        <h2 className="text-3xl pb-6 font-bold mt-[-3vh] text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2"><span><FiUser className='inline h-5 w-5' /></span> Name</label>
          <input
            type="text"
            id="name"
            name="to_name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
            required
          />
          <p className='text-red-600'>{fillname}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2"><span><CiAt className='inline h-5 w-5' /></span> Email</label>
          <input
            type="email"
            id="email"
            name="to_email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email"
            required
          />
          <p className='text-red-600'>{fillemail}</p>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2"><span><FaRegMessage className='inline' /></span> Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message"
            rows="5"
            required
          ></textarea>
          <p className='text-red-600'>{fillmessages}</p>
        </div>

        <button
          onClick={(e) => sendmail(e) }
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          <span><SiMinutemailer className='inline w-8 h-6' /></span>
          Send Message
        </button>
      </form>
    </div>
    </>
  );
};

export default Contact;
