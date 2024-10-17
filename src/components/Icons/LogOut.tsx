import Image from '@/node_modules/next/image';
import logOut from '../../../public/Logout.svg';

const LogoutIcon = () => (
  // <svg width="24" height="24" viewBox="0 0 24 24">

  <div>
    <Image src={logOut} width={20} height={20} alt="Logout icon" />
  </div>
);

export default LogoutIcon;
