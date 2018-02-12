import classnames from 'classnames';
import theme from 'reapop-theme-wybo';
import styles from './styles.css';

export default {
  ...theme,
  notificationsSystem: {
    className: classnames(theme.notificationsSystem.className, styles.system, styles['system-important']),
  },
  notification: {
    className: {
      ...theme.notification.className,
      main: styles.main,
      meta: styles.meta,
      status(status) {
        return styles[`notification--${status}`];
      },
      icon: styles.icon,
      imageContainer: styles['image-container'],
      image: styles.image,
      buttons(count) {
        if (count === 0) {
          return '';
        } else if (count === 1) {
          return styles['buttons-1'];
        } else if (count === 2) {
          return styles['buttons-2'];
        }
        return styles.buttons;
      },
      button: styles.button,
      message: styles.message,
      title: styles.title,
      closeButtonContainer: styles['close-button-container'],
      closeButton: `k-icon k-font-icon k-i-x close ${styles['close-button']}`,
    },
  },
  notificationsContainer: {
    ...theme.notificationsContainer,
    className: {
      ...theme.notificationsContainer.className,
      position(_position) {
        const inherited = theme.notificationsContainer.className.position(_position);
        return classnames(inherited, styles[`container-${_position}`]);
      },
    },
  },
};
