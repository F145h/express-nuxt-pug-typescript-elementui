/*
 * GET home page.
 */
import express from 'express';
let router = express.Router();
router.get('/test', (req, res) => {
    var a = res === null || res === void 0 ? void 0 : res.qwe;
    res.json({ status: 0, result: true });
});
export default router;
