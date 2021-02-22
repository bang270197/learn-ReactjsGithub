import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import Album from './features/Album/components/Album';
import AlbumFeature from './features/Album';
import Counter from './components/Counter';
import ColorBox from './components/ColorBox';
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
function getGreeting(user){
  if(user){
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}
const user = {
  firstnName: 'Harper',
  lastName: 'Perez'
}





function App() {
  const name = "bang"
   const age = 18;
   const isFemale = true;
   const student = {
     name:"nguyen ngoc bang"
   };
   const colorList = ['red','green','blue'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Xin chao {name}-{age} {isFemale} - {isFemale ? 'Male' : 'Female'}</p> 
         {isFemale ? <p>Male</p> : <p>Female</p>}  
         {isFemale && <p>Male</p>}  
         {!isFemale && <p>Female</p>}
         {isFemale && (
           <div>
             <p>Female</p>
             <p>Female</p>
             <p>Female</p>
           </div>
         )}
          {isFemale && (
           <>
             <p>Female</p>
             <p>Female</p>
             <p>Female</p>
           </>
         )}
         <p>{student.name}</p>

         <ul>
           {colorList.map(color =>
             <li key={Math.random().toString(36).substr(2, 9)} style={{color}}>{color}</li>
           )}
         </ul>
         <TodoFeature />
         <AlbumFeature/>
         <Counter />
         <ColorBox/>
      </header>
    </div>
  );
}

export default App;
