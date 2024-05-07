import styles from './Facilities.module.css';

export const Facilities = ({facilities}) => {
    return (
        <section className={styles.facilitiesWrapper}>
        <h2>Facilitati:</h2>
        <div className={styles.facilitiesContainer}>
            {facilities.map((facility, index) => (
                <p key={index}>
                    {facility}
                </p>
            ))}
        </div>
      </section>
        
    )
}