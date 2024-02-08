import { useTranslation } from "react-i18next";
import "../styles/skiplink.css";

export default function SkipLink() {
  const { t } = useTranslation();
  return (
    <>
      <a href="#main" tabIndex={0} className="skip">
        {t("skiplink.text")}
      </a>
    </>
  );
}
