import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import SelectBook from './reducer_select_book'


const rootReducer = combineReducers({
    books: BooksReducer,
    selectBook :SelectBook
});

export default rootReducer;
