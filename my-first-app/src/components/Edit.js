import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as gameService from "../services/gameService"



const Edit = () => {

const {gameId} = useParams();
const [game, setGame] = useState([]);

useEffect(() => {
    gameService.getById(gameId)
    .then(res => {
        setGame(res)
    })
    .catch(err => {
        console.log(err)
    })
}, [gameId])

    return (
        <section id="edit-page" className="auth">
        <form id="edit">
            <div className="container">

                <h1>Edit Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" value={game.title} />

                <label for="category">Category:</label>
                <input type="text" id="category" name="category" value={game.category} />

                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" value={game.maxLevel} />

                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" value={game.imageUrl} />

                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary" value={game.summary}></textarea>
                <input className="btn submit" type="submit" />

            </div>
        </form>
    </section>
    );
}

export default Edit;