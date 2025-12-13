import type { ReactNode } from "react";

type TitleArgs_type = {
  children: ReactNode,
  classList?: string
}

function Title({children, classList}: TitleArgs_type) {
  return (
    <h1
      className=
        {`text-2xl md:text-3xl font-fancy bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent
        ${classList? classList : ''}`}
      >
      {children}
    </h1>
  )
}

export default Title;
