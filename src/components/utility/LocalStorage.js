const getListedBook=()=>{
    const selectedBook=localStorage.getItem('books');
    if(selectedBook){
        return JSON.parse(selectedBook);
    }
    else return []
}
const setListedBook=(id)=>{
    const selectedBook=getListedBook();
    const exists=selectedBook.find(book=>book ===id);
    if(!exists){
        selectedBook.push(id);
       localStorage.setItem('books',JSON.stringify(selectedBook)) 
    }
}
export{
    setListedBook,getListedBook
}