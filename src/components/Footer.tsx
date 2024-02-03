import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();
  
  return (
    <footer className="grid place-items-center p-2 bg-neutral text-neutral-content fixed bottom-0 w-full">
      <p>
        {t("footer:footer")}{" "}
        <a
          className="text-accent"
          target="_blank"
          href="https://github.com/GabrielFleckl"
        >
          {" "}
          Gabriel Gonçalves
        </a>
      </p>
    </footer>
  );
}

export default Footer;
