import React from "react";
import "./../styles/Prestations.css"; // Assurez-vous d'ajouter le fichier CSS approprié

function ServicesPage() {
    return (
        <div className="services-page">
            <section className="section">
                <h2>Développement Web</h2>
                <p>
                    Our team of experienced developers specializes in creating custom web solutions to meet the unique
                    needs of our clients. We begin with a thorough analysis of your goals and requirements, then design
                    and develop websites that combine aesthetic design with advanced functionality. Whether you need an
                    informative business website, an e-commerce platform, or a complex web application, we have the
                    necessary skills to bring your vision to life.
                </p>
            </section>
            <section className="section">
                <h2>Creation of Showcase Websites</h2>
                <p>
                    Our showcase website creation service aims to highlight your brand and captivate the attention of
                    your visitors. We create unique and attractive designs that reflect your company's identity. Using
                    user-centered design practices, we ensure that every element of the site is carefully crafted to
                    provide an exceptional user experience. From visual layout to typography, every detail is taken into
                    account. We believe that your showcase website should not only be beautiful but also functional and
                    user-friendly.
                </p>
            </section>
            <section className="section">
                <h2>Web Application Development</h2>
                <p>
                    Our talented developers are experts in creating custom web applications that cater to your
                    business's specific needs. We employ the latest technologies and best practices to develop robust
                    and scalable solutions. Whether you need a management application, a collaborative platform, or a
                    data tracking application, we can design a solution that enhances your operational efficiency. We
                    are committed to developing high-performing web applications that improve your productivity and
                    strengthen your online presence.
                </p>
            </section>
            <section className="section">
                <h2>E-commerce</h2>
                <p>
                    E-commerce is at the heart of many modern businesses. Our team has extensive experience in creating
                    successful e-commerce platforms that enable companies to sell online efficiently and securely. From
                    designing the online store to integrating payment and inventory management systems, we provide
                    comprehensive solutions for businesses looking to enter the world of online commerce. We prioritize
                    user-friendliness and security, ensuring a seamless shopping experience for your customers.
                </p>
            </section>
            <section className="section">
                <h2>Responsive Design</h2>
                <p>
                    Nowaday, access to information comes from a variety of devices, from smartphones to desktop
                    computers. That is why we design all of our websites with responsive design in mind. Using adaptive
                    design techniques, we ensure that your website adapts perfectly to all screen sizes and formats. Our
                    goal is to provide a consistent and enjoyable user experience, no matter the device being used.
                    Whether your visitors are browsing on their phone, tablet, or computer, your site will look great
                    and be easy to use.
                </p>
            </section>
        </div>
    );
}

export default ServicesPage;
