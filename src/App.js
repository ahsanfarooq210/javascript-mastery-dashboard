import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'


function App()
{
  const activeMenu = false

  return (
    <div className="App">
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4 ' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='Top' >
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: 'blue', borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white' >
            sidebar
          </div>) : (<div className='w-0 dark:bg-secondary-dark-bg ' >
            sidebar w-0
          </div>)}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'  >
            nav bar
          </div>
          </div>
          <div>
            <Routes>
            {/* dashboard */}
              <Route path='/' element='EComerace'/>
              <Route path='/ectomere' element='EComerace'/>
              {/* pages */}
              <Route path='/orders' element='orders' />
              <Route path='/employees' element='employees' />
              <Route path='/customers' element='customers' />

              {/* apps routes */}
              <Route path='/kanban' element='kanban' />
              <Route path='/editor' element='editor' />
              <Route path='/calender' element='calender' />
              <Route path='/color-picker' element='colorpicker' />

              {/* charts */}
              <Route path='/line' element='line' />
              <Route path='/area' element='area' /> 
              <Route path='/bar' element='bar' /> 
              <Route path='/pie' element='pie' /> 
              <Route path='/financial' element='financial' /> 
              <Route path='/color-mapping' element='color-mapping' /> 
              <Route path='/stacked' element='stacked' /> 
            </Routes>
          </div>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
