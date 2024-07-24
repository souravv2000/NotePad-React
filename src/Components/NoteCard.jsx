import '../Components/NoteCard.css'

function NoteCard({
    title,
    setIndex,
    idx,
    deleteNotes
}){
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div>
            <div className='EnterNotes'>
                <h3 onClick={()=> {setIndex(idx)}}>{title.substr(0,20)}...</h3>
                <i onClick={()=>{deleteNotes(idx)}} class="fa-solid fa-trash"></i>
            </div>
        </div>
        </>
    )
}
export default NoteCard;