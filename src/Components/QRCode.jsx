/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import QRCodeLib from 'qrcode';

function QRCode({ url, currentColors, onImageLoad }) {
    const [dataUrl, setDataUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        QRCodeLib.toDataURL(url, {
            width: 200,
            margin: 2,
            color: {
                dark: currentColors.text,
                light: currentColors.background,
            },
        })
            .then((result) => {
                if (!cancelled) setDataUrl(result);
            })
            .catch((err) => {
                if (!cancelled) setError(err.message);
            });
        return () => { cancelled = true; };
    }, [url, currentColors.text, currentColors.background]);

    if (error) {
        return <p style={{ color: currentColors.command }}>Failed to generate QR code: {error}</p>;
    }

    if (!dataUrl) {
        return <p style={{ color: currentColors.text, opacity: 0.6 }}>Generating QR code...</p>;
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px',
        }}>
            <img
                src={dataUrl}
                alt={`QR code for ${url}`}
                onLoad={() => onImageLoad && onImageLoad()}
                style={{
                    display: 'block',
                    maxWidth: '200px',
                    borderRadius: '8px',
                    padding: '12px',
                    backgroundColor: currentColors.background,
                    border: `2px solid ${currentColors.border}`,
                }}
            />
            <p style={{
                marginTop: '8px',
                fontSize: '12px',
                color: currentColors.link,
                wordBreak: 'break-all',
                textAlign: 'center',
                maxWidth: '220px',
            }}>
                {url}
            </p>
        </div>
    );
}

export default QRCode;
