import Annotations from "../models/AnnotationData.js";

export default {
    async update(req, res) {
        const { id } = req.params;
        const { notes } = req.body;

        const annotation = await Annotations.findOne({ _id: id });

        if (notes) {
            annotation.notes = notes;
            await annotation.save()
        }

        return res.status(200).json(annotation)
    },
};
