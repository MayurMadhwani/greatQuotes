import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Route, Routes, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments.js'
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http.js';
import {getSingleQuote} from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {

  const params = useParams();
  const {quoteId} = params;
  const {sendRequest, status, data:loadedQuote, error} = useHttp(getSingleQuote, true);

  useEffect(()=>{
    sendRequest(quoteId);
  },[sendRequest, quoteId])

  if(status === 'pending'){
    return <div className="centered">
      <LoadingSpinner/>
    </div>
  }

  if(error){
    return <p className="centered">
      {error}
    </p>
  }

  if(!loadedQuote.text){
    return <p>No Quote Found</p>
  }

  return (
    <>
      <HighlightedQuote text = {loadedQuote.text} author = {loadedQuote.author}/>
      
      <Routes>
        <Route
          path=''
          element={
            <div className="centered">
              <Link className='btn--flat' to='comments'>Load Comments</Link>
            </div>
          }
        />
        <Route
            path={`comments`}
            element={<Comments/>}
        />
      </Routes>
    </>
  )
}

export default QuoteDetail