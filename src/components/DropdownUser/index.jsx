import styled from "styled-components";
import { useAuth, useTheme } from "../../utils/hooks";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../utils/styles/colors";

const DropdownOverlay = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 2600;
    background-color: transparent;
`;

const DropdownContainer = styled.div`
    position: absolute;
    top: 65px;
    right: 100px;
    background-color: ${({ isDarkMode }) => isDarkMode ? colors.backgroundCard : colors.backgroundLight};
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    min-width: 200px;
    z-index: 2601; // ⬅️ Au-dessus de l'overlay
    overflow: hidden;

    @media (max-width: 768px) {
        right: 10px;
        min-width: 180px;
    }
`;

const DropdownList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 8px 0;
    color: ${({ isDarkMode }) => isDarkMode ? colors.white : colors.slate900};
`;

const DropdownItem = styled.li`
    padding: 12px 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 15px;

    &:hover {
        background-color: ${({ isDarkMode }) => isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f3f4f6'};
    }

    /* Style pour le username (premier élément) */
    &:first-child {
        font-weight: 600;
        color: ${({ isDarkMode }) => isDarkMode ? colors.white : colors.slate900};
        border-bottom: 1px solid #e5e7eb;
        cursor: default;
        
        &:hover {
            background-color: transparent; // ⬅️ Pas de hover sur le username
        }
    }

    /* Style pour le bouton de déconnexion (dernier élément) */
    &:last-child {
        color: #dc2626;
        border-top: 1px solid #e5e7eb;
        
        &:hover {
            background-color: #fef2f2;
            color: #b91c1c; // ⬅️ Rouge plus foncé au hover
        }
    }

    /* Style pour les items désactivés */
    &.disabled {
        opacity: 0.5;
        cursor: not-allowed;
        
        &:hover {
            background-color: transparent; // ⬅️ Pas de hover sur les items désactivés
        }
    }

    @media (max-width: 768px) {
        padding: 10px 16px;
        font-size: 14px;
    }
`;

function DropdownUser({ opendropdownUser, setOpenDropdownUser }) {
    const { user, logout } = useAuth();
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const { theme } = useTheme();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdownUser(false);
            }
        };

        if (opendropdownUser) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [opendropdownUser, setOpenDropdownUser]);

    const handleDisconnect = () => {
        logout();
        setOpenDropdownUser(false);
        navigate('/');
    };

    const handleNavigate = (path) => {
        navigate(path);
        setOpenDropdownUser(false); // ⬅️ Fermer le dropdown après navigation
    };

    if (!opendropdownUser) {
        return null;
    }

    const username = user?.username || 'Utilisateur'; // ⬅️ Valeur par défaut

    return (
        <>
            <DropdownOverlay onClick={() => setOpenDropdownUser(false)} />
            <DropdownContainer isDarkMode={theme === 'dark'} ref={dropdownRef}>
                <DropdownList isDarkMode={theme === 'dark'}>
                    <DropdownItem isDarkMode={theme === 'dark'}>
                        {username}
                    </DropdownItem>

                    <DropdownItem
                        isDarkMode={theme === 'dark'}
                        onClick={() => handleNavigate('/Accueil')}
                    >
                        Ecole
                    </DropdownItem>

                    <DropdownItem
                        isDarkMode={theme === 'dark'}
                        className="disabled"
                    >
                        Comparateur
                    </DropdownItem>

                    <DropdownItem
                        isDarkMode={theme === 'dark'}
                        className="disabled"
                    >
                        Ajouter un avis
                    </DropdownItem>

                    <DropdownItem
                        isDarkMode={theme === 'dark'}
                        onClick={handleDisconnect}
                    >
                        Se déconnecter
                    </DropdownItem>
                </DropdownList>
            </DropdownContainer>
        </>
    );
}

export default DropdownUser;