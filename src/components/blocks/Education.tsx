import { motion } from "framer-motion"
import { School, Clock } from "lucide-react"

function Education() {
  type EduInfoType = {
    institute: string,
    time: string,
    degree: string,
  }

  const EducationInfo : EduInfoType[] = [
    {
      institute: "Rajshahi University of Engineering & Technology",
      time: "2025 - Now",
      degree: "BSc. in Electrical & Computer Engineering (ECE)"
    },
    {
      institute: "St. Joseph Higher Secondary School, Dhaka",
      time: "2024",
      degree: "Higher Secondary Certificate"
    }
  ]
  
  return (
    <div className="p-4 sm:p-8 md:w-sm space-y-1">
      <p className="font-fancy text-blue-100 text-lg -ml-2">
        <School
          size={24}
          strokeWidth={1.5}
          className="inline -mt-2.5 mr-1.5"
        />
        Education
      </p>

      <ol className="relative border-s border-blue-200/60 space-y-1">
        {EducationInfo.map((edu, idx) => (
          <li className={`ms-2 space-y-1
            `}
          >
            <div className="absolute w-3 h-3 bg-slate-700 rounded-full mt-3.5
              -start-1.5 border border-buffer">
            </div>

            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.2,
                ease: "easeOut",
              }}
              className="px-4 py-3 hover:bg-slate-700 hover:shadow rounded-md"
            >
              <p className="text-xs text-blue-200/80">
                <Clock className="inline -mt-0.5 mr-1" size={16} strokeWidth={1.5} />
                {edu.time}
              </p>
              <p className="text-blue-100">{edu.degree}</p>
              <p className="text-sm">{edu.institute}</p>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Education;
