import CardDiscord from "../../Components/CardDiscord";
import Footer from "../../Components/footer/footer";

import "./index.scss";

export default function Discord() {
  return (
    <div className="telaDiscord">
      <h1>Vantagens Nitro Populares</h1>
      <div className="cads">
        <CardDiscord
          texto="De clipes a fotos, compartilhe à vontade com uploads maiores"
          caminho="/assets/discord1.svg"
        ></CardDiscord>
        <CardDiscord
          texto="Faça transmissões de aplicativos e jogos em HD"
          caminho="/assets/discord2.svg"
        ></CardDiscord>
        <CardDiscord
          texto="Aumente a empolgação e faça memes com emojis personalizados onde quiser"
          caminho="/assets/discord3.svg"
        ></CardDiscord>
        <CardDiscord
          texto="Desbloqueie vantagens para suas comunidades com 2 Impulsos de Servidor"
          caminho="/assets/discord4.svg"
        ></CardDiscord>
      </div>
  <Footer></Footer>
    </div>
  );
}
