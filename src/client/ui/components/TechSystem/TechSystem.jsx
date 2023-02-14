import cn from 'classnames';

import logoImg from '@client/assets/logo.png';
import postgreSQL from '@client/assets/logo/PostgreSQL.svg';
import mongoDB from '@client/assets/logo/MongoDB.svg';
import mySQL from '@client/assets/logo/MySQL.svg';
import phpLogo from '@client/assets/logo/php.png';
import pythonLogo from '@client/assets/logo/python.png';
import reactLogo from '@client/assets/logo/react.svg';
import angularLogo from '@client/assets/logo/angular.svg';
import vueLogo from '@client/assets/logo/vue.svg';
import magentoLogo from '@client/assets/logo/magento.svg';
import figmaLogo from '@client/assets/logo/figma.svg';
import styles from './TechSystem.module.scss';

const TechSystem = () => {
  return (
    // <ul className={styles.techSystem}>
    //   <li className={styles.sun}>
    //     <a href='#sun'>
    //       <span>
    //         <img className={styles.star} src={logoImg}></img>
    //       </span>
    //     </a>
    //   </li>
    //   </ul>
    <div className={styles.techSystem}>
      <img className={styles.star} src={logoImg}></img>

      <div className={styles.orbitDatabase}></div>
      <div className={styles.planets}>
        <img className={styles.mongoDB} src={mongoDB}></img>

        <img className={styles.postgreSQL} src={postgreSQL}></img>
        <img className={styles.mySQL} src={mySQL}></img>
      </div>

      <div className={styles.orbitApi}></div>
      <div className={styles.planets}>
        <img className={styles.python} src={pythonLogo}></img>
        <img className={styles.php} src={phpLogo}></img>
      </div>

      <div className={styles.orbitFrontend}></div>
      <div className={cn(styles.planets, styles.earthSpin)}>
        <img className={styles.react} src={reactLogo}></img>
        <img className={styles.vue} src={vueLogo}></img>
        <img className={styles.magento} src={magentoLogo}></img>
        <img className={styles.angular} src={angularLogo}></img>
      </div>

      <div className={styles.orbitDesign}></div>
      <div className={cn(styles.planets, styles.marsSpin)}>
        <img className={styles.figma} src={figmaLogo}></img>
      </div>
    </div>
  );
};

export default TechSystem;
