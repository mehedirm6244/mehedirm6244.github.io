import { Heart } from "lucide-react";

function Footer() {
  return (
    <div className="text-center p-10 text-sm text-blue-200/80 bg-slate-750 space-y-1">
      <p>
        Curated with
        <Heart
          className="inline mx-1 -mt-1"
          size={18}
          strokeWidth={1.5}
        />
        by <a href="https://github.com/mehedirm6244">Mehedi Rahman Mahi</a>
      </p>
    </div>
  )
}

export default Footer;
