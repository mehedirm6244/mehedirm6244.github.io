import { motion } from "framer-motion"
import { School, Clock } from "lucide-react"

function Education() {
  type EduInfoType = {
    institute: string,
    time: string,
    comment?: string
  }

  const EducationInfo : EduInfoType[] = [
    {
      institute: "Rajshahi University of Engineering & Technology (RUET)",
      time: "2025 - Now",
      comment: "BSc. in Electrical and Computer Engineering"
    },
    {
      institute: "St. Joseph Higher Secondary School, Dhaka-1207",
      time: "2023-2024",
      comment: "Higher Secondary Certificate Exam - 2024"
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

      <ol className="relative border-s border-default space-y-6">
        {EducationInfo.map((edu, idx) => (
          <li className={`pt-3 ms-4 space-y-1
            ${idx==0? 'pt-2' : ''} ${idx===EducationInfo.length - 1? 'pb-2' : ''}`}
          >
            <div className="absolute w-3 h-3 bg-slate-700 rounded-full mt-0.5
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
            >
              <p className="text-xs text-blue-200/80">
                <Clock className="inline -mt-0.5 mr-1" size={16} strokeWidth={1.5} />
                {edu.time}
              </p>
              <p className="text-blue-100">{edu.institute}</p>
              {edu.comment && <p className="text-sm">{edu.comment}</p>}
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Education;
