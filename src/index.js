import { randomPoints } from './utils/generatePoints';
import circlePoints from './modules/circlePoints';
import {
    strokeColor,
    X_Max,
    Y_Max
} from './utils/config';

const generateSvg = async () => {
    const pointSvg = `
        <svg id="testSvg" width=${X_Max} height=${Y_Max}
            ${circlePoints(randomPoints)}
        </svg>
    `;
    const root = document.getElementById('root').innerHTML = pointSvg;
    const line = document.getElementById('testSvg').innerHTML += `<line x1="0" x2=${X_Max} y1="0" y2=${Y_Max} stroke=${strokeColor}></line>`;
}

generateSvg();