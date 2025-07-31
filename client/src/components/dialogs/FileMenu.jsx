import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
    return (
        <Menu open={false} anchorEl={anchorE1} onClose={() => {}}>
            <div
                style={{
                    width: "10rem",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
            


                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et maxime quam nulla eaque fugit odio repellendus, inventore praesentium provident!
            </div>
        </Menu>
    );
};

export default FileMenu;
