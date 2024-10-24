import Image from '@/node_modules/next/image';
import shoppingcart from '@/public/icons/shopping-cart.svg';

const ShoppingCartIcon = () => (
  <div>
    <Image src={shoppingcart} width={29} height={24} alt="shopping-cart icon" />
  </div>
);

export default ShoppingCartIcon;