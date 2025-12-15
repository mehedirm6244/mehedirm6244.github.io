import { motion } from "framer-motion"
import {
  Github, Mail, Linkedin, FileUser, ChevronUp,
  type LucideIcon
} from "lucide-react"
import Title from "@/components/ui/Title"

function Hero() {
  type QuickLinkDataType = {
    url: string,
    icon: LucideIcon
  }

  const QuickLinkData: QuickLinkDataType[] = [
    { url: "https://github.com/mehedirm6244", icon: Github },
    { url: "mailto:mehedirm6244@protonmail.com", icon: Mail },
    { url: "https://www.linkedin.com/in/mehedirm6244/", icon: Linkedin },
    {
      url: "https://docs.google.com/document/d/1DefCAwBaQt77kjQWXuyr0w6woU8q_4zjBdRiQrNcdIk/edit?usp=sharing",
      icon: FileUser
    }
  ]

  const ScrollUpIndicator = () => {
    return (
      <div className="absolute bottom-10 opacity-80">
        <ChevronUp
          size={36}
          strokeWidth={1.25}
          className="animate-bounce"
        />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col align-middle items-center justify-center
        space-y-4 sticky top-0"
    >
      <div className="font-fancy space-y-2 mx-10">
        <p className="sm:text-lg text-blue-200/80">Welcome to the den of</p>

        <Title classList="font-light md:font-extralight text-3xl sm:text-4xl md:text-5xl p-1 md:p-2">
            Mehedi Rahman Mahi
        </Title>

        <p className="font-sans text-center sm:text-lg">
          Passionately transforming <i className="text-blue-100">what-if</i> into <i className="text-blue-100">I see</i>
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-2">
        {QuickLinkData.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.2,
              ease: "easeOut",
            }}
          >
            <button className="text-blue-200 bg-slate-600/50 hover:bg-slate-600/80
              duration-100 p-3 rounded-full border border-slate-600/50 inset-shadow-sm
              inset-shadow-black/25"
            >
              <link.icon
                size={22}
                strokeWidth={1.5}
              />
            </button>
          </motion.a>
        ))}
      </div>

      <ScrollUpIndicator />
    </motion.div>
  )
}

export default Hero;
