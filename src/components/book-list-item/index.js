import React from 'react';
import {Link} from 'react-router-dom';

const BookListItem = ({book}) => {
  const {title, author, price, cover} = book;

  return (
      <div className="card col book-list-item">
        <img className="card-img-top pt-3" src={cover} alt={title}/>
        <div className="card-body text-nowrap text-truncate">
          <Link to="/" className="card-title text-info"><h5>{title}</h5></Link>
          <div className="row">
            <div className="col-9">
              <p className="card-text">{author}</p>
              <h5>Q{price}</h5>
            </div>
            <div className="col-3">
              <button className="btn btn-info">
                <i className="fa fa-plus fa-3x text-light"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
};

export default BookListItem
