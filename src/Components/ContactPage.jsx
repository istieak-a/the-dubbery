import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import emailjs from '@emailjs/browser';

const contactData = [
  {
    icon: <MdEmail />,
    link: "mailto:contact@thedubbery.com",
    name: "contact@thedubbery.com",
  },
  {
    icon: <FaPhone />,
    link: "tel:+8801301243863",
    name: "+880 13012 43863",
  },
  {
    icon: <IoLocationSharp />,
    link: "Mirpur DOHS, Dhaka",
    name: "Mirpur DOHS, Dhaka",
  },
];

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t6ataqb", "template_s99ikhs", form.current, {
        publicKey: "YVsWeneB0Y7l_6U20",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <div className="bg-[#f8f8ff]">
      <section className="bg-[#1f2937] py-10 text-white">
        <h1 className="text-center text-5xl font-black">Contact Us</h1>
        <div className=" mt-10 flex items-center justify-center">
          <p className="w-[80%] text-center text-xs md:w-1/2">
            Thank you for your interest in The Dubbery! We're here to answer any
            questions you may have about our services, collaborations, or
            partnerships. Feel free to reach out to us using the information.
          </p>
        </div>
      </section>
      <section className="mt-20 flex flex-col justify-between  gap-20 px-20 pb-32 md:flex-row">
        <div className="w-full md:w-[40%]">
          <h4 className="border-grey border-b-2 pb-5 text-xl font-bold">
            Get In Touch
          </h4>
          <div className="mt-10">
            {contactData.map((item, index) => (
              <div key={index} className="mt-5 flex items-center">
                <div className="mr-3 text-[#3869e7]">{item.icon}</div>
                <a href={item.link} className="hover:underline">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7298.959613691923!2d90.36501103689002!3d23.837090178134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14a3366b005%3A0x901b07016468944c!2sMirpur%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1707581138198!5m2!1sen!2sbd"
            // width="600"
            // height="450"
            // style="border:0"
            // allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-10 h-[300px] w-full rounded-xl shadow-xl"
          ></iframe>
        </div>
        <div className="w-full md:w-[60%]">
          <h1 className="border-grey border-b-2 pb-5 text-xl font-bold">
            Have an idea?
          </h1>
          <p className="mt-5 w-full text-xs md:w-[70%]">
            We are always looking for new ideas and collaborations. If you have
            a project in mind, we would love to hear from you.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              className="border-grey mt-5 w-full rounded-xl border px-5 py-3 md:w-[70%]"
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              className="border-grey mt-5 w-full rounded-xl border px-5 py-3 md:w-[70%]"
            />
            <textarea
              name="message"
              id=""
              rows="5"
              placeholder="Your Message"
              className="border-grey mt-5 w-full rounded-xl border px-5 py-3 md:w-[70%]"
            ></textarea>
            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-[#3869e7] p-3 text-white hover:bg-[#1345c5] md:w-[70%]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
