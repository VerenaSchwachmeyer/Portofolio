import { useTranslation } from "react-i18next";

export default function SkipLink() {
  const { t } = useTranslation();
  return (
    <>
      <a href="#main" className="skip">
        {t("skiplink.text")}
      </a>
    </>
  );
}
