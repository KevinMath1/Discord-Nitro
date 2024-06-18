import './index.scss';

export default function CardDiscord(params) {
    return (
        <div className="cardDiscord">
            <div className='texto'>
                <h2>{params.texto}</h2>
            </div>
            <div className='imagemDiscord'>
            <img src={params.caminho}></img>

            </div>
        </div>
    )
}