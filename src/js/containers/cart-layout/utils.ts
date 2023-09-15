export const formatCartItems = (cartItems) => {
  const updatedCartItems = cartItems.map((cartItem) => ({
    ...cartItem,
    quantity: 1
  }));

  return updatedCartItems;
}