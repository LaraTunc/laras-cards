import Birthday1 from "./cards/Birthday1";
import Birthday2 from "./cards/Birthday2";
import Birthday3 from "./cards/Birthday3";
import Funny1 from "./cards/Funny1";
import Funny2 from "./cards/Funny2";
import Funny3 from "./cards/Funny3";
import Funny4 from "./cards/Funny4";
import Funny5 from "./cards/Funny5";
import Funny6 from "./cards/Funny6";
import Funny7 from "./cards/Funny7";
import Valentines1 from "./cards/Valentines1";
import Valentines2 from "./cards/Valentines2";
import Xmas1 from "./cards/Xmas1";
import Xmas2 from "./cards/Xmas2";
import Custom1 from "./cards/Custom1";
import Custom2 from "./cards/Custom2";
import Custom3 from "./cards/Custom3";

export const cards = {
  birthday1: {
    id: "birthday1",
    type: "birthday",
    component: <Birthday1 />,
    attachments: [
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/birthday1.gif",
        cid: "unique@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          .body {
            margin: 0px;
          }
          .wrapper {
            background-color: #dae7dd;
            width: 750px;
            height: 500px;
            font-family: sans-serif;
            margin-right: auto;
            margin-left: auto;
            display: block;
          }
          table {
            height: 100%;
            width: 100%;
          }
          td {
            width: 50%;
          }
          .gif {
            height: 100%;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            color: maroon;
            margin: 5px;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <table>
            <tr>
              <td>
                <img src="cid:unique@nodemailer.com" class="gif" />
              </td>
              <td>
                <p class="title">Happy Birthday!</p>
                <p class="title">Another year of you is a reason to celebrate.</p>
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>`,
  },
  birthday2: {
    id: "birthday2",
    type: "birthday",
    component: <Birthday2 />,
    attachments: [
      {
        filename: "birthday2_img",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/birthday2.gif",
        cid: "birthday2@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          .body {
            margin: 0px;
          }
          .wrapper {
            background: #ffa07a;
            width: 750px;
            height: 500px;
            font-family: sans-serif;
            margin-right: auto;
            margin-left: auto;
            display: block;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            color: #5e2605;
            margin: 2%;
            margin-top: 5%;
          }
          .gif {
            height: 60%;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 2%;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <p class="title">
            Happy birthday to one of the few people whose birthday I can remember
            without a Facebook reminder.
          </p>
          <img src="cid:birthday2@nodemailer.com" class="gif" />
        </div>
      </body>
    </html>`,
  },
  birthday3: {
    id: "birthday3",
    type: "birthday",
    component: <Birthday3 />,
    attachments: [
      {
        filename: "birthday3_img",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/birthday3.gif",
        cid: "unique@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          .body {
            margin: 0px;
          }
          .wrapper {
            width: 750px;
            height: 500px;
            font-family: sans-serif;
            background: black;
            margin-right: auto;
            margin-left: auto;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            width: 100%;
            text-align: center;
            color: white;
            margin-top: 5px;
            margin-bottom: 8px;
          }
          .gif {
            display: block;
            margin-right: auto;
            margin-left: auto;
            height: 80%;
            max-width: 100%;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <img src="cid:unique@nodemailer.com" class="gif" />
          <p class="title">
            I hope you have a great day today and the year ahead is full of many
            blessings.
          </p>
        </div>
      </body>
    </html>`,
  },
  xmas1: {
    id: "xmas1",
    type: "xmas",
    component: <Xmas1 />,
    attachments: [
      {
        filename: "xmas1_img",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/xmas1.gif",
        cid: "unique@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          .body {
            margin: 0px;
          }
          .wrapper {
            height: 500px;
            width: 750px;
            font-family: sans-serif;
            background: black;
            margin-left: auto;
            margin-right: auto;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            width: 100%;
            text-align: center;
            color: white;
            margin-top: 3%;
          }
          .gif {
            width: 100%;
            max-height: 80%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <img src="cid:unique@nodemailer.com" class="gif" />
          <p class="title">Merry Christmas and Happy Holidays!</p>
        </div>
      </body>
    </html>`,
  },
  xmas2: {
    id: "xmas2",
    type: "xmas",
    component: <Xmas2 />,
    attachments: [
      {
        filename: "xmas2_gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/xmas2.gif",
        cid: "gif@nodemailer.com",
      },
      {
        filename: "xmas2_png",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/xmas2_2.png",
        cid: "png@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            margin: 0px;
          }
          .wrapper {
            height: 530px;
            width: 750px;
            margin-right: auto;
            margin-left: auto;
            font-family: sans-serif;
            background: lightyellow;
            display: block;
          }
          table {
            width: 100%;
            height: 60%;
          }
          .gifbox {
            width: 50%;
          }
          .gif {
            max-width: 100%;
            max-height: 100%;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
          }
          .pngbox {
            width: 100%;
            height: 40%;
            text-align: center;
          }
          .png {
            max-height: 100%;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <table>
            <tr class="row1">
              <td class="gifbox">
                <img src="cid:gif@nodemailer.com" alt="fireworks" class="gif" />
              </td>
              <td>
                <p class="title">
                  It's not what's under the christmas tree that matters. It's who's
                  around it.
                </p>
              </td>
            </tr>
          </table>
          <div class="pngbox">
            <img src="cid:png@nodemailer.com" class="png" />
          </div>
        </div>
      </body>
    </html>`,
  },
  valentines1: {
    id: "valentines1",
    type: "valentines",
    component: <Valentines1 />,
    attachments: [
      {
        filename: "valentines1_gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/valentines1.gif",
        cid: "valentines1@nodemailer.com",
      },
      {
        filename: "valentines1_1_png",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/valentines1_1.gif",
        cid: "valentines1_1@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            margin: 0px;
          }
          .wrapper {
            height: 500px;
            width: 750px;
            margin-right: auto;
            margin-left: auto;
            font-family: sans-serif;
            background: white;
            display: block;
            border: 1px solid black;
            text-align: center;
          }
          .wrapper2 {
            height: 45%;
            width: 99%;
          }
          .box {
            display: inline-block;
            vertical-align: top;
            height: 99%;
            width: 49%;
          }
          .gif {
            max-width: 100%;
            min-width: 50%;
            max-height: 100%;
          }
          .title {
            width: 100%;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            color: black;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="wrapper2">
            <div class="box">
              <img src="cid:valentines1@nodemailer.com" class="gif" />
            </div>
            <div class="box"></div>
          </div>
          <p class="title">You are my kind of weird! Happy Valentine's day.</p>
          <div class="wrapper2">
            <div class="box"></div>
            <div class="box">
              <img src="cid:valentines1_1@nodemailer.com" class="gif" />
            </div>
          </div>
        </div>
      </body>
    </html>`,
  },
  valentines2: {
    id: "valentines2",
    type: "valentines",
    component: <Valentines2 />,
    attachments: [
      {
        filename: "valentines2_gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/valentines2.gif",
        cid: "valentines2@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            margin: 0px;
          }
          .wrapper {
            height: 500px;
            width: 750px;
            font-family: sans-serif;
            background: black;
            display: block;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          .gif {
            height: 60%;
            margin-top: 5px;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            width: 100%;
            text-align: center;
            color: white;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <img src="cid:valentines2@nodemailer.com" class="gif" />
          <p class="title">You are my kind of weird! Happy Valentine's day.</p>
        </div>
      </body>
    </html>`,
  },
  funny1: {
    id: "funny1",
    type: "funny",
    component: <Funny1 />,
    attachments: [
      {
        filename: "funny1_gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/funny1.gif",
        cid: "funny1@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            margin: 0px;
          }
          .wrapper {
            height: 500px;
            width: 750px;
            margin-right: auto;
            margin-left: auto;
            font-family: sans-serif;
            background: black;
            display: block;
            text-align: center;
          }
          .gif {
            max-width: 100%;
            min-height: 60%;
            max-height: 70%;
            margin-top: 2%;
            margin-bottom: 2%;
          }
          .title {
            width: 100%;
            text-align: center;
            color: white;
            font-size: 32px;
            font-weight: bold;
            margin: 0%;
            line-height: 1;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <img src="cid:funny1@nodemailer.com" class="gif" />
          <p class="title">Dear Friend,</p>
          <p class="title">You are on my mind today.</p>
          <p class="title">Everyone else is on my nerves.</p>
          <p class="title">Love, me</p>
        </div>
      </body>
    </html>`,
  },
  funny2: {
    id: "funny2",
    type: "funny",
    component: <Funny2 />,
    attachments: [
      {
        filename: "png",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/funny2.png",
        cid: "png@nodemailer.com",
      },
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/funny2_3.gif",
        cid: "gif@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            margin: 0px;
          }
          .wrapper {
            height: 500px;
            width: 750px;
            font-family: sans-serif;
            background: white;
            border: 1px solid black;
            display: block;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
          .title {
            width: 100%;
            text-align: center;
            font-weight: bold;
            font-size: 32px;
            color: black;
            margin-top: 2%;
            z-index: 5;
          }
          .png {
            height: 85%;
            margin-left: 10%;
          }
          .gif {
            height: 60%;
            margin-right: 5%;
            margin-bottom: 5%;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <p class="title">I lose my head around you...</p>
          <img src="cid:gif@nodemailer.com" class="gif" />
          <img src="cid:png@nodemailer.com" class="png" />
        </div>
      </body>
    </html>`,
  },
  funny3: {
    id: "funny3",
    type: "funny",
    component: <Funny3 />,
    attachments: [
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/funny3_2.gif",
        cid: "gif2@nodemailer.com",
      },
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/funny3.gif",
        cid: "gif@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          .body {
            margin: 0px;
          }
          .wrapper {
            background-color: #fde8bb;
            width: 750px;
            height: 500px;
            font-family: sans-serif;
            margin-right: auto;
            margin-left: auto;
            text-align: center;
          }
          table {
            width: 100%;
            height: 60%;
            margin-top: 10%;
          }
          .smallgifbox {
            width: 25%;
          }
          .gifbox {
            width: 50%;
          }
          .gif {
            display: inline-block;
            margin-left: auto;
            margin-right: auto;
            max-width:100%;
            max-height:100%;
          }
          .title {
            display: inline-block;
            font-size: 32px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <table>
            <tr>
              <td class="smallgifbox">
                <img src="cid:gif2@nodemailer.com" class="gif" />
              </td>
              <td class="gifbox">
                <img src="cid:gif@nodemailer.com" class="gif" />
              </td>
              <td class="smallgif">
                <img src="cid:gif2@nodemailer.com" class="gif" />
              </td>
            </tr>
          </table>
          <p class="title">Thanks for being my Momager!</p>
        </div>
      </body>
    </html>`,
  },
  funny4: {
    id: "funny4",
    type: "funny",
    component: <Funny4 />,
    attachments: [
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/funny4.gif",
        cid: "gif@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            margin: 0%;
          }
          .wrapper {
            height: 500px;
            width: 750px;
            margin-right: auto;
            margin-left: auto;
            font-family: sans-serif;
            background: #ffc0cb;
          }
          .gif {
            height: 70%;
            display: block;
            margin-top: 2%;
            margin-left: auto;
            margin-right: auto;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            color: black;
            text-align: center;
            margin: 5% 0%;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <img src="cid:gif@nodemailer.com" class="gif" />
          <p class="title">It's always 5 o'clock in quarantine 🍼</p>
        </div>
      </body>
    </html>`,
  },
  funny5: {
    id: "funny5",
    type: "funny",
    component: <Funny5 />,
    attachments: [
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/funny5.gif",
        cid: "gif@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            margin: 0%;
          }
          .wrapper {
            height: 500px;
            width: 750px;
            margin-right: auto;
            margin-left: auto;
            font-family: sans-serif;
            background: #83ceff;
          }
          .gif {
            height: 70%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            color: black;
            text-align: center;
            margin: 10% 0%;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <p class="title">This isn't a card. It's an e-hug.</p>
          <img src="cid:gif@nodemailer.com" class="gif" />
        </div>
      </body>
    </html>`,
  },
  funny6: {
    id: "funny6",
    type: "funny",
    component: <Funny6 />,
    attachments: [
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/funny6.gif",
        cid: "gif@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            margin: 0%;
          }
          .wrapper {
            height: 500px;
            width: 750px;
            margin-right: auto;
            margin-left: auto;
            font-family: sans-serif;
            background: black;
          }
          .gif {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            max-height: 65%;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            color: white;
            text-align: center;
            margin: 2% 0%;
            line-height: 1;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <img src="cid:gif@nodemailer.com" class="gif" />
          <p class="title">
            🌹 Roses are Red 🌹
            <br />
            💠 Violets are Blue 💠
            <br />I have 5 fingers.
            <br />
            The middle one is for you.
          </p>
        </div>
      </body>
    </html>`,
  },
  funny7: {
    id: "funny7",
    type: "funny",
    component: <Funny7 />,
    attachments: [
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/funny7.gif",
        cid: "gif@nodemailer.com",
      },
    ],
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            margin: 0%;
          }
          .wrapper {
            height: 500px;
            width: 750px;
            margin-right: auto;
            margin-left: auto;
            font-family: sans-serif;
            background: #15242c;
          }
          .gif {
            display: block;
            margin-left: auto;
            margin-right: auto;
            height: 70%;
            margin-top: 2%;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            color: white;
            text-align: center;
            margin-top: 4%;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <img src="cid:gif@nodemailer.com" class="gif" />
          <p class="title">❤️ I'm (s)mitten with you ❤️</p>
        </div>
      </body>
    </html>`,
  },
  custom1: {
    id: "custom1",
    type: "custom",
    component: <Custom1 />,
    attachments: [
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/custom1.gif",
        cid: "gif@nodemailer.com",
      },
    ],
    html: (customMessage) => {
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <style>
            .body {
              margin: 0px;
            }
            .wrapper {
              background-color: linen;
              width: 750px;
              height: 500px;
              font-family: sans-serif;
              margin-right: auto;
              margin-left: auto;
              display: block;
            }
            table {
              height: 100%;
              width: 100%;
            }
            td {
              width: 50%;
            }
            .gif {
              height: 80%;
            }
            .title {
              font-size: 32px;
              font-weight: bold;
              text-align: center;
              color: maroon;
              margin: 5px;
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <table>
              <tr>
                <td>
                  <img src="cid:gif@nodemailer.com" class="gif" />
                </td>
                <td>
                  <p class="title">${customMessage}</p>
                </td>
              </tr>
            </table>
          </div>
        </body>
      </html>
      `;
    },
  },
  custom2: {
    id: "custom2",
    type: "custom",
    component: <Custom2 />,
    attachments: [
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/custom2.gif",
        cid: "gif@nodemailer.com",
      },
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/custom2_2.gif",
        cid: "gif2@nodemailer.com",
      },
    ],
    html: (customMessage) => {
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <style>
            body {
              margin: 0px;
            }
            .wrapper {
              height: 500px;
              width: 750px;
              font-family: sans-serif;
              background: #ecf87f;
              display: block;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
            }
            .gif {
              height: 60%;
              margin-right: 5%;
              margin-left: 5%;
              display: inline-block;
            }
            .gif2 {
              max-width: 25%;
              height: 40%;
              display: inline-block;
            }
            .title {
              width: 100%;
              text-align: center;
              font-weight: bold;
              font-size: 32px;
              color: black;
              margin-top: 10%;
              z-index: 5;
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <img src="cid:gif2@nodemailer.com" class="gif2" />
            <img src="cid:gif@nodemailer.com" class="gif" />
            <img src="cid:gif2@nodemailer.com" class="gif2" />
            <p class="title">${customMessage}</p>
          </div>
        </body>
      </html>`;
    },
  },
  custom3: {
    id: "custom3",
    type: "custom",
    component: <Custom3 />,
    attachments: [
      {
        filename: "gif",
        path:
          "C:/Users/lara.tunc/Documents/concordia-bootcamps/my-app/public/custom3.gif",
        cid: "gif@nodemailer.com",
      },
    ],
    html: (customMessage) => {
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <style>
            body {
              margin: 0px;
            }
            .wrapper {
              height: 500px;
              width: 750px;
              font-family: sans-serif;
              background: #87aca3;
              display: block;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
            }
            .row1 {
              height: 20%;
            }
            .row2 {
              height: 80%;
              vertical-align: bottom;
            }
            table {
              width: 100%;
              height: 100%;
            }
            .title {
              width: 100%;
              text-align: center;
              font-weight: bold;
              font-size: 32px;
              color: black;
              margin-top: 2%;
              margin-bottom: 2%;
            }
            .gif {
              display: block;
              height: 100%;
              width: 100%;
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <table>
              <tr class="row1">
                <td><p class="title">${customMessage}</p></td>
              </tr>
              <tr class="row2">
                <td><img src="cid:gif@nodemailer.com" class="gif" /></td>
              </tr>
            </table>
          </div>
        </body>
      </html>`;
    },
  },
};
