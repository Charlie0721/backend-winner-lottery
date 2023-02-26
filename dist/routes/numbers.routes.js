"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "start application" });
}));
router.post('/numbers', (req, res) => {
    let number1 = req.body.num1;
    let number2 = req.body.num2;
    let number3 = req.body.num3;
    let number4 = req.body.num4;
    console.log(number4, number3, number2);
    if (number1 === 1) {
        number1 = 6;
    }
    else {
        if (number1 === 6) {
            number1 = 1;
        }
    }
    if (number1 === 2) {
        number1 = 7;
    }
    else {
        if (number1 === 7) {
            number1 = 2;
        }
    }
    if (number1 === 3) {
        number1 = 8;
    }
    else {
        if (number1 === 8) {
            number1 = 3;
        }
    }
    if (number1 === 4) {
        number1 = 9;
    }
    else {
        if (number1 === 9) {
            number1 = 4;
        }
    }
    if (number1 === 5) {
        number1 = 0;
    }
    else {
        if (number1 === 0) {
            number1 = 5;
        }
    }
    ////////////////////////////////////////////////////////////////
    if (number2 === 1) {
        number2 = 6;
    }
    else {
        if (number2 === 6) {
            number2 = 1;
        }
    }
    if (number2 === 2) {
        number2 = 7;
    }
    else {
        if (number2 === 7) {
            number2 = 2;
        }
    }
    if (number2 === 3) {
        number2 = 8;
    }
    else {
        if (number2 === 8) {
            number2 = 3;
        }
    }
    if (number2 === 4) {
        number2 = 9;
    }
    else {
        if (number2 === 9) {
            number2 = 4;
        }
    }
    if (number2 === 5) {
        number2 = 0;
    }
    else {
        if (number2 === 0) {
            number2 = 5;
        }
    }
    ////////////////////////////////////////////////////////////////
    if (number3 === 1) {
        number3 = 6;
    }
    else {
        if (number3 === 6) {
            number3 = 1;
        }
    }
    if (number3 === 2) {
        number3 = 7;
    }
    else {
        if (number3 === 7) {
            number3 = 2;
        }
    }
    if (number3 === 3) {
        number3 = 8;
    }
    else {
        if (number3 === 8) {
            number3 = 3;
        }
    }
    if (number3 === 4) {
        number3 = 9;
    }
    else {
        if (number3 === 9) {
            number3 = 4;
        }
    }
    if (number3 === 5) {
        number3 = 0;
    }
    else {
        if (number3 === 0) {
            number3 = 5;
        }
    }
    ////////////////////////////////////////////////////////////////
    if (number4 === 1) {
        number4 = 6;
    }
    else {
        if (number4 === 6) {
            number4 = 1;
        }
    }
    if (number4 === 2) {
        number4 = 7;
    }
    else {
        if (number4 === 7) {
            number4 = 2;
        }
    }
    if (number4 === 3) {
        number4 = 8;
    }
    else {
        if (number4 === 8) {
            number4 = 3;
        }
    }
    if (number4 === 4) {
        number4 = 9;
    }
    else {
        if (number4 === 9) {
            number4 = 4;
        }
    }
    if (number4 === 5) {
        number4 = 0;
    }
    else {
        if (number4 === 0) {
            number4 = 5;
        }
    }
    console.log(number1, number2, number3, number4);
    console.log(number4, number3, number2);
    console.log(`Posibles combinaciones: ${number3}${number2}${number4} Ó ${number3}${number4}${number2} ó ${number2}${number3}${number4} ó ${number4}${number3}${number2}`);
    res.json({
        "mesagge": "numbers entered by user",
        number1,
        number2,
        number3,
        number4,
        "Combination1": [number3, number2, number4
        ],
        "Combination2": [number3, number4, number2
        ],
        "Combination3": [number2, number3, number4],
        "Combination4": [number4, number3, number2]
    });
});
router.get('/numbers', (req, res) => {
    res.send('numbers');
});
exports.default = router;
