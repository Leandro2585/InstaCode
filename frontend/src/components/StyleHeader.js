import styled from 'styled-components';

const Header = styled.header`
    #main-header{
        background: #fff;
        height: 72px;
        border-bottom: 1px solid #DDD;
    }
    #main-header .header-content{
        width: 100%;
        max-width: 980px;
        margin: 0 auto;
        height: 72px;
        padding: 0 30px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        
    }
`;

export default Header;