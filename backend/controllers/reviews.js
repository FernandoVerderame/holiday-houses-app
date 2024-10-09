// Importo PrismaClient
const { PrismaClient } = require("@prisma/client");

const errorHandler = require("../middlewares/errorHandler.js");

// Inizializzo Prisma
const prisma = new PrismaClient();

// Importo jwt
const jwt = require("jsonwebtoken");

// Store
const store = async (req, res, next) => {

    const { name, country, title, description, rating } = req.body;

    const data = {
        name,
        country,
        title,
        description,
        rating: rating || 1,
        apartmentId: req.body.apartmentId ? req.body.apartmentId : null,
        visible: false,
        userId: 1
    }

    try {
        const review = await prisma.review.create({ data });
        res.status(200).send(review);
    } catch (err) {
        errorHandler(err, req, res);
    }
}

// Index 
const index = async (req, res, next) => {
    try {
        const { apartmentId } = req.query;

        let reviews;
        let reviewCount;

        if (apartmentId) {
            reviews = await prisma.review.findMany({
                where: {
                    apartmentId: parseInt(apartmentId)
                },
                orderBy: [
                    { createdAt: 'desc' }
                ]
            });

            reviewCount = await prisma.review.count({
                where: {
                    apartmentId: parseInt(apartmentId)
                }
            });
        } else {
            reviews = await prisma.review.findMany({
                orderBy: [
                    { createdAt: 'desc' }
                ]
            });

            reviewCount = await prisma.review.count();
        }

        res.json({
            data: reviews,
            reviewCount
        })
    } catch (err) {
        errorHandler(err, req, res);
    }
};

// Show
const show = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const review = await prisma.review.findUnique({
            where: { id }
        });
        if (review) {
            res.json(review);
        } else {
            throw new Error(`Recensione con id ${id} non trovato.`, 404);
        }
    } catch (err) {
        errorHandler(err, req, res);
    }
}

// Destroy
const destroy = async (req, res, next) => {

    try {
        const id = parseInt(req.params.id);
        await prisma.review.delete({
            where: { id },
        });
        res.json(`Recensione con id ${id} eliminato con successo.`);
    } catch (err) {
        errorHandler(err, req, res);
    }
}

module.exports = {
    store,
    index,
    show,
    destroy
}