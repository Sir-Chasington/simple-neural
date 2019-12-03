import team from '../utils/team';
import train from './train';
import { generatePoints, randomPoints, randomWeights } from '../utils/generatePoints';

const trainedWeights = async () => {
    const gen = generatePoints();
    const rand = randomPoints;
    const examples = gen.map(point => ({
        point,
        team: team(point),
    }));

    let currentWeights = randomWeights;
    for (const example of examples) {
        currentWeights = train(currentWeights, example.point, example.team);
    }

    return currentWeights;
};

export default trainedWeights;
