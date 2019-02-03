import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {booksLoaded, booksRequested, booksError} from '../../actions';
import compose from '../../utils';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {

  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError
    } = this.props;

    booksRequested();
    bookstoreService.getBooks()
      .then(booksLoaded)
      .catch(booksError);
  }

  render() {
    const {books, loading, error} = this.props;

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      // console.log(error)
      return <ErrorIndicator/>
    }

    return (
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-4 mt-3">
            <BookListItem book={book} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({books, loading, error}) => {
    return {
      books,
      loading,
      error
    }
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(BookList)
