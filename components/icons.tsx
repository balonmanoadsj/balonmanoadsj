import React from 'react';

const iconProps = {
    className: "w-6 h-6",
    fill: "currentColor"
};

export const InstagramIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.17 0-3.524.012-4.755.068-2.68.122-3.868 1.31-3.99 3.99-.056 1.23-.067 1.583-.067 4.755s.011 3.524.067 4.755c.122 2.68 1.31 3.868 3.99 3.99 1.23.056 1.583.067 4.755.067s3.524-.011 4.755-.067c2.68-.122 3.868-1.31 3.99-3.99.056-1.23.067-1.583.067-4.755s-.011-3.524-.067-4.755c-.122-2.68-1.31-3.868-3.99-3.99-1.23-.056-1.583-.068-4.755-.068zm0 3.446c-2.404 0-4.36 1.956-4.36 4.36s1.956 4.36 4.36 4.36 4.36-1.956 4.36-4.36-1.956-4.36-4.36-4.36zm0 7.162c-1.548 0-2.802-1.254-2.802-2.802s1.254-2.802 2.802-2.802 2.802 1.254 2.802 2.802-1.254 2.802-2.802 2.802zm4.908-7.72c-.63 0-1.14.51-1.14 1.14s.51 1.14 1.14 1.14c.63 0 1.14-.51 1.14-1.14s-.51-1.14-1.14-1.14z"/></svg>
);

export const FacebookIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>
);

export const MailIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-5 h-5 mr-3"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

export const LocationMarkerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-5 h-5 mr-3"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

export const XIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-8 h-8"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);

export const MenuIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
);