/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { themeList } from '../data/themes';

function ThemePicker({ currentColors, onSelectTheme }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    return (
        <div ref={dropdownRef} style={{ position: 'relative', margin: '4px 4px' }}>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    padding: '10px 16px',
                    backgroundColor: currentColors.background,
                    color: currentColors.text,
                    border: `2px solid ${currentColors.border}`,
                    cursor: 'pointer',
                    fontSize: '16px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 12px ${currentColors.border}`;
                }}
                onMouseLeave={(e) => {
                    if (!open) e.currentTarget.style.boxShadow = 'none';
                }}
            >
                <span style={{
                    display: 'inline-block',
                    width: '16px',
                    height: '16px',
                    borderRadius: '3px',
                    background: `linear-gradient(135deg, ${currentColors.background} 30%, ${currentColors.command} 70%)`,
                    border: `1px solid ${currentColors.border}`,
                }} />
                Palettes
                <span style={{
                    fontSize: '10px',
                    transition: 'transform 0.3s ease',
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>&#9660;</span>
            </button>

            {open && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '8px',
                    backgroundColor: currentColors.codeblock,
                    border: `1px solid ${currentColors.border}`,
                    borderRadius: '8px',
                    padding: '12px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '8px',
                    zIndex: 1000,
                    minWidth: '280px',
                    boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${currentColors.border}33`,
                    animation: 'dropdownIn 0.2s ease-out',
                }}>
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @keyframes dropdownIn {
                            from { opacity: 0; transform: translateY(-8px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                    `}} />
                    {themeList.map((theme) => (
                        <button
                            key={theme.key}
                            onClick={() => {
                                onSelectTheme(theme);
                                setOpen(false);
                            }}
                            title={theme.name}
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '6px',
                                border: currentColors === theme ? `2px solid ${theme.command}` : `2px solid transparent`,
                                padding: '2px',
                                cursor: 'pointer',
                                backgroundColor: 'transparent',
                                transition: 'transform 0.15s ease, border-color 0.2s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.15)';
                                e.currentTarget.style.zIndex = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.zIndex = '0';
                            }}
                        >
                            <div style={{
                                flex: 1,
                                borderRadius: '4px',
                                background: `linear-gradient(180deg, ${theme.background} 0%, ${theme.codeblock} 40%, ${theme.command} 100%)`,
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                padding: '2px',
                            }}>
                                <span style={{
                                    fontSize: '8px',
                                    color: theme.text,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%',
                                    opacity: 0.9,
                                    textShadow: `0 1px 2px ${theme.background}`,
                                }}>
                                    {theme.name}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ThemePicker;
