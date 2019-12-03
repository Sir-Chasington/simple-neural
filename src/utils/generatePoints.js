import * as R from 'ramda';

import rand from './rand';
import {
    rangeMax,
    rangeMin,
    X_Max,
    Y_Max
} from './config';

export const randomWeights = {
    x: rand(-1, 1),
    y: rand(-1, 1),
};

export const generatePoints = () => R.range(rangeMin, rangeMax).map(_ => ({ x: rand(0, X_Max), y: rand(0, Y_Max) }));
export const randomPoints = generatePoints();