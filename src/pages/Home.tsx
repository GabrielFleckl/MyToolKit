import Card from "../components/Card";

import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

function Home() {

  const { t } = useTranslation();

  const cardContent = [
    {
      title: "Case Converter",
      subTitle: t("home:cards.caseConverter.subTitle"),
      path: "/case-converter",
      target: "",
    },
    {
      title: "Notion",
      subTitle: t("home:cards.notion.subTitle"),
      path: "https://www.notion.so/",
      target: "_blank",
    },
    {
      title: t("home:cards.speedtest.title"),
      subTitle: t("home:cards.speedtest.subTitle"),
      path: "https://www.speedtest.net/pt",
      target: "_blank",
    },
    {
      title: t("home:cards.macvendors.title"),
      subTitle: t("home:cards.macvendors.subTitle"),
      path: "https://macvendors.com/",
      target: "_blank",
    },
    {
      title: t("home:cards.lacnic.title"),
      subTitle: t("home:cards.lacnic.subTitle"),
      path: "https://query.milacnic.lacnic.net/home",
      target: "_blank",
    },
    {
      title: t("home:cards.downdetector.title"),
      subTitle: t("home:cards.downdetector.subTitle"),
      path: "https://downdetector.com.br/",
      target: "_blank",
    },
  ];

  return (
    <section>
      <main className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 place-items-center pb-14 pt-5">
        {cardContent.map((card) => (
          <Link className="w-full" target={card.target} to={card.path}>
            <Card title={card.title} text={card.subTitle} key={cardContent.length}/>
          </Link>
        ))}
      </main>
    </section>
  );
}

export default Home;
