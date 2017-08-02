let islands = [[0, 1, 1],
               [1, 0, 1], 
               [1, 0, 0]];

let islandCount = 0;

for (let i = 0; i < islands.length; i++) {
    let currentCollection = islands[i];
    let currentRow = '';

    for (let j = 0; j < currentCollection.length; j++) {
        currentRow = currentRow + " " + currentCollection[j];
    }

    console.log(currentRow);
}

function isAnIsland(x: number, y: number) {
    return islands[x][y] == 1;
}

function checkIfTopLeftOfIsland(x: number, y: number) {
    let isTopLeftOfIsland = false;
    let isLeftOfIsland = false;
    let isTopOfIsland = false;

    if (isAnIsland(x, y) && x === 0 && y === 0) {
        return true;
    }

    if (x != 0 && y != 0) {

    }

    if (islandCount[x][y])
    return islands[x][y] == 1 &&
           
}