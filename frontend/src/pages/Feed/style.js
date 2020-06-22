import styled from 'styled-components';

const FeedStyle = styled.section`
    #post-list{
        width:100%;
        max-width:580px;
        margin: 0 auto;
        padding: 0 auto;
    }
    #post-list article{
        background: #fff;
        border: 1px solid #DDD;
        margin-top: 30px;
    }
    #post-list article header{
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #post-list article header .user-info{
        display: flex;
        flex-direction: column;
    }
    #post-list article header .user-info span{
        font-size: 13px;
    }
    #post-list article header .user-info span.place{
        font-size: 11px;
        color: #333;
        margin-top: 3px;
    }
    #post-list article > img{
        width:100%;
    }
    #post-list article footer{
        padding: 20px;
    }
    #post-list article footer .actions{
        margin-bottom: 10px;
    }
    #post-list article footer .actions button{
        background: transparent;
        border: 0;
        cursor: pointer;
    }
    #post-list article footer .actions button img:active{
        background: #F55;
    }
    #post-list article footer .actions img{
        height: 20px;
        margin-right: 10px;
    }
    #post-list article footer p{
        font-size: 13px;
        margin-top: 2px;
        line-height: 18px;
    }
    #post-list article footer p span{
        color: #7159c1;
        display:block;
    }
`;
export default FeedStyle;