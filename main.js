// //練習問題

// // 初期画面の設定
// const cpHand = document.getElementById(`cpHand`);
// cpHand.textContent = `相手の手:`;
// const log = document.getElementById(`log`);
// log.textContent = `結果:`;

// // ゲームスタート
// const gameStart = document.getElementById(`gameStart`)
// gameStart.addEventListener(`click`, function () {
//     const mynum = document.getElementById(`myHand`).value;
//     const cpnum = Math.floor(Math.random() * 3);

//     // 相手の手表示
//     if (cpnum === 0) {
//         cpHand.textContent = `相手の手：グー`
//     } else if (cpnum === 1) {
//         cpHand.textContent = `相手の手：チョキ`
//     } else if (cpnum === 2) {
//         cpHand.textContent = `相手の手：パー`
//     };

//     // 対戦結果の表示
//     switch (mynum) {
//         case '0': {
//             if (cpnum === 0) {
//                 log.textContent = `結果：引き分け`;
//             } else if (cpnum === 1) {
//                 log.textContent = `結果:勝ち`;
//             } else if (cpnum === 2) {
//                 log.textContent = `結果負け`;
//             }
//             break;
//         }
//         case '1': {
//             if (cpnum === 0) {
//                 log.textContent = `結果：負け`;
//             } else if (cpnum === 1) {
//                 log.textContent = `結果：引き分け`;
//             } else if (cpnum === 2) {
//                 log.textContent = `結果:勝ち`;
//             }
//             break;
//         }
// case '2': {
//             if (cpnum === 0) {
//                 log.textContent = `結果:勝ち`
//             } else if (cpnum === 1) {
//                 log.textContent = `結果:負け`
//             } else if (cpnum === 2) {
//                 log.textContent = `結果：引き分け`
//             }
//             break;
//         }
//     };
// });

// チャレンジ問題
const player1 = document.getElementById(`player1Hand`);
const player2 = document.getElementById(`player2Hand`);
const player = document.getElementById(`player`);
// 手の設定
let playerHand1;
let playerHand2;
let count = 0
const setHand = document.getElementById(`setHand`)
setHand.addEventListener(`click`, function () {
    count++
    if (count === 1) {
        playerHand1 = document.getElementById(`playerHand`).value;
        player1.textContent = `player1:セット完了`;

        // プレイヤーの切り替え表示
        player.textContent = `player2`;
    } else if (count === 2) {
        playerHand2 = document.getElementById(`playerHand`).value;
        player2.textContent = `player2:セット完了`;
        player.textContent = `両者セット完了`;

    }
});

// 対戦結果
const gameStart = document.getElementById(`gameStart`);
const log = document.getElementById(`log`)
log.textContent = `結果:`


gameStart.addEventListener(`click`, function () {
    if (count >= 3) {
        alert(`２回以上押さないでください`)
        window.location.reload();
    };
    switch (playerHand1) {
        case `0`: {
            if (playerHand2 === `0`) {
                log.textContent = `結果：引き分け`;
            } else if (playerHand2 === `1`) {
                log.textContent = `結果：player1の勝ち`;
            } else if (playerHand2 === `2`) {
                log.textContent = `結果：player2の勝ち`;
            }
            break;
        }
        case `1`: {
            if (playerHand2 === `0`) {
                log.textContent = `結果:player2の勝ち`;
            } else if (playerHand2 === `1`) {
                log.textContent = `結果：引き分け`;
            } else if (playerHand2 === `2`) {
                log.textContent = `結果：player１の勝ち`;
            }
            break;
        }
        case `2`: {
            if (playerHand2 === `0`) {
                log.textContent = `結果：player1の勝ち`
            } else if (playerHand2 === `1`) {
                log.textContent = `結果：player2の勝ち`
            } else if (playerHand2 === `2`) {
                log.textContent = `結果:引き分け`
            }
        }
            break;
    };
    count = 0
    player1.textContent = `player1:`
    player2.textContent = `player2:`
    player.textContent = `player1`

});