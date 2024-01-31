import './App.css'
import { BookmarkForm } from './components/BookmarkForm'
import { BookmarkList } from './components/BookmarkList'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <div className="App">
      <div className="h-[90vh]">
        <Header headerTitle="Bookmark" />
        <BookmarkForm />
        <BookmarkList />
      </div>
      <div className="h-[10vh]">
        <Footer />
      </div>
    </div>
  )
}

export default App
