import guess from './guess';

const train = (weights, point, actualTeam) => {
    const guessResult = guess(weights, point);
    const error = actualTeam - guessResult;
    const learningRate = 0.2;

    return {
        x: weights.x + (point.x * error * learningRate),
        y: weights.y + (point.y * error * learningRate),
    }
}

export default train;