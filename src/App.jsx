import './App.css'
import LinkCard from './cards/LinkCard'
import TopImage from './components/topImage/TopImage'
import { data } from './objectFiles/linksData'

function App() {

  return (
    <div className="App">
      <TopImage />
      <div className="gap">
      {data.map(items => {
        return (
          <LinkCard key={items.id} {...items} />
        )
      })}
      </div>
   ; </div>
  )
}

export default App
