import styled from 'styled-components';
const NewStyle = styled.form`
    #new-post {
        width: 100%;
        max-width: 580px;
        margin: 30px auto 0;
        padding: 30px;
        background: #fff;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
    }
    
    #new-post input {
        margin-bottom: 10px;
    } 
    #new-post input[type=text] {
        height: 38px;
        border-radius: 4px;
        border: 1px solid #ddd;
        padding: 0 20px;
        font-size: 14px;
    }
    
    #new-post button {
        padding: 10px 20px;
        border-radius: 4px;
        border: 0;
        background: #7159c1;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    }
`;

export default NewStyle;