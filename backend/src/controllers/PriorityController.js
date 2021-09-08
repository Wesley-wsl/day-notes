import Annotations from "../models/AnnotationData.js";

export default {
    async read(req, res) {
        const priority = req.query;
        const priorityNotes = await Annotations.find(priority);
        return res.json(priorityNotes);
    },

    async update(req, res) {
        const { id } = req.params;

        const annotation = await Annotations.findOne({ _id: id });

        if (annotation.priority) {
            annotation.priority = false;
        } else {
            annotation.priority = true;
        }

        await annotation.save()

        return res.json(annotation)

    },
};
