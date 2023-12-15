import { toast } from 'react-toastify';
export const SHOPPING_LOGO = "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png";
export const USER_AVATAR = "https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg";
export const HAMBURGER_ICON = "file:///C:/Users/kruti/Downloads/menu_FILL0_wght400_GRAD0_opsz24.svg"

export const toastHandler = (type, message) => {
    const toastStyle = {
      position: 'bottom-left',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    //   toastId,
    };
  
    const toastFunc = toast[type];
  
    // toast function call
    toastFunc(message, toastStyle);
  };