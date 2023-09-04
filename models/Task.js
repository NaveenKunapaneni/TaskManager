const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({ 
                        name: {
                            type: String,
                            required: [true, "Must provide name"],
                            maxLength: [20, "name cannot bemore than 20 characters"],
                            trim: true
                        }, 
                        completed: {
                            type: Boolean,
                            default: false
                        }
 });

module.exports = mongoose.model('Task', tasksSchema)