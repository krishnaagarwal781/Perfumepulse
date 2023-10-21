import { createContext, useRef, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [subscriptionMonth, setSubscriptionMonth] = useState(1);
  const totalPrice = [555, 1039, 1479, 1939];
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 32;
  const footerRef1 = useRef(null);
  const footerRef2 = useRef(null);

  const calculateTotalPrice = () => {
    let total = 0;

    cartProducts.forEach((p) => {
      total += p.extra_price;
    });

    total += totalPrice[subscriptionMonth - 1];

    return total;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filteredData,
        setFilteredData,
        cartProducts,
        setCartProducts,
        subscriptionMonth,
        setSubscriptionMonth,
        calculateTotalPrice,
        totalPrice,
        displayData,
        setDisplayData,
        currentPage,
        setCurrentPage,
        perPage,
        footerRef1,
        footerRef2,
        selectedCategories,
        setSelectedCategories,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
