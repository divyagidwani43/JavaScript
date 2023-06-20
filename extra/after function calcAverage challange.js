const calcAverage = (score1, score2, score3) => {
    let average = (score1 + score2 + score3) / 3;
    return average;
}
const scoreDolphins = calcAverage();
const scoreKoalas = calcAverage();

const checkWinner = (scoreDolphins, scoreKoalas) => {
    if (scoreDolphins > 2 * scoreKoalas) console.log(`dolphins win ( ${scoreDolphins} vs ${scoreKoalas})`);
    else if (scoreKoalas > 2 * scoreDolphins) console.log(`koalas win ( ${scoreKoalas} vs ${scoreDolphins} )`);
    else console.log('no team wins');
}
checkWinner()