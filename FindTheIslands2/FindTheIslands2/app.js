var islands = [[0, 1, 1],
    [1, 0, 1],
    [1, 0, 0]];
var islandCount = 0;
console.log(checkIfTopLeftOfIsland(1, 2));
for (var i = 0; i < islands.length; i++) {
    var currentCollection = islands[i];
    var currentRow = '';
    for (var j = 0; j < currentCollection.length; j++) {
        currentRow = currentRow + " " + currentCollection[j];
    }
    console.log(currentRow);
}
function checkIfTopLeftOfIsland(x, y) {
    return x + y;
}
//# sourceMappingURL=app.js.map