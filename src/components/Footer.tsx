import Link from "next/link"
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-body-tertiary text-center">
            {/* Grid container  */}
            <div className="container p-4 pb-0">
                {/* Section: Social media  */}
                <section className="mb-4">
                    {/* Facebook  */}
                    <Link
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#3b5998', }}
                        href="https://www.facebook.com/tintrung1506"
                        role="button"
                    ><i className="bi bi-facebook"></i></Link>

                    {/* Linkedin  */}
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#0082ca' }}
                        href="https://www.linkedin.com/in/huynh-trung-tin-952541251/"
                        role="button"
                    ><i className="bi bi-linkedin"></i></a>
                </section>
                {/* Section: Social media  */}
            </div>
            {/* Grid container  */}

            {/* Copyright  */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright:
                <a className="text-body" href="https://website-advertisement.vercel.app/">COFETIME.vercel.app</a>
            </div>
            {/* Copyright  */}
        </footer >
    )
}

