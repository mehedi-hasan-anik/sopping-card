import { useEffect, useState } from "react";
import "./App.css";
import productsData from "./data/productData.json";

const App = () => {
  // const { selectedProduct } = useSelector((state) => state.busLists);
  // const dispatch = useDispatch();
  // dispatch(addToCard([...selectedProduct, product]));
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [sum, setSum] = useState(0);
  console.log("selectedProduct", selectedProduct);

  const handleProductAdd = (product) => {
    const productList = [...selectedProduct];
    if (!productList.includes(product)) {
      productList.push(product);
    }
    const index = productList.indexOf(product);
    if (productList[index].qty < productList[index].max) {
      productList[index].qty++;
      setSelectedProduct(productList);
    }
  };

  const changeQuantity = (item, e) => {
    const productList = [...selectedProduct];
    const index = productList.indexOf(item);
    if (e === "+") {
      productList[index].qty++;
    } else {
      if (productList[index].qty > 1) {
        productList[index].qty--;
      } else {
        productList.splice(index, 1);
      }
    }
    setSelectedProduct(productList);
  };

  useEffect(() => {
    let total = 0;
    for (var i = 0; i < selectedProduct.length; i++) {
      total +=
        Number(selectedProduct[i].price) * Number(selectedProduct[i].qty);
    }
    setSum(total);
  }, [selectedProduct]);

  return (
    <div className="App">
      <div className="homePage">
        <div className="products">
          {productsData?.map((product) => (
            <div className="singleProduct">
              <h4>{product?.name}</h4>
              <p>Price:{product?.price}</p>
              <button onClick={() => handleProductAdd(product)}>
                Add to Card
              </button>
            </div>
          ))}
        </div>
        <div className="selectedProducts">
          <h3>selected products</h3>
          {selectedProduct?.map((product) => (
            <div className="product">
              <h4>{product?.name}</h4>
              <p>Price:{product?.price}</p>
              <button
                className="quantity-btn"
                onClick={() => changeQuantity(product, "-")}
              >
                -
              </button>
              <input type="text" value={product?.qty} />
              <button
                className="quantity-btn"
                onClick={() => changeQuantity(product, "+")}
              >
                +
              </button>
            </div>
          ))}
        </div>
        <div className="productsTotal">
          <h3>selected products total:{Number(sum)}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
