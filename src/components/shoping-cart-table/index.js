import React from 'react';
// import './header.css';

const ShopingCartTable = ({numItems, total}) => {
  return (
    <div className="pl-5">
      <h2>Ваш заказ:</h2>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Товар</th>
            <th className="text-right">Количество</th>
            <th className="text-right">Цена</th>
            <th className="text-right">Изменить</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Название</td>
            <td className="text-right">2</td>
            <td className="text-right">Q100</td>
            <td className="text-right">
              <button className="btn btn-outline-danger btn-sm ml-2">
                <i className="fa fa-trash-o"></i>
              </button>
              <button className="btn btn-outline-success btn-sm ml-2">
                <i className="fa fa-plus"></i>
              </button>
              <button className="btn btn-outline-warning btn-sm ml-2">
                <i className="fa fa-minus"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-right mr-3">Total: Q200</div>
      <hr/>
    </div>
  )
};

export default ShopingCartTable
