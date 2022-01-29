import './App.css';
import {useEffect, useState} from "react";

function App() {
    let data={'title':"Waiting For Data"};
    let [conData,setConData]=useState(data);

    useEffect(async () => {
        const url = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const fetchedData =await url.json();
        console.log(fetchedData);
        setConData(fetchedData);
    },[6]);
    // async function getData() {
    //     console.log("getData Function");
    //     const url = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     console.log("getData Function");
    //     console.log(url);
    //     const data = url.json();
    //     console.log(data);
    // }
    // getData();
    
    // async function postData() {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: "POST",
    //         body: JSON.stringify({
    //             title: 'My Info',
    //             body: 'DATAAA',
    //             userId: 4
    //         }),
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     });
    //     console.log(response);
    //     const data= await response.json();
    //     console.log(data);
    // }
    // postData();
    return (
        <div className="App">
            <h3>Title is {conData.title}</h3>
        </div>
    );
}

export default App;
