import express from 'express'
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

const prisma = new PrismaClient();


const app = express()

app.use(cors())

app.get("/", async (req, res) => {
    const user = await prisma.user.findMany()
    res.json(user)
})

app.listen(3003, () => {
    console.log("Server is running")
})
