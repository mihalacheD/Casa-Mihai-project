import { FaPhoneAlt } from "react-icons/fa";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import '../styles/PhoneButton.scss';
import '../styles/variables.scss';


function PhoneButton(){
  return(
    <div>
    <FloatingWhatsApp
                phoneNumber="+40744124203"
                accountName="Casa Mihai"
                statusMessage="De obicei raspundem in mai putin de o ora"
                chatMessage="Bine ati venit pe site-ul Casa Mihai! Cu ce informatii va putem ajuta?"
                allowEsc
                allowClickAway
                notification
                notificationSound
                chatboxHeight={350}
     />
     <a className="btn-phone btn-phone-border" href="tel:+40744124203"><FaPhoneAlt size="25" /></a>
     </div>
  )
}
export default PhoneButton