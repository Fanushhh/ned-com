'use client';
import React from "react";
import Link from "next/link"
import styles from './Navbar.module.css';
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function NavBar(){
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();
    
    function handleClick(){
        setIsOpen(false);
    }
    return (
        <header className={styles.navWrapper}>
            <nav className={styles.navbar}>
            <div>
                <Link className={styles.logoImg} href="/"><Image width={42} height={42} src="https://thumb.rebs-site-builder.com/2m6EVTleiOuooyFw3eegPVwE3bHzOfkADcdNtiL7CYM/fit/240/100/ce/0/aHR0cHM6Ly9tZWRp/YS5jcm1yZWJzLmNv/bS9hZ2VuY2llcy9u/ZWRjb20vbG9nby8x/NzQxYjU1ZS1jNjM3/LTQyZmQtOGUzMC03/OWI5YTc1NTY3ZWYv/aW1hZ2VlZGl0XzFf/MzI4OTU2MTExOC5w/bmc.webp" alt="Ned Com logo image" /></Link>
            </div>
            <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
                
                {isOpen ? <Image className={styles.menuIcon} src='/close-menu-icon.jpg' alt="Menu icon" width={50} height={35} /> : 'Meniu'}
            </button>
            
                <ul  className={isOpen ? styles.open : styles.closed}>
                    <li><Link onClick={handleClick} href={pathname.includes('pages') ? 'proprietati' : 'pages/proprietati'}>Proprietati</Link></li>
                    <li><Link onClick={handleClick} href="/vinde-cu-noi">Vinde cu noi</Link></li>
                    <li><Link onClick={handleClick} href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}