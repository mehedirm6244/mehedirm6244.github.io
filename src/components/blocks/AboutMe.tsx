import { motion } from "framer-motion"

import Button from "@/components/ui/Button"
import Title from "@/components/ui/Title"

function AboutMe() {
  return (
    <div className="mt-10 md:mt-25 flex flex-col md:flex-row items-center justify-center
      align-middle gap-6 md:gap-8"
    >
      {/* Pfp */}
      <motion.div
        initial={{ x: -5, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex-none"
      >
        <img
          src="pfp.jpg"
          className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full shadow-lg"
        />
      </motion.div>

      <div className="h-16 w-[1px] bg-blue-200/50 hidden md:inline" />

      {/* Text Block */}
      <motion.div
        initial={{ x: 5, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="sm:max-w-md md:max-w-lg space-y-2"
      >
        <Title classList="mb-4 text-center md:text-left mt-4 md:mt-0">
          Hi There! <span className="text-blue-100 wave">👋</span>
        </Title>

        <p>
          I'm <span className="text-blue-100 font-medium">Mehedi Rahman Mahi</span>,
          an enthusiastic learner currently pursuing undergraduation in
          <span className="text-blue-100 font-medium"> Electrical and Computer Engineering</span>.
        </p>

        <p>
          I've been into Linux <small><i>(btw)</i></small> and coding since 2021.
          Over the years, I've explored various areas in tech —
          from system level tools to user-friendly interfaces.
          <i> I continuously enjoy learning how things work under the hood.</i>
        </p>

        <div className="flex flex-wrap justify-center md:justify-start">
          <a href="https://docs.google.com/document/d/1DefCAwBaQt77kjQWXuyr0w6woU8q_4zjBdRiQrNcdIk/edit?usp=sharing">
            <Button>Portfolio</Button>
          </a>

          <a href="#contact">
            <Button variant="Outline">
              Contact Me
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
