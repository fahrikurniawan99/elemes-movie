import { Link } from "react-router-dom";

export default function Footer() {
  const dynamicYear = new Date().getFullYear();
  return (
    <div className="w-full py-5 border-t border-white/10 lg:mt-20 mt-10">
      <Link to="/" className="flex justify-center">
        <img
          src="/logo/elemes-logo.png"
          width={60}
          height={60}
          className="w-[60px] h-auto"
        />
      </Link>
      <p className="text-center text-sm text-white/60 mt-2">
        © {dynamicYear} Elemes Movie. All rights reserved.
      </p>
    </div>
  );
}
