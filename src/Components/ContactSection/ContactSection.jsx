import React, { useState } from "react";
import { FiMail, FiPhone, FiMessageSquare, FiSend, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_uu7pbfq",     // Replace with your actual Service ID
        "template_igchqva",    // Replace with your actual Template ID
        data,
        "CbQuOeBcPHAiXfegS"      // Replace with your actual Public Key
      );
      toast.success("Message sent successfully!");
      reset();
      setModalOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Toaster position="top-center" toastOptions={{
        style: {
          background: "#1f2937",
          color: "#fff",
          borderRadius: "12px",
          padding: "16px",
        },
        success: { iconTheme: { primary: "#059669", secondary: "#fff" } },
        error: { iconTheme: { primary: "#dc2626", secondary: "#fff" } },
      }} />

      <section
        id="contact"
        className={`bg-white dark:bg-gray-900 py-24 px-6 transition-filter duration-300 ${modalOpen ? "filter blur-sm pointer-events-none select-none" : ""
          }`}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-600 dark:text-cyan-600">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto text-lg">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              {
                icon: <FiMail className="text-cyan-600" />,
                title: "Email",
                description: "Best for formal inquiries",
                contact: "hafezmohammod0011@gmail.com",
                href: "mailto:hafezmohammod0011@gmail.com",
              },
              {
                icon: <FiPhone className="text-cyan-600" />,
                title: "Phone",
                description: "Weekdays 10AM - 6PM",
                contact: "+880 1572 116674",
                href: "tel:+8801572116674",
              },
              {
                icon: <FiMessageSquare className="text-cyan-600" />,
                title: "WhatsApp",
                description: "Fastest response",
                contact: "Message on WhatsApp",
                href: "https://wa.me/8801572116674",
                external: true,
              },
            ].map(({ icon, title, description, contact, href, external }) => (
              <motion.div key={title} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer">
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-lg bg-cyan-100 dark:bg-cyan-900">{icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-3">{description}</p>
                <a href={href} target={external ? "_blank" : "_self"} rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-500 font-semibold">
                  {contact}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">Prefer to send a direct message?</p>
            <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-3 bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-md cursor-pointer" aria-label="Open contact form modal">
              <FiSend className="text-xl" />
              Send a Message
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => setModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          }}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} transition={{ type: "spring", damping: 20 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-8 shadow-lg border border-gray-200 dark:border-gray-700 relative">
              <button onClick={() => setModalOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-full p-1" aria-label="Close modal">
                <FiX size={24} />
              </button>

              <div className="text-center mb-6">
                <div className="mx-auto bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white text-3xl">
                  <FiSend />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">I'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                  <input {...register("name", { required: "Name is required" })} id="name" type="text" placeholder="John Doe" className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 outline-none transition-colors ${errors.name ? "border-red-500 focus:ring-red-300 dark:focus:ring-red-700" : "border-gray-300 dark:border-gray-600"} dark:bg-gray-700 dark:text-white`} />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <input {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }
                  })} id="email" type="email" placeholder="john@example.com" className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 outline-none transition-colors ${errors.email ? "border-red-500 focus:ring-red-300 dark:focus:ring-red-700" : "border-gray-300 dark:border-gray-600"} dark:bg-gray-700 dark:text-white`} />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                  <textarea {...register("message", { required: "Message is required" })} id="message" rows={5} placeholder="Hello, I'd like to discuss..." className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 outline-none transition-colors ${errors.message ? "border-red-500 focus:ring-red-300 dark:focus:ring-red-700" : "border-gray-300 dark:border-gray-600"} dark:bg-gray-700 dark:text-white`} />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold shadow-md flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
