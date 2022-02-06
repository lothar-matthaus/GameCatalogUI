import IGame from '../interfaces/IGame';
import GameCard from './GameCard';

interface IHomeListProps {
    gameList: IGame[];
}

function HomeList(props: IHomeListProps) {
    if (props.gameList.length === 0) {
        return (
            <>
                <div>
                    <h1 className='text-danger' style={{marginTop: 20}}>Não foram encontrados títulos correspondentes...</h1>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {
                            props.gameList.map((game) => {
                                return <GameCard game={game} />
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default HomeList;