import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor, matBlack } from "../../constants/color";

export const VisuallyHiddenInput = styled("input")({
    border: 0,
    width: 8,
    height: 8,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    color: "white",
});

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    &:hover {
        backgroung-color: rgba(0, 0, 0, 0.1);
    }
`;

export const InputBox = styled("input")`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    padding: 0 3rem;
    border-radius: 1.5rem;
    background-color: ${grayColor};
`;


export const SearchField=styled("input")`
    padding: 1rem 2rem;
    width: 20vmax;
    border:none;
    outline:none;
    border-radius:1.5rem;
    background-color: ${grayColor};
    front-size:1.1rem;

`

export const CurveButton=styled("button")`
    border-radius:1.5rem;
    padding: 1rem 2rem;
    border:none;
    outline:none;
    cursor:pointer;
    background-color: ${matBlack};
    front-size:1.1rem;
    color:white;
    &:hover{
        background-color:rgba(0,0,0,0.7)
    };

`