import { useState, useEffect } from 'react';
import './App.css';
import PocketBaseConnectionCreator from 'pocketbase';
const pb = new PocketBaseConnectionCreator('http://127.0.0.1:8090');
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const records = await pb.collection('Categories').getFullList();
        console.log(records);
        setData(records);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }
    getData()
  }, []);
  return (
    <>
      <h1>Expenss Manager</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Description</th>
            <th>Color</th>
            <th>Cost</th>

  
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr key={item.id}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.Cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default App;