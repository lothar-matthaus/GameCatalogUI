import IGame from "../interfaces/IGame";

interface IGameCardProps {
    game: IGame;
}

function GameCard(props: IGameCardProps) {
        return (
            <>
                <div className="card text-center" style={{ margin: 10, width: 400 }}>
                    <div className="text-center">
                        <img src={props.game.coverUrl} style={{ width: 150, margin: 20 }} alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.game.title}</h5>
                        <p className="card-text">{props.game.description}</p>
                    </div>
                    <div>
                        {
                            props.game.genre.map((genre) => {
                                return <span key={genre.id} className="badge bg-info text-dark" style={{ margin: 10 }}>{genre.name}</span>
                            })
                        }
                    </div>
                    <a href="#" className="btn btn-primary" style={{ margin: 10 }}>Detalhes</a>
                </div>
            </>
        );

}

export default GameCard;