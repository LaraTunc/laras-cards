import Birthday1 from "../Birthday1";

export const cards = {
    birthday1: {
        id: "birthday1",
        type:"birthday",
        component: <Birthday1/>,
        imagePath: ["C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/giphy.gif"],
        html: `<!DOCTYPE html>
        <html lang="en">
            <head>
                <style>
                    .background {
                        background-color: linen;
                        width: "100%";
                        height:"500px";
                        padding: 10px;
                        font-family: sans-serif;
                    } 
                    .wrapper {
                        display:flex;
                        justify-content:space-between;
                    }
                    h1 {
                        color: maroon;
                        text-align:center;
                        margin: 10px;
                        margin-bottom: 20px;
                    } 
                    .gif {
                        display: block; 
                        margin-left:auto; 
                        margin-right:auto;
                    } 
                    .left {
                        flex:1;
                    }
                    .right {
                        flex:1;
                        margin-left: 15px;
                    }
                </style>
            </head>
            <body>
                <div class="background">
                    <h1>Happy Birthday!</h1>
                    <div class="wrapper">
                        <div class="left"><img src="cid:unique@nodemailer.com" class="gif"/></div>
                        <div class="right"><p>Insert Message</p></div>
                    </div>
                </div>
            </body>
        </html>`,
    },
    birthday2 : {
        id: "birthday2",
        type:"birthday",
        component: <div>Birthday Card 2</div>,
        imagePath: [],
        html: ``,
    },
};

