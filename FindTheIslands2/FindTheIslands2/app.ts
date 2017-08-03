var islands = [[0, 1, 1, 1, 1, 1],
               [1, 0, 0, 0, 1, 1], 
               [1, 0, 1, 1, 0, 0],
               [1, 0, 0, 1, 1, 0],
               [0, 1, 1, 0, 1, 0]];

let islandCount = 0;

for (let i = 0; i < islands.length; i++) {
    let currentCollection = islands[i];
    let currentRow = "";

    for (let j = 0; j < currentCollection.length; j++) {
        currentRow = currentRow + " " + currentCollection[j];

        if (checkIfTopLeftOfIsland(i, j)) {
            islandCount++;
        }
    }

    console.log(currentRow);
}

console.log(`Island count: ${islandCount}`);

function isAnIsland(x: number, y: number) {
    return islands[x][y] === 1;
}

function checkIfTopLeftOfIsland(x: number, y: number) {
    if (x < 0 || y < 0) {
        throw new TypeError("X and Y values must be greater than 0.");
    }

    if (!isAnIsland(x, y)) {
        return false;
    }

    if (x === 0 && y === 0) {
        return true;
    }

    // Check if there is an island above
    if (y > 0) {
        let islandAbove = isAnIsland(x, y - 1);

        if (islandAbove) {
            return false;
        }
    }

    // Check if there is an island left
    if (x > 0) {
        let islandLeft = isAnIsland(x - 1, y);

        if (islandLeft) {
            return false;
        }
    }

    return true;

}