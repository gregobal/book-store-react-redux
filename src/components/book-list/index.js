import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {booksLoaded} from '../../actions';
import compose from '../../utils';

class BookList extends Component {

  componentDidMount() {
    const {bookstoreService} = this.props;
    bookstoreService.getBooks()
      .then(data => this.props.booksLoaded(data))
      .catch(console.error);
  }

  render() {
    const {books} = this.props;

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

const mapStateToProps = ({books}) => {
    return {
      books
    }
};

const mapDispatchToProps = {booksLoaded};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(BookList)
