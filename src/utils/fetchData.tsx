
const fetchData = async () =>{
 try {
    const reponse = await fetch('../data/csvjson.json');
    const data = reponse.json();
    return data;
 } catch (error) {
    console.log(error);
 }
}

export {fetchData};