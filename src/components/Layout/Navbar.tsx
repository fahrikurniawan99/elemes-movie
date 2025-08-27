import { zIndexs } from "@/utils/constant";
import { Link } from "react-router-dom";
import Language from "../Language/Language";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav
      style={{
        zIndex: zIndexs.navbar,
      }}
      className="absolute top-0 left-0 w-full py-5"
    >
      <Container className="flex items-center">
        <Link to="/" className="">
          <img
            src="/logo/elemes-logo.png"
            width={80}
            height={80}
            className="w-[80px] h-auto"
          />
        </Link>
        <Language className="ml-auto" />
      </Container>
    </nav>
  );
}
