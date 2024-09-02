import React, { useEffect, useState } from "react";
import { formatearNumero } from "../helpers/format";

const Pizza = () => {
  const [pizza, setPizza] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await res.json();

      setPizza(data);
    };

    getData();
  }, []);

  const capPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <div className="d-flex m-5 gap-4">
        <div className="img">
          <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        </div>
        <div className="d-flex flex-column gap-2">
          <h5 className="titulo fs-1">{capPrimeraLetra(pizza.name)}</h5>
          <p className="descripcion" style={{ width: "600px" }}>
            {pizza.desc}
          </p>

          <hr />

          <div className="descPizza">
            <div>
              <p>Ingredientes</p>
              <ul className="ingredientes">
                {pizza.ingredients && pizza.ingredients.map((ingredient, id) => (
                    <li key={id}>{capPrimeraLetra(ingredient)}</li>
                  ))}
              </ul>
            </div>
            <h5 className="pricePizza">Precio ${formatearNumero(pizza.price)}</h5>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Pizza;