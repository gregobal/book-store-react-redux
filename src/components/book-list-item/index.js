import React from 'react';

const BookListItem = ({book}) => {
  const {title, author, price, cover} = book;

  return (
      <div className="card col book-list-item">
        <img className="card-img-top" src={cover} alt={title}/>
        <div className="card-body text-nowrap text-truncate">
          <h5><a href="/#" className="card-title">{title}</a></h5>
          <div className="row">
            <div className="col-9">
              <p className="card-text">{author}</p>
              <h6>Q {price}</h6>
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
