import { motion } from "framer-motion"

import ArchlinuxOriginal from "devicons-react/icons/ArchlinuxOriginal"
import BashOriginal from "devicons-react/icons/BashOriginal"
import COriginal from "devicons-react/icons/COriginal"
import CplusplusOriginal from "devicons-react/icons/CplusplusOriginal"
import FirebaseOriginal from "devicons-react/icons/FirebaseOriginal"
import GitOriginal from "devicons-react/icons/GitOriginal"
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal"
import ReactOriginal from "devicons-react/icons/ReactOriginal"
import SvelteOriginal from "devicons-react/icons/SvelteOriginal"
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal"
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal"
import Windows8Original from "devicons-react/icons/Windows8Original"

import { Zap } from "lucide-react"

function SkillSet() {
  const SkillSet = [
    ArchlinuxOriginal, Windows8Original, COriginal, CplusplusOriginal, JavascriptOriginal,
    TypescriptOriginal, ReactOriginal, SvelteOriginal, TailwindcssOriginal, FirebaseOriginal,
    GitOriginal, BashOriginal
  ]

  return (
    <div className="p-4 sm:p-8 md:w-sm md:bg-slate-700 rounded-lg md:shadow-md space-y-1">
      <p className="font-fancy text-blue-100 text-lg">
        <Zap
          size={24}
          strokeWidth={1.5}
          className="inline -mt-2.5 mr-1.5"
        />
        Skillset
      </p>

      <motion.div
        className="flex flex-row flex-wrap gap-4 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {SkillSet.map((Icon, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.05,
              ease: "easeOut",
            }}
          >
            <Icon
              size={28}
              className="hover:drop-shadow"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default SkillSet
