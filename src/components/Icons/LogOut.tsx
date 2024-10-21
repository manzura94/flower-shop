import Image from '@/node_modules/next/image';
import logOut from '@/public/icons/Logout.svg';

const LogoutIcon = () => (
  <div>
    <Image src={logOut} width={20} height={20} alt="Logout icon" />
  </div>
);

export default LogoutIcon;
