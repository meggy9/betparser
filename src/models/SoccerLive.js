import PinnacleClient from '../PinnacleClient';

export default class SoccerLive {
  static async getMatches() {
    return PinnacleClient.getSoccerLiveGames();
  }
}
