import cn from 'classnames';
import { FaSun, FaRegMoon } from 'react-icons/fa';
import styles from './Toggle.module.scss';
const Toggle = ({ className }) => {
  return (
    <label className={cn(styles.toggle, className)}>
      <input id='them' type='checkbox' />
      <span>
        <span className={styles.track}>
          <span className={styles.trackInner}></span>
          <span className={styles.trackKnob}>
            <FaSun className={styles.inactive} />
            <FaRegMoon className={styles.active} />
          </span>
        </span>
      </span>
    </label>
  );
};

export default Toggle;
