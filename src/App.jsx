import { Suspense } from 'react'
import Preloader from './components/common/preloader/Preloader'
import SearchContainer from './components/Search/SearchContainer'
import NewsContainer from './components/News/NewsContainer'
import PopupContainer from './components/common/popup/PopupContainer'
import './App.css'

function App(props) {
  return (
    <div className="App">
      <PopupContainer />
      <SearchContainer />
      <Suspense fallback={<Preloader />}>
        <div className="content">
          <h2>...The news are almost here, it remains to press the button</h2>
          <NewsContainer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
