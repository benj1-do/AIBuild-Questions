import express from 'express';
import fs from 'fs';

const app = express();
const port = 8080;

function buildTree(categories) { // we will build the server from here
    const lut = {}; // lookup table with all of the nodes

    categories.forEach(cat => { // populates lookup table
        lut[cat.categoryId] = {
            "categoryId": cat.categoryId,
            "name": cat.name,
            "parent": cat.parent,
            "children": [] // keep empty since we will populate it later
        };
    });
    
    const root = { // initializes root
        categoryId: "root",
        name: "Root Category",
        parent: null,
        children: []
    };

    categories.forEach(cat => { // populating children
        const temp_node = lut[cat.categoryId];
        if (cat.parent === "root") {
            root.children.push(temp_node); // pushes to the root's list of children
        } else {
            lut[cat.parent].children.push(temp_node); // pushes to the parent's list of children
        }
    });

    return root; // returns the root node
}

app.get('/categories', (req, res) => {
    const raw_data = fs.readFileSync("./categories.json", "utf-8"); // grabs data from categories.json, with normal utf-8
    const import_data = JSON.parse(raw_data);
    const tree = buildTree(import_data);
    res.json(tree);
});

app.listen(port, function(err) {
    if (err) {
        console.log("Error in server startup");
    } else {
        console.log(`Server started on port ${port}`);
    }

});