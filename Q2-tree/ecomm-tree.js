import fetch from "node-fetch";

async function fetchCategories() {
    try {
        const res = await fetch("http://localhost:8080/categories"); // response
        const data = await res.json(); 
        console.log(JSON.stringify(data, null, 4)); 
        // stringify the json that's returned with 4 space indentation
    } catch (err) {
        console.error("Code 500: Error fetching data");
        console.error(err);
        // if there is a problem getting the data from there, there is a server error
    }
}

fetchCategories();