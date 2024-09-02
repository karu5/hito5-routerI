import React from 'react';
import { formatearNumero } from '../helpers/format.jsx';

const Cart = ({ cartItems, onAdd, onRemove }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    
  <div className="cart">

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title">Mamma Mia</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} >
            <img src={item.img} alt={item.name} className="card-img-top" />
              <div>
                <h4>{item.name}</h4>
                <div className="cart-item-controls">
                  <button onClick={() => onRemove(item)} className='agregar'>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onAdd(item)} className='restar'>+</button>
                </div>
                <p>Precio: ${formatearNumero(item.price * item.quantity)}</p>
              </div>
            </div>
          ))}
          <h3>Total: ${formatearNumero(totalPrice)}</h3>
          <button className="btn add">
            Pagar
          </button>
        </div>
      )}
    </div>
    </div>
  </div>
</div>
  );
};

export default Cart;