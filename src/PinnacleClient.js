import axios from 'axios';

const sportsUrl = 'https://guest.api.arcadia.pinnacle.com/0.1/sports';
const liveGamesForSport = 'https://guest.api.arcadia.pinnacle.com/0.1/sports/{id}/matchups/live';

export default class PinnacleClient {
  static async getSoccerLiveGames() {
    const soccerId = await PinnacleClient.getSoccerSportId();
    const soccerLiveGamesURL = PinnacleClient.getSportLiveGamesURL(soccerId);
    console.log(soccerLiveGamesURL);
    return axios.get(soccerLiveGamesURL).response.data;
  }

  static getSports() {
    return axios.get(sportsUrl)
      .then((response) => response.data);
  }

  static async getSoccerSportId() {
    const sports = await PinnacleClient.getSports();
    console.log(sports);

    return sports
      .find(
        (sport) => sport.name === 'Soccer',
      )
      .id;
  }

  static getSportLiveGamesURL(id) {
    return liveGamesForSport.replace(/\{id\}/, id);
  }
}
