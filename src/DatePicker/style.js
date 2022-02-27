import makeStyles from "@material-ui/styles/makeStyles";
import { createMuiTheme } from "@material-ui/core";
export const useStyles = makeStyles({
    root: {
        "& .MuiInputBase-root": {
            padding: 0,
            "& .MuiButtonBase-root": {
                paddingTop: "0.375rem",
                paddingLeft: "0.75rem",
                paddingRight: 0,
                paddingBottom: "0.375rem",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#f0f1f5",
                height: 41,
                background: "#fff",
                fontSize: 14,
            },
            "& .MuiInputBase-input": {
                paddingTop: "0.375rem",
                paddingLeft: "0.75rem",
                paddingRight: 0,
                paddingBottom: "0.375rem",
                borderWidth: 0,
                borderStyle: "solid",
                borderColor: "#f0f1f5",
                height: 54,
                background: "#fff",
                fontSize: 14,
                borderRadius: 20,
                backgroundColor: "#F4F5F9"

            },
            "& .MuiButtonBase-root": {
                padding: 6,
                fontSize: 24,
                color: "#AFB0B3",
                backgroundColor: "#ffffff",
                marginRight: 0,
            },
            "& .MuiButtonBase-root:hover": {
                backgroundColor: "#ff6348",
                color: "#fff",

            },

        }
    }
});

export const materialTheme = createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#ff6348',
            },
        },
        MuiPickersDay: {
            day: {
                color: 'black',


            },
            daySelected: {
                backgroundColor: '#ff6348',
                "&:hover": {
                    backgroundColor: "#db4c33"
                }
            },
            dayDisabled: {
                color: '#ccc',
            },
            current: {
                color: '#ff6348',

            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: '#ff6348',
                backgroundColor: 'YOUR HEX HERE',
            },
        },
    },
});

export const useStyles1 = makeStyles({
    root: {
        "& .MuiInputBase-root": {
            padding: 0,
            "& .MuiButtonBase-root": {
            
                padding: 0,
                borderWidth: 0,
                borderStyle: "solid",
                borderColor: "#AFB0B3",
                height: 30,
                background: "#fff",
                fontSize: 16,
                width: '100%',
              
            },
            "& .MuiInputBase-input": {
                paddingTop: "0.375rem",
                paddingLeft: "0.75rem",
                paddingRight: 0,
                paddingBottom: "0.375rem",
                
                borderStyle: "solid",
                borderColor: "#CCCCCC",
                height: 20,
                background: "#fff",
                fontSize: 16,
                borderRadius: 10,
                backgroundColor: "#ffff",
                width: '100%',
                


            },
            "& .MuiButtonBase-root": {
                padding: 6,
                fontSize: 24,
                color: "#AFB0B3",
                backgroundColor: "#ffffff",
                marginRight: 0,
                width: '100%',
              

            },
            "& .MuiButtonBase-root:hover": {
                backgroundColor: "#ff6348",
                color: "#fff",
                borderColor: "#CCCCCC",
                width: '100%',
              


            }, "& .MuiInputBase-input:hover": {
                borderColor: "#CCCCCC",
                width: '100%',
              
            }

        }
    }
});
