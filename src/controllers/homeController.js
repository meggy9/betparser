import SoccerLive from '../models/SoccerLive';

export default {
  async index(req, res) {
    const matches = await SoccerLive.getMatches();

    res.send(matches);
  },
};
