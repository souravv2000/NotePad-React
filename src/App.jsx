import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NoteCard from './Components/NoteCard'
import MarkdownEditor from '@uiw/react-markdown-editor';

function App() {
  const [notes, setNotes] = useState([]);
  const [index, setIndex] = useState(null);
  
function addNotes(){
  const newNote = {
    title:"#Enter the title",
    desc: "# Enter title here",
  };
  setNotes([...notes, newNote]);
};

function deleteNotes(idx){
 let newArray = notes.filter((note,index)=>
     index !== idx
)
 if(newArray.length === 0){
  setIndex(null);
 }
 setNotes(newArray);
}
  return (
    <>
    {notes.length>0 ?
      <div className='notepad'>
         <div className='left'>
          <div className='enterBtn'>
            <h1 >Notes</h1>
          <button onClick={addNotes}>+</button>
          </div>
         {notes.map((item, idx) => {
          return (
            <NoteCard 
            title={item.title}
            setIndex={setIndex}
            idx={idx}
            deleteNotes={deleteNotes}
            />
          );    
          })}
         </div>
         
         <div className='right'>
          {index != null ?(
           <MarkdownEditor style={{height:"100vh", width:"78.5rem"}}
           value={notes[index].desc}
      onChange={(value, viewUpdate) => {
             let newValue = value;
             let copyNote = [...notes];
             copyNote[index].desc = newValue;
             copyNote[index].title= newValue.split('\n')[0];
           
             setNotes(copyNote);
      }}
           />
          ):(
            <h2 style={{width:"78.5rem",
              height:"100vh", 
              display:"flex", 
              justifyContent:"center"
              , alignItems:"center"
            }}>Please Select a note !!!</h2>
          )
          }
         </div>
      </div>
      :
        <div className='no_notes'>
           <h1>You have no notes</h1>
           <button className='firstNote' onClick={addNotes}>Create one now</button>
        </div>
        }
    </>
  )
}

export default App
