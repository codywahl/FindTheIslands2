var islands = [[0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 0]];
var islandCount = 0;
for (var i = 0; i < islands.length; i++) {
    var currentCollection = islands[i];
    var currentRow = "";
    for (var j = 0; j < currentCollection.length; j++) {
        currentRow = currentRow + " " + currentCollection[j];
        if (checkIfTopLeftOfIsland(i, j)) {
            islandCount++;
        }
    }
    console.log(currentRow);
}
console.log("Island count: " + islandCount);
function isAnIsland(x, y) {
    return islands[x][y] === 1;
}
function checkIfTopLeftOfIsland(x, y) {
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
        var islandAbove = isAnIsland(x, y - 1);
        if (islandAbove) {
            return false;
        }
    }
    // Check if there is an island left
    if (x > 0) {
        var islandLeft = isAnIsland(x - 1, y);
        if (islandLeft) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=app.js.map