const Sponsor = require('../models/sponsor.model');

exports.get = (req, res) => {
    Sponsor.find(req.query, (error, sponsors) => {
        if (error) return res.status(500).send(error);
        if (!sponsors) return res.status(404).send({ message: 'Nenhum patrocinador encontrado.' });
        return res.status(200).send({ body: sponsors });
    });
};

exports.getOne = (req, res) => {
    Sponsor.findById(req.params.id, (error, sponsor) => {
        if (error) return res.status(500).send(error);
        if (!sponsor) return res.status(404).send({ message: 'Patrocinador não encontrado.' });
        return res.status(200).send({ body: sponsor });
    });
};

exports.create = (req, res) => {
    new Sponsor(req.body).save((error, sponsor) => {
        if (error) return res.status(500).send(error);
        return res.status(201).send({ body: sponsor });
    });
};

exports.update = (req, res) => {
    Sponsor.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true },
        (error, sponsor) => {
            if (error) return res.status(500).send(error);
            if (!sponsor) return res.status(404).send({ message: 'Patrocinador não encontrado.' });
            return res.status(200).send({ body: sponsor });
        }
    );
};

exports.delete = (req, res) => {
    Sponsor.deleteOne({ _id: req.params.id }, (error, result) => {
        if (error) return res.status(500).send(error);
        if (result.deletedCount <= 0) return res.status(404).send({ message: 'Patrocinador não encontrado.' });
        return res.status(200).send({ message: 'Patrocinador removido com sucesso.' });
    });
};