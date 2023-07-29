import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const NavComp = ({openRight,setOpenRight}) => {
   
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <div className=' '>

<Drawer

        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 !bg-black"
      >
        <div className="mb-6 flex items-center justify-between">
        <img
            className="w-32 sm:w-40 text-white "
            src="http://archiviomariorusso.it/svg/logo.svg"
            alt="logo"
          />
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
      </Drawer>

    </div>
  )
}

export default NavComp