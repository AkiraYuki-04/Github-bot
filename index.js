const moment = require("moment");
const simpleGit = require("simple-git");
const jsonfile = require("jsonfile");

const path = "./data.json";

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const markCommit = (x, y) => {
    // Base date set to January 1, 2023
    const date = moment("2023-01-01")
        .add(x, "w")
        .add(y, "d")
        .format();

    const data = {
        date: date,
    };

    jsonfile.writeFile(path, data, () => {
        simpleGit().add([path]).commit(date, { "--date": date }).push();
    });
};

const makeCommits = (n) => {
    if (n === 0) return simpleGit().push();

    const x = getRandomInt(0, 52); // 52 weeks in a year
    const y = getRandomInt(0, 6); // 7 days in a week
    const date = moment("2023-01-01").add(x, "w").add(y, "d").format();

    const data = {
        date: date,
    };

    console.log(date);

    jsonfile.writeFile(path, data, () => {
        simpleGit().add([path]).commit(date, { "--date": date }, makeCommits.bind(this, --n));
    });
};

// Generate commits for the year 2023
makeCommits(50);
