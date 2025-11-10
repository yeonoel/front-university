import styled from "styled-components";
import logo from "../../assets/logo.png";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    `;

    const StyledHeader  = styled.header`
        box-sizing: border-box;
        height: 150px;
        margin-bottom: 5px;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 10px 100px;
      `;

const StyledLogo = styled.img`
    height: 40px;
    width: 40px;
    `;

const StyledSpan = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center; 
    font-size: 24px;
    font-weight: bold;
    `


function Nav() {

  return (
        <StyledHeader >
            <StyledNav>
              <StyledSpan>  
                <StyledLogo src={logo} alt="logo" />
                  EcoleInfo CI
                </StyledSpan>
              <p>Connexion</p>
           </StyledNav>
        </StyledHeader>
  );
}

export default Nav;