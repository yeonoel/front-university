import styled from "styled-components";
import { useAuth } from "../../utils/hooks";
import { useEffect, useRef } from "react";

const DropdownOverlay = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: transparent;
`;

const DropdownContainer = styled.div`
    position: absolute;
    top: 70px;
    right: 100px;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    min-width: 200px;
    z-index: 1000;
    overflow: hidden;

    @media (max-width: 768px) {
        top: auto;
        bottom: 70px;
        right: 20px;
        min-width: 180px;
    }
`;

const DropdownList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 8px 0;
`;

const DropdownItem = styled.li`
    padding: 12px 20px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-size: 15px;
    color: #374151;

    &:hover {
        background-color: #f3f4f6;
    }

    &:first-child {
        font-weight: 600;
        color: #1f2937;
        border-bottom: 1px solid #e5e7eb;
        cursor: default;
        
        &:hover {
            background-color: white;
        }
    }

    &:last-child {
        color: #dc2626;
        border-top: 1px solid #e5e7eb;
        
        &:hover {
            background-color: #fef2f2;
        }
    }

    @media (max-width: 768px) {
        padding: 10px 16px;
        font-size: 14px;
    }
`;

function DropdownUser({opendropdownUser, setOpenDropdownUser}) {
    const { isAuthenticated } = useAuth();
    const userConnected = isAuthenticated ? localStorage.getItem('user') : null;
    const username = userConnected ? JSON.parse(userConnected).username : null;
    const {logout} = useAuth();
    const dropdownRef = useRef(null);

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

    const disconnect = () => {
        logout();
        setOpenDropdownUser(false);
    };

    if(!opendropdownUser) {
        return null;
    }

    return (
        <>
            <DropdownOverlay onClick={() => setOpenDropdownUser(false)} />
            <DropdownContainer ref={dropdownRef}>
                <DropdownList>
                    <DropdownItem>{username}</DropdownItem>
                    <DropdownItem>Ajouter un avis</DropdownItem>
                    <DropdownItem onClick={disconnect}>Se déconnecter</DropdownItem>
                </DropdownList>
            </DropdownContainer>
        </>
    );
}

export default DropdownUser;