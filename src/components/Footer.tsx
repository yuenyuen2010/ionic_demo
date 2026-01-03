import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="luminous-footer">
            <div className="footer-content">
                <div className="footer-copyright">
                    © {year} {t('common.appTitle')}
                </div>
                <div className="footer-version">
                    v1.2.0 • 2025 Optimized
                </div>
            </div>
        </footer>
    );
};

export default Footer;
