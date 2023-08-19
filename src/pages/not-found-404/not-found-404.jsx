
import styles from './not-found-404.module.css'
import notFoundImage from '../../images/istockphoto-1142986365-612x612.jpg';

function NotFound404() {

  return (
    <div className={styles.notFound}>
    <img src={notFoundImage} alt="Page Not Found" />
    <p>Oops! Page not found</p>
  </div>
  )

}

export default NotFound404;
