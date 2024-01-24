import { Link } from "react-router-dom";
import styles from '../Styles/EditProfile.module.css';
import { useContext } from "react";
import AvatarContext from './AvatarContext';


function EditProfile() {

    const { setSelectedAvatar } = useContext(AvatarContext);

    const selectAvatar = (avatar) => {
        if (window.confirm("Do you want to set this as your new avatar?")) {
            setSelectedAvatar(avatar);
        }



    };


    return (
        <div className={styles.profileBackground}>
            <div className={styles.epSideMenu}><Link className={styles.profileLinks} to={'/Chat'}>Chat</Link></div>
            <div className={styles.avatarCard}>
                <div className={styles.title}>
                    <p>Select New Avatar</p>
                </div>
                <div className={styles.avatarImgs}>
                    <img onClick={() => selectAvatar('/Avatars/coffeeBrewers.jpg')} src="/Avatars/coffeeBrewers.jpg" alt="Coffee Brewer" />
                    <img onClick={() => selectAvatar('/Avatars/coffeeBrewers2.jpg')} src="/Avatars/coffeeBrewers2.jpg" alt="Coffee Brewer" />
                    <img onClick={() => selectAvatar('/Avatars/coffeeMaker1.jpg')} src="/Avatars/coffeeMaker1.jpg" alt="Coffee Brewer" />
                    <img onClick={() => selectAvatar('/Avatars/coffeeMaker2.jpg')} src="/Avatars/coffeeMaker2.jpg" alt="Coffee Brewer" />
                    <img onClick={() => selectAvatar('/Avatars/coffeeMaker3.jpg')} src="/Avatars/coffeeMaker3.jpg" alt="Coffee Brewer" />
                </div>

            </div>


        </div>
    )
}

export default EditProfile;