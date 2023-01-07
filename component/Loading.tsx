import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 10;
    display: flex;
    align-items: center;

    .loading {
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 5px solid rgba(40, 120, 240, 0.6);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
        margin: 0 auto;
    }
      
    @keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }

    @-webkit-keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
`

const Loading = () => {
    return (
        <StyledDiv>
            <div className="loading"></div>
        </StyledDiv>
    )
}

export default Loading