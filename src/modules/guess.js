const guess = (weights, point) => {
    const sum = point.x * weights.x + point.y * weights.y;
    const team = sum >= 0 ? 1 : -1;
    
    return team;
}

export default guess;