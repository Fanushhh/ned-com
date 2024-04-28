
import Gallery from '@/app/components/Gallery/Gallery';
import styles from './page.module.css';

import { getProperty } from "@/app/lib/properties";


export default async function Page({params}){
    const property = await getProperty(params.slug);
    
    return(
        <main className={styles.propertyPage}>
            <section>
                <div className={styles.pageHeader}>
                    <h1>{property.title}</h1>
                    <p>ID CP{property.id} </p>
                </div>
                <div className={styles.propertyDetails}>
                <p className={styles.price}>{property.price_sale} €</p>
                <div>
                    <span>{property.zone ? property.zone + ',' : ''} {property.region} </span>
                    <span>{property.surface_useable ? property.surface_useable : property.surface_land}mp </span>
                    <span>{property.building_construction_year}</span>
                </div>
                </div>
            </section>
            <Gallery images={property.resized_images} bigImages={property.full_images} />
        </main>
    )
}