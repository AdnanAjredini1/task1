
import Items from './components/Items'
import itemsData from './data'

function App() {
  

  return (
    <div className='main-div'>
          {itemsData.map(item => (
        <Items 
          key={item.id} 
          icon={item.icon} 
          title={item.title} 
          content={item.content} 
        />
      ))}

      {/* <Items title="Hello" content="Hello" icon="i"/> */}
    </div>
  )
}

export default App
