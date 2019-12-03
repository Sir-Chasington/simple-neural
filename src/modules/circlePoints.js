import guess from './guess';
import trainedWeights from './trainedWeights';
import {
    circleRadius,
    teamNegativeColor,
    teamPosotiveColor,
} from '../utils/config';

const circlePoints = async (randomPoints) => {
    for (const point of randomPoints) {
        const weight = await trainedWeights();
        const guessing = guess(weight, point);
        const circle =
            `<circle
                cx=${point.x}
                cy=${point.y}
                r=${circleRadius}
                fill=${guessing === -1 ? teamNegativeColor : teamPosotiveColor}>
            </circle>`;
        document.getElementById('testSvg').innerHTML += circle;
    }
}

export default circlePoints;