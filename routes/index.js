const { Router } = require('express');

const router = Router();

const ibeaconCards = require('../controllers/ibeaconCardsController.js')

router.get("/api/all_ibeacon_cards", ibeaconCards.ibeacon_cards);
router.get("/api/all_ibeacon_cards_extra", ibeaconCards.ibeacon_cards_extra);

module.exports = router;
