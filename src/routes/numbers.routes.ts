import { Request, Response } from 'express'
import { Router } from "express";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.json({message:"start application"}
)
 })

router.post('/numbers', (req: Request, res: Response) => {

    let number1: number = req.body.num1
    let number2: number = req.body.num2
    let number3: number = req.body.num3
    let number4: number = req.body.num4



    console.log(number4, number3, number2);

    if (number1 === 1) {
        number1 = 6

    } else {
        if (number1 === 6) {
            number1 = 1
        }
    }
    if (number1 === 2) {
        number1 = 7
    } else {
        if (number1 === 7) {
            number1 = 2
        }
    }
    if (number1 === 3) {
        number1 = 8
    } else {
        if (number1 === 8) {
            number1 = 3
        }
    }
    if (number1 === 4) {
        number1 = 9
    } else {
        if (number1 === 9) {
            number1 = 4
        }
    }
    if (number1 === 5) {
        number1 = 0
    } else {
        if (number1 === 0) {
            number1 = 5
        }
    }

    ////////////////////////////////////////////////////////////////
    if (number2 === 1) {
        number2 = 6

    } else {
        if (number2 === 6) {
            number2 = 1
        }
    }
    if (number2 === 2) {
        number2 = 7
    } else {
        if (number2 === 7) {
            number2 = 2
        }
    }
    if (number2 === 3) {
        number2 = 8
    } else {
        if (number2 === 8) {
            number2 = 3
        }
    }
    if (number2 === 4) {
        number2 = 9
    } else {
        if (number2 === 9) {
            number2 = 4
        }
    }
    if (number2 === 5) {
        number2 = 0
    } else {
        if (number2 === 0) {
            number2 = 5
        }
    }
    ////////////////////////////////////////////////////////////////
    if (number3 === 1) {
        number3 = 6

    } else {
        if (number3 === 6) {
            number3 = 1
        }
    }
    if (number3 === 2) {
        number3 = 7
    } else {
        if (number3 === 7) {
            number3 = 2
        }
    }
    if (number3 === 3) {
        number3 = 8
    } else {
        if (number3 === 8) {
            number3 = 3
        }
    }
    if (number3 === 4) {
        number3 = 9
    } else {
        if (number3 === 9) {
            number3 = 4
        }
    }
    if (number3 === 5) {
        number3 = 0
    } else {
        if (number3 === 0) {
            number3 = 5
        }
    }
    ////////////////////////////////////////////////////////////////
    if (number4 === 1) {
        number4 = 6

    } else {
        if (number4 === 6) {
            number4 = 1
        }
    }
    if (number4 === 2) {
        number4 = 7
    } else {
        if (number4 === 7) {
            number4 = 2
        }
    }
    if (number4 === 3) {
        number4 = 8
    } else {
        if (number4 === 8) {
            number4 = 3
        }
    }
    if (number4 === 4) {
        number4 = 9
    } else {
        if (number4 === 9) {
            number4 = 4
        }
    }
    if (number4 === 5) {
        number4 = 0
    } else {
        if (number4 === 0) {
            number4 = 5
        }
    }
    console.log(number1, number2, number3, number4)
    console.log(number4, number3, number2)
    console.log(`Posibles combinaciones: ${number3}${number2}${number4} Ó ${number3}${number4}${number2} ó ${number2}${number3}${number4} ó ${number4}${number3}${number2}`)

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
})

router.get('/numbers', (req: Request, res: Response) => {
    res.send('numbers');
})
export default router