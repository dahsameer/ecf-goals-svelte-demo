import { useState, useEffect } from 'react'
import { Post } from './Post'
import './App.css'

function App() {
  const [post, setPost] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = () => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(resp => resp.json())
    .then((data: Array<Post>) => setPost(data) )
    .finally(() => {
      setIsLoading(false);
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{isLoading? "Loading" : ""}</p>
        <ul>
          { post.map((x: Post) => <li>{x.title}</li>) }
        </ul>
      </header>
    </div>
  )
}

export default App
