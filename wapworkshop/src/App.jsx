import { useState ,useEffect} from 'react'
import PocketBaseConnectionCreator from 'pocketbase'
const pb=new PocketBaseConnectionCreator('http://127.0.0.1:8090')
function App() {

const [categories,setcategories]=useState([])
 useEffect(()=>{
  async function fetchData(){
    const records = await pb.collection('categories').getFullList()

    setcategories(records)
  }
  fetchData()
 },[])
 return (
  <>
    <h1>Categories</h1>
    <ul>
      {categories.map((cat) => (
        <li key={cat.id}>{cat.name}</li>
      ))}
    </ul>
  </>
)

}

export default App
