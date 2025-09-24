const ToDo = require('../models/ToDo')

class SiteController {
    // GET /
    index(req, res, next) {
        ToDo.find({}).lean()
            .then(list => res.render('home', {list}))
            .catch(next)
    }

    // POST /
    create(req, res, next) {
        var task = new ToDo(req.body)
        
        task.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // PUT /:id
    update(req, res, next) {
        ToDo.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // DELETE /:id
    delete(req, res, next) {
        ToDo.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/'))
            .catch(next)
    }
}

module.exports = new SiteController()
