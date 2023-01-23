const express = require('express');



/////////////////////////////////////
///             Models             //
/////////////////////////////////////

const Preset = require('../Models/myPresets.js')



/////////////////////////////////////
///             Routes             //
/////////////////////////////////////

// POST ROUTE
router.post('/', (req, res) => {
    Preset.create(req.body, (err, createdPreset) => {
        res.json(createdPreset)
    });
});

// GET ROUTES
router.get('/', (req, res) => {
    Preset.find({}, (err, foundPreset) => {
        res.json(foundPreset)
    })
})

router.delete('/:id', (req, res) => {
    Preset.findByIdAndRemove(req.params.id, (err, deletedPreset) => {
        res.json(deletedPreset)
    })
})

module.exports = router