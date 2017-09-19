const express = require('express');
const router = express.Router();

router.get('/add', (req, res) =>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    console.log(num1)
        const math = num1 + num2;
        res.render ('math', {
            math: math
        })
    })

// router.get('/:operator', (req, res) =>{
//     const num1 = parseInt(req.query.num1);
//     const num2 = parseInt(req.query.num2);
//     if(req.params.operator === 'add') {
//         const math = (`${num1 + num2}`)
//         res.render ('math', {
//             math: math
//         })
        
//     }else if(req.params.operator === 'subtract'){
//             res.render(`${num1 - num2}`);
//     }else if(req.params.operator === 'multiply'){
//                 res.render(`${num1 * num2}`);
//     }else (req.params.operator === 'divide'){
//                     res.render(`${num1 / num2}`);
//     // }else{
//     //                     res.render('invalid')
//     //                 }
//     //                 res.render('math', {
//     //                     math:
//     //                 })

//  };
 //   -/math/add?num1=4&num2=3
module.exports = router