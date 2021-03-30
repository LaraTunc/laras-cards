import Birthday1 from "../Birthday1";
import Birthday2 from "../Birthday2";
import Birthday3 from "../Birthday3";
import Funny1 from "../Funny1";
import Funny2 from "../Funny2";
import Funny3 from "../Funny3";
import Funny4 from "../Funny4";
import Funny5 from "../Funny5";
import Funny6 from "../Funny6";
import Funny7 from "../Funny7";
import Valentines1 from "../Valentines1";
import Valentines2 from "../Valentines2";
import Xmas1 from "../Xmas1";
import Xmas2 from "../Xmas2";
import Custom1 from "../Custom1";

export const cards = {
  birthday1: {
    id: "birthday1",
    type: "birthday",
    component: <Birthday1 />,
    attachments: [
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/giphy.gif",
        cid: "unique@nodemailer.com",
      },
    ],
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
                        <div class="right"><p>Happy Birthday!</p></div>
                    </div>
                </div>
            </body>
        </html>`,
  },
  birthday2: {
    id: "birthday2",
    type: "birthday",
    component: <Birthday2 />,
    imagePath: [],
    html: ``,
  },
  birthday3: {
    id: "birthday3",
    type: "birthday",
    component: <Birthday3 />,
    imagePath: [],
    html: ``,
  },
  xmas1: {
    id: "xmas1",
    type: "xmas",
    component: <Xmas1 />,
    imagePath: [],
    html: ``,
  },
  xmas2: {
    id: "xmas2",
    type: "xmas",
    component: <Xmas2 />,
    imagePath: [],
    html: ``,
  },
  valentines1: {
    id: "valentines1",
    type: "valentines",
    component: <Valentines1 />,
    imagePath: [],
    html: ``,
  },
  valentines2: {
    id: "valentines2",
    type: "valentines",
    component: <Valentines2 />,
    imagePath: [],
    html: ``,
  },
  funny1: {
    id: "funny1",
    type: "funny",
    component: <Funny1 />,
    imagePath: [],
    html: ``,
  },
  funny2: {
    id: "funny2",
    type: "funny",
    component: <Funny2 />,
    imagePath: [],
    html: ``,
  },
  funny3: {
    id: "funny3",
    type: "funny",
    component: <Funny3 />,
    imagePath: [],
    html: ``,
  },
  funny4: {
    id: "funny4",
    type: "funny",
    component: <Funny4 />,
    imagePath: [],
    html: ``,
  },
  funny5: {
    id: "funny5",
    type: "funny",
    component: <Funny5 />,
    imagePath: [],
    html: ``,
  },
  funny6: {
    id: "funny6",
    type: "funny",
    component: <Funny6 />,
    imagePath: [],
    html: ``,
  },
  funny7: {
    id: "funny7",
    type: "funny",
    component: <Funny7 />,
    imagePath: [],
    html: ``,
  },
  custom1: {
    id: "custom1",
    type: "custom",
    component: <Custom1 />,
    imagePath: [],
    html: (customMessage) => {
      return `<!DOCTYPE html>
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
                                <div class="right"><p>${customMessage}</p></div>
                            </div>
                        </div>
                    </body>
                </html>`;
    },
  },
};
