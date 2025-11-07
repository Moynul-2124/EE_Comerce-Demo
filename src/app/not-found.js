




import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "./globals.css"
const notfound = () => {



    const styles = {
        container: {
            textAlign: 'center',
            padding: '80px 20px',
            fontFamily: 'Arial, sans-serif',
        },
        image: {
            marginBottom: '30px',
        },
        title: {
            fontSize: '48px',
            marginBottom: '20px',
            color: '#ff4d4f',
        },
        message: {
            fontSize: '18px',
            marginBottom: '30px',
            color: '#555',
        },
        link: {
            fontSize: '16px',
            color: '#0070f3',
            textDecoration: 'underline',
        },
    };










    return (
        <div>
            <div className='flex  flex-col justify-center items-center' style={styles.container}>
                <Image
                    src="/BCO.e7c03574-67c7-475b-8486-5ea78cfe086b.png" // Replace with your actual image path
                    alt="Lost robot in a digital desert"
                    width={200}
                    height={300}
                    style={styles.image}
                />
                <h1 style={styles.title}>404 - Page Not Found</h1>
                <p style={styles.message}>
                    Oops! The page youre looking for doesnt exist or has been moved.
                </p>
                <Link href="/" style={styles.link}>
                    Go back home →
                </Link>
            </div>
        </div>
    );
};

export default notfound;