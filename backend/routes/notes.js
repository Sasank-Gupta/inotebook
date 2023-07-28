const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator')

//ROUTE 1:Get all notes using: Post "/api/notes/fetchallnotes". No login required 

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const note = await Note.find({ user: req.user.id })
        res.json(note)
        
    } catch (error) {
        console.error(error.message)
         res.status(500).send("Internal Server Error")
 
    }
})

//ROUTE 1:Add a new Note using: Post "/api/notes/addnote". No login required 

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast5 characters').isLength({ min: 5 })], async (req, res) => {
    try {
        const { title, description, tag } = req.body
        //If there are no errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote= await note.save()
        res.json(savedNote)
        
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
 
    }
})

//ROUTE 3: Update an existing note using: PUT "/api/notes/updatenote"
router.put('/updatenote/:id', fetchuser, 
    async (req, res) => {
        const {title,description,tag}= req.body


        //Create a newNote object
        const newNote={}
        if (title) {newNote.title=title}
        if (description) {newNote.description=description}
        if (tag) {newNote.tag=tag}
        
        //Find the note to be updated and update it
        let note= await Note.findById(req.params.id)
        if(!note){return res.status(404).send("Not Found")}

        //Allow deletion if user owns this Note
        if (note.user.toString()!==req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note=await Note.findByIdAndUpdate(req.params.id,{$set: newNote},{new:true})
        res.json({note});
    })


//ROUTE 4: Delete an existing note using: DELETE "/api/notes/deletenote"
router.delete('/deletenote/:id', fetchuser, 
    async (req, res) => {
        const {title,description,tag}= req.body
        
        //Find the note to be Deleted and delete it
        let note= await Note.findById(req.params.id)
        if(!note){return res.status(404).send("Not Found")}

        //Allow deletion if user owns this Note
        if (note.user.toString()!==req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note=await Note.findByIdAndDelete(req.params.id)
        res.json({"Success": "Note has been deleted", note:note});
    })

module.exports = router