/**
 * MyserverController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    index: async function (req, res) {
        var events = await Event.find();
        return res.view('pages/event', { 'events': events });
    },
    create: async function (req, res) {
        var pid = parseInt(req.body.Event.updateid) || -1;
        if (pid == -1) {
            await Event.create(req.body.Event);
        }
        else {
            var models = await Event.update(pid).set({
                name: req.body.Event.name,
                shortdesp: req.body.Event.shortdesp,
                fulldesp: req.body.Event.fulldesp,
                url: req.body.Event.url,
                dept: req.body.Event.dept,
                date: req.body.Event.date,
                time: req.body.Event.time,
                venue: req.body.Event.venue,
                quota: req.body.Event.quota,
                highlight: req.body.Event.highlight,
            }).fetch();
        }

        return res.redirect('/');
    },
    detail: async function (req, res) {
        var pid = parseInt(req.params.id) || -1;
        var model = await Event.findOne(pid);
        if (model != null)
            return res.view('pages/detail', { 'event': model });
        else
            return res.send("Not Found");
    },
    delete: async function (req, res) {
        var pid = parseInt(req.params.id) || -1;
        if (pid != -1) {
            var models = await Event.destroy(pid).fetch();
            return res.redirect('/');
        }
    },
    admin: async function (req, res) {
        var events = await Event.find();
        return res.view('pages/admin', { 'events': events });
    },
    find: async function (req, res) {
        var pid = parseInt(req.params.id) || -1;
        var model = await Event.findOne(pid);
        if (model != null)
            return res.view('pages/create', { 'event': model });
        else
            return res.send("Not Found");
    },
    search: async function (req, res) {

        var events = await Event.find()
            .where({ name: { contains: req.query.keyword } }).sort('name');
        return res.view('pages/search', { 'events': events });
    }


};
