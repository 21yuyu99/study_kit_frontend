import styles from "./bottomNavigation.module.scss";
import { GrHomeRounded } from 'react-icons/Gr';
import { GiOpenBook } from 'react-icons/Gi';
import { FaRegUser } from 'react-icons/Fa';


const BottomNavigation = ()=>{
  return(
    <nav className={styles.bottomNavigation}>
      <div className={styles.left}><GrHomeRounded size={20}/>
        <div className={styles.leftText}>홈</div>
      </div>
      <div className={styles.center}><GiOpenBook size={25} color="#0091FF"/>
        <div className={styles.centerText}>새 스터디</div>
      </div>
      <div className={styles.right}><FaRegUser size={20}/>
        <div className={styles.rightText}>마이페이지</div>
      </div>
    </nav>
  )
}
export default BottomNavigation;