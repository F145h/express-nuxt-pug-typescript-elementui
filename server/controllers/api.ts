/*
 * GET home page.
 */
import express from 'express';

let router = express.Router();

router.get('/test', (req: any, res: any) => {
    var a = res?.qwe;
    res.json({ status: 0, result: true })
});

export default router;