import Card from "../components/Card";

import { Link } from "react-router-dom";

function Home() {
  const cardContent = [
    {
      title: "Case Converter",
      subTitle:
        "Quer colocar algum texto de minusculo para MAIÚSCULO ou Title Case ?",
      path: "/case-converter",
      target: "",
    },
    {
      title: "Notion",
      subTitle: "Precisa organizar sua vida ?",
      path: "/",
      target: "",
    },
    {
      title: "Speed Test",
      subTitle: "Testar a velocidade da internet ?",
      path: "https://www.speedtest.net/pt",
      target: "_blank",
    },
    {
      title: "MacVendors",
      subTitle: "Encontrar endereços MAC ?",
      path: "https://macvendors.com/",
      target: "_blank",
    },
    {
      title: "IP´s LACNIC",
      subTitle: "Encontrar informações sobre um IP especifico ?",
      path: "https://query.milacnic.lacnic.net/home",
      target: "_blank",
    },
    {
      title: "Downdetector",
      subTitle: "Monitorar problemas e quedas de serviços em tempo real ?",
      path: "https://downdetector.com.br/",
      target: "_blank",
    },
  ];

  return (
    <section>
      <main className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 place-items-center pb-14 pt-5">
        {cardContent.map((card) => (
          <Link className="w-full" target={card.target} to={card.path}>
            <Card title={card.title} text={card.subTitle} />
          </Link>
        ))}
      </main>
    </section>
  );
}

export default Home;
