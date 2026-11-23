const Expert = require('../models/expert.model');

exports.get = (req, res) => {
    Expert.find(req.query, (error, experts) => {
        if (error) return res.status(500).send(error);
        if (!experts) return res.status(404).send({ message: 'Nenhum especialista encontrado.' });
        return res.status(200).send({ body: experts });
    });
};

exports.getOne = (req, res) => {
    Expert.findById(req.params.id, (error, expert) => {
        if (error) return res.status(500).send(error);
        if (!expert) return res.status(404).send({ message: 'Especialista não encontrado.' });
        return res.status(200).send({ body: expert });
    });
};

exports.create = (req, res) => {
    new Expert(req.body).save((error, expert) => {
        if (error) return res.status(500).send(error);
        return res.status(201).send({ body: expert });
    });
};

exports.update = (req, res) => {
    const data = { ...req.body };
    delete data._id;

    Expert.findByIdAndUpdate(
        req.params.id,
        { $set: data },
        { new: true },
        (error, expert) => {
            if (error) return res.status(500).send(error);
            if (!expert) return res.status(404).send({ message: 'Especialista não encontrado.' });
            return res.status(200).send({ body: expert });
        }
    );
};

exports.delete = (req, res) => {
    Expert.deleteOne({ _id: req.params.id }, (error, result) => {
        if (error) return res.status(500).send(error);
        if (result.deletedCount <= 0) return res.status(404).send({ message: 'Especialista não encontrado.' });
        return res.status(200).send({ message: 'Especialista removido com sucesso.' });
    });
};