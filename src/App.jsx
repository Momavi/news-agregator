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
          <NewsContainer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
