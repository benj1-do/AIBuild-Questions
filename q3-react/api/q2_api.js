import fetch from "node-fetch";
// essentially copied over the file from q2 but modified to return the json
async function fetchCategories() {
    try {
        const res = await fetch("http://localhost:8080/categories"); // response
        return res.json();
        // console.log(JSON.stringify(data, null, 4)); 
    } catch (err) {
        console.error("Code 500: Error fetching data");
        console.error(err);
        // if there is a problem getting the data from there, there is a server error
    }
}