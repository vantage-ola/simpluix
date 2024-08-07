import {createGlobalStyle} from "styled-components";

export const HomeStyle = createGlobalStyle`
    :root {
        --white: whitesmoke;
        --blue: #2196F3;
        --blueblack: rgb(15, 18, 22);
        --tooltip-text-color: white;
        --tooltip-background-color: black;
        --tooltip-margin: 30px;
        --tooltip-arrow-size: 6px;
    }
    * {
        color: var(--white);
        font-family: 'Montserrat';
        font-size: 17px;
        box-sizing: border-box;
    }

    body {
        background-color: var(--blueblack);
        margin: 0;
    }
    .card-group {
        width: 80%;
        margin: 10px 10.5%;
        padding: 10px;
       }
    .card {
        border: 2px solid var(--blue);
        border-radius: 4px;
    }
       
    .card-body {
        background-color: var(--blueblack);
    }
    
	.error-name {
		font-size: 3rem;
		padding: 8rem 0;
		display: flex;
    	justify-content: center;
    	align-items: flex-start;

		@media (max-width: 730px){
			font-size: 1.5rem ;
    	}
    }
    
    /* Wrapping */
    .Tooltip-Wrapper {
      display: inline-block;
      position: relative;
    }
    
    /* Absolute positioning */
    .Tooltip-Tip {
      position: absolute;
      border-radius: 4px;
      left: 50%;
      transform: translateX(-50%);
      padding: 6px;
      color: var(--tooltip-text-color);
      background: var(--tooltip-background-color);
      font-size: 14px;
      font-family: sans-serif;
      line-height: 1;
      z-index: 100;
      white-space: nowrap;
    }
    
    /* CSS border triangles */
    .Tooltip-Tip::before {
      content: " ";
      left: 50%;
      border: solid transparent;
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-width: var(--tooltip-arrow-size);
      margin-left: calc(var(--tooltip-arrow-size) * -1);
    }
    
    /* Absolute positioning */
    .Tooltip-Tip.top {
      top: calc(var(--tooltip-margin) * -1);
    }
    /* CSS border triangles */
    .Tooltip-Tip.top::before {
      top: 100%;
      border-top-color: var(--tooltip-background-color);
    }
    
    /* Absolute positioning */
    .Tooltip-Tip.right {
      left: calc(100% + var(--tooltip-margin));
      top: 50%;
      transform: translateX(0) translateY(-50%);
    }
    /* CSS border triangles */
    .Tooltip-Tip.right::before {
      left: calc(var(--tooltip-arrow-size) * -1);
      top: 50%;
      transform: translateX(0) translateY(-50%);
      border-right-color: var(--tooltip-background-color);
    }
    
    /* Absolute positioning */
    .Tooltip-Tip.bottom {
      bottom: calc(var(--tooltip-margin) * -1);
    }
    /* CSS border triangles */
    .Tooltip-Tip.bottom::before {
      bottom: 100%;
      border-bottom-color: var(--tooltip-background-color);
    }
    
    /* Absolute positioning */
    .Tooltip-Tip.left {
      left: auto;
      right: calc(100% + var(--tooltip-margin));
      top: 50%;
      transform: translateX(0) translateY(-50%);
    }
    /* CSS border triangles */
    .Tooltip-Tip.left::before {
      left: auto;
      right: calc(var(--tooltip-arrow-size) * -2);
      top: 50%;
      transform: translateX(0) translateY(-50%);
      border-left-color: var(--tooltip-background-color);
    }
    
`;