import team from '../utils/team';
import train from './train';
import { generatePoints, randomPoints, randomWeights } from '../utils/generatePoints';

const trainedWeights = async () => {
    // gen generates brand new points to be used in examples where rand uses same points as in circlePoint.js
    // not sure if one is to be used over the other. Fun Fun Function tut used gen I believe
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
