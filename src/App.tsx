import './App.css';
import { BookmarkForm } from './components/BookmarkForm';
import { BookmarkList } from './components/BookmarkList';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
     <Header headerTitle='Bookmark'/>
     <BookmarkForm/>
     <BookmarkList/>
    </div>
  );
}

export default App;
