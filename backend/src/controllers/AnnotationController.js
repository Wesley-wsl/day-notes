import Annotations from "../models/AnnotationData.js";

export default {
    async read(req, res) {
        const AnnotationsList = await Annotations.find();
        return res.status(200).json(AnnotationsList);
    },

    async create(req, res) {
        const { title, notes, priority = false } = req.body;

        if (!title || !notes)
            return res
                .status(400)
                .json({ error: "Necessário um título/anotação" });

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority,
        });

        return res.json(annotationCreated);
    },

    async delete(req, res) {
        const { id } = req.params;
        let annotationDeleted = await Annotations.findOneAndDelete({
            _id: id,
        });

        if (annotationDeleted) {
            return res.status(200).json(annotationDeleted);
        }

        return res.status(401).json({ error: "Não foi encontrado o registro para deletar." });
    },
};
