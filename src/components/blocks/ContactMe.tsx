import { motion } from "framer-motion"

import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Title from "@/components/ui/Title"

function ContactMe() {
  const handleMailSubmit = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const message = form.message.value;
    const receiverMail = "mehedirm6244@protonmail.com";

    const mailBody = encodeURIComponent(`Name: ${name}\n\n${message}`);
    
    window.location.href = `mailto:${receiverMail}?subject="Contact from portfolio"&body=${mailBody}`;
  }


  return (
    <motion.section
      id="contact"
      className="w-full max-w-md mx-auto mt-10 sm:mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
    >
      <motion.div
        className="bg-slate-700 rounded-xl shadow-lg p-8 md:p-10"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Title classList="!text-2xl pb-2">
          Get in touch
        </Title>

        <p className="text-blue-100 text-sm mb-6">
          Have a query, opportunity, or just want to say hi? Send me a message.
        </p>

        <motion.form
          className="space-y-4 m-1"
          initial="hidden"
          whileInView="visible"
          onSubmit={handleMailSubmit}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <Input
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="off"
            />
          </motion.div>

          <motion.textarea
            name="message"
            rows={4}
            placeholder="Your message"
            className="w-full rounded-md bg-slate-750 placeholder-slate-400 px-4 py-3 text-sm resize-none"
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 }
            }}
          />

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-wrap justify-center md:justify-start"
          >
            <Button type="submit">Send Message</Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}

export default ContactMe;
