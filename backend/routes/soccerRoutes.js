import {addNewPlayer,
     getPlayers,
     getPlayerWithID,
     UpdatePlayer,
     deletePlayer

    } from '../controllers/playerControllers';

const routes = (app) =>{
    app.route('/players')
    //GET endpoint
    .get(getPlayers)
    //POST endpoint
    .post(addNewPlayer);

    app.route('/player/:PlayerId')
    //get specific player
    .get(getPlayerWithID)
     //update a specific player
    .put(UpdatePlayer)
    //delete a player
    .delete(deletePlayer);
}
export default routes;
