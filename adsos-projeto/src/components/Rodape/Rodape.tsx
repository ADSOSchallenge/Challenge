import type { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer-bg">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </footer>
  );
}