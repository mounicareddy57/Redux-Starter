export function selectBook(book)
{
   return {
       type : 'BOOK_SELECTED',
       load: book
   }
}